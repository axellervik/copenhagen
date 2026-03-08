import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { allPlaces, Place, PlaceCategory, CATEGORY_CONFIG, COPENHAGEN_CENTER } from "@/data/places";
import PlaceDetail from "./PlaceDetail";
import CategoryFilter from "./CategoryFilter";
import ThemeToggle, { MapTheme } from "./ThemeToggle";
import PlaceListSidebar from "./PlaceListSidebar";
import { List, Search, X } from "lucide-react";

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

const createIcon = (place: Place, isSelected: boolean) => {
  const config = CATEGORY_CONFIG[place.category];
  const size = isSelected ? 40 : 32;

  return L.divIcon({
    className: `place-marker ${isSelected ? "marker-active" : ""}`,
    html: `<div style="
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: ${config.color};
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: ${isSelected ? 20 : 16}px;
      box-shadow: ${isSelected ? "0 0 0 3px white, 0 4px 16px -2px rgba(0,0,0,0.3)" : "0 2px 8px -2px rgba(0,0,0,0.2)"};
      cursor: pointer;
      transition: all 0.2s ease;
    ">${config.emoji}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
};

const MapView = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const tileLayerRef = useRef<L.TileLayer | null>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  const [theme, setTheme] = useState<MapTheme>("minimal");
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [activeCategories, setActiveCategories] = useState<Set<PlaceCategory>>(
    new Set(Object.keys(CATEGORY_CONFIG) as PlaceCategory[])
  );
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

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
    () => allPlaces.filter((p) => {
      if (!activeCategories.has(p.category)) return false;
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.neighborhood.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q)
      );
    }),
    [activeCategories, searchQuery]
  );

  const handleSelectPlace = useCallback((place: Place) => {
    setSelectedPlace(place);
    setSidebarOpen(false);
  }, []);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [COPENHAGEN_CENTER.lat, COPENHAGEN_CENTER.lng],
      zoom: 13,
      zoomControl: true,
    });

    const tileConfig = TILE_URLS.minimal;
    tileLayerRef.current = L.tileLayer(tileConfig.url, {
      attribution: tileConfig.attribution,
      maxZoom: 19,
    }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update tile layer on theme change
  useEffect(() => {
    if (!mapRef.current) return;
    const tileConfig = TILE_URLS[theme];

    if (tileLayerRef.current) {
      tileLayerRef.current.remove();
    }

    tileLayerRef.current = L.tileLayer(tileConfig.url, {
      attribution: tileConfig.attribution,
      maxZoom: 19,
    }).addTo(mapRef.current);
  }, [theme]);

  // Update markers
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove old markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    // Add new markers
    filteredPlaces.forEach((place) => {
      const isSelected = selectedPlace?.id === place.id;
      const marker = L.marker([place.lat, place.lng], {
        icon: createIcon(place, isSelected),
      })
        .on("click", () => setSelectedPlace(place))
        .addTo(mapRef.current!);

      markersRef.current.set(place.id, marker);
    });
  }, [filteredPlaces, selectedPlace]);

  // Fly to selected place
  useEffect(() => {
    if (!mapRef.current || !selectedPlace) return;
    mapRef.current.flyTo([selectedPlace.lat, selectedPlace.lng], 15, { duration: 0.8 });
  }, [selectedPlace]);

  return (
    <div className={`relative w-full h-screen overflow-hidden ${THEME_CLASSES[theme]}`}>
      <div ref={mapContainerRef} className="w-full h-full" />

      {theme === "satellite" && <div className="satellite-filter" />}

      {/* Top bar with title + filters */}
      <div className="absolute top-0 left-0 right-0 z-[1000] pointer-events-none">
        <div className="flex items-start justify-between p-3 sm:p-4 gap-2">
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

          <div className="pointer-events-auto flex-shrink-0">
            <h1 className="text-sm sm:text-lg font-bold text-foreground bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border shadow-sm font-display">
              🇩🇰 Copenhagen Guide
            </h1>
          </div>
        </div>
      </div>

      <ThemeToggle theme={theme} onChange={setTheme} />

      <PlaceListSidebar
        places={filteredPlaces}
        selectedPlace={selectedPlace}
        onSelectPlace={handleSelectPlace}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <PlaceDetail place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </div>
  );
};

export default MapView;
