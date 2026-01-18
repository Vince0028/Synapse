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
    isHot?: boolean;
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
    // ===== AI POWERHOUSE =====
    // Chatbots
    { id: "ai-1", name: "ChatGPT", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://chatgpt.com", desc: "Conversational AI by OpenAI", pricing: "Freemium", isHot: true },
    { id: "ai-2", name: "Claude", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://claude.ai", desc: "AI assistant by Anthropic", pricing: "Freemium", isHot: true },
    { id: "ai-3", name: "Google Gemini", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://gemini.google.com", desc: "Google's multimodal AI", pricing: "Freemium", isHot: true },
    { id: "ai-38", name: "Perplexity", category: "ai", subcategory: "chatbot", tag: "Search", url: "https://perplexity.ai", desc: "AI search assistant", pricing: "Freemium", studentOffer: "Free Pro (GitHub Student Pack)", isHot: true },
    { id: "ai-grok", name: "Grok", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://grok.x.ai", desc: "xAI's conversational AI", pricing: "Free Trial", isHot: true },
    { id: "ai-qwen", name: "Qwen", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://qwen.ai", desc: "Alibaba's powerful AI chat", pricing: "Free", isHot: true },
    { id: "ai-mistral", name: "Mistral Chat", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://chat.mistral.ai", desc: "Open-weight model leader", pricing: "Freemium", isHot: true },
    { id: "ai-deepseek", name: "DeepSeek", category: "ai", subcategory: "chatbot", tag: "Reasoning", url: "https://chat.deepseek.com", desc: "Long-context reasoning", pricing: "Free", isHot: true },

    // Humanizers
    { id: "ai-7", name: "StealthWriter", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://stealthwriter.ai", desc: "Bypass AI detectors", pricing: "Freemium", isHot: true },
    { id: "ai-33", name: "Humanize AI", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://humanizeai.pro", desc: "Converts AI content into human-like writing", pricing: "Freemium" },
    { id: "ai-hum2", name: "AI Humanizer", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://aihumanizer.ai", desc: "Humanize AI text", pricing: "Freemium" },
    { id: "ai-undetect", name: "Undetectable AI", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://undetectable.ai", desc: "Make AI content undetectable", pricing: "Freemium", isHot: true },

    // AI Detectors
    { id: "ai-8", name: "GPTZero", category: "ai", subcategory: "detector", tag: "Detector", url: "https://gptzero.me", desc: "AI content detection", pricing: "Freemium", isHot: true },
    { id: "ai-originality", name: "Originality.ai", category: "ai", subcategory: "detector", tag: "Detector", url: "https://originality.ai", desc: "AI & plagiarism checker", pricing: "Free Trial" },

    // Coding Assistants
    { id: "ai-30", name: "GitHub Copilot", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://github.com/features/copilot", desc: "GitHub's AI code assistant", pricing: "Freemium", studentOffer: "Free with GitHub Student Pack", isHot: true },
    { id: "ai-31", name: "Blackbox AI", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://blackbox.ai", desc: "AI-powered coding helper", pricing: "Freemium" },
    { id: "ai-cursor", name: "Cursor", category: "ai", subcategory: "coding-ai", tag: "IDE", url: "https://cursor.sh", desc: "AI-first code editor", pricing: "Freemium", isHot: true },
    { id: "ai-tabnine", name: "Tabnine", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://tabnine.com", desc: "AI code assistant", pricing: "Freemium" },
    { id: "ai-windsurf", name: "Windsurf", category: "ai", subcategory: "coding-ai", tag: "IDE", url: "https://codeium.com/windsurf", desc: "Agentic IDE by Codeium", pricing: "Freemium", isHot: true },

    // AI APIs & Cloud
    { id: "dev-6", name: "GroqCloud", category: "ai", subcategory: "ai-api", tag: "API", url: "https://console.groq.com", desc: "Fast AI inference API", pricing: "Freemium", studentOffer: "Free Tier Credits" },
    { id: "ai-openai", name: "OpenAI API", category: "ai", subcategory: "ai-api", tag: "API", url: "https://platform.openai.com", desc: "GPT & DALL-E APIs", pricing: "Freemium" },
    { id: "ai-gemini-api", name: "Gemini API", category: "ai", subcategory: "ai-api", tag: "API", url: "https://ai.google.dev", desc: "Build with Gemini models", pricing: "Free" },
    { id: "ai-anthropic", name: "Anthropic API", category: "ai", subcategory: "ai-api", tag: "API", url: "https://console.anthropic.com", desc: "Claude API access", pricing: "Freemium" },
    { id: "ai-replicate", name: "Replicate", category: "ai", subcategory: "ai-api", tag: "API", url: "https://replicate.com", desc: "Run ML models via API", pricing: "Freemium" },
    { id: "ai-hugging", name: "Hugging Face", category: "ai", subcategory: "ai-api", tag: "Models", url: "https://huggingface.co", desc: "ML models & datasets", pricing: "Freemium" },
    { id: "ai-assembly", name: "AssemblyAI", category: "ai", subcategory: "ai-api", tag: "Speech API", url: "https://www.assemblyai.com", desc: "Speech-to-text API", pricing: "Freemium" },
    { id: "ai-whisperx", name: "WhisperX", category: "ai", subcategory: "ai-api", tag: "Speech", url: "https://github.com/m-bain/whisperX", desc: "Fast speech recognition", pricing: "Free" },

    // Generators (UI, Voice, Image, Video)
    { id: "ai-5", name: "v0.dev", category: "ai", subcategory: "generator", tag: "App Gen", url: "https://v0.dev", desc: "Generate UI with AI", pricing: "Freemium", isHot: true },
    { id: "ai-lovable", name: "Lovable", category: "ai", subcategory: "generator", tag: "App Gen", url: "https://lovable.dev", desc: "Full-stack app generator", pricing: "Freemium", isHot: true },
    { id: "ai-replit-gen", name: "Replit", category: "ai", subcategory: "generator", tag: "App Gen", url: "https://replit.com", desc: "Build apps with Replit Agent", pricing: "Freemium", isHot: true },
    { id: "ai-google-studio", name: "Google AI Studio", category: "ai", subcategory: "generator", tag: "Multimodal", url: "https://aistudio.google.com", desc: "Build with Gemini models", pricing: "Free" },
    { id: "tts-53", name: "ElevenLabs", category: "ai", subcategory: "generator", tag: "Voice", url: "https://elevenlabs.io", desc: "AI voice generator", pricing: "Freemium" },
    { id: "tts-54", name: "Resemble AI", category: "ai", subcategory: "generator", tag: "Voice", url: "https://resemble.ai", desc: "AI voice cloning", pricing: "Free Trial" },
    { id: "tts-56", name: "Play.ht", category: "ai", subcategory: "generator", tag: "Voice", url: "https://play.ht", desc: "Realistic text to speech", pricing: "Freemium" },
    { id: "ai-midjourney", name: "Midjourney", category: "ai", subcategory: "generator", tag: "Image", url: "https://midjourney.com", desc: "AI image generation", pricing: "Paid", isHot: true },
    { id: "ai-dalle", name: "DALL-E", category: "ai", subcategory: "generator", tag: "Image", url: "https://openai.com/dall-e-3", desc: "OpenAI image generator", pricing: "Freemium", isHot: true },
    { id: "ai-udio", name: "Udio", category: "ai", subcategory: "generator", tag: "Music", url: "https://udio.com", desc: "AI music creation", pricing: "Freemium" },
    { id: "ai-runway", name: "Runway", category: "ai", subcategory: "generator", tag: "Video", url: "https://runwayml.com", desc: "AI video generation", pricing: "Free Trial" },
    { id: "ai-stable", name: "Stable Diffusion", category: "ai", subcategory: "generator", tag: "Image", url: "https://stability.ai", desc: "Open source image gen", pricing: "Free" },
    { id: "ai-suno", name: "Suno AI", category: "ai", subcategory: "generator", tag: "Music", url: "https://suno.ai", desc: "AI music generation", pricing: "Freemium", isHot: true },
    { id: "ai-sora", name: "Sora", category: "ai", subcategory: "generator", tag: "Video", url: "https://openai.com/sora", desc: "OpenAI video generation", pricing: "Free Trial", isHot: true },
    { id: "ai-leonardo", name: "Leonardo.Ai", category: "ai", subcategory: "generator", tag: "Image", url: "https://leonardo.ai", desc: "Production quality assets", pricing: "Freemium", isHot: true },
    { id: "ai-ideogram", name: "Ideogram", category: "ai", subcategory: "generator", tag: "Image", url: "https://ideogram.ai", desc: "Text-accurate image gen", pricing: "Freemium" },
    { id: "ai-pika", name: "Pika", category: "ai", subcategory: "generator", tag: "Video", url: "https://pika.art", desc: "Text-to-video platform", pricing: "Freemium" },
    { id: "ai-luma", name: "Luma Dream Machine", category: "ai", subcategory: "generator", tag: "Video", url: "https://lumalabs.ai", desc: "High-quality video AI", pricing: "Freemium" },

    // Multi-function AI (also appears in Chatbots - these generate images/media too)
    { id: "ai-chatgpt-gen", name: "ChatGPT", category: "ai", subcategory: "generator", tag: "Image", url: "https://chatgpt.com", desc: "GPT-4 + DALL-E image gen", pricing: "Freemium", isHot: true },
    { id: "ai-gemini-gen", name: "Google Gemini", category: "ai", subcategory: "generator", tag: "Image", url: "https://gemini.google.com", desc: "Gemini image generation", pricing: "Freemium", isHot: true },
    { id: "ai-grok-gen", name: "Grok", category: "ai", subcategory: "generator", tag: "Image", url: "https://grok.x.ai", desc: "Grok image generation", pricing: "Free Trial", isHot: true },

    // ===== DEV ECOSYSTEM =====
    // Hosting & Cloud
    { id: "dev-2", name: "Vercel", category: "dev", subcategory: "hosting", tag: "Hosting", url: "https://vercel.com", desc: "Develop. Preview. Ship.", pricing: "Freemium", studentOffer: "Hobby Plan is Free", isHot: true },
    { id: "dev-3", name: "Netlify", category: "dev", subcategory: "hosting", tag: "Hosting", url: "https://netlify.com", desc: "Fast site hosting", pricing: "Freemium", studentOffer: "Free Starter Plan", isHot: true },
    { id: "dev-4", name: "Render", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://render.com", desc: "Unified cloud platform", pricing: "Freemium", studentOffer: "Free Tier Available", isHot: true },
    { id: "dev-1", name: "GitHub", category: "dev", subcategory: "hosting", tag: "Repo", url: "https://github.com", desc: "Version control", pricing: "Freemium", studentOffer: "Free Pro (Student Pack)", isHot: true },
    { id: "dev-railway", name: "Railway", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://railway.app", desc: "Deploy apps instantly", pricing: "Freemium" },
    { id: "dev-fly", name: "Fly.io", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://fly.io", desc: "Run apps globally", pricing: "Freemium" },
    { id: "dev-pages", name: "GitHub Pages", category: "dev", subcategory: "hosting", tag: "Static", url: "https://pages.github.com", desc: "Free static hosting", pricing: "Free" },
    { id: "dev-cfworkers", name: "Cloudflare Workers", category: "dev", subcategory: "hosting", tag: "Edge", url: "https://workers.cloudflare.com", desc: "Serverless edge computing", pricing: "Freemium" },
    { id: "dev-do", name: "DigitalOcean", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://digitalocean.com", desc: "Simple cloud hosting", pricing: "Paid" },

    // Databases & Backend
    { id: "dev-5", name: "Nhost", category: "dev", subcategory: "database", tag: "Backend", url: "https://nhost.io", desc: "Serverless backend", pricing: "Freemium" },
    { id: "des-5", name: "ERDPlus", category: "dev", subcategory: "database", tag: "Modeling", url: "https://erdplus.com", desc: "Database modeling tool", pricing: "Free" },
    { id: "dev-supabase", name: "Supabase", category: "dev", subcategory: "database", tag: "Backend", url: "https://supabase.com", desc: "Open source Firebase alternative", pricing: "Freemium", isHot: true },
    { id: "dev-firebase", name: "Firebase", category: "dev", subcategory: "database", tag: "Backend", url: "https://firebase.google.com", desc: "Google's app platform", pricing: "Freemium" },
    { id: "dev-planetscale", name: "PlanetScale", category: "dev", subcategory: "database", tag: "Database", url: "https://planetscale.com", desc: "Serverless MySQL", pricing: "Freemium" },
    { id: "dev-mongodb", name: "MongoDB Atlas", category: "dev", subcategory: "database", tag: "Database", url: "https://mongodb.com/atlas", desc: "Cloud database service", pricing: "Freemium" },
    { id: "dev-neon", name: "Neon", category: "dev", subcategory: "database", tag: "Postgres", url: "https://neon.tech", desc: "Serverless Postgres", pricing: "Freemium" },
    { id: "dev-turso", name: "Turso", category: "dev", subcategory: "database", tag: "SQLite", url: "https://turso.tech", desc: "Edge SQLite database", pricing: "Freemium" },
    { id: "dev-upstash", name: "Upstash", category: "dev", subcategory: "database", tag: "Redis", url: "https://upstash.com", desc: "Serverless Redis & Kafka", pricing: "Freemium" },

    // IDEs & Editors
    { id: "dev-9", name: "Wokwi", category: "dev", subcategory: "ide", tag: "Simulation", url: "https://wokwi.com", desc: "Electronics Simulator", pricing: "Free", studentOffer: "Standard Club Plan" },
    { id: "dev-10", name: "Arduino", category: "dev", subcategory: "ide", tag: "Hardware", url: "https://arduino.cc", desc: "Open-source electronics", pricing: "Free", studentOffer: "Education Kit Discount" },
    { id: "dev-replit", name: "Replit", category: "dev", subcategory: "ide", tag: "IDE", url: "https://replit.com", desc: "Browser-based IDE", pricing: "Freemium" },
    { id: "dev-codesandbox", name: "CodeSandbox", category: "dev", subcategory: "ide", tag: "IDE", url: "https://codesandbox.io", desc: "Online code editor", pricing: "Freemium" },
    { id: "dev-stackblitz", name: "StackBlitz", category: "dev", subcategory: "ide", tag: "IDE", url: "https://stackblitz.com", desc: "Web-based IDE", pricing: "Freemium" },

    // Dev Tools & Utilities
    { id: "dev-7", name: "UptimeRobot", category: "dev", subcategory: "devtools", tag: "Monitoring", url: "https://uptimerobot.com", desc: "Website monitoring", pricing: "Freemium" },
    { id: "dev-44", name: "Wireshark", category: "dev", subcategory: "devtools", tag: "Network", url: "https://wireshark.org", desc: "Network protocol analyzer", pricing: "Free" },
    { id: "dev-8", name: "Brevo", category: "dev", subcategory: "devtools", tag: "Email", url: "https://brevo.com", desc: "Email marketing platform", pricing: "Freemium" },
    { id: "dev-postman", name: "Postman", category: "dev", subcategory: "devtools", tag: "API", url: "https://postman.com", desc: "API development platform", pricing: "Freemium" },
    { id: "dev-insomnia", name: "Insomnia", category: "dev", subcategory: "devtools", tag: "API", url: "https://insomnia.rest", desc: "API client", pricing: "Freemium" },
    { id: "dev-hoppscotch", name: "Hoppscotch", category: "dev", subcategory: "devtools", tag: "API", url: "https://hoppscotch.io", desc: "Open-source API tester", pricing: "Free" },
    { id: "dev-ngrok", name: "Ngrok", category: "dev", subcategory: "devtools", tag: "Tunnel", url: "https://ngrok.com", desc: "Secure localhost tunnels", pricing: "Freemium" },
    { id: "dev-devdocs", name: "DevDocs", category: "dev", subcategory: "devtools", tag: "Docs", url: "https://devdocs.io", desc: "Developer documentation", pricing: "Free" },
    { id: "dev-daily", name: "Daily.dev", category: "dev", subcategory: "devtools", tag: "News", url: "https://daily.dev", desc: "Developer news", pricing: "Free" },
    { id: "dev-clerk", name: "Clerk", category: "dev", subcategory: "devtools", tag: "Auth", url: "https://clerk.com", desc: "Complete user management", pricing: "Freemium" },
    { id: "dev-auth0", name: "Auth0", category: "dev", subcategory: "devtools", tag: "Auth", url: "https://auth0.com", desc: "Secure identity platform", pricing: "Freemium" },
    { id: "dev-stripe", name: "Stripe", category: "dev", subcategory: "devtools", tag: "Payments", url: "https://stripe.com", desc: "Payment processing API", pricing: "Freemium" },
    { id: "dev-sentry", name: "Sentry", category: "dev", subcategory: "devtools", tag: "Monitoring", url: "https://sentry.io", desc: "Application error tracking", pricing: "Freemium" },
    { id: "dev-logrocket", name: "LogRocket", category: "dev", subcategory: "devtools", tag: "Monitoring", url: "https://logrocket.com", desc: "Session replay & monitoring", pricing: "Freemium" },
    { id: "dev-playwright", name: "Playwright", category: "dev", subcategory: "devtools", tag: "Testing", url: "https://playwright.dev", desc: "Reliable E2E testing", pricing: "Free" },

    // Automation & Workflow
    { id: "auto-n8n", name: "n8n", category: "dev", subcategory: "automation", tag: "Workflow", url: "https://n8n.io", desc: "Fair-code workflow automation", pricing: "Freemium", isHot: true },
    { id: "auto-make", name: "Make", category: "dev", subcategory: "automation", tag: "Visual", url: "https://make.com", desc: "Visual automation platform", pricing: "Freemium" },
    { id: "auto-zapier", name: "Zapier", category: "dev", subcategory: "automation", tag: "Visual", url: "https://zapier.com", desc: "Automate apps easily", pricing: "Freemium" },
    { id: "auto-activepieces", name: "Activepieces", category: "dev", subcategory: "automation", tag: "Open Source", url: "https://activepieces.com", desc: "Open source no-code business automation", pricing: "Freemium", isHot: true },
    { id: "auto-pipedream", name: "Pipedream", category: "dev", subcategory: "automation", tag: "Code", url: "https://pipedream.com", desc: "Connect APIs remarkably fast", pricing: "Freemium" },
    { id: "auto-windmill", name: "Windmill", category: "dev", subcategory: "automation", tag: "Code", url: "https://windmill.dev", desc: "Turn scripts into internal UIs", pricing: "Freemium" },
    { id: "auto-nodered", name: "Node-RED", category: "dev", subcategory: "automation", tag: "IoT", url: "https://nodered.org", desc: "Low-code programming for event-driven apps", pricing: "Free" },
    { id: "auto-gumloop", name: "Gumloop", category: "dev", subcategory: "automation", tag: "AI Agent", url: "https://gumloop.com", desc: "Automate ops with AI agents", pricing: "Freemium", isHot: true },
    { id: "auto-lindy", name: "Lindy", category: "dev", subcategory: "automation", tag: "AI Agent", url: "https://lindy.ai", desc: "AI employee for every task", pricing: "Freemium" },

    // Additional Hosting & Infrastructure
    { id: "dev-cfpages", name: "Cloudflare Pages", category: "dev", subcategory: "hosting", tag: "Hosting", url: "https://pages.cloudflare.com", desc: "Ultra-fast global hosting", pricing: "Freemium" },
    { id: "dev-appwrite", name: "Appwrite", category: "dev", subcategory: "database", tag: "Backend", url: "https://appwrite.io", desc: "Open-source Firebase alt", pricing: "Freemium" },

    // ===== PUBLIC APIs =====
    // Fun & Entertainment APIs
    { id: "api-httpcat", name: "HTTP Cat", category: "dev", subcategory: "public-apis", tag: "Fun API", url: "https://http.cat", desc: "HTTP status codes as cats", pricing: "Free" },
    { id: "api-pokeapi", name: "PokéAPI", category: "dev", subcategory: "public-apis", tag: "Game API", url: "https://pokeapi.co", desc: "Pokémon data encyclopedia", pricing: "Free", isHot: true },
    { id: "api-jikan", name: "Jikan", category: "dev", subcategory: "public-apis", tag: "Anime API", url: "https://jikan.moe", desc: "MyAnimeList unofficial API", pricing: "Free", isHot: true },
    { id: "api-anilist", name: "AniList", category: "dev", subcategory: "public-apis", tag: "Anime API", url: "https://anilist.gitbook.io/anilist-apiv2-docs", desc: "Modern anime/manga API", pricing: "Free" },
    { id: "api-tracemoe", name: "Trace.moe", category: "dev", subcategory: "public-apis", tag: "Anime API", url: "https://trace.moe", desc: "Find anime from screenshot", pricing: "Free" },
    { id: "api-imgflip", name: "Imgflip", category: "dev", subcategory: "public-apis", tag: "Fun API", url: "https://imgflip.com/api", desc: "Meme generator API", pricing: "Free" },
    { id: "api-chucknorris", name: "ChuckNorris.io", category: "dev", subcategory: "public-apis", tag: "Fun API", url: "https://api.chucknorris.io", desc: "Chuck Norris jokes", pricing: "Free" },
    { id: "api-dadjoke", name: "icanhazdadjoke", category: "dev", subcategory: "public-apis", tag: "Fun API", url: "https://icanhazdadjoke.com/api", desc: "Best dad jokes API", pricing: "Free" },

    // Data & Test APIs
    { id: "api-jsonplaceholder", name: "JSONPlaceholder", category: "dev", subcategory: "public-apis", tag: "Test API", url: "https://jsonplaceholder.typicode.com", desc: "Fake REST API for testing", pricing: "Free", isHot: true },
    { id: "api-randomuser", name: "RandomUser", category: "dev", subcategory: "public-apis", tag: "Test API", url: "https://randomuser.me", desc: "Generate fake user data", pricing: "Free" },
    { id: "api-fakerapi", name: "FakerAPI", category: "dev", subcategory: "public-apis", tag: "Test API", url: "https://fakerapi.it", desc: "Generate any fake data", pricing: "Free" },
    { id: "api-httpbin", name: "httpbin", category: "dev", subcategory: "public-apis", tag: "Test API", url: "https://httpbin.org", desc: "Test HTTP requests", pricing: "Free" },

    // Media & Photo APIs
    { id: "api-unsplash", name: "Unsplash API", category: "dev", subcategory: "public-apis", tag: "Photo API", url: "https://unsplash.com/developers", desc: "Free high-res photos", pricing: "Free", isHot: true },
    { id: "api-pexels", name: "Pexels API", category: "dev", subcategory: "public-apis", tag: "Photo API", url: "https://www.pexels.com/api", desc: "Free stock photos/videos", pricing: "Free" },
    { id: "api-giphy", name: "Giphy API", category: "dev", subcategory: "public-apis", tag: "GIF API", url: "https://developers.giphy.com", desc: "Search & integrate GIFs", pricing: "Free", isHot: true },

    // Finance & Crypto APIs
    { id: "api-coingecko", name: "CoinGecko", category: "dev", subcategory: "public-apis", tag: "Crypto API", url: "https://www.coingecko.com/en/api", desc: "Crypto prices & market data", pricing: "Free", isHot: true },
    { id: "api-exchangerate", name: "ExchangeRate-API", category: "dev", subcategory: "public-apis", tag: "Finance API", url: "https://www.exchangerate-api.com", desc: "Currency conversion", pricing: "Free" },
    { id: "api-alphavantage", name: "Alpha Vantage", category: "dev", subcategory: "public-apis", tag: "Finance API", url: "https://www.alphavantage.co", desc: "Stock market data", pricing: "Free" },

    // Weather & Geo APIs
    { id: "api-openweather", name: "OpenWeatherMap", category: "dev", subcategory: "public-apis", tag: "Weather API", url: "https://openweathermap.org/api", desc: "Most popular weather API", pricing: "Freemium", isHot: true },
    { id: "api-locationiq", name: "LocationIQ", category: "dev", subcategory: "public-apis", tag: "Geo API", url: "https://locationiq.com", desc: "Geocoding & maps", pricing: "Freemium" },
    { id: "api-nagerdate", name: "Nager.Date", category: "dev", subcategory: "public-apis", tag: "Calendar API", url: "https://date.nager.at", desc: "Public holidays 90+ countries", pricing: "Free" },

    // Security & Validation APIs
    { id: "api-virustotal", name: "VirusTotal", category: "dev", subcategory: "public-apis", tag: "Security API", url: "https://developers.virustotal.com", desc: "Scan files/URLs for threats", pricing: "Freemium", isHot: true },
    { id: "api-hibp", name: "HaveIBeenPwned", category: "dev", subcategory: "public-apis", tag: "Security API", url: "https://haveibeenpwned.com/API/v3", desc: "Check password breaches", pricing: "Freemium", isHot: true },
    { id: "api-shodan", name: "Shodan", category: "dev", subcategory: "public-apis", tag: "Security API", url: "https://developer.shodan.io", desc: "Internet device search", pricing: "Freemium" },

    // Social & Communication APIs
    { id: "api-discord", name: "Discord API", category: "dev", subcategory: "public-apis", tag: "Social API", url: "https://discord.com/developers", desc: "Build Discord bots", pricing: "Free", isHot: true },
    { id: "api-telegram", name: "Telegram Bot API", category: "dev", subcategory: "public-apis", tag: "Social API", url: "https://core.telegram.org/bots/api", desc: "Create Telegram bots", pricing: "Free", isHot: true },
    { id: "api-reddit", name: "Reddit API", category: "dev", subcategory: "public-apis", tag: "Social API", url: "https://www.reddit.com/dev/api", desc: "Reddit posts & comments", pricing: "Free" },

    // Music & Media APIs
    { id: "api-spotify", name: "Spotify API", category: "dev", subcategory: "public-apis", tag: "Music API", url: "https://developer.spotify.com", desc: "Music catalog & playlists", pricing: "Free", isHot: true },
    { id: "api-genius", name: "Genius API", category: "dev", subcategory: "public-apis", tag: "Music API", url: "https://genius.com/developers", desc: "Song lyrics database", pricing: "Free" },
    { id: "api-youtube", name: "YouTube API", category: "dev", subcategory: "public-apis", tag: "Video API", url: "https://developers.google.com/youtube", desc: "YouTube video data", pricing: "Free", isHot: true },

    // Knowledge & Data APIs
    { id: "api-wikipedia", name: "Wikipedia API", category: "dev", subcategory: "public-apis", tag: "Data API", url: "https://www.mediawiki.org/wiki/API", desc: "World's encyclopedia", pricing: "Free", isHot: true },
    { id: "api-nasa", name: "NASA API", category: "dev", subcategory: "public-apis", tag: "Data API", url: "https://api.nasa.gov", desc: "Space data & rover images", pricing: "Free", isHot: true },
    { id: "api-spacex", name: "SpaceX API", category: "dev", subcategory: "public-apis", tag: "Data API", url: "https://github.com/r-spacex/SpaceX-API", desc: "SpaceX launches & rockets", pricing: "Free" },
    { id: "api-googlebooks", name: "Google Books API", category: "dev", subcategory: "public-apis", tag: "Data API", url: "https://developers.google.com/books", desc: "Book search & metadata", pricing: "Free" },
    { id: "api-openlibrary", name: "Open Library", category: "dev", subcategory: "public-apis", tag: "Data API", url: "https://openlibrary.org/developers/api", desc: "Free book database", pricing: "Free" },

    // Translation & NLP APIs
    { id: "api-libretranslate", name: "LibreTranslate", category: "dev", subcategory: "public-apis", tag: "NLP API", url: "https://libretranslate.com", desc: "Open-source translation", pricing: "Free" },
    { id: "api-dictionary", name: "Free Dictionary", category: "dev", subcategory: "public-apis", tag: "NLP API", url: "https://dictionaryapi.dev", desc: "Word definitions & phonetics", pricing: "Free" },

    // ===== STUDENT CENTER =====
    // Research & Documentation
    { id: "edu-notion", name: "NotebookLM", category: "student", subcategory: "research", tag: "AI Notes", url: "https://notebooklm.google.com", desc: "AI-powered notebook", pricing: "Free", isHot: true },
    { id: "edu-1", name: "W3Schools", category: "student", subcategory: "research", tag: "Docs", url: "https://w3schools.com", desc: "Web dev tutorials", pricing: "Free" },
    { id: "edu-mdn", name: "MDN Web Docs", category: "student", subcategory: "research", tag: "Docs", url: "https://developer.mozilla.org", desc: "The Bible of web dev", pricing: "Free" },
    { id: "edu-khan", name: "Khan Academy", category: "student", subcategory: "research", tag: "Learning", url: "https://khanacademy.org", desc: "Free education for all", pricing: "Free" },
    { id: "edu-trailhead", name: "Trailhead", category: "student", subcategory: "research", tag: "Learning", url: "https://trailhead.salesforce.com", desc: "Salesforce learning", pricing: "Free" },
    { id: "edu-mslearn", name: "Microsoft Learn", category: "student", subcategory: "research", tag: "Learning", url: "https://learn.microsoft.com", desc: "Microsoft learning paths", pricing: "Free" },
    { id: "edu-outsystems", name: "OutSystems", category: "student", subcategory: "research", tag: "Low-Code", url: "https://outsystems.com", desc: "Low-code platform", pricing: "Free Trial" },

    // STEM & Academic Research
    { id: "edu-wolfram", name: "Wolfram Alpha", category: "student", subcategory: "research", tag: "STEM", url: "https://wolframalpha.com", desc: "Computational intelligence", pricing: "Freemium" },
    { id: "edu-researchgate", name: "ResearchGate", category: "student", subcategory: "research", tag: "Papers", url: "https://researchgate.net", desc: "Access academic papers", pricing: "Free" },
    { id: "edu-zotero", name: "Zotero", category: "student", subcategory: "research", tag: "Citation", url: "https://zotero.org", desc: "Research citation manager", pricing: "Free" },
    { id: "edu-connectedpapers", name: "Connected Papers", category: "student", subcategory: "research", tag: "Papers", url: "https://connectedpapers.com", desc: "Visual paper discovery", pricing: "Freemium" },
    { id: "edu-elicit", name: "Elicit", category: "student", subcategory: "research", tag: "AI Research", url: "https://elicit.com", desc: "Analyze research papers", pricing: "Freemium", isHot: true },
    { id: "edu-consensus", name: "Consensus", category: "student", subcategory: "research", tag: "AI Research", url: "https://consensus.app", desc: "Evidence-based answers", pricing: "Freemium" },
    { id: "edu-scite", name: "Scite", category: "student", subcategory: "research", tag: "Citations", url: "https://scite.ai", desc: "Smart citation checker", pricing: "Paid" },

    // Top-Tier Coding Platforms (100% Free or Generous Free Tier)
    { id: "edu-desmos", name: "Desmos", category: "student", subcategory: "study", tag: "Math", url: "https://desmos.com", desc: "Advanced graphing calculator", pricing: "Free" },
    { id: "edu-obsidian", name: "Obsidian", category: "student", subcategory: "study", tag: "Notes", url: "https://obsidian.md", desc: "Private knowledge base", pricing: "Free" },
    { id: "prod-notion", name: "Notion", category: "student", subcategory: "study", tag: "Notes", url: "https://notion.so", desc: "All-in-one workspace", pricing: "Freemium" },
    { id: "edu-fcc", name: "freeCodeCamp", category: "student", subcategory: "study", tag: "Coding", url: "https://freecodecamp.org", desc: "The gold standard - 100% free certs", pricing: "Free", isHot: true },
    { id: "edu-odin", name: "The Odin Project", category: "student", subcategory: "study", tag: "Coding", url: "https://theodinproject.com", desc: "Full stack curriculum - 100% free", pricing: "Free", isHot: true },
    { id: "edu-scrimba", name: "Scrimba", category: "student", subcategory: "study", tag: "Coding", url: "https://scrimba.com", desc: "Interactive video coding", pricing: "Freemium" },
    { id: "edu-leetcode", name: "LeetCode", category: "student", subcategory: "study", tag: "Practice", url: "https://leetcode.com", desc: "Coding interview prep", pricing: "Freemium", isHot: true },
    { id: "edu-hackerrank", name: "HackerRank", category: "student", subcategory: "study", tag: "Practice", url: "https://hackerrank.com", desc: "Tech skill assessments", pricing: "Freemium" },

    // University-Level Learning (Free to Audit)
    { id: "edu-2", name: "Codecademy", category: "student", subcategory: "study", tag: "Courses", url: "https://codecademy.com", desc: "Interactive coding", pricing: "Freemium", studentOffer: "35% Off Pro" },
    { id: "edu-coursera", name: "Coursera", category: "student", subcategory: "study", tag: "Courses", url: "https://coursera.org", desc: "Yale, Stanford courses - free to audit", pricing: "Freemium", isHot: true },
    { id: "edu-edx", name: "edX", category: "student", subcategory: "study", tag: "Courses", url: "https://edx.org", desc: "Harvard & MIT - free to audit", pricing: "Freemium", isHot: true },
    { id: "edu-mitocw", name: "MIT OpenCourseWare", category: "student", subcategory: "study", tag: "Courses", url: "https://ocw.mit.edu", desc: "MIT courses - 100% free", pricing: "Free" },
    { id: "edu-cs50", name: "Harvard CS50", category: "student", subcategory: "study", tag: "Courses", url: "https://cs50.harvard.edu", desc: "Best intro to CS - free", pricing: "Free", isHot: true },
    { id: "edu-udemy", name: "Udemy", category: "student", subcategory: "study", tag: "Courses", url: "https://udemy.com", desc: "Video courses", pricing: "Freemium" },
    { id: "edu-5", name: "Unstuck Study", category: "student", subcategory: "study", tag: "Support", url: "https://unstuckstudy.com", desc: "Study help platform", pricing: "Freemium" },
    { id: "edu-quizlet", name: "Quizlet", category: "student", subcategory: "study", tag: "Flashcards", url: "https://quizlet.com", desc: "Flashcard learning", pricing: "Freemium" },


    // Writing Support
    { id: "prod-49", name: "Grammarly", category: "student", subcategory: "writing", tag: "Grammar", url: "https://grammarly.com", desc: "Writing assistance", pricing: "Freemium", isHot: true },
    { id: "edu-9", name: "Scribbr AI", category: "student", subcategory: "writing", tag: "Academic", url: "https://scribbr.ai", desc: "Citation & proofreading", pricing: "Freemium", isHot: true },
    { id: "edu-7", name: "Rewritify", category: "student", subcategory: "writing", tag: "Rephrasing", url: "https://rewritify.com", desc: "Text rewriter", pricing: "Freemium" },
    { id: "edu-8", name: "JotBot", category: "student", subcategory: "writing", tag: "Assistant", url: "https://jotbot.com", desc: "Essay writer", pricing: "Freemium" },
    { id: "edu-quillbot", name: "QuillBot", category: "student", subcategory: "writing", tag: "Paraphrase", url: "https://quillbot.com", desc: "AI paraphraser", pricing: "Freemium" },
    { id: "prod-languagetool", name: "LanguageTool", category: "student", subcategory: "writing", tag: "Grammar", url: "https://languagetool.org", desc: "Multilingual grammar check", pricing: "Freemium" },
    { id: "prod-hemingway", name: "Hemingway Editor", category: "student", subcategory: "writing", tag: "Style", url: "https://hemingwayapp.com", desc: "Make writing bold & clear", pricing: "Free" },
    { id: "prod-prowriting", name: "ProWritingAid", category: "student", subcategory: "writing", tag: "Editor", url: "https://prowritingaid.com", desc: "AI writing assistant", pricing: "Freemium" },

    // ===== CREATIVE STUDIO =====
    // Design & UI
    { id: "des-11", name: "Figma", category: "creative", subcategory: "design", tag: "UI/UX", url: "https://figma.com", desc: "Interface design", pricing: "Freemium", studentOffer: "Free Professional Plan", isHot: true },
    { id: "des-2", name: "Canva", category: "creative", subcategory: "design", tag: "Graphic", url: "https://canva.com", desc: "Easy design tool", pricing: "Freemium", studentOffer: "Free Pro (Education)", isHot: true },
    { id: "des-10", name: "Framer", category: "creative", subcategory: "design", tag: "No-Code", url: "https://framer.com", desc: "Web design tool", pricing: "Freemium" },
    { id: "des-3", name: "Lucid", category: "creative", subcategory: "design", tag: "Diagrams", url: "https://lucid.co", desc: "Visual collaboration", pricing: "Freemium", studentOffer: "Free Educational Upgrade" },
    { id: "des-4", name: "Tinkercad", category: "creative", subcategory: "design", tag: "3D", url: "https://tinkercad.com", desc: "3D modeling", pricing: "Free", studentOffer: "Free for Education" },
    { id: "des-excalidraw", name: "Excalidraw", category: "creative", subcategory: "design", tag: "Whiteboard", url: "https://excalidraw.com", desc: "Virtual whiteboard", pricing: "Free" },
    { id: "des-coolors", name: "Coolors", category: "creative", subcategory: "design", tag: "Colors", url: "https://coolors.co", desc: "Color palette generator", pricing: "Freemium" },
    { id: "des-dribbble", name: "Dribbble", category: "creative", subcategory: "design", tag: "Inspiration", url: "https://dribbble.com", desc: "Design inspiration", pricing: "Freemium" },
    { id: "des-photopea", name: "Photopea", category: "creative", subcategory: "design", tag: "Editor", url: "https://photopea.com", desc: "Free Photoshop alternative", pricing: "Free" },
    { id: "des-iconify", name: "Iconify", category: "creative", subcategory: "design", tag: "Icons", url: "https://iconify.design", desc: "100k+ unified icons", pricing: "Free" },
    { id: "des-spline", name: "Spline", category: "creative", subcategory: "design", tag: "3D", url: "https://spline.design", desc: "3D design for the web", pricing: "Freemium" },
    { id: "des-blender", name: "Blender", category: "creative", subcategory: "design", tag: "3D", url: "https://blender.org", desc: "Pro open-source 3D suite", pricing: "Free" },
    { id: "des-tripo", name: "Tripo AI", category: "creative", subcategory: "design", tag: "3D", url: "https://www.tripo3d.ai", desc: "Text-to-3D model generator", pricing: "Freemium", isHot: true },
    { id: "des-sketchfab", name: "Sketchfab", category: "creative", subcategory: "design", tag: "3D", url: "https://sketchfab.com", desc: "Publish & find 3D models", pricing: "Freemium" },
    { id: "des-rive", name: "Rive", category: "creative", subcategory: "design", tag: "Animation", url: "https://rive.app", desc: "Interactive motion graphics", pricing: "Freemium" },
    { id: "des-heroicons", name: "Heroicons", category: "creative", subcategory: "design", tag: "Icons", url: "https://heroicons.com", desc: "Beautiful hand-crafted SVG icons", pricing: "Free" },
    { id: "des-svgrepo", name: "SVG Repo", category: "creative", subcategory: "design", tag: "Assets", url: "https://svgrepo.com", desc: "500k+ free vectors", pricing: "Free" },
    { id: "des-googlefonts", name: "Google Fonts", category: "creative", subcategory: "design", tag: "Fonts", url: "https://fonts.google.com", desc: "Free font library", pricing: "Free" },
    { id: "des-fontshare", name: "Fontshare", category: "creative", subcategory: "design", tag: "Fonts", url: "https://www.fontshare.com", desc: "Quality open source fonts", pricing: "Free" },
    { id: "des-reactbits", name: "React Bits", category: "creative", subcategory: "design", tag: "Animation", url: "https://reactbits.dev", desc: "Animated React components", pricing: "Free", isHot: true },
    { id: "des-vantajs", name: "Vanta.js", category: "creative", subcategory: "design", tag: "Animation", url: "https://www.vantajs.com", desc: "Animated 3D backgrounds", pricing: "Free", isHot: true },

    // Media & Video
    { id: "med-24", name: "Opus Pro", category: "creative", subcategory: "media", tag: "AI Video", url: "https://opus.pro", desc: "Video repurposing", pricing: "Free Trial" },
    { id: "med-21", name: "Jitter", category: "creative", subcategory: "media", tag: "Animation", url: "https://jitter.video", desc: "Motion design", pricing: "Freemium", studentOffer: "Free Pro Plan" },
    { id: "med-22", name: "Pexels", category: "creative", subcategory: "media", tag: "Assets", url: "https://pexels.com", desc: "Stock photos/video", pricing: "Free" },
    { id: "med-unsplash", name: "Unsplash", category: "creative", subcategory: "media", tag: "Assets", url: "https://unsplash.com", desc: "Free photos", pricing: "Free" },
    { id: "med-tinywow", name: "TinyWow", category: "creative", subcategory: "media", tag: "Tools", url: "https://tinywow.com", desc: "PDF & video tools", pricing: "Free" },
    { id: "med-remove", name: "Remove.bg", category: "creative", subcategory: "media", tag: "Tools", url: "https://remove.bg", desc: "Remove backgrounds", pricing: "Freemium" },
    { id: "med-lottie", name: "LottieFiles", category: "creative", subcategory: "media", tag: "Animation", url: "https://lottiefiles.com", desc: "Free animations", pricing: "Freemium" },

    // ===== ENTERTAINMENT =====
    // Streaming & Podcasts
    { id: "ent-lex", name: "Lex Fridman Podcast", category: "entertainment", subcategory: "streaming", tag: "Podcast", url: "https://lexfridman.com", desc: "Conversations on AI & tech", pricing: "Free" },
    { id: "ent-sedaily", name: "Software Engineering Daily", category: "entertainment", subcategory: "streaming", tag: "Podcast", url: "https://softwareengineeringdaily.com", desc: "Daily technical interviews", pricing: "Free" },
    { id: "ent-twitch", name: "Twitch", category: "entertainment", subcategory: "streaming", tag: "Live", url: "https://twitch.tv", desc: "Live streaming platform", pricing: "Free" },

    // Tech News
    { id: "news-mit", name: "MIT Technology Review", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://technologyreview.com", desc: "Authoritative tech journalism", pricing: "Freemium" },
    { id: "news-ieee", name: "IEEE Spectrum", category: "entertainment", subcategory: "news", tag: "Engineering", url: "https://spectrum.ieee.org", desc: "Engineering & science news", pricing: "Free" },
    { id: "ent-verge", name: "The Verge", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://theverge.com", desc: "Tech news & reviews", pricing: "Free" },
    { id: "news-hn", name: "Hacker News", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://news.ycombinator.com", desc: "Tech community", pricing: "Free" },
    { id: "news-ars", name: "Ars Technica", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://arstechnica.com", desc: "Tech analysis", pricing: "Free" },
    { id: "news-wired", name: "WIRED", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://wired.com", desc: "Tech & culture", pricing: "Freemium" },
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
