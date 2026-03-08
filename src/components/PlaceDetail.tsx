import { motion, AnimatePresence, useDragControls, PanInfo } from "framer-motion";
import { X, MapPin, ExternalLink, Globe, Navigation } from "lucide-react";
import { Place, CATEGORY_CONFIG } from "@/data/places";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCallback, useRef } from "react";

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
  const isMobile = useIsMobile();
  const constraintsRef = useRef(null);

  const handleDragEnd = useCallback(
    (_: any, info: PanInfo) => {
      if (info.offset.y > 100 || info.velocity.y > 500) {
        onClose();
      }
    },
    [onClose]
  );

  const getDirectionsUrl = (p: Place) =>
    `https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`;

  return (
    <AnimatePresence>
      {place && (
        <>
          {/* Backdrop on mobile */}
          {isMobile && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 z-[999] bg-background/40 backdrop-blur-[2px]"
              onClick={onClose}
            />
          )}
          <motion.div
            ref={constraintsRef}
            key={place.id}
            initial={isMobile ? { y: "100%" } : { x: "100%", opacity: 0 }}
            animate={isMobile ? { y: 0 } : { x: 0, opacity: 1 }}
            exit={isMobile ? { y: "100%" } : { x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={`absolute z-[1000] bg-card border-border shadow-xl overflow-y-auto ${
              isMobile
                ? "left-0 right-0 bottom-0 max-h-[75vh] rounded-t-2xl border-t touch-pan-x"
                : "right-0 top-0 bottom-0 w-full max-w-sm border-l"
            }`}
            style={isMobile ? { touchAction: "pan-x" } : undefined}
          >
            {/* Drag handle on mobile */}
            {isMobile && (
              <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
                <div className="w-12 h-1.5 rounded-full bg-muted-foreground/30" />
              </div>
            )}

            {/* Header */}
            <div className={`sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border flex items-start justify-between gap-3 ${
              isMobile ? "px-5 py-3" : "p-4"
            }`}>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="text-lg">{CATEGORY_CONFIG[place.category].emoji}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                    {CATEGORY_CONFIG[place.category].label}
                  </span>
                  <PriceLevel level={place.priceLevel} />
                </div>
                <h2 className={`font-bold text-card-foreground leading-tight font-display ${
                  isMobile ? "text-lg" : "text-xl"
                }`}>
                  {place.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-0.5 flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {place.neighborhood}
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className={`space-y-4 ${isMobile ? "px-5 py-4 pb-8" : "p-4"}`}>
              <p className="text-foreground leading-relaxed">{place.description}</p>

              {place.tags && place.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {place.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground ${
                        isMobile ? "py-1.5" : ""
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Action buttons */}
              <div className={`space-y-2 pt-2 ${isMobile ? "pb-4" : ""}`}>
                {/* Get directions — always available */}
                <a
                  href={getDirectionsUrl(place)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium transition-colors hover:opacity-90"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                  <ExternalLink className="w-3 h-3 ml-auto opacity-60" />
                </a>
                {place.googleMapsUrl && (
                  <a
                    href={place.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium"
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
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors text-secondary-foreground text-sm font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    Visit Website
                    <ExternalLink className="w-3 h-3 ml-auto opacity-50" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PlaceDetail;
