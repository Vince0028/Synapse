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
    FileText
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
        id: "ai",
        label: "AI Powerhouse",
        icon: Sparkles,
        items: [
            { id: "chatbot", label: "Chat Bots", icon: Bot },
            { id: "humanizer", label: "Humanizers", icon: UserCheck },
            { id: "detector", label: "AI Detectors", icon: UserCheck },
            { id: "coding-ai", label: "Coding Assistants", icon: Terminal },
            { id: "ai-api", label: "AI APIs & Cloud", icon: Cpu },
            { id: "generator", label: "Generators", icon: Sparkles },
        ]
    },
    {
        type: "group",
        id: "dev",
        label: "Dev Ecosystem",
        icon: Code2,
        items: [
            { id: "hosting", label: "Hosting & Cloud", icon: Server },
            { id: "database", label: "Databases", icon: Database },
            { id: "ide", label: "IDEs & Editors", icon: Terminal },
            { id: "devtools", label: "Tools & Utilities", icon: Wrench },
            { id: "public-apis", label: "Public APIs", icon: Globe },
        ]
    },
    {
        type: "group",
        id: "student",
        label: "Student Center",
        icon: GraduationCap,
        items: [
            { id: "study", label: "Study Tools", icon: BookOpen },
            { id: "research", label: "Research", icon: BookOpen },
            { id: "writing", label: "Writing Support", icon: PenTool },
        ]
    },
    {
        type: "group",
        id: "creative",
        label: "Creative Studio",
        icon: Palette,
        items: [
            { id: "design", label: "Design, UI & 3D", icon: Palette },
            { id: "media", label: "Media & Video", icon: Video },
        ]
    },
    {
        type: "group",
        id: "entertainment",
        label: "Entertainment",
        icon: Tv,
        items: [
            { id: "streaming", label: "Streaming", icon: Film },
            { id: "news", label: "Tech News", icon: Newspaper },
        ]
    }
];

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function AppSidebar({ activeCategory, onCategoryChange, ...props }: AppSidebarProps) {
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
                        return (
                            <Collapsible key={group.id} className="group/collapsible">
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={group.label}>
                                            <GroupIcon />
                                            <span>{group.label}</span>
                                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
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
            <SidebarRail />
        </Sidebar>
    )
}
