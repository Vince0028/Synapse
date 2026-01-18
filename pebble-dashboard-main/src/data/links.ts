export interface LinkItem {
  id: string;
  name: string;
  category: string;
  tag: string;
  url: string;
  desc: string;
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
  { id: "education", name: "Education", icon: "GraduationCap" },
  { id: "design", name: "Design", icon: "Palette" },
  { id: "media", name: "Media", icon: "Play" },
  { id: "ai", name: "AI Tools", icon: "Sparkles" },
  { id: "dev", name: "Dev", icon: "Code2" },
  { id: "builders", name: "Builders", icon: "Globe" },
  { id: "productivity", name: "Productivity", icon: "Briefcase" },
  { id: "tts", name: "Text-to-Speech", icon: "Volume2" },
  { id: "streaming", name: "Streaming", icon: "Tv" },
  { id: "news", name: "Tech News", icon: "Newspaper" },
];

export const links: LinkItem[] = [
  // Learning & Education
  { id: "1", name: "W3Schools", category: "education", tag: "Tutorials", url: "https://w3schools.com", desc: "Web development tutorials" },
  { id: "2", name: "Codecademy", category: "education", tag: "Courses", url: "https://codecademy.com", desc: "Coding education" },
  { id: "3", name: "Visual Paradigm", category: "education", tag: "Modeling", url: "https://visual-paradigm.com", desc: "UML, modeling, and diagramming tool" },
  { id: "4", name: "Logic.ly", category: "education", tag: "Simulation", url: "https://logic.ly", desc: "Logic circuit simulation" },
  { id: "5", name: "Unstuck Study", category: "education", tag: "Study", url: "https://unstuckstudy.com", desc: "Study support platform" },
  { id: "6", name: "NotebookLM", category: "education", tag: "Research", url: "https://notebooklm.google", desc: "AI-powered research notebook by Google" },
  { id: "7", name: "Rewritify", category: "education", tag: "Writing", url: "https://rewritify.com", desc: "Text rewriting and paraphrasing tool" },
  { id: "8", name: "JotBot", category: "education", tag: "Writing", url: "https://jotbot.com", desc: "AI writing assistant for essays and academic content" },
  { id: "9", name: "Scribbr AI", category: "education", tag: "Academic", url: "https://scribbr.ai", desc: "Academic writing, grammar, and citation help" },
  
  // Design, UI/UX, and Visual Tools
  { id: "10", name: "Framer", category: "design", tag: "No-Code", url: "https://framer.com", desc: "No-code website and UI design" },
  { id: "11", name: "Figma", category: "design", tag: "UI/UX", url: "https://figma.com", desc: "Collaborative interface design tool" },
  { id: "12", name: "Motion Zajno", category: "design", tag: "Animation", url: "https://motion.zajno.com", desc: "Web animations and motion graphics" },
  { id: "13", name: "CSS Animation", category: "design", tag: "CSS", url: "https://cssanimation.io", desc: "CSS animation library/tool" },
  { id: "14", name: "Logo Diffusion", category: "design", tag: "AI Logo", url: "https://logodiffusion.com", desc: "AI-generated logos" },
  { id: "15", name: "Brandmark", category: "design", tag: "AI Logo", url: "https://brandmark.io", desc: "AI-based logo design tool" },
  { id: "16", name: "Gamma", category: "design", tag: "Presentations", url: "https://gamma.app", desc: "Create presentations with no formatting work" },
  { id: "17", name: "Microsoft Designer", category: "design", tag: "AI Design", url: "https://designer.microsoft.com", desc: "Stunning designs in a flash" },
  { id: "18", name: "ReactBits", category: "design", tag: "React", url: "https://reactbits.dev", desc: "All React animations" },
  { id: "19", name: "Lightwing", category: "design", tag: "UI", url: "https://lightwing.io", desc: "UI design tool" },
  { id: "20", name: "ShaderGradient", category: "design", tag: "Background", url: "https://shadergradient.co", desc: "Beautiful gradient backgrounds" },
  
  // Media, Video, and Animation
  { id: "21", name: "Jitter", category: "media", tag: "Animation", url: "https://jitter.video", desc: "Motion design and animation tool" },
  { id: "22", name: "Pexels", category: "media", tag: "Stock", url: "https://pexels.com", desc: "Free stock photos and videos" },
  { id: "23", name: "TinyWow", category: "media", tag: "Tools", url: "https://tinywow.com", desc: "File conversion, PDF, and video tools" },
  { id: "24", name: "Opus Pro", category: "media", tag: "AI Video", url: "https://opus.pro", desc: "Turns videos into shorts" },
  { id: "25", name: "Gamma", category: "media", tag: "Presentations", url: "https://gamma.app", desc: "AI-generated presentations" },
  { id: "26", name: "Menace", category: "media", tag: "Video", url: "https://menace.app", desc: "Video creation tool" },
  { id: "27", name: "Genspark", category: "media", tag: "AI", url: "https://genspark.ai", desc: "AI media generation" },
  
  // AI Tools & Writing Assistants
  { id: "28", name: "ChatGPT", category: "ai", tag: "Chat", url: "https://chatgpt.com", desc: "Conversational AI by OpenAI" },
  { id: "29", name: "Claude", category: "ai", tag: "Chat", url: "https://claude.ai", desc: "AI assistant by Anthropic" },
  { id: "30", name: "GitHub Copilot", category: "ai", tag: "Coding", url: "https://copilot.github.com", desc: "GitHub's AI code assistant" },
  { id: "31", name: "Blackbox AI", category: "ai", tag: "Coding", url: "https://blackbox.ai", desc: "AI-powered coding helper" },
  { id: "32", name: "Tome", category: "ai", tag: "Presentations", url: "https://tome.app", desc: "AI for storytelling and presentations" },
  { id: "33", name: "Humanize AI", category: "ai", tag: "Writing", url: "https://humanizeai.pro", desc: "Converts AI content into human-like writing" },
  { id: "34", name: "Cohesive", category: "ai", tag: "Collaboration", url: "https://cohesive.so", desc: "AI writing and content collaboration" },
  { id: "35", name: "Napkin AI", category: "ai", tag: "Ideas", url: "https://napkin.ai", desc: "Idea capturing and AI summarization" },
  { id: "36", name: "Go AI", category: "ai", tag: "Productivity", url: "https://go.ai", desc: "General AI assistant" },
  { id: "37", name: "Raena AI", category: "ai", tag: "Marketing", url: "https://raena.ai", desc: "AI for brand building and marketing" },
  { id: "38", name: "Perplexity", category: "ai", tag: "Search", url: "https://perplexity.ai", desc: "AI search assistant" },
  { id: "39", name: "Skywork", category: "ai", tag: "Research", url: "https://skywork.ai", desc: "Research and slide deck creation" },
  
  // Developer Resources
  { id: "40", name: "DevDocs", category: "dev", tag: "Docs", url: "https://devdocs.io", desc: "Developer documentation" },
  { id: "41", name: "Daily.dev", category: "dev", tag: "News", url: "https://daily.dev", desc: "Developer news aggregator" },
  { id: "42", name: "JitCode", category: "dev", tag: "Collaboration", url: "https://jitcode.com", desc: "Collaborative coding platform" },
  { id: "43", name: "Lecture.new", category: "dev", tag: "Education", url: "https://lecture.new", desc: "Instantly create lectures" },
  { id: "44", name: "Wireshark", category: "dev", tag: "Network", url: "https://wireshark.org", desc: "Network protocol analyzer" },
  
  // Website Builders
  { id: "45", name: "Jindo", category: "builders", tag: "Builder", url: "https://jindo.com", desc: "Website builder" },
  { id: "46", name: "Weebly", category: "builders", tag: "Drag & Drop", url: "https://weebly.com", desc: "Drag-and-drop website builder" },
  { id: "47", name: "Wix", category: "builders", tag: "Templates", url: "https://wix.com", desc: "Popular website builder with templates" },
  { id: "48", name: "Odoo", category: "builders", tag: "Business", url: "https://odoo.com", desc: "Business management suite with website builder" },
  
  // Productivity & Business
  { id: "49", name: "Grammarly", category: "productivity", tag: "Writing", url: "https://grammarly.com", desc: "Grammar, spellcheck, and writing improvement" },
  { id: "50", name: "Clark AI", category: "productivity", tag: "Education", url: "https://clark.ai", desc: "Education and note-taking assistant" },
  { id: "51", name: "NotebookLM", category: "productivity", tag: "Research", url: "https://notebooklm.google", desc: "Research notebook powered by AI" },
  { id: "52", name: "Cohesive", category: "productivity", tag: "Teams", url: "https://cohesive.so", desc: "AI writing/collaboration for teams" },
  
  // Text-to-Speech
  { id: "53", name: "ElevenLabs", category: "tts", tag: "Voice AI", url: "https://elevenlabs.io", desc: "AI voice generator" },
  { id: "54", name: "Resemble AI", category: "tts", tag: "Cloning", url: "https://resemble.ai", desc: "AI voice generator and voice cloning" },
  { id: "55", name: "WellSaid", category: "tts", tag: "Voice", url: "https://wellsaidlabs.com", desc: "Convert text to voice in real time" },
  { id: "56", name: "Play.ht", category: "tts", tag: "Voice", url: "https://play.ht", desc: "Generate realistic text to speech voice online" },
  { id: "57", name: "Podcast AI", category: "tts", tag: "Podcast", url: "https://podcast.ai", desc: "AI-generated podcast powered by Play.ht" },
  { id: "58", name: "VALL-E X", category: "tts", tag: "Synthesis", url: "https://vallex-demo.github.io", desc: "Cross-lingual neural codec language model" },
  { id: "59", name: "TorToiSe", category: "tts", tag: "Open Source", url: "https://github.com/neonbjb/tortoise-tts", desc: "Multi-voice text-to-speech system" },
  { id: "60", name: "Bark", category: "tts", tag: "Open Source", url: "https://github.com/suno-ai/bark", desc: "Transformer-based text-to-audio model" },
  
  // Streaming/Entertainment
  { id: "61", name: "AnimePahe", category: "streaming", tag: "Anime", url: "https://animepahe.com", desc: "Anime streaming" },
  { id: "62", name: "AnimeSuge", category: "streaming", tag: "Anime", url: "https://animesuge.io", desc: "Anime streaming" },
  { id: "63", name: "KimCartoon", category: "streaming", tag: "Cartoons", url: "https://kimcartoon.li", desc: "Cartoon streaming" },
  { id: "64", name: "FMovies", category: "streaming", tag: "Movies", url: "https://fmovies.to", desc: "Movie streaming" },
  { id: "65", name: "HD Movies", category: "streaming", tag: "Movies", url: "https://hdmovies.com", desc: "Movie streaming" },
  { id: "66", name: "9anime", category: "streaming", tag: "Anime", url: "https://9anime.to", desc: "Anime streaming" },
  { id: "67", name: "Zoroto", category: "streaming", tag: "Anime", url: "https://zoroto.com", desc: "Anime streaming" },
  { id: "68", name: "HiMovies", category: "streaming", tag: "Movies", url: "https://himovies.top", desc: "Movie streaming" },
  
  // Tech News & Trends
  { id: "69", name: "TechCrunch", category: "news", tag: "Startups", url: "https://techcrunch.com", desc: "Startup and tech news" },
  { id: "70", name: "CNET", category: "news", tag: "Reviews", url: "https://cnet.com", desc: "Tech product reviews and news" },
  { id: "71", name: "Gizmodo", category: "news", tag: "Culture", url: "https://gizmodo.com", desc: "Tech and pop culture" },
  { id: "72", name: "The Verge", category: "news", tag: "Digital", url: "https://theverge.com", desc: "Tech, gadgets, and digital culture" },
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

// Legacy export for backwards compatibility
export const promptVault = prompts[0];
