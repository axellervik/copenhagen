import { useState, useCallback, useMemo } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { places, Place, PlaceCategory, CATEGORY_CONFIG, COPENHAGEN_CENTER } from "@/data/places";
import PlaceMarker from "./PlaceMarker";
import PlaceDetail from "./PlaceDetail";
import CategoryFilter from "./CategoryFilter";
import ThemeToggle, { MapTheme } from "./ThemeToggle";

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

  const tileConfig = TILE_URLS[theme];

  return (
    <div className={`relative w-full h-screen ${THEME_CLASSES[theme]}`}>
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

      <CategoryFilter activeCategories={activeCategories} onToggle={toggleCategory} />

      {/* Title */}
      <div className="absolute top-4 right-4 z-[1000] text-right pointer-events-none">
        <h1 className="text-lg sm:text-xl font-bold text-foreground drop-shadow-sm bg-card/80 backdrop-blur-sm rounded-lg px-3 py-1.5 inline-block border border-border">
          🇩🇰 Copenhagen Guide
        </h1>
      </div>

      <ThemeToggle theme={theme} onChange={setTheme} />
      <PlaceDetail place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
};

export default MapView;
