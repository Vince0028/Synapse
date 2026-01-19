import {
    LayoutGrid,
    Sparkles,
    Code2,
    GraduationCap,
    Palette,
    Bot,
    Cloud,
    Workflow,
    PenTool,
    Globe
} from "lucide-react";

export interface LinkItem {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    tags: string[];
    url: string;
    desc: string;
    pricing: "Free" | "Freemium" | "Paid" | "Free Trial" | "Daily Credits";
    studentOffer?: string;
    isHot?: boolean;
}

export interface Category {
    id: string;
    name: string;
    icon: any;
}

export interface Prompt {
    id: string;
    title: string;
    content: string;
}

export const categories: Category[] = [
    { id: "all", name: "All", icon: LayoutGrid },
    { id: "ai-chat", name: "AI Chat", icon: Bot },
    { id: "create-ai", name: "Create with AI", icon: Sparkles },
    { id: "code-build", name: "Code & Build", icon: Code2 },
    { id: "deploy", name: "Deploy & Store", icon: Cloud },
    { id: "automation", name: "Automate Tasks", icon: Workflow },
    { id: "learn", name: "Learn & Study", icon: GraduationCap },
    { id: "writing", name: "Write Better", icon: PenTool },
    { id: "design", name: "Design & Media", icon: Palette },
    { id: "public-apis", name: "Public APIs", icon: Globe },
];

export const links: LinkItem[] = [
    // ===== AI CHAT =====
    { id: "ai-1", name: "ChatGPT", category: "ai-chat", subcategory: "general", tags: ["Chat", "Writing", "Coding"], url: "https://chatgpt.com", desc: "Conversational AI by OpenAI", pricing: "Freemium", isHot: true },
    { id: "ai-2", name: "Claude", category: "ai-chat", subcategory: "general", tags: ["Chat", "Writing", "Research"], url: "https://claude.ai", desc: "AI assistant by Anthropic", pricing: "Freemium", isHot: true },
    { id: "ai-3", name: "Google Gemini", category: "ai-chat", subcategory: "general", tags: ["Chat", "Search", "Multimodal"], url: "https://gemini.google.com", desc: "Google's multimodal AI", pricing: "Freemium", isHot: true },
    { id: "ai-mistral", name: "Mistral Chat", category: "ai-chat", subcategory: "general", tags: ["Chat", "LLM"], url: "https://chat.mistral.ai", desc: "Open-weight model leader", pricing: "Freemium", isHot: true },
    { id: "ai-38", name: "Perplexity", category: "ai-chat", subcategory: "search", tags: ["Search", "Research", "Chat"], url: "https://perplexity.ai", desc: "AI search assistant", pricing: "Freemium", studentOffer: "Free Pro (GitHub Student Pack)", isHot: true },
    { id: "ai-grok", name: "Grok", category: "ai-chat", subcategory: "search", tags: ["Chat", "Real Time", "News"], url: "https://grok.x.ai", desc: "xAI's conversational AI", pricing: "Free Trial", isHot: true },
    { id: "ai-qwen", name: "Qwen", category: "ai-chat", subcategory: "reasoning", tags: ["Chat", "Reasoning", "Math"], url: "https://qwen.ai", desc: "Alibaba's powerful AI chat", pricing: "Free", isHot: true },
    { id: "ai-deepseek", name: "DeepSeek", category: "ai-chat", subcategory: "reasoning", tags: ["Chat", "Reasoning", "Coding"], url: "https://chat.deepseek.com", desc: "Long-context reasoning", pricing: "Free", isHot: true },

    // ===== CREATE WITH AI =====
    // Image Maker
    { id: "ai-midjourney", name: "Midjourney", category: "create-ai", subcategory: "image", tags: ["Image", "Art", "Creative"], url: "https://midjourney.com", desc: "AI image generation", pricing: "Paid", isHot: true },
    { id: "ai-dalle", name: "DALL-E", category: "create-ai", subcategory: "image", tags: ["Image", "AI Art"], url: "https://openai.com/dall-e-3", desc: "OpenAI image generator", pricing: "Freemium", isHot: true },
    { id: "ai-stable", name: "Stable Diffusion", category: "create-ai", subcategory: "image", tags: ["Image", "Open Source"], url: "https://stability.ai", desc: "Open source image gen", pricing: "Free" },
    { id: "ai-leonardo", name: "Leonardo.Ai", category: "create-ai", subcategory: "image", tags: ["Image", "Game Assets"], url: "https://leonardo.ai", desc: "Production quality assets", pricing: "Freemium", isHot: true },
    { id: "ai-ideogram", name: "Ideogram", category: "create-ai", subcategory: "image", tags: ["Image", "Typography"], url: "https://ideogram.ai", desc: "Text-accurate image gen", pricing: "Freemium" },
    { id: "ai-chatgpt-gen", name: "ChatGPT (Image)", category: "create-ai", subcategory: "image", tags: ["Image", "DALL-E"], url: "https://chatgpt.com", desc: "GPT-4 + DALL-E image gen", pricing: "Freemium" },

    // Video Maker
    { id: "ai-sora", name: "Sora", category: "create-ai", subcategory: "video", tags: ["Video", "AI Video"], url: "https://openai.com/sora", desc: "OpenAI video generation", pricing: "Free Trial", isHot: true },
    { id: "ai-runway", name: "Runway", category: "create-ai", subcategory: "video", tags: ["Video", "Creator"], url: "https://runwayml.com", desc: "AI video generation", pricing: "Free Trial" },
    { id: "ai-pika", name: "Pika", category: "create-ai", subcategory: "video", tags: ["Video", "Short Clips"], url: "https://pika.art", desc: "Text-to-video platform", pricing: "Freemium" },
    { id: "ai-luma", name: "Luma Dream Machine", category: "create-ai", subcategory: "video", tags: ["Video", "Realistic"], url: "https://lumalabs.ai", desc: "High-quality video AI", pricing: "Freemium" },
    { id: "med-24", name: "Opus Pro", category: "create-ai", subcategory: "video", tags: ["Video", "Repurpose"], url: "https://opus.pro", desc: "Video repurposing", pricing: "Free Trial" },

    // Music & Voice
    { id: "ai-suno", name: "Suno AI", category: "create-ai", subcategory: "music", tags: ["Music", "AI Audio"], url: "https://suno.ai", desc: "AI music generation", pricing: "Freemium", isHot: true },
    { id: "ai-udio", name: "Udio", category: "create-ai", subcategory: "music", tags: ["Music", "AI Audio"], url: "https://udio.com", desc: "AI music creation", pricing: "Freemium" },
    { id: "tts-53", name: "ElevenLabs", category: "create-ai", subcategory: "voice", tags: ["Voice", "TTS"], url: "https://elevenlabs.io", desc: "AI voice generator", pricing: "Freemium" },
    { id: "tts-54", name: "Resemble AI", category: "create-ai", subcategory: "voice", tags: ["Voice", "Cloning"], url: "https://resemble.ai", desc: "AI voice cloning", pricing: "Free Trial" },
    { id: "tts-56", name: "Play.ht", category: "create-ai", subcategory: "voice", tags: ["Voice", "TTS"], url: "https://play.ht", desc: "Realistic text to speech", pricing: "Freemium" },

    // App Builder
    { id: "ai-5", name: "v0.dev", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "UI", "Frontend"], url: "https://v0.dev", desc: "Generate UI with AI", pricing: "Freemium", isHot: true },
    { id: "ai-lovable", name: "Lovable", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "Full Stack"], url: "https://lovable.dev", desc: "Full-stack app generator", pricing: "Freemium", isHot: true },
    { id: "ai-base44", name: "Base44", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "Full Stack"], url: "https://base44.com", desc: "Full-stack AI app generator", pricing: "Freemium", isHot: true },
    { id: "ai-replit-gen", name: "Replit", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "Hosting"], url: "https://replit.com", desc: "Build apps with Replit Agent", pricing: "Freemium", isHot: true },
    { id: "ai-google-studio", name: "Google AI Studio", category: "create-ai", subcategory: "app-builder", tags: ["Multimodal", "Gemini"], url: "https://aistudio.google.com", desc: "Build with Gemini models", pricing: "Free" },


    // ===== CODE & BUILD =====
    // Code Helper
    { id: "ai-30", name: "GitHub Copilot", category: "code-build", subcategory: "code-helper", tags: ["Coding", "AI Helper", "Student"], url: "https://github.com/features/copilot", desc: "GitHub's AI code assistant", pricing: "Freemium", studentOffer: "Free with GitHub Student Pack", isHot: true },
    { id: "ai-tabnine", name: "Tabnine", category: "code-build", subcategory: "code-helper", tags: ["Coding", "Autosuggest"], url: "https://tabnine.com", desc: "AI code assistant", pricing: "Freemium" },
    { id: "ai-31", name: "Blackbox AI", category: "code-build", subcategory: "code-helper", tags: ["Coding", "Search Code"], url: "https://blackbox.ai", desc: "AI-powered coding helper", pricing: "Freemium" },

    // Code Editor
    { id: "ai-cursor", name: "Cursor", category: "code-build", subcategory: "code-editor", tags: ["Code Editor", "AI Coding", "Agent"], url: "https://cursor.sh", desc: "AI-first code editor", pricing: "Freemium", isHot: true },
    { id: "ai-windsurf", name: "Windsurf", category: "code-build", subcategory: "code-editor", tags: ["Code Editor", "AI Coding", "Agent"], url: "https://codeium.com/windsurf", desc: "Agentic IDE by Codeium", pricing: "Freemium", isHot: true },
    { id: "dev-codesandbox", name: "CodeSandbox", category: "code-build", subcategory: "code-editor", tags: ["Code Editor", "Web"], url: "https://codesandbox.io", desc: "Online code editor", pricing: "Freemium" },
    { id: "dev-stackblitz", name: "StackBlitz", category: "code-build", subcategory: "code-editor", tags: ["Code Editor", "Web"], url: "https://stackblitz.com", desc: "Web-based IDE", pricing: "Freemium" },
    { id: "ai-antigravity", name: "Antigravity", category: "code-build", subcategory: "code-editor", tags: ["Agentic", "Google"], url: "https://deepmind.google", desc: "Advanced Agentic Coding Assistant", pricing: "Freemium", isHot: true },
    { id: "dev-9", name: "Wokwi", category: "code-build", subcategory: "code-editor", tags: ["Simulation", "Electronics"], url: "https://wokwi.com", desc: "Electronics Simulator", pricing: "Free", studentOffer: "Standard Club Plan" },
    { id: "dev-10", name: "Arduino", category: "code-build", subcategory: "code-editor", tags: ["Hardware", "IDE"], url: "https://arduino.cc", desc: "Open-source electronics", pricing: "Free" },

    // Testing Tools
    { id: "dev-playwright", name: "Playwright", category: "code-build", subcategory: "testing", tags: ["Testing", "E2E"], url: "https://playwright.dev", desc: "Reliable E2E testing", pricing: "Free" },
    { id: "dev-sentry", name: "Sentry", category: "code-build", subcategory: "testing", tags: ["Monitoring", "Errors"], url: "https://sentry.io", desc: "Application error tracking", pricing: "Freemium" },
    { id: "dev-postman", name: "Postman", category: "code-build", subcategory: "testing", tags: ["API Testing", "DevTools"], url: "https://postman.com", desc: "API development platform", pricing: "Freemium" },
    { id: "dev-hoppscotch", name: "Hoppscotch", category: "code-build", subcategory: "testing", tags: ["API Testing", "Open Source"], url: "https://hoppscotch.io", desc: "Open-source API tester", pricing: "Free" },
    { id: "dev-insomnia", name: "Insomnia", category: "code-build", subcategory: "testing", tags: ["API Testing", "Client"], url: "https://insomnia.rest", desc: "API client", pricing: "Freemium" },
    { id: "dev-7", name: "UptimeRobot", category: "code-build", subcategory: "testing", tags: ["Monitoring", "Uptime"], url: "https://uptimerobot.com", desc: "Website monitoring", pricing: "Freemium" },
    { id: "dev-44", name: "Wireshark", category: "code-build", subcategory: "testing", tags: ["Network", "Analysis"], url: "https://wireshark.org", desc: "Network protocol analyzer", pricing: "Free" },
    { id: "dev-logrocket", name: "LogRocket", category: "code-build", subcategory: "testing", tags: ["Monitoring", "Replay"], url: "https://logrocket.com", desc: "Session replay & monitoring", pricing: "Freemium" },

    // ===== DEPLOY & STORE =====
    // Website Hosting
    { id: "dev-2", name: "Vercel", category: "deploy", subcategory: "hosting", tags: ["Hosting", "Frontend", "Student"], url: "https://vercel.com", desc: "Develop. Preview. Ship.", pricing: "Freemium", studentOffer: "Hobby Plan is Free", isHot: true },
    { id: "dev-3", name: "Netlify", category: "deploy", subcategory: "hosting", tags: ["Hosting", "Frontend"], url: "https://netlify.com", desc: "Fast site hosting", pricing: "Freemium", studentOffer: "Free Starter Plan", isHot: true },
    { id: "dev-pages", name: "GitHub Pages", category: "deploy", subcategory: "hosting", tags: ["Hosting", "Static"], url: "https://pages.github.com", desc: "Free static hosting", pricing: "Free" },
    { id: "dev-cfpages", name: "Cloudflare Pages", category: "deploy", subcategory: "hosting", tags: ["Hosting", "Edge"], url: "https://pages.cloudflare.com", desc: "Ultra-fast global hosting", pricing: "Freemium" },
    { id: "dev-cfworkers", name: "Cloudflare Workers", category: "deploy", subcategory: "hosting", tags: ["Edge", "Serverless"], url: "https://workers.cloudflare.com", desc: "Serverless edge computing", pricing: "Freemium" },

    // Cloud Servers
    { id: "dev-4", name: "Render", category: "deploy", subcategory: "cloud", tags: ["Hosting", "Backend"], url: "https://render.com", desc: "Unified cloud platform", pricing: "Freemium", studentOffer: "Free Tier Available", isHot: true },
    { id: "dev-railway", name: "Railway", category: "deploy", subcategory: "cloud", tags: ["Hosting", "Backend"], url: "https://railway.app", desc: "Deploy apps instantly", pricing: "Freemium" },
    { id: "dev-fly", name: "Fly.io", category: "deploy", subcategory: "cloud", tags: ["Cloud", "Global"], url: "https://fly.io", desc: "Run apps globally", pricing: "Freemium" },
    { id: "dev-do", name: "DigitalOcean", category: "deploy", subcategory: "cloud", tags: ["Cloud", "VPS"], url: "https://digitalocean.com", desc: "Simple cloud hosting", pricing: "Paid" },
    { id: "dev-1", name: "GitHub", category: "deploy", subcategory: "cloud", tags: ["Repo", "Version Control"], url: "https://github.com", desc: "Version control", pricing: "Freemium", studentOffer: "Free Pro (Student Pack)", isHot: true },

    // Databases
    { id: "dev-supabase", name: "Supabase", category: "deploy", subcategory: "database", tags: ["Database", "Backend", "Auth"], url: "https://supabase.com", desc: "Open source Firebase alternative", pricing: "Freemium", isHot: true },
    { id: "dev-firebase", name: "Firebase", category: "deploy", subcategory: "database", tags: ["Database", "Backend", "Auth"], url: "https://firebase.google.com", desc: "Google's app platform", pricing: "Freemium" },
    { id: "dev-mongodb", name: "MongoDB Atlas", category: "deploy", subcategory: "database", tags: ["Database", "Cloud"], url: "https://mongodb.com/atlas", desc: "Cloud database service", pricing: "Freemium" },
    { id: "dev-neon", name: "Neon", category: "deploy", subcategory: "database", tags: ["Database", "Postgres"], url: "https://neon.tech", desc: "Serverless Postgres", pricing: "Freemium" },
    { id: "dev-upstash", name: "Upstash", category: "deploy", subcategory: "database", tags: ["Database", "Redis"], url: "https://upstash.com", desc: "Serverless Redis & Kafka", pricing: "Freemium" },
    { id: "dev-planetscale", name: "PlanetScale", category: "deploy", subcategory: "database", tags: ["Database", "MySQL"], url: "https://planetscale.com", desc: "Serverless MySQL", pricing: "Freemium" },
    { id: "dev-5", name: "Nhost", category: "deploy", subcategory: "database", tags: ["Backend", "Serverless"], url: "https://nhost.io", desc: "Serverless backend", pricing: "Freemium" },
    { id: "des-5", name: "ERDPlus", category: "deploy", subcategory: "database", tags: ["Modeling", "Diagrams"], url: "https://erdplus.com", desc: "Database modeling tool", pricing: "Free" },
    { id: "dev-turso", name: "Turso", category: "deploy", subcategory: "database", tags: ["Database", "SQLite"], url: "https://turso.tech", desc: "Edge SQLite database", pricing: "Freemium" },
    { id: "dev-appwrite", name: "Appwrite", category: "deploy", subcategory: "database", tags: ["Backend", "Open Source"], url: "https://appwrite.io", desc: "Open-source Firebase alt", pricing: "Freemium" },


    // Login & Auth
    { id: "dev-clerk", name: "Clerk", category: "deploy", subcategory: "auth", tags: ["Auth", "User Mgmt"], url: "https://clerk.com", desc: "Complete user management", pricing: "Freemium" },
    { id: "dev-auth0", name: "Auth0", category: "deploy", subcategory: "auth", tags: ["Auth", "Identity"], url: "https://auth0.com", desc: "Secure identity platform", pricing: "Freemium" },

    // ===== AUTOMATE TASKS =====
    // No Code
    { id: "auto-zapier", name: "Zapier", category: "automation", subcategory: "no-code", tags: ["Automation", "No Code"], url: "https://zapier.com", desc: "Automate apps easily", pricing: "Freemium" },
    { id: "auto-make", name: "Make", category: "automation", subcategory: "no-code", tags: ["Automation", "Visual"], url: "https://make.com", desc: "Visual automation platform", pricing: "Freemium" },
    { id: "auto-activepieces", name: "Activepieces", category: "automation", subcategory: "no-code", tags: ["Open Source", "Automation"], url: "https://activepieces.com", desc: "Open source no-code business automation", pricing: "Freemium", isHot: true },

    // Developer Auto
    { id: "auto-n8n", name: "n8n", category: "automation", subcategory: "developer", tags: ["Automation", "Workflow", "Dev"], url: "https://n8n.io", desc: "Fair-code workflow automation", pricing: "Freemium", isHot: true },
    { id: "auto-pipedream", name: "Pipedream", category: "automation", subcategory: "developer", tags: ["Automation", "API"], url: "https://pipedream.com", desc: "Connect APIs remarkably fast", pricing: "Freemium" },
    { id: "auto-windmill", name: "Windmill", category: "automation", subcategory: "developer", tags: ["Scripts", "UI"], url: "https://windmill.dev", desc: "Turn scripts into internal UIs", pricing: "Freemium" },
    { id: "auto-nodered", name: "Node-RED", category: "automation", subcategory: "developer", tags: ["IoT", "Low-Code"], url: "https://nodered.org", desc: "Low-code programming for event-driven apps", pricing: "Free" },

    // AI Agents
    { id: "auto-gumloop", name: "Gumloop", category: "automation", subcategory: "agents", tags: ["Automation", "AI Agent"], url: "https://gumloop.com", desc: "Automate ops with AI agents", pricing: "Freemium", isHot: true },
    { id: "auto-lindy", name: "Lindy", category: "automation", subcategory: "agents", tags: ["AI Agent", "Assistant"], url: "https://lindy.ai", desc: "AI employee for every task", pricing: "Freemium" },

    // ===== LEARN & STUDY =====
    // Coding Practice
    { id: "edu-leetcode", name: "LeetCode", category: "learn", subcategory: "practice", tags: ["Coding", "Interviews"], url: "https://leetcode.com", desc: "Coding interview prep", pricing: "Freemium", isHot: true },
    { id: "edu-hackerrank", name: "HackerRank", category: "learn", subcategory: "practice", tags: ["Practice", "Assessments"], url: "https://hackerrank.com", desc: "Tech skill assessments", pricing: "Freemium" },
    { id: "edu-fcc", name: "freeCodeCamp", category: "learn", subcategory: "practice", tags: ["Learn Coding", "Certificates"], url: "https://freecodecamp.org", desc: "The gold standard - 100% free certs", pricing: "Free", isHot: true },
    { id: "edu-odin", name: "The Odin Project", category: "learn", subcategory: "practice", tags: ["Learn Coding", "Full Stack"], url: "https://theodinproject.com", desc: "Full stack curriculum - 100% free", pricing: "Free", isHot: true },
    { id: "edu-scrimba", name: "Scrimba", category: "learn", subcategory: "practice", tags: ["Interactive", "Coding"], url: "https://scrimba.com", desc: "Interactive video coding", pricing: "Freemium" },

    // Courses
    { id: "edu-cs50", name: "Harvard CS50", category: "learn", subcategory: "courses", tags: ["Learn Coding", "CS"], url: "https://cs50.harvard.edu", desc: "Best intro to CS - free", pricing: "Free", isHot: true },
    { id: "edu-coursera", name: "Coursera", category: "learn", subcategory: "courses", tags: ["Courses", "University"], url: "https://coursera.org", desc: "Yale, Stanford courses - free to audit", pricing: "Freemium", isHot: true },
    { id: "edu-edx", name: "edX", category: "learn", subcategory: "courses", tags: ["Courses", "University"], url: "https://edx.org", desc: "Harvard & MIT - free to audit", pricing: "Freemium", isHot: true },
    { id: "edu-udemy", name: "Udemy", category: "learn", subcategory: "courses", tags: ["Courses", "Video"], url: "https://udemy.com", desc: "Video courses", pricing: "Freemium" },
    { id: "edu-mitocw", name: "MIT OpenCourseWare", category: "learn", subcategory: "courses", tags: ["Courses", "MIT"], url: "https://ocw.mit.edu", desc: "MIT courses - 100% free", pricing: "Free" },
    { id: "edu-2", name: "Codecademy", category: "learn", subcategory: "courses", tags: ["Interactive", "Coding"], url: "https://codecademy.com", desc: "Interactive coding", pricing: "Freemium", studentOffer: "35% Off Pro" },
    { id: "edu-5", name: "Unstuck Study", category: "learn", subcategory: "courses", tags: ["Study", "Help"], url: "https://unstuckstudy.com", desc: "Study help platform", pricing: "Freemium" },
    { id: "edu-quizlet", name: "Quizlet", category: "learn", subcategory: "courses", tags: ["Flashcards", "Study"], url: "https://quizlet.com", desc: "Flashcard learning", pricing: "Freemium" },

    // Docs & Guides
    { id: "edu-mdn", name: "MDN Web Docs", category: "learn", subcategory: "docs", tags: ["Docs", "Web"], url: "https://developer.mozilla.org", desc: "The Bible of web dev", pricing: "Free" },
    { id: "edu-1", name: "W3Schools", category: "learn", subcategory: "docs", tags: ["Docs", "Tutorials"], url: "https://w3schools.com", desc: "Web dev tutorials", pricing: "Free" },
    { id: "dev-devdocs", name: "DevDocs", category: "learn", subcategory: "docs", tags: ["Docs", "Aggregator"], url: "https://devdocs.io", desc: "Developer documentation", pricing: "Free" },
    { id: "edu-trailhead", name: "Trailhead", category: "learn", subcategory: "docs", tags: ["Salesforce", "Learning"], url: "https://trailhead.salesforce.com", desc: "Salesforce learning", pricing: "Free" },
    { id: "edu-mslearn", name: "Microsoft Learn", category: "learn", subcategory: "docs", tags: ["Microsoft", "Learning"], url: "https://learn.microsoft.com", desc: "Microsoft learning paths", pricing: "Free" },
    { id: "edu-outsystems", name: "OutSystems", category: "learn", subcategory: "docs", tags: ["Low-Code", "Docs"], url: "https://outsystems.com", desc: "Low-code platform", pricing: "Free Trial" },


    // Math & STEM
    { id: "edu-khan", name: "Khan Academy", category: "learn", subcategory: "stem", tags: ["Math", "STEM"], url: "https://khanacademy.org", desc: "Free education for all", pricing: "Free" },
    { id: "edu-desmos", name: "Desmos", category: "learn", subcategory: "stem", tags: ["Math", "Graphing"], url: "https://desmos.com", desc: "Advanced graphing calculator", pricing: "Free" },
    { id: "edu-wolfram", name: "Wolfram Alpha", category: "learn", subcategory: "stem", tags: ["STEM", "Compute"], url: "https://wolframalpha.com", desc: "Computational intelligence", pricing: "Freemium" },

    // Research Papers
    { id: "edu-notion", name: "NotebookLM", category: "learn", subcategory: "research", tags: ["Research", "Notes", "AI"], url: "https://notebooklm.google.com", desc: "AI-powered notebook", pricing: "Free", isHot: true },
    { id: "edu-researchgate", name: "ResearchGate", category: "learn", subcategory: "research", tags: ["Papers", "Academic"], url: "https://researchgate.net", desc: "Access academic papers", pricing: "Free" },
    { id: "edu-consensus", name: "Consensus", category: "learn", subcategory: "research", tags: ["AI Research", "Search"], url: "https://consensus.app", desc: "Evidence-based answers", pricing: "Freemium" },
    { id: "edu-elicit", name: "Elicit", category: "learn", subcategory: "research", tags: ["AI Research", "Analysis"], url: "https://elicit.com", desc: "Analyze research papers", pricing: "Freemium", isHot: true },
    { id: "edu-connectedpapers", name: "Connected Papers", category: "learn", subcategory: "research", tags: ["Papers", "Visual"], url: "https://connectedpapers.com", desc: "Visual paper discovery", pricing: "Freemium" },
    { id: "edu-scite", name: "Scite", category: "learn", subcategory: "research", tags: ["Citation", "Analysis"], url: "https://scite.ai", desc: "Smart citation checker", pricing: "Paid" },
    { id: "edu-obsidian", name: "Obsidian", category: "learn", subcategory: "research", tags: ["Notes", "Knowledge"], url: "https://obsidian.md", desc: "Private knowledge base", pricing: "Free" },
    { id: "prod-notion", name: "Notion", category: "learn", subcategory: "research", tags: ["Notes", "Workspace"], url: "https://notion.so", desc: "All-in-one workspace", pricing: "Freemium" },

    // ===== WRITE BETTER =====
    // Grammar Check
    { id: "prod-49", name: "Grammarly", category: "writing", subcategory: "grammar", tags: ["Grammar", "Writing"], url: "https://grammarly.com", desc: "Writing assistance", pricing: "Freemium", isHot: true },
    { id: "prod-languagetool", name: "LanguageTool", category: "writing", subcategory: "grammar", tags: ["Grammar", "Multilingual"], url: "https://languagetool.org", desc: "Multilingual grammar check", pricing: "Freemium" },

    // Essay & Rewriting
    { id: "edu-quillbot", name: "QuillBot", category: "writing", subcategory: "rewrite", tags: ["Rewrite", "Writing"], url: "https://quillbot.com", desc: "AI paraphraser", pricing: "Freemium" },
    { id: "prod-hemingway", name: "Hemingway Editor", category: "writing", subcategory: "rewrite", tags: ["Writing", "Clarity"], url: "https://hemingwayapp.com", desc: "Make writing bold & clear", pricing: "Free" },
    { id: "edu-8", name: "JotBot", category: "writing", subcategory: "essay", tags: ["Assistant", "Essay"], url: "https://jotbot.com", desc: "Essay writer", pricing: "Freemium" },
    { id: "ai-7", name: "StealthWriter", category: "writing", subcategory: "rewrite", tags: ["Rewriting", "Humanizer"], url: "https://stealthwriter.ai", desc: "Bypass AI detectors", pricing: "Freemium" },
    { id: "ai-33", name: "Humanize AI", category: "writing", subcategory: "rewrite", tags: ["Humanizer", "AI"], url: "https://humanizeai.pro", desc: "Converts AI content into human-like writing", pricing: "Freemium" },
    { id: "ai-hum2", name: "AI Humanizer", category: "writing", subcategory: "rewrite", tags: ["Humanizer", "AI"], url: "https://aihumanizer.ai", desc: "Humanize AI text", pricing: "Freemium" },
    { id: "ai-undetect", name: "Undetectable AI", category: "writing", subcategory: "rewrite", tags: ["Detector", "Humanizer"], url: "https://undetectable.ai", desc: "Make AI content undetectable", pricing: "Freemium", isHot: true },
    { id: "ai-8", name: "GPTZero", category: "writing", subcategory: "rewrite", tags: ["Detector", "AI"], url: "https://gptzero.me", desc: "AI content detection", pricing: "Freemium", isHot: true },
    { id: "ai-originality", name: "Originality.ai", category: "writing", subcategory: "rewrite", tags: ["Detector", "AI"], url: "https://originality.ai", desc: "AI & plagiarism checker", pricing: "Free Trial" },
    { id: "edu-7", name: "Rewritify", category: "writing", subcategory: "rewrite", tags: ["Rewrite", "Tool"], url: "https://rewritify.com", desc: "Text rewriter", pricing: "Freemium" },
    { id: "prod-prowriting", name: "ProWritingAid", category: "writing", subcategory: "rewrite", tags: ["Editor", "Grammar"], url: "https://prowritingaid.com", desc: "AI writing assistant", pricing: "Freemium" },


    // Citations
    { id: "edu-9", name: "Scribbr AI", category: "writing", subcategory: "citation", tags: ["Citations", "Academic"], url: "https://scribbr.ai", desc: "Citation & proofreading", pricing: "Freemium", isHot: true },
    { id: "edu-zotero", name: "Zotero", category: "writing", subcategory: "citation", tags: ["Citations", "Manager"], url: "https://zotero.org", desc: "Research citation manager", pricing: "Free" },


    // ===== DESIGN & MEDIA =====
    // UI Design
    { id: "des-11", name: "Figma", category: "design", subcategory: "ui", tags: ["UI/UX", "Design"], url: "https://figma.com", desc: "Interface design", pricing: "Freemium", studentOffer: "Free Professional Plan", isHot: true },
    { id: "des-10", name: "Framer", category: "design", subcategory: "ui", tags: ["No-Code", "Web Design"], url: "https://framer.com", desc: "Web design tool", pricing: "Freemium" },
    { id: "des-3", name: "Lucid", category: "design", subcategory: "ui", tags: ["Diagrams", "Collab"], url: "https://lucid.co", desc: "Visual collaboration", pricing: "Freemium", studentOffer: "Free Educational Upgrade" },
    { id: "des-excalidraw", name: "Excalidraw", category: "design", subcategory: "ui", tags: ["Whiteboard", "Sketch"], url: "https://excalidraw.com", desc: "Virtual whiteboard", pricing: "Free" },

    // Graphics
    { id: "des-2", name: "Canva", category: "design", subcategory: "graphics", tags: ["Graphic", "Easy"], url: "https://canva.com", desc: "Easy design tool", pricing: "Freemium", studentOffer: "Free Pro (Education)", isHot: true },
    { id: "des-photopea", name: "Photopea", category: "design", subcategory: "graphics", tags: ["Editor", "Web"], url: "https://photopea.com", desc: "Free Photoshop alternative", pricing: "Free" },
    { id: "des-coolors", name: "Coolors", category: "design", subcategory: "graphics", tags: ["Colors", "Palette"], url: "https://coolors.co", desc: "Color palette generator", pricing: "Freemium" },
    { id: "des-dribbble", name: "Dribbble", category: "design", subcategory: "graphics", tags: ["Inspiration", "Design"], url: "https://dribbble.com", desc: "Design inspiration", pricing: "Freemium" },

    // 3D Design
    { id: "des-spline", name: "Spline", category: "design", subcategory: "3d", tags: ["3D", "Web"], url: "https://spline.design", desc: "3D design for the web", pricing: "Freemium" },
    { id: "des-blender", name: "Blender", category: "design", subcategory: "3d", tags: ["3D", "Pro"], url: "https://blender.org", desc: "Pro open-source 3D suite", pricing: "Free" },
    { id: "des-tripo", name: "Tripo AI", category: "design", subcategory: "3d", tags: ["3D", "AI"], url: "https://www.tripo3d.ai", desc: "Text-to-3D model generator", pricing: "Freemium", isHot: true },
    { id: "des-tinkercad", name: "Tinkercad", category: "design", subcategory: "3d", tags: ["3D", "CAD"], url: "https://tinkercad.com", desc: "3D modeling", pricing: "Free", studentOffer: "Free for Education" },
    { id: "des-sketchfab", name: "Sketchfab", category: "design", subcategory: "3d", tags: ["3D", "Models"], url: "https://sketchfab.com", desc: "Publish & find 3D models", pricing: "Freemium" },

    // Icons & Fonts
    { id: "des-googlefonts", name: "Google Fonts", category: "design", subcategory: "fonts", tags: ["Fonts", "Web"], url: "https://fonts.google.com", desc: "Free font library", pricing: "Free" },
    { id: "des-fontshare", name: "Fontshare", category: "design", subcategory: "fonts", tags: ["Fonts", "Quality"], url: "https://www.fontshare.com", desc: "Quality open source fonts", pricing: "Free" },
    { id: "des-heroicons", name: "Heroicons", category: "design", subcategory: "fonts", tags: ["Icons", "SVG"], url: "https://heroicons.com", desc: "Beautiful hand-crafted SVG icons", pricing: "Free" },
    { id: "des-iconify", name: "Iconify", category: "design", subcategory: "fonts", tags: ["Icons", "Unified"], url: "https://iconify.design", desc: "100k+ unified icons", pricing: "Free" },
    { id: "des-svgrepo", name: "SVG Repo", category: "design", subcategory: "fonts", tags: ["Vectors", "SVG"], url: "https://svgrepo.com", desc: "500k+ free vectors", pricing: "Free" },

    // Video Assets
    { id: "med-pexels", name: "Pexels", category: "design", subcategory: "media", tags: ["Stock", "Photo/Video"], url: "https://pexels.com", desc: "Stock photos/video", pricing: "Free" },
    { id: "med-unsplash", name: "Unsplash", category: "design", subcategory: "media", tags: ["Stock", "Photo"], url: "https://unsplash.com", desc: "Free photos", pricing: "Free" },
    { id: "med-21", name: "Jitter", category: "design", subcategory: "media", tags: ["Animation", "Motion"], url: "https://jitter.video", desc: "Motion design", pricing: "Freemium", studentOffer: "Free Pro Plan" },
    { id: "med-tinywow", name: "TinyWow", category: "design", subcategory: "media", tags: ["PDF", "Tools"], url: "https://tinywow.com", desc: "PDF & video tools", pricing: "Free" },
    { id: "med-remove", name: "Remove.bg", category: "design", subcategory: "media", tags: ["Editor", "Background"], url: "https://remove.bg", desc: "Remove backgrounds", pricing: "Freemium" },
    { id: "med-lottie", name: "LottieFiles", category: "design", subcategory: "media", tags: ["Animation", "JSON"], url: "https://lottiefiles.com", desc: "Free animations", pricing: "Freemium" },
    { id: "des-rive", name: "Rive", category: "design", subcategory: "media", tags: ["Animation", "Interactive"], url: "https://rive.app", desc: "Interactive motion graphics", pricing: "Freemium" },
    { id: "des-reactbits", name: "React Bits", category: "design", subcategory: "media", tags: ["React", "Animation"], url: "https://reactbits.dev", desc: "Animated React components", pricing: "Free", isHot: true },
    { id: "des-vantajs", name: "Vanta.js", category: "design", subcategory: "media", tags: ["Effects", "3D"], url: "https://www.vantajs.com", desc: "Animated 3D backgrounds", pricing: "Free", isHot: true },

    // Entertainment & News (Merged into Design/Media or kept separate? User had Design & Media. I will put News into Public APIs -> or just leave it out? The user had a strict list. 
    // Wait, the user's list did NOT have "Entertainment". "Tech News" was in "Entertainment" before. Grok tag has "News". 
    // I will try to fit them. "Tech News" -> "Learn & Study" (Docs & Guides?) or "Public Attributes"?
    // The user's list seems improving. I will put them in "Learn & Study" > "News" or similar if they are valuable.
    // Actually, "Tech News" fits "Learn & Study" -> "News" (new subcat).
    { id: "news-mit", name: "MIT Technology Review", category: "learn", subcategory: "news", tags: ["Tech", "Journalism"], url: "https://technologyreview.com", desc: "Authoritative tech journalism", pricing: "Freemium" },
    { id: "news-ieee", name: "IEEE Spectrum", category: "learn", subcategory: "news", tags: ["Engineering", "Science"], url: "https://spectrum.ieee.org", desc: "Engineering & science news", pricing: "Free" },
    { id: "ent-verge", name: "The Verge", category: "learn", subcategory: "news", tags: ["Tech", "Reviews"], url: "https://theverge.com", desc: "Tech news & reviews", pricing: "Free" },
    { id: "news-hn", name: "Hacker News", category: "learn", subcategory: "news", tags: ["Community", "Tech"], url: "https://news.ycombinator.com", desc: "Tech community", pricing: "Free" },
    { id: "news-ars", name: "Ars Technica", category: "learn", subcategory: "news", tags: ["Analysis", "Tech"], url: "https://arstechnica.com", desc: "Tech analysis", pricing: "Free" },
    { id: "news-wired", name: "WIRED", category: "learn", subcategory: "news", tags: ["Culture", "Tech"], url: "https://wired.com", desc: "Tech & culture", pricing: "Freemium" },
    { id: "ent-lex", name: "Lex Fridman Podcast", category: "learn", subcategory: "news", tags: ["Podcast", "AI"], url: "https://lexfridman.com", desc: "Conversations on AI & tech", pricing: "Free" },
    { id: "ent-sedaily", name: "Software Engineering Daily", category: "learn", subcategory: "news", tags: ["Podcast", "Engineering"], url: "https://softwareengineeringdaily.com", desc: "Daily technical interviews", pricing: "Free" },
    { id: "dev-daily", name: "Daily.dev", category: "learn", subcategory: "news", tags: ["News", "Dev"], url: "https://daily.dev", desc: "Developer news", pricing: "Free" },


    // ===== PUBLIC APIs =====
    // Test & Fun
    { id: "api-jsonplaceholder", name: "JSONPlaceholder", category: "public-apis", subcategory: "test", tags: ["Test API", "Learning"], url: "https://jsonplaceholder.typicode.com", desc: "Fake REST API for testing", pricing: "Free", isHot: true },
    { id: "api-pokeapi", name: "PokéAPI", category: "public-apis", subcategory: "fun", tags: ["Game Data", "Fun API"], url: "https://pokeapi.co", desc: "Pokémon data encyclopedia", pricing: "Free", isHot: true },
    { id: "api-httpcat", name: "HTTP Cat", category: "public-apis", subcategory: "fun", tags: ["Fun API", "Cats"], url: "https://http.cat", desc: "HTTP status codes as cats", pricing: "Free" },

    // Data & Weather
    { id: "api-openweather", name: "OpenWeatherMap", category: "public-apis", subcategory: "weather", tags: ["Weather", "Maps"], url: "https://openweathermap.org/api", desc: "Most popular weather API", pricing: "Freemium", isHot: true },
    { id: "api-nasa", name: "NASA API", category: "public-apis", subcategory: "data", tags: ["Space", "Data"], url: "https://api.nasa.gov", desc: "Space data & rover images", pricing: "Free", isHot: true },
    { id: "api-wikipedia", name: "Wikipedia API", category: "public-apis", subcategory: "data", tags: ["Knowledge", "Research"], url: "https://www.mediawiki.org/wiki/API", desc: "World's encyclopedia", pricing: "Free", isHot: true },

    // Finance
    { id: "api-coingecko", name: "CoinGecko", category: "public-apis", subcategory: "finance", tags: ["Crypto", "Finance"], url: "https://www.coingecko.com/en/api", desc: "Crypto prices & market data", pricing: "Free", isHot: true },
    { id: "api-stripe", name: "Stripe API", category: "public-apis", subcategory: "finance", tags: ["Payments", "Finance"], url: "https://stripe.com/docs/api", desc: "Payment processing API", pricing: "Freemium" },
    { id: "api-exchangerate", name: "ExchangeRate-API", category: "public-apis", subcategory: "finance", tags: ["Currency", "Finance"], url: "https://www.exchangerate-api.com", desc: "Currency conversion", pricing: "Free" },
    { id: "api-alphavantage", name: "Alpha Vantage", category: "public-apis", subcategory: "finance", tags: ["Stocks", "Finance"], url: "https://www.alphavantage.co", desc: "Stock market data", pricing: "Free" },

    // Security
    { id: "api-virustotal", name: "VirusTotal", category: "public-apis", subcategory: "security", tags: ["Security", "Scanning"], url: "https://developers.virustotal.com", desc: "Scan files/URLs for threats", pricing: "Freemium", isHot: true },
    { id: "api-hibp", name: "HaveIBeenPwned", category: "public-apis", subcategory: "security", tags: ["Security", "Breach"], url: "https://haveibeenpwned.com/API/v3", desc: "Check password breaches", pricing: "Freemium", isHot: true },
    { id: "api-shodan", name: "Shodan", category: "public-apis", subcategory: "security", tags: ["IoT", "Search"], url: "https://developer.shodan.io", desc: "Internet device search", pricing: "Freemium" },


    // Media APIs
    { id: "api-unsplash", name: "Unsplash API", category: "public-apis", subcategory: "media-api", tags: ["Images", "Design"], url: "https://unsplash.com/developers", desc: "Free high-res photos", pricing: "Free", isHot: true },
    { id: "api-spotify", name: "Spotify API", category: "public-apis", subcategory: "media-api", tags: ["Music", "Media"], url: "https://developer.spotify.com", desc: "Music catalog & playlists", pricing: "Free", isHot: true },
    { id: "api-giphy", name: "Giphy API", category: "public-apis", subcategory: "media-api", tags: ["GIFs", "Media"], url: "https://developers.giphy.com", desc: "Search & integrate GIFs", pricing: "Free", isHot: true },
    { id: "api-youtube", name: "YouTube API", category: "public-apis", subcategory: "media-api", tags: ["Video", "Google"], url: "https://developers.google.com/youtube", desc: "YouTube video data", pricing: "Free", isHot: true },
    { id: "api-pexels", name: "Pexels API", category: "public-apis", subcategory: "media-api", tags: ["Stock", "Photo"], url: "https://www.pexels.com/api", desc: "Free stock photos/videos", pricing: "Free" },

    // AI APIs
    { id: "dev-6", name: "GroqCloud", category: "public-apis", subcategory: "test", tags: ["API", "Fast Inference"], url: "https://console.groq.com", desc: "Fast AI inference API", pricing: "Freemium", studentOffer: "Free Tier Credits" },
    { id: "ai-openai", name: "OpenAI API", category: "public-apis", subcategory: "test", tags: ["API", "LLM", "Image"], url: "https://platform.openai.com", desc: "GPT & DALL-E APIs", pricing: "Freemium" },
    { id: "ai-hugging", name: "Hugging Face", category: "public-apis", subcategory: "test", tags: ["Models", "API", "Open Source"], url: "https://huggingface.co", desc: "ML models & datasets", pricing: "Freemium" },
    { id: "ai-replicate", name: "Replicate", category: "public-apis", subcategory: "test", tags: ["API", "Models"], url: "https://replicate.com", desc: "Run ML models via API", pricing: "Freemium" },
    { id: "ai-assembly", name: "AssemblyAI", category: "public-apis", subcategory: "test", tags: ["Speech", "API"], url: "https://www.assemblyai.com", desc: "Speech-to-text API", pricing: "Freemium" },
    { id: "ai-whisperx", name: "WhisperX", category: "public-apis", subcategory: "test", tags: ["Speech", "Open Source"], url: "https://github.com/m-bain/whisperX", desc: "Fast speech recognition", pricing: "Free" },

    // Social APIs
    { id: "api-discord", name: "Discord API", category: "public-apis", subcategory: "test", tags: ["Bots", "Chat"], url: "https://discord.com/developers", desc: "Build Discord bots", pricing: "Free", isHot: true },
    { id: "api-telegram", name: "Telegram Bot API", category: "public-apis", subcategory: "test", tags: ["Bots", "Chat"], url: "https://core.telegram.org/bots/api", desc: "Create Telegram bots", pricing: "Free", isHot: true },
    { id: "api-reddit", name: "Reddit API", category: "public-apis", subcategory: "test", tags: ["Social", "Data"], url: "https://www.reddit.com/dev/api", desc: "Reddit posts & comments", pricing: "Free" },


    // Other APIs
    { id: "api-jikan", name: "Jikan", category: "public-apis", subcategory: "fun", tags: ["Anime", "Data"], url: "https://jikan.moe", desc: "MyAnimeList unofficial API", pricing: "Free", isHot: true },
    { id: "api-anilist", name: "AniList", category: "public-apis", subcategory: "fun", tags: ["Anime", "Tracking"], url: "https://anilist.gitbook.io/anilist-apiv2-docs", desc: "Modern anime/manga API", pricing: "Free" },
    { id: "api-tracemoe", name: "Trace.moe", category: "public-apis", subcategory: "fun", tags: ["Anime", "Search"], url: "https://trace.moe", desc: "Find anime from screenshot", pricing: "Free" },
    { id: "api-imgflip", name: "Imgflip", category: "public-apis", subcategory: "fun", tags: ["Meme", "Generator"], url: "https://imgflip.com/api", desc: "Meme generator API", pricing: "Free" },
    { id: "api-chucknorris", name: "ChuckNorris.io", category: "public-apis", subcategory: "fun", tags: ["Jokes", "Fun"], url: "https://api.chucknorris.io", desc: "Chuck Norris jokes", pricing: "Free" },
    { id: "api-dadjoke", name: "icanhazdadjoke", category: "public-apis", subcategory: "fun", tags: ["Jokes", "Fun"], url: "https://icanhazdadjoke.com/api", desc: "Best dad jokes API", pricing: "Free" },
    { id: "api-locationiq", name: "LocationIQ", category: "public-apis", subcategory: "weather", tags: ["Maps", "Geo"], url: "https://locationiq.com", desc: "Geocoding & maps", pricing: "Freemium" },
    { id: "api-nagerdate", name: "Nager.Date", category: "public-apis", subcategory: "data", tags: ["Calendar", "Holidays"], url: "https://date.nager.at", desc: "Public holidays 90+ countries", pricing: "Free" },
    { id: "api-spacex", name: "SpaceX API", category: "public-apis", subcategory: "data", tags: ["Space", "Launches"], url: "https://github.com/r-spacex/SpaceX-API", desc: "SpaceX launches & rockets", pricing: "Free" },
    { id: "api-googlebooks", name: "Google Books API", category: "public-apis", subcategory: "data", tags: ["Books", "Search"], url: "https://developers.google.com/books", desc: "Book search & metadata", pricing: "Free" },
    { id: "api-openlibrary", name: "Open Library", category: "public-apis", subcategory: "data", tags: ["Books", "Library"], url: "https://openlibrary.org/developers/api", desc: "Free book database", pricing: "Free" },
    { id: "api-libretranslate", name: "LibreTranslate", category: "public-apis", subcategory: "data", tags: ["Translation", "NLP"], url: "https://libretranslate.com", desc: "Open-source translation", pricing: "Free" },
    { id: "api-dictionary", name: "Free Dictionary", category: "public-apis", subcategory: "data", tags: ["Words", "Definitions"], url: "https://dictionaryapi.dev", desc: "Word definitions & phonetics", pricing: "Free" },
    { id: "api-randomuser", name: "RandomUser", category: "public-apis", subcategory: "test", tags: ["Data", "Mock"], url: "https://randomuser.me", desc: "Generate fake user data", pricing: "Free" },
    { id: "api-fakerapi", name: "FakerAPI", category: "public-apis", subcategory: "test", tags: ["Data", "Mock"], url: "https://fakerapi.it", desc: "Generate any fake data", pricing: "Free" },
    { id: "api-httpbin", name: "httpbin", category: "public-apis", subcategory: "test", tags: ["Test", "HTTP"], url: "https://httpbin.org", desc: "Test HTTP requests", pricing: "Free" },

    // ===== ADDITIONAL AI CHAT =====
    { id: "ai-poe", name: "Poe", category: "ai-chat", subcategory: "general", tags: ["Chat", "Multi-Model"], url: "https://poe.com", desc: "Many models in one place", pricing: "Freemium" },
    { id: "ai-huggingchat", name: "HuggingChat", category: "ai-chat", subcategory: "general", tags: ["Chat", "Open Source"], url: "https://huggingface.co/chat", desc: "Open source models", pricing: "Free" },
    { id: "ai-openrouter", name: "OpenRouter Chat", category: "ai-chat", subcategory: "general", tags: ["Chat", "Multi-Model"], url: "https://openrouter.ai", desc: "Try many models", pricing: "Freemium" },
    { id: "ai-youchat", name: "YouChat", category: "ai-chat", subcategory: "search", tags: ["Chat", "Search"], url: "https://you.com", desc: "Chat plus search", pricing: "Free" },
    { id: "ai-phind", name: "Phind", category: "ai-chat", subcategory: "search", tags: ["Coding", "Search"], url: "https://phind.com", desc: "Chat for coding questions", pricing: "Free", isHot: true },

    // ===== ADDITIONAL CREATE WITH AI =====
    // Image
    { id: "ai-playground", name: "Playground AI", category: "create-ai", subcategory: "image", tags: ["Image", "Free Credits"], url: "https://playground.com", desc: "Image maker with free credits", pricing: "Freemium" },
    { id: "ai-magespace", name: "Mage Space", category: "create-ai", subcategory: "image", tags: ["Image", "NSFW-Free"], url: "https://mage.space", desc: "Image maker free tier", pricing: "Freemium" },
    { id: "ai-artbreeder", name: "Artbreeder", category: "create-ai", subcategory: "image", tags: ["Image", "Mixing"], url: "https://artbreeder.com", desc: "Image mixing & breeding", pricing: "Free" },
    { id: "ai-nightcafe", name: "NightCafe", category: "create-ai", subcategory: "image", tags: ["Image", "Art"], url: "https://creator.nightcafe.studio", desc: "AI art with daily credits", pricing: "Daily Credits" },
    { id: "ai-craiyon", name: "Craiyon", category: "create-ai", subcategory: "image", tags: ["Image", "Simple"], url: "https://craiyon.com", desc: "Free image generation", pricing: "Free" },

    // Video
    { id: "ai-haiper", name: "Haiper", category: "create-ai", subcategory: "video", tags: ["Video", "Credits"], url: "https://haiper.ai", desc: "Video gen with free credits", pricing: "Freemium" },
    { id: "ai-kaiber", name: "Kaiber", category: "create-ai", subcategory: "video", tags: ["Video", "Creative"], url: "https://kaiber.ai", desc: "Creative video gen", pricing: "Free Trial" },
    { id: "ai-invideo", name: "InVideo AI", category: "create-ai", subcategory: "video", tags: ["Video", "Editor"], url: "https://invideo.io", desc: "AI video maker", pricing: "Freemium" },
    { id: "med-kapwing", name: "Kapwing", category: "create-ai", subcategory: "video", tags: ["Video", "Editor"], url: "https://kapwing.com", desc: "Online video editor", pricing: "Free" },
    { id: "med-veed", name: "Veed", category: "create-ai", subcategory: "video", tags: ["Video", "Editor"], url: "https://veed.io", desc: "Video editing platform", pricing: "Freemium" },

    // Music & Voice
    { id: "ai-boomy", name: "Boomy", category: "create-ai", subcategory: "music", tags: ["Music", "Simple"], url: "https://boomy.com", desc: "Create music in seconds", pricing: "Free" },
    { id: "ai-soundraw", name: "Soundraw", category: "create-ai", subcategory: "music", tags: ["Music", "Royalty-Free"], url: "https://soundraw.io", desc: "Royalty-free music gen", pricing: "Free Trial" },
    { id: "ai-murf", name: "Murf", category: "create-ai", subcategory: "voice", tags: ["Voice", "TTS"], url: "https://murf.ai", desc: "AI voice generator", pricing: "Free Trial" },
    { id: "ai-coqui", name: "Coqui TTS", category: "create-ai", subcategory: "voice", tags: ["Voice", "Open Source"], url: "https://coqui.ai", desc: "Open source TTS", pricing: "Free" },
    { id: "ai-openvoice", name: "OpenVoice", category: "create-ai", subcategory: "voice", tags: ["Voice", "Cloning"], url: "https://github.com/myshell-ai/OpenVoice", desc: "Open source voice cloning", pricing: "Free" },

    // App Builder
    { id: "ai-bolt", name: "Bolt.new", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "AI"], url: "https://bolt.new", desc: "AI app builder by StackBlitz", pricing: "Freemium", isHot: true },
    { id: "ai-glide", name: "Glide", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "No-Code"], url: "https://glideapps.com", desc: "No-code app builder", pricing: "Freemium" },
    { id: "ai-softr", name: "Softr", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "No-Code"], url: "https://softr.io", desc: "Build apps from Airtable", pricing: "Freemium" },
    { id: "ai-bubble", name: "Bubble", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "No-Code"], url: "https://bubble.io", desc: "Visual programming platform", pricing: "Free Trial" },
    { id: "ai-appgyver", name: "AppGyver", category: "create-ai", subcategory: "app-builder", tags: ["App Builder", "No-Code"], url: "https://appgyver.com", desc: "Free no-code platform", pricing: "Free" },

    // ===== ADDITIONAL CODE & BUILD =====
    // Code Helper
    { id: "ai-codeium", name: "Codeium", category: "code-build", subcategory: "code-helper", tags: ["Coding", "Free AI"], url: "https://codeium.com", desc: "Free AI coding assistant", pricing: "Free", isHot: true },
    { id: "ai-amazonq", name: "Amazon Q Developer", category: "code-build", subcategory: "code-helper", tags: ["Coding", "AWS"], url: "https://aws.amazon.com/q/developer", desc: "AWS coding assistant", pricing: "Freemium" },
    { id: "ai-continue", name: "Continue.dev", category: "code-build", subcategory: "code-helper", tags: ["Coding", "Local AI"], url: "https://continue.dev", desc: "Local AI coding assistant", pricing: "Free" },
    { id: "ai-cody", name: "Sourcegraph Cody", category: "code-build", subcategory: "code-helper", tags: ["Coding", "Search"], url: "https://sourcegraph.com/cody", desc: "AI code search & assist", pricing: "Freemium" },

    // Code Editor
    { id: "dev-vscode", name: "VS Code", category: "code-build", subcategory: "code-editor", tags: ["Editor", "Microsoft"], url: "https://code.visualstudio.com", desc: "Popular free editor", pricing: "Free", isHot: true },
    { id: "dev-gitpod", name: "Gitpod", category: "code-build", subcategory: "code-editor", tags: ["Cloud IDE", "Git"], url: "https://gitpod.io", desc: "Cloud dev environment", pricing: "Freemium" },
    { id: "dev-eclipse", name: "Eclipse", category: "code-build", subcategory: "code-editor", tags: ["IDE", "Java"], url: "https://eclipse.org", desc: "Java IDE", pricing: "Free" },
    { id: "dev-intellij", name: "IntelliJ Community", category: "code-build", subcategory: "code-editor", tags: ["IDE", "JetBrains"], url: "https://jetbrains.com/idea", desc: "Powerful Java IDE", pricing: "Free" },

    // Testing
    { id: "dev-cypress", name: "Cypress", category: "code-build", subcategory: "testing", tags: ["Testing", "E2E"], url: "https://cypress.io", desc: "E2E testing framework", pricing: "Free" },
    { id: "dev-jest", name: "Jest", category: "code-build", subcategory: "testing", tags: ["Testing", "Unit"], url: "https://jestjs.io", desc: "JavaScript testing", pricing: "Free" },
    { id: "dev-lighthouse", name: "Lighthouse", category: "code-build", subcategory: "testing", tags: ["Web", "Performance"], url: "https://developer.chrome.com/docs/lighthouse", desc: "Web performance testing", pricing: "Free" },
    { id: "dev-swagger", name: "Swagger Editor", category: "code-build", subcategory: "testing", tags: ["API", "Docs"], url: "https://editor.swagger.io", desc: "API documentation editor", pricing: "Free" },
    { id: "dev-mockoon", name: "Mockoon", category: "code-build", subcategory: "testing", tags: ["API", "Mock"], url: "https://mockoon.com", desc: "API mock server", pricing: "Free" },

    // ===== ADDITIONAL DEPLOY & STORE =====
    // Hosting
    { id: "dev-surge", name: "Surge", category: "deploy", subcategory: "hosting", tags: ["Hosting", "Static"], url: "https://surge.sh", desc: "Static web publishing", pricing: "Free" },
    { id: "dev-firebasehost", name: "Firebase Hosting", category: "deploy", subcategory: "hosting", tags: ["Hosting", "Google"], url: "https://firebase.google.com/products/hosting", desc: "Fast web hosting", pricing: "Freemium" },
    { id: "dev-deno", name: "Deno Deploy", category: "deploy", subcategory: "hosting", tags: ["Edge", "Deno"], url: "https://deno.com/deploy", desc: "Edge hosting for Deno", pricing: "Freemium" },
    { id: "dev-glitch", name: "Glitch", category: "deploy", subcategory: "hosting", tags: ["Hosting", "Social"], url: "https://glitch.com", desc: "Build & host apps", pricing: "Free" },

    // Cloud
    { id: "dev-aws", name: "AWS Free Tier", category: "deploy", subcategory: "cloud", tags: ["Cloud", "AWS"], url: "https://aws.amazon.com/free", desc: "12 months free cloud", pricing: "Free Trial" },
    { id: "dev-gcp", name: "Google Cloud Free", category: "deploy", subcategory: "cloud", tags: ["Cloud", "Google"], url: "https://cloud.google.com/free", desc: "Free tier & credits", pricing: "Free Trial" },
    { id: "dev-oracle", name: "Oracle Cloud Free", category: "deploy", subcategory: "cloud", tags: ["Cloud", "Always Free"], url: "https://oracle.com/cloud/free", desc: "Always free resources", pricing: "Free" },

    // Database
    { id: "dev-elephantsql", name: "ElephantSQL", category: "deploy", subcategory: "database", tags: ["Database", "Postgres"], url: "https://elephantsql.com", desc: "PostgreSQL as a service", pricing: "Freemium" },
    { id: "dev-rediscloud", name: "Redis Cloud", category: "deploy", subcategory: "database", tags: ["Database", "Redis"], url: "https://redis.com/try-free", desc: "Managed Redis", pricing: "Freemium" },
    { id: "dev-cockroach", name: "CockroachDB", category: "deploy", subcategory: "database", tags: ["Database", "SQL"], url: "https://cockroachlabs.com", desc: "Distributed SQL", pricing: "Freemium" },
    { id: "dev-fauna", name: "Fauna", category: "deploy", subcategory: "database", tags: ["Database", "Serverless"], url: "https://fauna.com", desc: "Serverless database", pricing: "Freemium" },
    { id: "dev-sqlitecloud", name: "SQLite Cloud", category: "deploy", subcategory: "database", tags: ["Database", "SQLite"], url: "https://sqlitecloud.io", desc: "SQLite in the cloud", pricing: "Freemium" },

    // Auth
    { id: "dev-authjs", name: "Auth.js", category: "deploy", subcategory: "auth", tags: ["Auth", "Open Source"], url: "https://authjs.dev", desc: "Open source auth", pricing: "Free" },
    { id: "dev-keycloak", name: "Keycloak", category: "deploy", subcategory: "auth", tags: ["Auth", "Open Source"], url: "https://keycloak.org", desc: "Identity management", pricing: "Free" },

    // ===== ADDITIONAL AUTOMATION =====
    // No Code
    { id: "auto-ifttt", name: "IFTTT", category: "automation", subcategory: "no-code", tags: ["Automation", "Simple"], url: "https://ifttt.com", desc: "If this then that", pricing: "Freemium" },
    { id: "auto-bardeen", name: "Bardeen", category: "automation", subcategory: "no-code", tags: ["Browser", "Automation"], url: "https://bardeen.ai", desc: "Browser automation", pricing: "Freemium" },
    { id: "auto-magical", name: "Magical", category: "automation", subcategory: "no-code", tags: ["Text", "Automation"], url: "https://getmagical.com", desc: "Text expansion & automation", pricing: "Free" },

    // Developer
    { id: "auto-temporal", name: "Temporal", category: "automation", subcategory: "developer", tags: ["Workflows", "Durable"], url: "https://temporal.io", desc: "Durable workflow engine", pricing: "Freemium" },
    { id: "auto-airbyte", name: "Airbyte", category: "automation", subcategory: "developer", tags: ["Data Sync", "Open Source"], url: "https://airbyte.com", desc: "Data integration platform", pricing: "Free" },
    { id: "auto-airflow", name: "Apache Airflow", category: "automation", subcategory: "developer", tags: ["Workflows", "Data"], url: "https://airflow.apache.org", desc: "Workflow orchestration", pricing: "Free" },
    { id: "auto-dagster", name: "Dagster", category: "automation", subcategory: "developer", tags: ["Data", "Pipelines"], url: "https://dagster.io", desc: "Data orchestration", pricing: "Freemium" },

    // Agents
    { id: "auto-autogen", name: "AutoGen Studio", category: "automation", subcategory: "agents", tags: ["Agents", "Microsoft"], url: "https://github.com/microsoft/autogen", desc: "Multi-agent framework", pricing: "Free" },
    { id: "auto-crewai", name: "CrewAI", category: "automation", subcategory: "agents", tags: ["Agents", "Python"], url: "https://crewai.com", desc: "AI agent orchestration", pricing: "Free" },
    { id: "auto-superagi", name: "SuperAGI", category: "automation", subcategory: "agents", tags: ["Agents", "Open Source"], url: "https://superagi.com", desc: "Autonomous AI agents", pricing: "Free" },

    // ===== ADDITIONAL LEARN & STUDY =====
    // Practice
    { id: "edu-codewars", name: "Codewars", category: "learn", subcategory: "practice", tags: ["Coding", "Kata"], url: "https://codewars.com", desc: "Code challenges & kata", pricing: "Free" },
    { id: "edu-exercism", name: "Exercism", category: "learn", subcategory: "practice", tags: ["Practice", "Mentored"], url: "https://exercism.org", desc: "Free code practice with mentors", pricing: "Free", isHot: true },
    { id: "edu-euler", name: "Project Euler", category: "learn", subcategory: "practice", tags: ["Math", "Coding"], url: "https://projecteuler.net", desc: "Math programming challenges", pricing: "Free" },

    // Courses
    { id: "edu-udacity", name: "Udacity Free", category: "learn", subcategory: "courses", tags: ["Courses", "Tech"], url: "https://udacity.com/courses/all", desc: "Free tech courses", pricing: "Free" },
    { id: "edu-skillshop", name: "Google Skillshop", category: "learn", subcategory: "courses", tags: ["Google", "Certs"], url: "https://skillshop.withgoogle.com", desc: "Google certifications", pricing: "Free" },
    { id: "edu-ibm", name: "IBM SkillsBuild", category: "learn", subcategory: "courses", tags: ["IBM", "Tech"], url: "https://skillsbuild.org", desc: "Free tech education", pricing: "Free" },
    { id: "edu-meta", name: "Meta Blueprint", category: "learn", subcategory: "courses", tags: ["Meta", "Marketing"], url: "https://facebook.com/business/learn", desc: "Meta certifications", pricing: "Free" },
    { id: "edu-awsskill", name: "AWS Skill Builder", category: "learn", subcategory: "courses", tags: ["AWS", "Cloud"], url: "https://explore.skillbuilder.aws", desc: "AWS training", pricing: "Freemium" },

    // Docs
    { id: "edu-readthedocs", name: "ReadTheDocs", category: "learn", subcategory: "docs", tags: ["Docs", "Hosting"], url: "https://readthedocs.org", desc: "Documentation hosting", pricing: "Free" },
    { id: "edu-gitbook", name: "GitBook Community", category: "learn", subcategory: "docs", tags: ["Docs", "Collab"], url: "https://gitbook.com", desc: "Documentation platform", pricing: "Free" },
    { id: "edu-awesome", name: "Awesome Lists", category: "learn", subcategory: "docs", tags: ["Curated", "GitHub"], url: "https://github.com/sindresorhus/awesome", desc: "Curated resource lists", pricing: "Free" },

    // STEM
    { id: "edu-brilliant", name: "Brilliant", category: "learn", subcategory: "stem", tags: ["Math", "Interactive"], url: "https://brilliant.org", desc: "Interactive STEM learning", pricing: "Freemium" },
    { id: "edu-geogebra", name: "GeoGebra", category: "learn", subcategory: "stem", tags: ["Math", "Visual"], url: "https://geogebra.org", desc: "Math visualization", pricing: "Free" },
    { id: "edu-phet", name: "PhET Simulations", category: "learn", subcategory: "stem", tags: ["Science", "Interactive"], url: "https://phet.colorado.edu", desc: "Science simulations", pricing: "Free" },

    // Research
    { id: "edu-semantic", name: "Semantic Scholar", category: "learn", subcategory: "research", tags: ["AI Search", "Papers"], url: "https://semanticscholar.org", desc: "AI-powered paper search", pricing: "Free", isHot: true },
    { id: "edu-openAlex", name: "OpenAlex", category: "learn", subcategory: "research", tags: ["Open Data", "Research"], url: "https://openalex.org", desc: "Open scholarly data", pricing: "Free" },
    { id: "edu-core", name: "CORE", category: "learn", subcategory: "research", tags: ["Papers", "Open Access"], url: "https://core.ac.uk", desc: "Open access papers", pricing: "Free" },
    { id: "edu-arxiv", name: "arXiv", category: "learn", subcategory: "research", tags: ["Papers", "Preprints"], url: "https://arxiv.org", desc: "Scientific preprints", pricing: "Free", isHot: true },

    // ===== ADDITIONAL WRITE BETTER =====
    // Grammar
    { id: "prod-slick", name: "Slick Write", category: "writing", subcategory: "grammar", tags: ["Grammar", "Analysis"], url: "https://slickwrite.com", desc: "Grammar & style checker", pricing: "Free" },
    { id: "prod-writer", name: "Writer.com", category: "writing", subcategory: "grammar", tags: ["Grammar", "Enterprise"], url: "https://writer.com", desc: "AI writing assistant", pricing: "Freemium" },

    // Rewrite & Essay
    { id: "prod-wordtune", name: "Wordtune", category: "writing", subcategory: "rewrite", tags: ["Rewrite", "AI"], url: "https://wordtune.com", desc: "AI rewriting tool", pricing: "Freemium" },
    { id: "prod-writesonic", name: "Writesonic", category: "writing", subcategory: "rewrite", tags: ["Writing", "AI"], url: "https://writesonic.com", desc: "AI writing platform", pricing: "Free Trial" },
    { id: "prod-rytr", name: "Rytr", category: "writing", subcategory: "rewrite", tags: ["Writing", "AI"], url: "https://rytr.me", desc: "AI writing assistant", pricing: "Freemium" },
    { id: "prod-jenni", name: "Jenni AI", category: "writing", subcategory: "essay", tags: ["Essay", "AI"], url: "https://jenni.ai", desc: "AI essay helper", pricing: "Freemium" },

    // Citations
    { id: "edu-citethis", name: "CiteThisForMe", category: "writing", subcategory: "citation", tags: ["Citations", "Auto"], url: "https://citethisforme.com", desc: "Auto citation generator", pricing: "Freemium" },
    { id: "edu-bibguru", name: "BibGuru", category: "writing", subcategory: "citation", tags: ["Citations", "Free"], url: "https://bibguru.com", desc: "Free citation maker", pricing: "Free" },

    // ===== ADDITIONAL DESIGN & MEDIA =====
    // UI
    { id: "des-penpot", name: "Penpot", category: "design", subcategory: "ui", tags: ["UI/UX", "Open Source"], url: "https://penpot.app", desc: "Open source design", pricing: "Free", isHot: true },
    { id: "des-whimsical", name: "Whimsical", category: "design", subcategory: "ui", tags: ["Diagrams", "Flowcharts"], url: "https://whimsical.com", desc: "Flowcharts & wireframes", pricing: "Freemium" },
    { id: "des-drawio", name: "Draw.io", category: "design", subcategory: "ui", tags: ["Diagrams", "Free"], url: "https://draw.io", desc: "Free diagramming", pricing: "Free" },

    // Graphics
    { id: "des-gimp", name: "GIMP", category: "design", subcategory: "graphics", tags: ["Editor", "Open Source"], url: "https://gimp.org", desc: "Free image editor", pricing: "Free" },
    { id: "des-krita", name: "Krita", category: "design", subcategory: "graphics", tags: ["Art", "Open Source"], url: "https://krita.org", desc: "Digital painting", pricing: "Free" },
    { id: "des-pixlr", name: "Pixlr", category: "design", subcategory: "graphics", tags: ["Editor", "Web"], url: "https://pixlr.com", desc: "Online image editor", pricing: "Freemium" },

    // 3D
    { id: "des-freecad", name: "FreeCAD", category: "design", subcategory: "3d", tags: ["CAD", "Open Source"], url: "https://freecad.org", desc: "Open source CAD", pricing: "Free" },
    { id: "des-openscad", name: "OpenSCAD", category: "design", subcategory: "3d", tags: ["CAD", "Scripting"], url: "https://openscad.org", desc: "Programmer's CAD", pricing: "Free" },
    { id: "des-clara", name: "Clara.io", category: "design", subcategory: "3d", tags: ["3D", "Web"], url: "https://clara.io", desc: "Online 3D modeling", pricing: "Freemium" },

    // Icons & Fonts
    { id: "des-tabler", name: "Tabler Icons", category: "design", subcategory: "fonts", tags: ["Icons", "Free"], url: "https://tablericons.com", desc: "Free SVG icons", pricing: "Free" },
    { id: "des-feather", name: "Feather Icons", category: "design", subcategory: "fonts", tags: ["Icons", "Minimal"], url: "https://feathericons.com", desc: "Simple icons", pricing: "Free" },
    { id: "des-dafont", name: "DaFont", category: "design", subcategory: "fonts", tags: ["Fonts", "Free"], url: "https://dafont.com", desc: "Free fonts", pricing: "Free" },

    // Media
    { id: "med-mixkit", name: "Mixkit", category: "design", subcategory: "media", tags: ["Video", "Free"], url: "https://mixkit.co", desc: "Free video assets", pricing: "Free" },
    { id: "med-coverr", name: "Coverr", category: "design", subcategory: "media", tags: ["Video", "Stock"], url: "https://coverr.co", desc: "Free stock videos", pricing: "Free" },
    { id: "med-pixabay", name: "Pixabay", category: "design", subcategory: "media", tags: ["Media", "Stock"], url: "https://pixabay.com", desc: "Free media library", pricing: "Free" },
    { id: "med-videvo", name: "Videvo", category: "design", subcategory: "media", tags: ["Video", "Stock"], url: "https://videvo.net", desc: "Free stock footage", pricing: "Freemium" },

    // ===== ADDITIONAL PUBLIC APIs =====
    // Test
    { id: "api-reqres", name: "ReqRes", category: "public-apis", subcategory: "test", tags: ["Test", "REST"], url: "https://reqres.in", desc: "Fake online REST API", pricing: "Free" },
    { id: "api-dummyjson", name: "DummyJSON", category: "public-apis", subcategory: "test", tags: ["Mock", "JSON"], url: "https://dummyjson.com", desc: "Fake JSON data", pricing: "Free" },
    { id: "api-postmanecho", name: "Postman Echo", category: "public-apis", subcategory: "test", tags: ["Test", "Echo"], url: "https://postman-echo.com", desc: "API testing endpoint", pricing: "Free" },

    // Data
    { id: "api-opendatasoft", name: "Open Data Soft", category: "public-apis", subcategory: "data", tags: ["Data", "Open"], url: "https://opendatasoft.com", desc: "Open data platform", pricing: "Freemium" },
    { id: "api-worldbank", name: "World Bank API", category: "public-apis", subcategory: "data", tags: ["Data", "Economic"], url: "https://data.worldbank.org", desc: "Economic indicators", pricing: "Free" },
    { id: "api-restcountries", name: "REST Countries", category: "public-apis", subcategory: "data", tags: ["Countries", "Data"], url: "https://restcountries.com", desc: "Country information", pricing: "Free" },

    // Weather & Maps
    { id: "api-openmeteo", name: "Open-Meteo", category: "public-apis", subcategory: "weather", tags: ["Weather", "Free"], url: "https://open-meteo.com", desc: "Free weather API", pricing: "Free", isHot: true },
    { id: "api-mapbox", name: "Mapbox", category: "public-apis", subcategory: "weather", tags: ["Maps", "Geo"], url: "https://mapbox.com", desc: "Custom maps", pricing: "Freemium" },
    { id: "api-here", name: "Here Maps", category: "public-apis", subcategory: "weather", tags: ["Maps", "Routing"], url: "https://developer.here.com", desc: "Location services", pricing: "Freemium" },

    // Finance
    { id: "api-finnhub", name: "Finnhub", category: "public-apis", subcategory: "finance", tags: ["Stocks", "Real-Time"], url: "https://finnhub.io", desc: "Stock market data", pricing: "Freemium" },
    { id: "api-twelvedata", name: "Twelve Data", category: "public-apis", subcategory: "finance", tags: ["Stocks", "Historical"], url: "https://twelvedata.com", desc: "Financial data API", pricing: "Freemium" },
    { id: "api-coinapi", name: "CoinAPI", category: "public-apis", subcategory: "finance", tags: ["Crypto", "Market"], url: "https://coinapi.io", desc: "Crypto market data", pricing: "Freemium" },

    // Security
    { id: "api-abuseipdb", name: "AbuseIPDB", category: "public-apis", subcategory: "security", tags: ["Security", "IP"], url: "https://abuseipdb.com", desc: "IP abuse reports", pricing: "Freemium" },
    { id: "api-urlscan", name: "URLScan", category: "public-apis", subcategory: "security", tags: ["Security", "Scan"], url: "https://urlscan.io", desc: "URL security scanner", pricing: "Freemium" },

    // Media APIs
    { id: "api-tmdb", name: "TMDB", category: "public-apis", subcategory: "media-api", tags: ["Movies", "TV"], url: "https://themoviedb.org/documentation/api", desc: "Movie & TV database", pricing: "Free", isHot: true },
    { id: "api-lastfm", name: "Last.fm API", category: "public-apis", subcategory: "media-api", tags: ["Music", "Scrobble"], url: "https://last.fm/api", desc: "Music data & scrobbling", pricing: "Free" },
    { id: "api-omdb", name: "OMDb", category: "public-apis", subcategory: "media-api", tags: ["Movies", "Data"], url: "https://omdbapi.com", desc: "Open movie database", pricing: "Free" },

    // ===== AUTOMATION & EMAIL =====
    // No-Code Automation
    { id: "auto-n8n", name: "n8n", category: "automation", subcategory: "no-code", tags: ["Workflow", "Open Source"], url: "https://n8n.io", desc: "Open source workflow automation", pricing: "Freemium", isHot: true },
    { id: "auto-make", name: "Make", category: "automation", subcategory: "no-code", tags: ["Automation", "Visual"], url: "https://make.com", desc: "Visual automation platform", pricing: "Freemium", isHot: true },
    { id: "auto-zapier", name: "Zapier", category: "automation", subcategory: "no-code", tags: ["Automation", "Apps"], url: "https://zapier.com", desc: "Connect your apps", pricing: "Freemium" },
    { id: "auto-ifttt", name: "IFTTT", category: "automation", subcategory: "no-code", tags: ["Automation", "Simple"], url: "https://ifttt.com", desc: "If this then that", pricing: "Freemium" },
    { id: "auto-bardeen", name: "Bardeen", category: "automation", subcategory: "no-code", tags: ["Browser", "AI"], url: "https://bardeen.ai", desc: "AI browser automation", pricing: "Freemium" },

    // Email & Forms
    { id: "auto-brevo", name: "Brevo", category: "automation", subcategory: "developer", tags: ["Email", "API", "Marketing"], url: "https://brevo.com", desc: "Email API & marketing (300/day free)", pricing: "Freemium", isHot: true },
    { id: "auto-web3forms", name: "Web3Forms", category: "automation", subcategory: "developer", tags: ["Forms", "API", "Simple"], url: "https://web3forms.com", desc: "Simple form API for static sites", pricing: "Freemium" },
    { id: "auto-resend", name: "Resend", category: "automation", subcategory: "developer", tags: ["Email", "API", "Developer"], url: "https://resend.com", desc: "Email API for developers", pricing: "Freemium" },
    { id: "auto-formspree", name: "Formspree", category: "automation", subcategory: "developer", tags: ["Forms", "Backend"], url: "https://formspree.io", desc: "Form backend for static sites", pricing: "Freemium" },

    // Developer Automation
    { id: "auto-temporal", name: "Temporal", category: "automation", subcategory: "developer", tags: ["Workflows", "Durable"], url: "https://temporal.io", desc: "Durable workflow engine", pricing: "Freemium" },
    { id: "auto-airbyte", name: "Airbyte", category: "automation", subcategory: "developer", tags: ["Data Sync", "Open Source"], url: "https://airbyte.com", desc: "Data integration platform", pricing: "Free" },
    { id: "auto-airflow", name: "Apache Airflow", category: "automation", subcategory: "developer", tags: ["Workflows", "Data"], url: "https://airflow.apache.org", desc: "Workflow orchestration", pricing: "Free" },

    // AI Agents
    { id: "auto-autogen", name: "AutoGen", category: "automation", subcategory: "agents", tags: ["Agents", "Microsoft"], url: "https://github.com/microsoft/autogen", desc: "Multi-agent framework", pricing: "Free" },
    { id: "auto-crewai", name: "CrewAI", category: "automation", subcategory: "agents", tags: ["Agents", "Python"], url: "https://crewai.com", desc: "AI agent orchestration", pricing: "Free" },
    { id: "auto-langchain", name: "LangChain", category: "automation", subcategory: "agents", tags: ["LLM", "Framework"], url: "https://langchain.com", desc: "LLM app framework", pricing: "Free", isHot: true },

];

export const prompts: Prompt[] = [
    {
        id: "essay-research",
        title: "Essay/Research Prompt",
        content: `FOLLOW THESE RULES:
• SHOULD use clear, simple language.
• SHOULD be spartan and informative.
• SHOULD use short, impactful sentences.
• SHOULD use active voice; avoid passive voice.
• SHOULD focus on practical, actionable insights.
• SHOULD use bullet point lists in social media posts.
• SHOULD use data and examples to support claims when possible.
• SHOULD use "you" and "your" to directly address the reader.
• SHOULD avoid using em dashes (—) anywhere in your response.
• SHOULD avoid constructions like "…not just this, but also this".
• SHOULD avoid metaphors and clichés.
• SHOULD avoid generalizations.
• SHOULD avoid common setup language in any sentence.
• SHOULD avoid output warnings or notes, just the output requested.
• SHOULD avoid unnecessary adjectives and adverbs.
• SHOULD avoid hashtags, semicolons, markdown, asterisks.

AVOID these words: can, may, just, that, very, really, literally, actually, probably, basically, could, maybe, delve, embark, esteemed, shed light, craft, crafting, imagine, remarkable, glimpse, unlock, discover, skyrocket, innovative, revolutionary, disruptive, utilize, illuminate, unveil, pivotal, intricate, elucidate, paradigm, however, harness, exciting, groundbreaking.`,
    },
    {
        id: "truth-verification",
        title: "Truth & Verification Prompt",
        content: `You SHOULD:
- SHOULD always tell the truth - never make up information, speculate, or guess.
- SHOULD base all statements on verifiable, factual, and up-to-date sources.
- SHOULD clearly cite the source of every claim in a transparent way.
- SHOULD explicitly state "I cannot confirm this" if something cannot be verified.
- SHOULD prioritize accuracy over speed - take the necessary steps to verify before responding.
- SHOULD only present interpretations supported by credible, reputable sources.
- SHOULD show how any numerical figure was calculated or sourced.

You MUST AVOID:
- AVOID fabricating facts, quotes, or data.
- AVOID using outdated or unreliable sources without clear warning.
- AVOID omitting source details for any claim.
- AVOID presenting speculation, rumor, or assumption as fact.
- AVOID answering if unsure without disclosing uncertainty.
- AVOID making confident statements without proof.
- AVOID prioritizing sounding good over being correct.

Failsafe: "Is every statement in my response verifiable, supported by real and credible sources, free of fabrication, and transparently cited? If not, revise until it is."`,
    },
    {
        id: "image-creation",
        title: "Hyperrealistic Portrait Prompt",
        content: `Create a hyperrealistic vertical portrait shot in 1080x1920 format, characterized by stark cinematic lighting and intense contrast. Captured with a slightly low, upward-facing angle that dramatizes the subject's jawline and neck, the composition evokes quiet dominance and sculptural elegance.

The background is a deep, saturated crimson red, creating a bold visual clash with the model's luminous skin and dark wardrobe. Lighting is tightly directional, casting warm golden highlights on one side of the face while plunging the other into velvety shadow.

The subject's expression is unreadable and cool-toned - eyes half-lidded, lips relaxed - suggesting detachment or quiet defiance. The model wears a heavy wool or felt overcoat, its texture richly defined. Minimal retouching preserves skin texture and slight imperfections, adding realism.

There are no props or accessories; the visual impact is created purely through light, shadow, color saturation, and posture - evoking high fashion, contemporary isolation, and hyper-modern masculinity.`,
    },
    {
        id: "prompt-optimizer",
        title: "AI Prompt Optimizer (4-D Method)",
        content: `You're a AI prompt optimizer. I transform vague requests into precise, effective prompts.

The 4-D Methodology:

1. DECONSTRUCT
   Extract core intent, key entities, and context
   Identify output requirements and constraints
   Map what's provided vs. what's missing

2. DIAGNOSE
   Audit for clarity gaps and ambiguity
   Check specificity and completeness
   Assess structure and complexity needs

3. DEVELOP
   Select optimal techniques based on request type:
   • Creative → Multi-perspective + tone emphasis
   • Technical → Constraint-based + precision focus
   • Educational → Few-shot examples + clear structure
   • Complex → Chain-of-thought + systematic frameworks
   Assign appropriate AI role/expertise

4. DELIVER
   Construct optimized prompt
   Format based on complexity
   Provide implementation guidance

Platform Notes:
• ChatGPT/GPT-4: Structured sections, conversation starters
• Claude: Longer context, reasoning frameworks
• Gemini: Creative tasks, comparative analysis`,
    },
    {
        id: "prompt-frameworks",
        title: "8 Essential Prompt Frameworks",
        content: `Master AI interaction with these 8 strategic frameworks:

1. TAG (Task, Action, Goal)
• Task: What needs to be done?
• Action: How should it be done?
• Goal: What is the end result?
Use for: Simple, clear instructions.

2. RTF (Role, Task, Format)
• Role: Who is the AI? (e.g., "Act as a lawyer")
• Task: What must it do?
• Format: How should the output look? (Table, list, JSON)
Use for: Specific formatting needs.

3. CARE (Context, Action, Result, Example)
• Context: Background info
• Action: The core task
• Result: Desired outcome
• Example: Show exactly what you want
Use for: Complex tasks needing high accuracy.

4. RACE (Role, Action, Context, Expectation)
• Role: AI's persona
• Action: The task
• Context: Background details
• Expectation: Success criteria/format
Use for: Comprehensive, structured requests.

5. CRISPE (Capacity, Insight, Statement, Personality, Experiment)
• Capacity/Role: AI's role
• Insight: Context/Background
• Statement: The request
• Personality: Tone/Style
• Experiment: "Give me multiple options"
Use for: Creative and experimental outputs.

6. AIDA (Attention, Interest, Desire, Action)
• Attention: Grab the reader's eye
• Interest: Keep them reading
• Desire: Make them want it
• Action: Tell them what to do
Use for: Marketing, copywriting, sales.

7. STAR (Situation, Task, Action, Result)
• Situation: The scenario
• Task: What needs solving
• Action: Steps to take
• Result: The outcome
Use for: Storytelling, interview prep, case studies.

8. BAB (Before, After, Bridge)
• Before: Current problem state
• After: Desired future state
• Bridge: How to get there
Use for: Persuasive writing, problem-solving strategy.`,
    },
    {
        id: "feynman-technique",
        title: "The Feynman Technique",
        content: `Act as an expert in your field with a talent for teaching. I want you to explain a complex concept to me using the Feynman Technique.
        
1. I will provide a concept or topic.
2. You should explain it in simple language, as if I were a 12-year-old.
3. Use analogies and metaphors to make it relatable.
4. If there are gaps in my understanding based on your explanation, I will ask clarifying questions.
5. Focus on the "why" and "how" rather than just jargon.`,
    },
    {
        id: "socratic-tutor",
        title: "Socratic Tutor",
        content: `Act as a Socratic Tutor. I want to learn about a specific topic, but DO NOT give me the answers directly.

Instead, ask me probing questions to test my knowledge and guide my understanding.
• Start by asking what topic I want to learn.
• Ask one question at a time.
• Wait for my response before proceeding.
• If I am wrong, gently guide me back with a simpler question or a hint.
• If I am right, acknowledge it and move to a deeper aspect of the topic.
• The goal is for me to construct the knowledge myself.`,
    },
    {
        id: "code-reviewer",
        title: "Senior Code Reviewer",
        content: `Act as a Senior Software Engineer and Code Reviewer. I will provide you with a snippet of code.

Your goal is to improve the quality, security, and performance of my code.
Please provide:
1. A summary of what the code does.
2. A list of potential bugs or edge cases.
3. Security vulnerabilities (if any).
4. Performance optimizations (Big O notation if applicable).
5. Refactored code that follows best practices (DRY, clean code).

Be constructive and explain *why* you are suggesting each change.`,
    },
    {
        id: "academic-summarizer",
        title: "Academic Summarizer",
        content: `Act as a Research Assistant. I will paste a long text, article, or research paper abstract.

Please provide:
1. A One-Sentence Summary (The "Elevator Pitch").
2. Key Arguments/Points (Bulleted list).
3. Important Terminology (Definitions of jargon used).
4. Conclusion/Implications.

Keep the tone objective and academic. Focus on extracting the core meaning without losing nuance.`,
    },
    {
        id: "writing-editor",
        title: "Professional Writing Editor",
        content: `Act as a Professional Editor. I will provide a draft of a text (essay, email, or post).

Please critique and improve my writing focusing on:
1. Clarity and Flow (Remove awkward phrasing).
2. Grammar and Punctuation.
3. Tone Consistency (Specify if I want formal, persuasive, or casual).
4. Vocabulary Enhancements (Suggest stronger verbs/adjectives).

Provide the corrected version followed by a list of key changes you made and why.`,
    },
];

export const promptVault = prompts[0];
