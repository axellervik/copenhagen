import { useState, useCallback, useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places, Place, PlaceCategory, CATEGORY_CONFIG, COPENHAGEN_CENTER } from "@/data/places";
import PlaceMarker from "./PlaceMarker";
import PlaceDetail from "./PlaceDetail";
import CategoryFilter from "./CategoryFilter";
import ThemeToggle, { MapTheme } from "./ThemeToggle";
import PlaceListSidebar from "./PlaceListSidebar";
import { List } from "lucide-react";

const TILE_URLS: Record<MapTheme, { url: string; attribution: string }> = {
  minimal: {
    url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
  },
  dark: {
    url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: '&copy; Esri, Maxar, Earthstar Geographics',
  },
};

const THEME_CLASSES: Record<MapTheme, string> = {
  minimal: "",
  dark: "theme-dark",
  satellite: "theme-satellite",
};

function FlyToPlace({ place }: { place: Place | null }) {
  const map = useMap();
  if (place) {
    map.flyTo([place.lat, place.lng], 15, { duration: 0.8 });
  }
  return null;
}

const MapView = () => {
  const [theme, setTheme] = useState<MapTheme>("minimal");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<PlaceCategory>>(
    new Set(Object.keys(CATEGORY_CONFIG) as PlaceCategory[])
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleCategory = useCallback((cat: PlaceCategory) => {
    setActiveCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) {
        next.delete(cat);
      } else {
        next.add(cat);
      }
      return next;
    });
  }, []);

  const filteredPlaces = useMemo(
    () => places.filter((p) => activeCategories.has(p.category)),
    [activeCategories]
  );

  const handleSelectPlace = useCallback((place: Place) => {
    setSelectedPlace(place);
    setSidebarOpen(false);
  }, []);

  const tileConfig = TILE_URLS[theme];

  return (
    <div className={`relative w-full h-screen overflow-hidden ${THEME_CLASSES[theme]}`}>
      <MapContainer
        center={[COPENHAGEN_CENTER.lat, COPENHAGEN_CENTER.lng]}
        zoom={13}
        className="w-full h-full"
        zoomControl={true}
      >
        <TileLayer
          key={theme}
          url={tileConfig.url}
          attribution={tileConfig.attribution}
          maxZoom={19}
        />
        {filteredPlaces.map((place) => (
          <PlaceMarker
            key={place.id}
            place={place}
            isSelected={selectedPlace?.id === place.id}
            onClick={setSelectedPlace}
          />
        ))}
        <FlyToPlace place={selectedPlace} />
      </MapContainer>

      {theme === "satellite" && <div className="satellite-filter" />}

      {/* Top bar with title + filters */}
      <div className="absolute top-0 left-0 right-0 z-[1000] pointer-events-none">
        <div className="flex items-start justify-between p-3 sm:p-4 gap-2">
          {/* List toggle + filters */}
          <div className="flex items-start gap-2 pointer-events-auto flex-1 min-w-0">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex-shrink-0 p-2.5 rounded-lg bg-card border border-border shadow-sm text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle place list"
            >
              <List className="w-4 h-4" />
            </button>
            <CategoryFilter activeCategories={activeCategories} onToggle={toggleCategory} />
          </div>

          {/* Title */}
          <div className="pointer-events-auto flex-shrink-0">
            <h1 className="text-sm sm:text-lg font-bold text-foreground bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border shadow-sm font-display">
              🇩🇰 Copenhagen Guide
            </h1>
          </div>
        </div>
      </div>

      <ThemeToggle theme={theme} onChange={setTheme} />

      {/* Sidebar */}
      <PlaceListSidebar
        places={filteredPlaces}
        selectedPlace={selectedPlace}
        onSelectPlace={handleSelectPlace}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Detail panel */}
      <PlaceDetail place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
};

export default MapView;
