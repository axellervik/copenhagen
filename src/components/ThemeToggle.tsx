import { Sun, Moon, Satellite } from "lucide-react";

export type MapTheme = "minimal" | "dark" | "satellite";

interface ThemeToggleProps {
  theme: MapTheme;
  onChange: (theme: MapTheme) => void;
}

const themes: { key: MapTheme; icon: typeof Sun; label: string }[] = [
  { key: "minimal", icon: Sun, label: "Clean" },
  { key: "dark", icon: Moon, label: "Dark" },
  { key: "satellite", icon: Satellite, label: "Satellite" },
];

const ThemeToggle = ({ theme, onChange }: ThemeToggleProps) => {
  return (
    <div className="absolute bottom-6 left-4 z-[1000] flex bg-card border border-border rounded-full shadow-lg overflow-hidden">
      {themes.map(({ key, icon: Icon, label }) => (
        <button
          key={key}
          onClick={() => onChange(key)}
          className={`
            flex items-center gap-1.5 px-3 py-2 text-xs font-medium transition-all duration-200
            ${theme === key
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }
          `}
        >
          <Icon className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
