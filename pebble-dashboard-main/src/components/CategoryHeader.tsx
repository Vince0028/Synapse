import { categories } from "@/data/links";

interface CategoryHeaderProps {
  activeCategory: string;
  resultCount?: number;
  title?: string;
}

export function CategoryHeader({ activeCategory, resultCount, title }: CategoryHeaderProps) {
  const category = categories.find((c) => c.id === activeCategory);
  const displayTitle = title || category?.name || "All";

  return (
    <div className="mb-8 animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-1">
        {displayTitle} {title ? "" : "Resources"}
      </h2>
      {resultCount !== undefined && (
        <p className="text-muted-foreground">
          {resultCount} {resultCount === 1 ? "link" : "links"} available
        </p>
      )}
    </div>
  );
}
