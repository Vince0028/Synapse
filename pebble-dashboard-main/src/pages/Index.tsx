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
  const [pricingFilter, setPricingFilter] = useState<string | null>(null);
  const [studentFilter, setStudentFilter] = useState(false);
  const [tagFilter, setTagFilter] = useState<string | null>(null);

  const categoryLabels: Record<string, string> = {
    all: "All Resources",
    prompts: "Prompt Vault",
    ai: "AI Powerhouse",
    chatbot: "Chat Bots",
    humanizer: "Humanizers",
    detector: "AI Detectors",
    "coding-ai": "Coding Assistants",
    "ai-api": "AI APIs & Cloud",
    generator: "Generators",
    dev: "Dev Ecosystem",
    hosting: "Hosting & Cloud",
    database: "Databases",
    ide: "IDEs & Editors",
    devtools: "Tools & Utilities",
    "public-apis": "Public APIs",
    automation: "Automation",
    student: "Student Center",
    study: "Study Tools",
    research: "Research",
    writing: "Writing Support",
    creative: "Creative Studio",
    design: "Design, UI & 3D",
    media: "Media & Video",
    entertainment: "Entertainment",
    streaming: "Streaming",
    news: "Tech News"
  };

  // Get available tags for current category
  const availableTags = useMemo(() => {
    if (activeCategory === "prompts") return [];
    const categoryLinks = links.filter((link) => {
      if (activeCategory === "all") return true;
      return link.subcategory === activeCategory || link.category === activeCategory;
    });
    const tags = [...new Set(categoryLinks.map((link) => link.tag))];
    return tags.sort();
  }, [activeCategory]);

  const filteredLinks = useMemo(() => {
    // If on prompts tab, return empty list to hide grid items naturally (or handle in render)
    if (activeCategory === "prompts") return [];

    const filtered = links.filter((link) => {
      let matchesCategory = false;

      if (activeCategory === "all") {
        matchesCategory = true;
      } else {
        matchesCategory = link.subcategory === activeCategory || link.category === activeCategory;
      }

      const matchesSearch =
        searchQuery === "" ||
        link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.tag.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPricing = pricingFilter
        ? pricingFilter === "Free"
          ? link.pricing === "Free"
          : pricingFilter === "Paid"
            ? link.pricing !== "Free"
            : true
        : true;

      const matchesStudent = studentFilter ? !!link.studentOffer : true;

      const matchesTag = tagFilter ? link.tag === tagFilter : true;

      return matchesCategory && matchesSearch && matchesPricing && matchesStudent && matchesTag;
    });

    // Remove duplicates by name (keep first occurrence) - for Dashboard view
    let finalLinks = filtered;
    if (activeCategory === "all") {
      const seen = new Set<string>();
      finalLinks = filtered.filter((link) => {
        if (seen.has(link.name)) {
          return false;
        }
        seen.add(link.name);
        return true;
      });
    }

    // Sort by isHot (Fire tag) - Hot items first
    return finalLinks.sort((a, b) => {
      if (a.isHot && !b.isHot) return -1;
      if (!a.isHot && b.isHot) return 1;
      return 0;
    });
  }, [activeCategory, searchQuery, pricingFilter, studentFilter, tagFilter]);

  // Reset tag filter when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setTagFilter(null);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <SidebarInset>
        <div className="min-h-screen bg-background transition-colors duration-300">
          <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  Synapse
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </header>

          <main className="container mx-auto px-6 py-8 space-y-8 pb-32">
            {/* Search and Filters */}
            <div className="space-y-4 max-w-2xl mx-auto">
              {activeCategory !== "prompts" && (
                <>
                  <SearchBar value={searchQuery} onChange={setSearchQuery} />

                  <div className="flex flex-wrap gap-2 justify-center">
                    <button
                      onClick={() => setPricingFilter(pricingFilter === "Free" ? null : "Free")}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${pricingFilter === "Free"
                        ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground border-transparent"
                        }`}
                    >
                      Free Only
                    </button>
                    <button
                      onClick={() => setPricingFilter(pricingFilter === "Paid" ? null : "Paid")}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${pricingFilter === "Paid"
                        ? "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground border-transparent"
                        }`}
                    >
                      Paid / Freemium
                    </button>
                    <button
                      onClick={() => setStudentFilter(!studentFilter)}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${studentFilter
                        ? "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
                        : "bg-secondary hover:bg-secondary/80 text-secondary-foreground border-transparent"
                        }`}
                    >
                      Student Offers
                    </button>
                  </div>

                  {/* Dynamic Tag Filters */}
                  {availableTags.length > 0 && (
                    <div className="flex flex-wrap gap-2 justify-center">
                      {availableTags.map((tag: string) => (
                        <button
                          key={tag}
                          onClick={() => setTagFilter(tagFilter === tag ? null : tag)}
                          className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border ${tagFilter === tag
                            ? "bg-primary text-primary-foreground border-primary"
                            : "bg-secondary/50 hover:bg-secondary text-secondary-foreground border-transparent"
                            }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Category Header */}
            <CategoryHeader
              activeCategory={activeCategory}
              title={categoryLabels[activeCategory] || "Resources"}
              resultCount={activeCategory === "prompts" ? undefined : filteredLinks.length}
            />

            {/* Bento Grid (Hide if on Prompts tab) */}
            {activeCategory !== "prompts" && (
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
            )}

            {/* Prompt Vault Section - Show on Dashboard ('all') OR Prompt Tab ('prompts') */}
            {(activeCategory === "all" || activeCategory === "prompts") && (
              <section className={activeCategory === "all" ? "max-w-full pt-8 border-t" : "max-w-full"}>
                {activeCategory === "all" && (
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Prompt Vault
                  </h2>
                )}
                <PromptVault />
              </section>
            )}
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Index;
