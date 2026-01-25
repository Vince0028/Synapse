import { useState, useMemo } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { SearchBar } from "@/components/SearchBar";
import { LinkCard } from "@/components/LinkCard";
import { PromptVault } from "@/components/PromptVault";
import { CategoryHeader } from "@/components/CategoryHeader";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useFavorites } from "@/hooks/useFavorites";
import { links } from "@/data/links";
import { Star } from "lucide-react";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [pricingFilter, setPricingFilter] = useState<string | null>(null);
  const [studentFilter, setStudentFilter] = useState(false);
  const [tagFilter, setTagFilter] = useState<string | null>(null);
  const [favoritesFilter, setFavoritesFilter] = useState(false);
  const { favorites, toggleFavorite, isFavorite, getFavoriteCount } = useFavorites();

  const categoryLabels: Record<string, string> = {
    all: "All Resources",
    prompts: "Prompt Vault",
    // AI Chat
    "ai-chat": "AI Chat",
    general: "General Chat",
    search: "Search Chat",
    reasoning: "Reasoning Chat",
    // Create with AI
    "create-ai": "Create with AI",
    image: "Image Maker",
    video: "Video Maker",
    music: "Music Maker",
    voice: "Voice Maker",
    "app-builder": "App Builder",
    // Code & Build
    "code-build": "Code & Build",
    "code-helper": "Code Helper",
    "code-editor": "Code Editor",
    testing: "Testing Tools",
    // Deploy & Store
    deploy: "Deploy & Store",
    hosting: "Website Hosting",
    cloud: "Cloud Servers",
    database: "Databases",
    auth: "Login & Auth",
    // Automation
    automation: "Automate Tasks",
    "no-code": "No Code Automation",
    developer: "Developer Automation",
    agents: "AI Agents",
    // Learn & Study
    learn: "Learn & Study",
    practice: "Coding Practice",
    courses: "Courses",
    docs: "Docs & Guides",
    stem: "Math & STEM",
    research: "Research Papers",
    news: "News & Podcasts",
    // Write Better
    writing: "Write Better",
    grammar: "Grammar Check",
    essay: "Essay Help",
    rewrite: "Rewriting",
    citation: "Citations",
    // Design & Media
    design: "Design & Media",
    ui: "UI Design",
    graphics: "Graphics",
    "3d": "3D Design",
    fonts: "Icons & Fonts",
    media: "Video Assets",
    // Public APIs
    "public-apis": "Public APIs",
    test: "Test APIs",
    fun: "Fun APIs",
    data: "Data APIs",
    weather: "Weather & Maps",
    finance: "Finance",
    security: "Security",
    "media-api": "Media APIs"
  };


  // Get available tags for current category - sorted by frequency
  const availableTags = useMemo(() => {
    if (activeCategory === "prompts") return [];

    const categoryLinks = links.filter((link) => {
      if (activeCategory === "all") return true;
      return link.subcategory === activeCategory || link.category === activeCategory;
    });

    // Count tag frequency for sorting
    const tagCounts: Record<string, number> = {};
    categoryLinks.forEach((link) => {
      link.tags.forEach((tag) => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });

    // Sort by frequency (most used first) - all tags shown with horizontal scroll
    return Object.entries(tagCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
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
        link.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesPricing = pricingFilter
        ? pricingFilter === "Free"
          ? link.pricing === "Free"
          : pricingFilter === "Paid"
            ? link.pricing !== "Free"
            : true
        : true;

      const matchesStudent = studentFilter ? !!link.studentOffer : true;

      const matchesTag = tagFilter ? link.tags.includes(tagFilter) : true;

      const matchesFavorites = favoritesFilter ? favorites.has(link.id) : true;

      return matchesCategory && matchesSearch && matchesPricing && matchesStudent && matchesTag && matchesFavorites;
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
  }, [activeCategory, searchQuery, pricingFilter, studentFilter, tagFilter, favoritesFilter, favorites]);

  // Reset tag filter when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setTagFilter(null);
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
      <SidebarInset>
        <div className="min-h-screen transition-colors duration-300">
          <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-background/60 backdrop-blur-xl border-b border-border/50">
            <div className="flex items-center gap-3">
              <SidebarTrigger />
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 leading-tight">
                  Synapse
                </h1>
                <p className="text-xs text-muted-foreground hidden md:block">
                  The connection point between you and your digital toolkit.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </header>

          <main className="container mx-auto px-6 py-8 space-y-8 pb-32">
            {/* Search and Filters */}
            <div className="space-y-6 w-full">
              {activeCategory !== "prompts" && (
                <>
                  <div className="max-w-2xl mx-auto space-y-4">
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
                      <button
                        onClick={() => setFavoritesFilter(!favoritesFilter)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border flex items-center gap-1.5 ${favoritesFilter
                          ? "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-800"
                          : "bg-secondary hover:bg-secondary/80 text-secondary-foreground border-transparent"
                          }`}
                      >
                        <Star className={`w-3.5 h-3.5 ${favoritesFilter ? "fill-current" : ""}`} />
                        Favorites
                        {getFavoriteCount() > 0 && (
                          <span className="ml-1 px-1.5 py-0.5 text-xs rounded-full bg-yellow-500 text-white">
                            {getFavoriteCount()}
                          </span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Dynamic Tag Filters - Limited to ~11 lines */}
                  {availableTags.length > 0 && (
                    <div key={activeCategory} className="max-w-6xl mx-auto">
                      <div className="flex flex-wrap gap-2 justify-center max-h-[264px] overflow-hidden">
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
              <div key={`grid-${activeCategory}-${tagFilter || 'all'}`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filteredLinks.map((link, index) => (
                  <LinkCard
                    key={`${activeCategory}-${link.id}`}
                    link={link}
                    index={index}
                    isFavorite={isFavorite(link.id)}
                    onToggleFavorite={toggleFavorite}
                  />
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
            {(activeCategory === "prompts" || (activeCategory === "all" && !favoritesFilter)) && (
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
