import { PlaceCategory, CATEGORY_CONFIG } from "@/data/places";

interface CategoryFilterProps {
  activeCategories: Set<PlaceCategory>;
  onToggle: (category: PlaceCategory) => void;
  vertical?: boolean;
}

const CategoryFilter = ({ activeCategories, onToggle, vertical }: CategoryFilterProps) => {
  const categories = Object.entries(CATEGORY_CONFIG) as [PlaceCategory, typeof CATEGORY_CONFIG[PlaceCategory]][];

  return (
    <div className={vertical ? "flex flex-col gap-1" : "flex flex-wrap gap-1.5 max-w-full"}>
      {categories.map(([key, config]) => {
        const active = activeCategories.has(key);
        return (
          <button
            key={key}
            onClick={() => onToggle(key)}
            className={`
              flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium
              border transition-all duration-200 cursor-pointer select-none whitespace-nowrap
              ${
                active
                  ? "bg-card text-card-foreground border-border shadow-sm"
                  : "bg-card/50 text-muted-foreground border-transparent opacity-50 hover:opacity-75"
              }
            `}
          >
            <span className="text-sm">{config.emoji}</span>
            <span>{config.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
