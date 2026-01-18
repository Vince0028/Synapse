import { 
  LayoutGrid, 
  GraduationCap, 
  Palette, 
  Play, 
  Sparkles, 
  Code2, 
  Tv,
  Globe,
  Briefcase,
  Volume2,
  Newspaper
} from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/links";

interface DockProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutGrid,
  GraduationCap,
  Palette,
  Play,
  Sparkles,
  Code2,
  Tv,
  Globe,
  Briefcase,
  Volume2,
  Newspaper,
};

export function Dock({ activeCategory, onCategoryChange }: DockProps) {
  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50">
      <div className="bg-card rounded-dock shadow-dock p-3 flex flex-col gap-2 border border-border">
        {categories.map((category, index) => {
          const Icon = iconMap[category.icon];
          const isActive = activeCategory === category.id;
          
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "relative group p-3 rounded-full transition-all duration-300",
                "hover:bg-secondary",
                isActive && "bg-primary text-primary-foreground"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
              title={category.name}
            >
              <Icon className={cn(
                "w-5 h-5 transition-transform duration-200",
                "group-hover:scale-110"
              )} />
              
              {/* Tooltip */}
              <span className={cn(
                "absolute left-full ml-4 px-4 py-2 rounded-full",
                "bg-foreground text-background text-sm font-medium",
                "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                "transition-all duration-200 whitespace-nowrap z-50",
                "translate-x-2 group-hover:translate-x-0",
                "shadow-dock"
              )}>
                {category.name}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
