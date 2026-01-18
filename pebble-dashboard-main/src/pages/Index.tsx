import { useState, useMemo } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
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
    <SidebarProvider>
      <AppSidebar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <SidebarInset>
        <div className="min-h-screen bg-background">
          {/* Header Bar with Trigger and Theme Toggle */}
          <header className="sticky top-0 z-10 flex h-14 items-center gap-2 border-b bg-background px-4 shadow-sm">
            <SidebarTrigger />
            <div className="ml-auto">
              <ThemeToggle />
            </div>
          </header>

          {/* Main Content */}
          <main className="p-6 md:p-8 space-y-12 max-w-[1600px] mx-auto">
            {/* Page Title */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground tracking-tight">
                Synapse
              </h1>
              <p className="text-muted-foreground text-lg">
                Your curated collection of essential resources
              </p>
            </div>

            {/* Search */}
            <div>
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            {/* Category Header */}
            <CategoryHeader
              activeCategory={activeCategory}
              resultCount={filteredLinks.length}
            />

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
            <section className="max-w-full pt-8 border-t">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Prompt Vault
              </h2>
              <PromptVault />
            </section>
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Index;
