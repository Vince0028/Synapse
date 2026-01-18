export interface LinkItem {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    tag: string;
    url: string;
    desc: string;
    pricing: "Free" | "Freemium" | "Paid" | "Free Trial" | "Daily Credits";
    studentOffer?: string;
}

export interface Category {
    id: string;
    name: string;
    icon: string;
}

export interface Prompt {
    id: string;
    title: string;
    content: string;
}

export const categories: Category[] = [
    { id: "all", name: "All", icon: "LayoutGrid" },
    { id: "ai", name: "AI Powerhouse", icon: "Sparkles" },
    { id: "dev", name: "Dev Ecosystem", icon: "Code2" },
    { id: "student", name: "Student Center", icon: "GraduationCap" },
    { id: "creative", name: "Creative Studio", icon: "Palette" },
    { id: "entertainment", name: "Entertainment", icon: "Tv" },
];

export const links: LinkItem[] = [
    // AI - Chatbots
    { id: "ai-1", name: "ChatGPT", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://chatgpt.com", desc: "Conversational AI by OpenAI", pricing: "Freemium" },
    { id: "ai-2", name: "Claude", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://claude.ai", desc: "AI assistant by Anthropic", pricing: "Freemium" },
    { id: "ai-3", name: "Google Gemini", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://gemini.google.com", desc: "Google's multimodal AI", pricing: "Freemium" },
    { id: "ai-38", name: "Perplexity", category: "ai", subcategory: "chatbot", tag: "Search", url: "https://perplexity.ai", desc: "AI search assistant", pricing: "Freemium", studentOffer: "Free Pro (GitHub Student Pack)" },

    // AI - Humanizers
    { id: "ai-7", name: "StealthWriter", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://stealthwriter.ai", desc: "Bypass AI detectors", pricing: "Freemium" },
    { id: "ai-33", name: "Humanize AI", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://humanizeai.pro", desc: "Converts AI content into human-like writing", pricing: "Freemium" },
    { id: "ai-8", name: "GPTZero", category: "ai", subcategory: "humanizer", tag: "Detector", url: "https://gptzero.me", desc: "AI content detection", pricing: "Freemium" },

    // AI - Coding Assistants
    { id: "ai-30", name: "GitHub Copilot", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://copilot.github.com", desc: "GitHub's AI code assistant", pricing: "Paid", studentOffer: "Free with GitHub Student Pack" },
    { id: "ai-31", name: "Blackbox AI", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://blackbox.ai", desc: "AI-powered coding helper", pricing: "Freemium" },

    // AI - APIs
    { id: "dev-6", name: "GroqCloud", category: "ai", subcategory: "ai-api", tag: "API", url: "https://console.groq.com", desc: "Fast AI inference API", pricing: "Freemium", studentOffer: "Free Tier Credits" },

    // AI - Generators
    { id: "ai-5", name: "v0.dev", category: "ai", subcategory: "generator", tag: "UI Gen", url: "https://v0.dev", desc: "Generate UI with AI", pricing: "Freemium" },
    { id: "ai-lovable", name: "Lovable", category: "ai", subcategory: "generator", tag: "Full Stack", url: "https://lovable.dev", desc: "AI full-stack engineer", pricing: "Paid" },
    { id: "ai-google-studio", name: "Google AI Studio", category: "ai", subcategory: "generator", tag: "Multimodal", url: "https://aistudio.google.com", desc: "Build with Gemini models", pricing: "Free" },
    { id: "tts-53", name: "ElevenLabs", category: "ai", subcategory: "generator", tag: "Voice", url: "https://elevenlabs.io", desc: "AI voice generator", pricing: "Freemium" },
    { id: "tts-54", name: "Resemble AI", category: "ai", subcategory: "generator", tag: "Voice", url: "https://resemble.ai", desc: "AI voice cloning", pricing: "Free Trial" },
    { id: "tts-56", name: "Play.ht", category: "ai", subcategory: "generator", tag: "Voice", url: "https://play.ht", desc: "Realistic text to speech", pricing: "Freemium" },

    // Dev - Hosting
    { id: "dev-2", name: "Vercel", category: "dev", subcategory: "hosting", tag: "Hosting", url: "https://vercel.com", desc: "Develop. Preview. Ship.", pricing: "Freemium", studentOffer: "Hobby Plan is Free" },
    { id: "dev-3", name: "Netlify", category: "dev", subcategory: "hosting", tag: "Hosting", url: "https://netlify.com", desc: "Fast site hosting", pricing: "Freemium", studentOffer: "Free Starter Plan" },
    { id: "dev-4", name: "Render", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://render.com", desc: "Unified cloud platform", pricing: "Freemium", studentOffer: "Free Tier Available" },
    { id: "dev-1", name: "GitHub", category: "dev", subcategory: "hosting", tag: "Repo", url: "https://github.com", desc: "Version control", pricing: "Freemium", studentOffer: "Free Pro (Student Pack)" },

    // Dev - Database
    { id: "dev-5", name: "Nhost", category: "dev", subcategory: "database", tag: "Backend", url: "https://nhost.io", desc: "Serverless backend", pricing: "Freemium" },
    { id: "des-5", name: "ERDPlus", category: "dev", subcategory: "database", tag: "Modeling", url: "https://erdplus.com", desc: "Database modeling tool", pricing: "Free" },

    // Dev - Tools
    { id: "dev-7", name: "UptimeRobot", category: "dev", subcategory: "devtools", tag: "Monitoring", url: "https://uptimerobot.com", desc: "Website monitoring", pricing: "Freemium" },
    { id: "dev-44", name: "Wireshark", category: "dev", subcategory: "devtools", tag: "Network", url: "https://wireshark.org", desc: "Network protocol analyzer", pricing: "Free" },

    // Dev - IDE
    { id: "dev-9", name: "Wokwi", category: "dev", subcategory: "ide", tag: "Simulation", url: "https://wokwi.com", desc: "Electronics Simulator", pricing: "Free", studentOffer: "Standard Club Plan" },
    { id: "dev-10", name: "Arduino", category: "dev", subcategory: "ide", tag: "Hardware", url: "https://arduino.cc", desc: "Open-source electronics", pricing: "Free", studentOffer: "Education Kit Discount" },

    // Student - Research
    { id: "edu-6", name: "NotebookLM", category: "student", subcategory: "research", tag: "AI Note", url: "https://notebooklm.google", desc: "AI research notebook", pricing: "Free" },
    { id: "edu-1", name: "W3Schools", category: "student", subcategory: "research", tag: "Docs", url: "https://w3schools.com", desc: "Web dev tutorials", pricing: "Free" },
    { id: "dev-40", name: "DevDocs", category: "student", subcategory: "research", tag: "Docs", url: "https://devdocs.io", desc: "Developer documentation", pricing: "Free" },

    // Student - Study
    { id: "edu-2", name: "Codecademy", category: "student", subcategory: "study", tag: "Courses", url: "https://codecademy.com", desc: "Interactive coding", pricing: "Freemium", studentOffer: "35% Off Pro" },
    { id: "edu-5", name: "Unstuck Study", category: "student", subcategory: "study", tag: "Support", url: "https://unstuckstudy.com", desc: "Study help platform", pricing: "Freemium" },

    // Student - Writing
    { id: "prod-49", name: "Grammarly", category: "student", subcategory: "writing", tag: "Grammar", url: "https://grammarly.com", desc: "Writing assistance", pricing: "Freemium" },
    { id: "edu-9", name: "Scribbr AI", category: "student", subcategory: "writing", tag: "Academic", url: "https://scribbr.ai", desc: "Citation & proofreading", pricing: "Freemium" },
    { id: "edu-7", name: "Rewritify", category: "student", subcategory: "writing", tag: "Rephrasing", url: "https://rewritify.com", desc: "Text rewriter", pricing: "Freemium" },

    // Creative - Design
    { id: "des-11", name: "Figma", category: "creative", subcategory: "design", tag: "UI/UX", url: "https://figma.com", desc: "Interface design", pricing: "Freemium", studentOffer: "Free Professional Plan" },
    { id: "des-2", name: "Canva", category: "creative", subcategory: "design", tag: "Graphic", url: "https://canva.com", desc: "Easy design tool", pricing: "Freemium", studentOffer: "Free Pro (Education)" },
    { id: "des-10", name: "Framer", category: "creative", subcategory: "design", tag: "No-Code", url: "https://framer.com", desc: "Web design tool", pricing: "Freemium" },
    { id: "des-3", name: "Lucid", category: "creative", subcategory: "design", tag: "Diagrams", url: "https://lucid.co", desc: "Visual collaboration", pricing: "Freemium", studentOffer: "Free Educational Upgrade" },
    { id: "des-4", name: "Tinkercad", category: "creative", subcategory: "design", tag: "3D", url: "https://tinkercad.com", desc: "3D modeling", pricing: "Free", studentOffer: "Free for Education" },

    // Creative - Media
    { id: "med-24", name: "Opus Pro", category: "creative", subcategory: "media", tag: "AI Video", url: "https://opus.pro", desc: "Video repurposing", pricing: "Free Trial" },
    { id: "med-21", name: "Jitter", category: "creative", subcategory: "media", tag: "Animation", url: "https://jitter.video", desc: "Motion design", pricing: "Freemium", studentOffer: "Free Pro Plan" },
    { id: "med-22", name: "Pexels", category: "creative", subcategory: "media", tag: "Assets", url: "https://pexels.com", desc: "Stock photos/video", pricing: "Free" },

    // Entertainment - Streaming
    { id: "str-61", name: "AnimePahe", category: "entertainment", subcategory: "streaming", tag: "Anime", url: "https://animepahe.com", desc: "Anime streaming", pricing: "Free" },
    { id: "str-66", name: "9anime", category: "entertainment", subcategory: "streaming", tag: "Anime", url: "https://9anime.to", desc: "Anime streaming", pricing: "Free" },
    { id: "str-64", name: "FMovies", category: "entertainment", subcategory: "streaming", tag: "Movies", url: "https://fmovies.to", desc: "Movie streaming", pricing: "Free" },

    // Entertainment - News
    { id: "news-69", name: "TechCrunch", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://techcrunch.com", desc: "Tech news", pricing: "Free" },
    { id: "news-72", name: "The Verge", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://theverge.com", desc: "Tech culture", pricing: "Free" },
];

export const prompts: Prompt[] = [
    {
        id: "essay-research",
        title: "Essay/Research Prompt",
        content: "FOLLOW THESE RULES: Use clear, simple language. Be spartan and informative. Use short sentences."
    },
    {
        id: "truth-verification",
        title: "Truth & Verification Prompt",
        content: "Always tell the truth. Base statements on verifiable facts. Cite sources."
    }
];

export const promptVault = prompts[0];
