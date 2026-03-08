import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin } from "lucide-react";
import { Place, PlaceCategory, CATEGORY_CONFIG } from "@/data/places";

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
  const grouped = places.reduce<Partial<Record<PlaceCategory, Place[]>>>((acc, place) => {
    if (!acc[place.category]) acc[place.category] = [];
    acc[place.category]!.push(place);
    return acc;
  }, {});

  const categories = Object.entries(grouped) as [PlaceCategory, Place[]][];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[998] bg-background/20 backdrop-blur-[1px] sm:hidden"
            onClick={onToggle}
          />
          <motion.aside
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute left-0 top-0 bottom-0 z-[999] w-72 sm:w-80 bg-card border-r border-border shadow-xl overflow-y-auto"
          >
            <div className="sticky top-0 bg-card/95 backdrop-blur-sm border-b border-border px-4 py-3 flex items-center justify-between">
              <h2 className="text-base font-bold text-card-foreground font-display">
                📍 All Places
              </h2>
              <button
                onClick={onToggle}
                className="p-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 space-y-4 pb-20">
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
                          className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-150 group ${
                            selectedPlace?.id === place.id
                              ? "bg-primary/10 border border-primary/20"
                              : "hover:bg-secondary border border-transparent"
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
