import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { Place, PlaceCategory, CATEGORY_CONFIG } from "@/data/places";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCallback } from "react";

interface PlaceListSidebarProps {
  places: Place[];
  selectedPlace: Place | null;
  onSelectPlace: (place: Place) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const PlaceListSidebar = ({
  places,
  selectedPlace,
  onSelectPlace,
  isOpen,
  onToggle,
}: PlaceListSidebarProps) => {
  const isMobile = useIsMobile();

  const grouped = places.reduce<Partial<Record<PlaceCategory, Place[]>>>((acc, place) => {
    if (!acc[place.category]) acc[place.category] = [];
    acc[place.category]!.push(place);
    return acc;
  }, {});

  const categories = Object.entries(grouped) as [PlaceCategory, Place[]][];

  const handleDragEnd = useCallback(
    (_: any, info: PanInfo) => {
      if (isMobile) {
        if (info.offset.y > 100 || info.velocity.y > 500) onToggle();
      } else {
        if (info.offset.x < -100 || info.velocity.x < -500) onToggle();
      }
    },
    [isMobile, onToggle]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[998] bg-background/20 backdrop-blur-[1px]"
            onClick={onToggle}
          />
          <motion.aside
            initial={isMobile ? { y: "100%" } : { x: "-100%", opacity: 0 }}
            animate={isMobile ? { y: 0 } : { x: 0, opacity: 1 }}
            exit={isMobile ? { y: "100%" } : { x: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            drag={isMobile ? "y" : false}
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className={`absolute z-[999] bg-card shadow-xl overflow-y-auto ${
              isMobile
                ? "left-0 right-0 bottom-0 max-h-[80vh] rounded-t-2xl border-t border-border touch-pan-x"
                : "left-0 top-0 bottom-0 w-72 sm:w-80 border-r border-border"
            }`}
          >
            {/* Drag handle on mobile */}
            {isMobile && (
              <div className="flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing">
                <div className="w-12 h-1.5 rounded-full bg-muted-foreground/30" />
              </div>
            )}

            <div className={`sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border flex items-center justify-between ${
              isMobile ? "px-5 py-3" : "px-4 py-3"
            }`}>
              <h2 className="text-base font-bold text-card-foreground font-display">
                📍 All Places ({places.length})
              </h2>
              <button
                onClick={onToggle}
                className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className={`space-y-4 ${isMobile ? "px-4 py-3 pb-10" : "p-3 pb-20"}`}>
              {categories.map(([category, categoryPlaces]) => {
                const config = CATEGORY_CONFIG[category];
                return (
                  <div key={category}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 px-1 flex items-center gap-1.5">
                      <span>{config.emoji}</span>
                      {config.label}
                      <span className="ml-auto text-[10px] font-normal bg-muted rounded-full px-1.5 py-0.5">
                        {categoryPlaces.length}
                      </span>
                    </h3>
                    <div className="space-y-0.5">
                      {categoryPlaces.map((place) => (
                        <button
                          key={place.id}
                          onClick={() => onSelectPlace(place)}
                          className={`w-full text-left px-3 rounded-lg transition-all duration-150 group ${
                            isMobile ? "py-3" : "py-2"
                          } ${
                            selectedPlace?.id === place.id
                              ? "bg-primary/10 border border-primary/20"
                              : "hover:bg-secondary border border-transparent active:bg-secondary"
                          }`}
                        >
                          <div className="font-medium text-sm text-card-foreground group-hover:text-foreground">
                            {place.name}
                          </div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            {place.neighborhood}
                            {place.priceLevel && (
                              <span className="ml-auto">
                                {"€".repeat(place.priceLevel)}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default PlaceListSidebar;
