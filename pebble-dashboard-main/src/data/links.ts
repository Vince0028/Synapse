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
    { id: "ai-grok", name: "Grok", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://grok.x.ai", desc: "xAI's conversational AI", pricing: "Freemium", isHot: true },
    { id: "ai-qwen", name: "Qwen", category: "ai", subcategory: "chatbot", tag: "LLM", url: "https://qwen.ai", desc: "Alibaba's powerful AI chat", pricing: "Free", isHot: true },

    // Humanizers & Detectors
    { id: "ai-7", name: "StealthWriter", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://stealthwriter.ai", desc: "Bypass AI detectors", pricing: "Freemium", isHot: true },
    { id: "ai-33", name: "Humanize AI", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://humanizeai.pro", desc: "Converts AI content into human-like writing", pricing: "Freemium" },
    { id: "ai-8", name: "GPTZero", category: "ai", subcategory: "humanizer", tag: "Detector", url: "https://gptzero.me", desc: "AI content detection", pricing: "Freemium", isHot: true },
    { id: "ai-hum2", name: "AI Humanizer", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://aihumanizer.ai", desc: "Humanize AI text", pricing: "Freemium" },
    { id: "ai-undetect", name: "Undetectable AI", category: "ai", subcategory: "humanizer", tag: "Humanizer", url: "https://undetectable.ai", desc: "Make AI content undetectable", pricing: "Freemium", isHot: true },
    { id: "ai-originality", name: "Originality.ai", category: "ai", subcategory: "humanizer", tag: "Detector", url: "https://originality.ai", desc: "AI & plagiarism checker", pricing: "Free Trial" },

    // Coding Assistants
    { id: "ai-30", name: "GitHub Copilot", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://copilot.github.com", desc: "GitHub's AI code assistant", pricing: "Free Trial", studentOffer: "Free with GitHub Student Pack", isHot: true },
    { id: "ai-31", name: "Blackbox AI", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://blackbox.ai", desc: "AI-powered coding helper", pricing: "Freemium" },
    { id: "ai-cursor", name: "Cursor", category: "ai", subcategory: "coding-ai", tag: "IDE", url: "https://cursor.sh", desc: "AI-first code editor", pricing: "Freemium", isHot: true },
    { id: "ai-codeium", name: "Codeium", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://codeium.com", desc: "Free AI code completion", pricing: "Free" },
    { id: "ai-tabnine", name: "Tabnine", category: "ai", subcategory: "coding-ai", tag: "Coding", url: "https://tabnine.com", desc: "AI code assistant", pricing: "Freemium" },
    { id: "ai-windsurf", name: "Windsurf", category: "ai", subcategory: "coding-ai", tag: "IDE", url: "https://codeium.com/windsurf", desc: "AI-powered agentic IDE", pricing: "Freemium", isHot: true },
    { id: "ai-antigravity", name: "Antigravity", category: "ai", subcategory: "coding-ai", tag: "IDE", url: "https://antigravity.dev", desc: "Google DeepMind AI IDE", pricing: "Freemium" },

    // AI APIs & Cloud
    { id: "dev-6", name: "GroqCloud", category: "ai", subcategory: "ai-api", tag: "API", url: "https://console.groq.com", desc: "Fast AI inference API", pricing: "Freemium", studentOffer: "Free Tier Credits" },
    { id: "ai-openai", name: "OpenAI API", category: "ai", subcategory: "ai-api", tag: "API", url: "https://platform.openai.com", desc: "GPT & DALL-E APIs", pricing: "Freemium" },
    { id: "ai-anthropic", name: "Anthropic API", category: "ai", subcategory: "ai-api", tag: "API", url: "https://console.anthropic.com", desc: "Claude API access", pricing: "Freemium" },
    { id: "ai-replicate", name: "Replicate", category: "ai", subcategory: "ai-api", tag: "API", url: "https://replicate.com", desc: "Run ML models via API", pricing: "Freemium" },
    { id: "ai-hugging", name: "Hugging Face", category: "ai", subcategory: "ai-api", tag: "Models", url: "https://huggingface.co", desc: "ML models & datasets", pricing: "Freemium" },

    // Generators (UI, Voice, Image, Video)
    { id: "ai-5", name: "v0.dev", category: "ai", subcategory: "generator", tag: "UI Gen", url: "https://v0.dev", desc: "Generate UI with AI", pricing: "Freemium", isHot: true },
    { id: "ai-lovable", name: "Lovable", category: "ai", subcategory: "generator", tag: "Full Stack", url: "https://lovable.dev", desc: "AI full-stack engineer", pricing: "Freemium", isHot: true },
    { id: "ai-replit-gen", name: "Replit", category: "ai", subcategory: "generator", tag: "App Gen", url: "https://replit.com", desc: "Build apps with Replit Agent", pricing: "Freemium", isHot: true },
    { id: "ai-google-studio", name: "Google AI Studio", category: "ai", subcategory: "generator", tag: "Multimodal", url: "https://aistudio.google.com", desc: "Build with Gemini models", pricing: "Free" },
    { id: "tts-53", name: "ElevenLabs", category: "ai", subcategory: "generator", tag: "Voice", url: "https://elevenlabs.io", desc: "AI voice generator", pricing: "Freemium" },
    { id: "tts-54", name: "Resemble AI", category: "ai", subcategory: "generator", tag: "Voice", url: "https://resemble.ai", desc: "AI voice cloning", pricing: "Free Trial" },
    { id: "tts-56", name: "Play.ht", category: "ai", subcategory: "generator", tag: "Voice", url: "https://play.ht", desc: "Realistic text to speech", pricing: "Freemium" },
    { id: "ai-midjourney", name: "Midjourney", category: "ai", subcategory: "generator", tag: "Image", url: "https://midjourney.com", desc: "AI image generation", pricing: "Free Trial", isHot: true },
    { id: "ai-dalle", name: "DALL-E", category: "ai", subcategory: "generator", tag: "Image", url: "https://openai.com/dall-e-3", desc: "OpenAI image generator", pricing: "Freemium", isHot: true },
    { id: "ai-udio", name: "Udio", category: "ai", subcategory: "generator", tag: "Music", url: "https://udio.com", desc: "AI music creation", pricing: "Freemium" },
    { id: "ai-runway", name: "Runway", category: "ai", subcategory: "generator", tag: "Video", url: "https://runwayml.com", desc: "AI video generation", pricing: "Free Trial" },
    { id: "ai-stable", name: "Stable Diffusion", category: "ai", subcategory: "generator", tag: "Image", url: "https://stability.ai", desc: "Open source image gen", pricing: "Free" },
    { id: "ai-suno", name: "Suno AI", category: "ai", subcategory: "generator", tag: "Music", url: "https://suno.ai", desc: "AI music generation", pricing: "Freemium", isHot: true },
    { id: "ai-sora", name: "Sora", category: "ai", subcategory: "generator", tag: "Video", url: "https://openai.com/sora", desc: "OpenAI video generation", pricing: "Freemium", isHot: true },

    // Multi-function AI (also appears in Chatbots - these generate images/media too)
    { id: "ai-chatgpt-gen", name: "ChatGPT", category: "ai", subcategory: "generator", tag: "Image", url: "https://chatgpt.com", desc: "GPT-4 + DALL-E image gen", pricing: "Freemium", isHot: true },
    { id: "ai-gemini-gen", name: "Google Gemini", category: "ai", subcategory: "generator", tag: "Image", url: "https://gemini.google.com", desc: "Gemini image generation", pricing: "Freemium", isHot: true },
    { id: "ai-grok-gen", name: "Grok", category: "ai", subcategory: "generator", tag: "Image", url: "https://grok.x.ai", desc: "Grok image generation", pricing: "Freemium", isHot: true },

    // ===== DEV ECOSYSTEM =====
    // Hosting & Cloud
    { id: "dev-2", name: "Vercel", category: "dev", subcategory: "hosting", tag: "Hosting", url: "https://vercel.com", desc: "Develop. Preview. Ship.", pricing: "Freemium", studentOffer: "Hobby Plan is Free", isHot: true },
    { id: "dev-3", name: "Netlify", category: "dev", subcategory: "hosting", tag: "Hosting", url: "https://netlify.com", desc: "Fast site hosting", pricing: "Freemium", studentOffer: "Free Starter Plan", isHot: true },
    { id: "dev-4", name: "Render", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://render.com", desc: "Unified cloud platform", pricing: "Freemium", studentOffer: "Free Tier Available", isHot: true },
    { id: "dev-1", name: "GitHub", category: "dev", subcategory: "hosting", tag: "Repo", url: "https://github.com", desc: "Version control", pricing: "Freemium", studentOffer: "Free Pro (Student Pack)", isHot: true },
    { id: "dev-railway", name: "Railway", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://railway.app", desc: "Deploy apps instantly", pricing: "Freemium" },
    { id: "dev-fly", name: "Fly.io", category: "dev", subcategory: "hosting", tag: "Cloud", url: "https://fly.io", desc: "Run apps globally", pricing: "Freemium" },
    { id: "dev-pages", name: "GitHub Pages", category: "dev", subcategory: "hosting", tag: "Static", url: "https://pages.github.com", desc: "Free static hosting", pricing: "Free" },

    // Databases & Backend
    { id: "dev-5", name: "Nhost", category: "dev", subcategory: "database", tag: "Backend", url: "https://nhost.io", desc: "Serverless backend", pricing: "Freemium" },
    { id: "des-5", name: "ERDPlus", category: "dev", subcategory: "database", tag: "Modeling", url: "https://erdplus.com", desc: "Database modeling tool", pricing: "Free" },
    { id: "dev-supabase", name: "Supabase", category: "dev", subcategory: "database", tag: "Backend", url: "https://supabase.com", desc: "Open source Firebase alternative", pricing: "Freemium", isHot: true },
    { id: "dev-firebase", name: "Firebase", category: "dev", subcategory: "database", tag: "Backend", url: "https://firebase.google.com", desc: "Google's app platform", pricing: "Freemium" },
    { id: "dev-planetscale", name: "PlanetScale", category: "dev", subcategory: "database", tag: "Database", url: "https://planetscale.com", desc: "Serverless MySQL", pricing: "Freemium" },
    { id: "dev-mongodb", name: "MongoDB Atlas", category: "dev", subcategory: "database", tag: "Database", url: "https://mongodb.com/atlas", desc: "Cloud database service", pricing: "Freemium" },

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
    { id: "edu-6", name: "NotebookLM", category: "student", subcategory: "research", tag: "AI Note", url: "https://notebooklm.google", desc: "AI research notebook", pricing: "Free" },
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

    // Top-Tier Coding Platforms (100% Free or Generous Free Tier)
    { id: "edu-fcc", name: "freeCodeCamp", category: "student", subcategory: "study", tag: "Coding", url: "https://freecodecamp.org", desc: "The gold standard - 100% free certs", pricing: "Free", isHot: true },
    { id: "edu-odin", name: "The Odin Project", category: "student", subcategory: "study", tag: "Coding", url: "https://theodinproject.com", desc: "Full stack curriculum - 100% free", pricing: "Free", isHot: true },
    { id: "edu-scrimba", name: "Scrimba", category: "student", subcategory: "study", tag: "Coding", url: "https://scrimba.com", desc: "Interactive video coding", pricing: "Freemium" },

    // University-Level Learning (Free to Audit)
    { id: "edu-2", name: "Codecademy", category: "student", subcategory: "study", tag: "Courses", url: "https://codecademy.com", desc: "Interactive coding", pricing: "Freemium", studentOffer: "35% Off Pro" },
    { id: "edu-coursera", name: "Coursera", category: "student", subcategory: "study", tag: "Courses", url: "https://coursera.org", desc: "Yale, Stanford courses - free to audit", pricing: "Freemium", isHot: true },
    { id: "edu-edx", name: "edX", category: "student", subcategory: "study", tag: "Courses", url: "https://edx.org", desc: "Harvard & MIT - free to audit", pricing: "Freemium", isHot: true },
    { id: "edu-mitocw", name: "MIT OpenCourseWare", category: "student", subcategory: "study", tag: "Courses", url: "https://ocw.mit.edu", desc: "MIT courses - 100% free", pricing: "Free" },
    { id: "edu-cs50", name: "Harvard CS50", category: "student", subcategory: "study", tag: "Courses", url: "https://cs50.harvard.edu", desc: "Best intro to CS - free", pricing: "Free", isHot: true },
    { id: "edu-udemy", name: "Udemy", category: "student", subcategory: "study", tag: "Courses", url: "https://udemy.com", desc: "Video courses", pricing: "Freemium" },
    { id: "edu-5", name: "Unstuck Study", category: "student", subcategory: "study", tag: "Support", url: "https://unstuckstudy.com", desc: "Study help platform", pricing: "Freemium" },
    { id: "edu-quizlet", name: "Quizlet", category: "student", subcategory: "study", tag: "Flashcards", url: "https://quizlet.com", desc: "Flashcard learning", pricing: "Freemium" },
    { id: "edu-gdrive", name: "Google Drive", category: "student", subcategory: "study", tag: "Storage", url: "https://drive.google.com", desc: "Cloud storage", pricing: "Freemium", studentOffer: "Free 15GB", isHot: true },

    // Writing Support
    { id: "prod-49", name: "Grammarly", category: "student", subcategory: "writing", tag: "Grammar", url: "https://grammarly.com", desc: "Writing assistance", pricing: "Freemium", isHot: true },
    { id: "edu-9", name: "Scribbr AI", category: "student", subcategory: "writing", tag: "Academic", url: "https://scribbr.ai", desc: "Citation & proofreading", pricing: "Freemium", isHot: true },
    { id: "edu-7", name: "Rewritify", category: "student", subcategory: "writing", tag: "Rephrasing", url: "https://rewritify.com", desc: "Text rewriter", pricing: "Freemium" },
    { id: "edu-8", name: "JotBot", category: "student", subcategory: "writing", tag: "Assistant", url: "https://jotbot.com", desc: "Essay writer", pricing: "Freemium" },
    { id: "edu-quillbot", name: "QuillBot", category: "student", subcategory: "writing", tag: "Paraphrase", url: "https://quillbot.com", desc: "AI paraphraser", pricing: "Freemium" },

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

    // Media & Video
    { id: "med-24", name: "Opus Pro", category: "creative", subcategory: "media", tag: "AI Video", url: "https://opus.pro", desc: "Video repurposing", pricing: "Free Trial" },
    { id: "med-21", name: "Jitter", category: "creative", subcategory: "media", tag: "Animation", url: "https://jitter.video", desc: "Motion design", pricing: "Freemium", studentOffer: "Free Pro Plan" },
    { id: "med-22", name: "Pexels", category: "creative", subcategory: "media", tag: "Assets", url: "https://pexels.com", desc: "Stock photos/video", pricing: "Free" },
    { id: "med-unsplash", name: "Unsplash", category: "creative", subcategory: "media", tag: "Assets", url: "https://unsplash.com", desc: "Free photos", pricing: "Free" },
    { id: "med-tinywow", name: "TinyWow", category: "creative", subcategory: "media", tag: "Tools", url: "https://tinywow.com", desc: "PDF & video tools", pricing: "Free" },
    { id: "med-remove", name: "Remove.bg", category: "creative", subcategory: "media", tag: "Tools", url: "https://remove.bg", desc: "Remove backgrounds", pricing: "Freemium" },
    { id: "med-lottie", name: "LottieFiles", category: "creative", subcategory: "media", tag: "Animation", url: "https://lottiefiles.com", desc: "Free animations", pricing: "Freemium" },

    // ===== ENTERTAINMENT =====
    // Streaming
    { id: "str-61", name: "AnimePahe", category: "entertainment", subcategory: "streaming", tag: "Anime", url: "https://animepahe.com", desc: "Anime streaming", pricing: "Free" },
    { id: "str-66", name: "9anime", category: "entertainment", subcategory: "streaming", tag: "Anime", url: "https://9anime.to", desc: "Anime streaming", pricing: "Free" },
    { id: "str-64", name: "FMovies", category: "entertainment", subcategory: "streaming", tag: "Movies", url: "https://fmovies.to", desc: "Movie streaming", pricing: "Free" },
    { id: "str-kimcartoon", name: "KimCartoon", category: "entertainment", subcategory: "streaming", tag: "Cartoons", url: "https://kimcartoon.li", desc: "Cartoon streaming", pricing: "Free" },
    { id: "str-himovies", name: "HiMovies", category: "entertainment", subcategory: "streaming", tag: "Movies", url: "https://himovies.top", desc: "HD movies", pricing: "Free" },

    // Tech News
    { id: "news-69", name: "TechCrunch", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://techcrunch.com", desc: "Tech news", pricing: "Free" },
    { id: "news-72", name: "The Verge", category: "entertainment", subcategory: "news", tag: "Tech", url: "https://theverge.com", desc: "Tech culture", pricing: "Free" },
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
];

export const promptVault = prompts[0];
