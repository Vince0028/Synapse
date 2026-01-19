import * as React from "react"
import {
    LayoutGrid,
    GraduationCap,
    Palette,
    Play,
    Sparkles,
    Code2,
    Tv,
    ChevronDown,
    ChevronRight,
    Bot,
    UserCheck,
    Terminal,
    Cpu,
    Server,
    Database,
    Wrench,
    BookOpen,
    PenTool,
    Video,
    Newspaper,
    Film,
    Globe,
    FileText,
    Workflow,
    Cloud,
    Box
} from "lucide-react"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { SuggestWebsite } from "@/components/SuggestWebsite"

// Define the detailed sidebar structure
const sidebarStructure = [
    {
        type: "single",
        id: "all",
        label: "Dashboard",
        icon: LayoutGrid
    },
    {
        type: "single",
        id: "prompts",
        label: "Prompt Vault",
        icon: FileText
    },
    {
        type: "group",
        id: "ai-chat",
        label: "AI Chat",
        icon: Bot,
        items: [
            { id: "general", label: "General Chat", icon: Bot },
            { id: "search", label: "Search Chat", icon: Globe },
            { id: "reasoning", label: "Reasoning Chat", icon: Sparkles },
        ]
    },
    {
        type: "group",
        id: "create-ai",
        label: "Create with AI",
        icon: Palette,
        items: [
            { id: "image", label: "Image Maker", icon: Palette },
            { id: "video", label: "Video Maker", icon: Video },
            { id: "music", label: "Music Maker", icon: Film },
            { id: "voice", label: "Voice Maker", icon: Sparkles },
            { id: "app-builder", label: "App Builder", icon: LayoutGrid },
        ]
    },
    {
        type: "group",
        id: "code-build",
        label: "Code & Build",
        icon: Code2,
        items: [
            { id: "code-helper", label: "Code Helper", icon: Bot },
            { id: "code-editor", label: "Code Editor", icon: Terminal },
            { id: "testing", label: "Testing Tools", icon: Wrench },
        ]
    },
    {
        type: "group",
        id: "deploy",
        label: "Deploy & Store",
        icon: Cloud,
        items: [
            { id: "hosting", label: "Website Hosting", icon: Globe },
            { id: "cloud", label: "Cloud Servers", icon: Server },
            { id: "database", label: "Databases", icon: Database },
            { id: "auth", label: "Login & Auth", icon: UserCheck },
        ]
    },
    {
        type: "group",
        id: "automation",
        label: "Automate Tasks",
        icon: Workflow,
        items: [
            { id: "no-code", label: "No Code Automation", icon: Sparkles },
            { id: "developer", label: "Developer Automation", icon: Code2 },
            { id: "agents", label: "AI Agents", icon: Bot },
        ]
    },
    {
        type: "group",
        id: "learn",
        label: "Learn & Study",
        icon: GraduationCap,
        items: [
            { id: "practice", label: "Coding Practice", icon: Code2 },
            { id: "courses", label: "Courses", icon: Video },
            { id: "docs", label: "Docs & Guides", icon: BookOpen },
            { id: "stem", label: "Math & STEM", icon: Sparkles },
            { id: "research", label: "Research Papers", icon: BookOpen },
            { id: "news", label: "News & Podcasts", icon: Newspaper },
        ]
    },
    {
        type: "group",
        id: "writing",
        label: "Write Better",
        icon: PenTool,
        items: [
            { id: "grammar", label: "Grammar Check", icon: UserCheck },
            { id: "essay", label: "Essay Help", icon: PenTool },
            { id: "rewrite", label: "Rewriting", icon: Sparkles },
            { id: "citation", label: "Citations", icon: BookOpen },
        ]
    },
    {
        type: "group",
        id: "design",
        label: "Design & Media",
        icon: Palette,
        items: [
            { id: "ui", label: "UI Design", icon: LayoutGrid },
            { id: "graphics", label: "Graphics", icon: Palette },
            { id: "3d", label: "3D Design", icon: Box },
            { id: "fonts", label: "Icons & Fonts", icon: PenTool },
            { id: "media", label: "Video Assets", icon: Video },
        ]
    },
    {
        type: "group",
        id: "public-apis",
        label: "Public APIs",
        icon: Globe,
        items: [
            { id: "test", label: "Test APIs", icon: Terminal },
            { id: "fun", label: "Fun APIs", icon: Sparkles },
            { id: "data", label: "Data APIs", icon: Database },
            { id: "weather", label: "Weather & Maps", icon: Globe },
            { id: "finance", label: "Finance", icon: LayoutGrid },
            { id: "security", label: "Security", icon: UserCheck },
            { id: "media-api", label: "Media APIs", icon: Video },
        ]
    }
];

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function AppSidebar({ activeCategory, onCategoryChange, ...props }: AppSidebarProps) {
    const [openGroup, setOpenGroup] = React.useState<string | null>(() => {
        const found = sidebarStructure.find(group =>
            group.type === "group" && group.items?.some(item => item.id === activeCategory)
        );
        return found?.id || null;
    });

    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg overflow-hidden">
                        <img src="/logo/synapce_logo.png" alt="Synapse Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold text-lg tracking-tight">Synapse</span>
                        <span className="text-xs text-muted-foreground">Resource Hub</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {sidebarStructure.map((group, index) => {
                        if (group.type === "single") {
                            const Icon = group.icon;
                            const isActive = activeCategory === group.id;
                            return (
                                <SidebarMenuItem key={group.id || index}>
                                    <SidebarMenuButton
                                        isActive={isActive}
                                        onClick={() => {
                                            onCategoryChange(group.id!);
                                            window.scrollTo({ top: 0, behavior: "smooth" });
                                        }}
                                        size="lg"
                                    >
                                        <Icon />
                                        <span className="font-medium">{group.label}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            );
                        }

                        const GroupIcon = group.icon;
                        const isGroupOpen = openGroup === group.id;

                        return (
                            <Collapsible
                                key={group.id}
                                open={isGroupOpen}
                                onOpenChange={(open) => {
                                    if (open) {
                                        setOpenGroup(group.id!);
                                    } else {
                                        setOpenGroup(null);
                                    }
                                }}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={group.label}>
                                            <GroupIcon />
                                            <span>{group.label}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                                        <SidebarMenuSub>
                                            {group.items?.map((item) => {
                                                const isActive = activeCategory === item.id;
                                                return (
                                                    <SidebarMenuSubItem key={item.id}>
                                                        <SidebarMenuSubButton
                                                            isActive={isActive}
                                                            onClick={() => {
                                                                onCategoryChange(item.id);
                                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                                            }}
                                                        >
                                                            <span>{item.label}</span>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                );
                                            })}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        );
                    })}
                </SidebarMenu>
            </SidebarContent>

            {/* Suggest Website Button at Bottom */}
            <div className="p-4 border-t">
                <SuggestWebsite />
            </div>

            <SidebarRail />
        </Sidebar>
    )
}
