import { useState, useMemo } from "react";
import { Dock } from "@/components/Dock";
import { SearchBar } from "@/components/SearchBar";
import { LinkCard } from "@/components/LinkCard";
import { PromptVault } from "@/components/PromptVault";
import { CategoryHeader } from "@/components/CategoryHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { links } from "@/data/links";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
      const matchesCategory = activeCategory === "all" || link.category === activeCategory;
      const matchesSearch = 
        searchQuery === "" ||
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.tag.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      {/* Dock Navigation */}
      <Dock 
        activeCategory={activeCategory} 
        onCategoryChange={setActiveCategory} 
      />

      {/* Theme Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="pl-28 pr-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tight">
            Link Hub
          </h1>
          <p className="text-muted-foreground text-lg">
            Your curated collection of essential resources
          </p>
        </header>

        {/* Search */}
        <div className="mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Header */}
        <CategoryHeader 
          activeCategory={activeCategory} 
          resultCount={filteredLinks.length} 
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredLinks.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
          
          {filteredLinks.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="text-muted-foreground text-lg">
                No links found matching your search.
              </p>
            </div>
          )}
        </div>

        {/* Prompt Vault Section */}
        <section className="max-w-xl">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            Prompt Vault
          </h2>
          <PromptVault />
        </section>
      </main>
    </div>
  );
};

export default Index;
