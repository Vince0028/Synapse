import { categories } from "@/data/links";

interface CategoryHeaderProps {
  activeCategory: string;
  resultCount: number;
}

export function CategoryHeader({ activeCategory, resultCount }: CategoryHeaderProps) {
  const category = categories.find((c) => c.id === activeCategory);
  
  return (
    <div className="mb-8 animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-1">
        {category?.name || "All"} Resources
      </h2>
      <p className="text-muted-foreground">
        {resultCount} {resultCount === 1 ? "link" : "links"} available
      </p>
    </div>
  );
}
