import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ExternalLink, Globe } from "lucide-react";
import { Place, CATEGORY_CONFIG } from "@/data/places";

interface PlaceDetailProps {
  place: Place | null;
  onClose: () => void;
}

const PriceLevel = ({ level }: { level?: 1 | 2 | 3 }) => {
  if (!level) return null;
  return (
    <span className="text-muted-foreground text-sm">
      {"€".repeat(level)}
      <span className="opacity-30">{"€".repeat(3 - level)}</span>
    </span>
  );
};

const PlaceDetail = ({ place, onClose }: PlaceDetailProps) => {
  return (
    <AnimatePresence>
      {place && (
        <motion.div
          key={place.id}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="absolute right-0 top-0 bottom-0 z-[1000] w-full max-w-sm bg-card border-l border-border shadow-xl overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border p-4 flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{CATEGORY_CONFIG[place.category].emoji}</span>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                  {CATEGORY_CONFIG[place.category].label}
                </span>
                <PriceLevel level={place.priceLevel} />
              </div>
              <h2 className="text-xl font-bold text-card-foreground leading-tight">
                {place.name}
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {place.neighborhood}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            <p className="text-foreground leading-relaxed">{place.description}</p>

            {place.tags && place.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {place.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Links */}
            <div className="space-y-2 pt-2">
              {place.googleMapsUrl && (
                <a
                  href={place.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  Open in Google Maps
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </a>
              )}
              {place.website && (
                <a
                  href={place.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium"
                >
                  <Globe className="w-4 h-4" />
                  Visit Website
                  <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PlaceDetail;
