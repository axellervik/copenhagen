import { Marker } from "react-leaflet";
import L from "leaflet";
import { Place, CATEGORY_CONFIG } from "@/data/places";

interface PlaceMarkerProps {
  place: Place;
  isSelected: boolean;
  onClick: (place: Place) => void;
}

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

const PlaceMarker = ({ place, isSelected, onClick }: PlaceMarkerProps) => {
  return (
    <Marker
      position={[place.lat, place.lng]}
      icon={createIcon(place, isSelected)}
      eventHandlers={{ click: () => onClick(place) }}
    />
  );
};

export default PlaceMarker;
