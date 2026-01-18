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
    ai: "AI Powerhouse",
    chatbot: "Chat Bots",
    humanizer: "Humanizers",
    "coding-ai": "Coding Assistants",
    "ai-api": "AI APIs & Cloud",
    generator: "Generators",
    dev: "Dev Ecosystem",
    hosting: "Hosting & Cloud",
    database: "Databases",
    ide: "IDEs & Editors",
    devtools: "Tools & Utilities",
    student: "Student Center",
    study: "Study Tools",
    research: "Research",
    writing: "Writing Support",
    creative: "Creative Studio",
    design: "Design & UI",
    media: "Media & Video",
    entertainment: "Entertainment",
    streaming: "Streaming",
    news: "Tech News"
  };

  // Get available tags for current category
  const availableTags = useMemo(() => {
    const categoryLinks = links.filter((link) => {
      if (activeCategory === "all") return true;
      return link.subcategory === activeCategory || link.category === activeCategory;
    });
    const tags = [...new Set(categoryLinks.map((link) => link.tag))];
    return tags.sort();
  }, [activeCategory]);

  const filteredLinks = useMemo(() => {
    return links.filter((link) => {
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
  }, [activeCategory, searchQuery, pricingFilter, studentFilter, tagFilter]);

  // Reset tag filter when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setTagFilter(null);
  };

  return (
    <SidebarProvider>
      <AppSidebar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
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
          <main className="p-6 md:p-8 space-y-8 max-w-[1600px] mx-auto">
            {/* Page Title */}
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-foreground tracking-tight">
                Synapse
              </h1>
              <p className="text-muted-foreground text-lg">
                Your curated collection of essential resources
              </p>
            </div>

            {/* Search and Filters */}
            <div className="space-y-4">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />

              {/* Pricing Filters */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setPricingFilter(pricingFilter === "Free" ? null : "Free")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${pricingFilter === "Free"
                    ? "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800"
                    : "bg-background hover:bg-muted text-muted-foreground border-input"
                    }`}
                >
                  Free Only
                </button>
                <button
                  onClick={() => setPricingFilter(pricingFilter === "Paid" ? null : "Paid")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${pricingFilter === "Paid"
                    ? "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-800"
                    : "bg-background hover:bg-muted text-muted-foreground border-input"
                    }`}
                >
                  Paid / Freemium
                </button>
                <button
                  onClick={() => setStudentFilter(!studentFilter)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${studentFilter
                    ? "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800"
                    : "bg-background hover:bg-muted text-muted-foreground border-input"
                    }`}
                >
                  Student Offers
                </button>
              </div>

              {/* Tag Filters - Dynamic based on category */}
              {availableTags.length > 1 && (
                <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Category Header */}
            <CategoryHeader
              activeCategory={activeCategory}
              title={categoryLabels[activeCategory] || "Resources"}
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
