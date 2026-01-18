import * as React from "react"
import {
    LayoutGrid,
    GraduationCap,
    Palette,
    Play,
    Sparkles,
    Code2,
    Tv,
    Globe,
    Briefcase,
    Volume2,
    Newspaper,
    ChevronDown,
    ChevronRight,
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
} from "@/components/ui/sidebar"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Map category IDs to their icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    all: LayoutGrid,
    education: GraduationCap,
    design: Palette,
    media: Play,
    ai: Sparkles,
    dev: Code2,
    streaming: Tv,
    builders: Globe,
    productivity: Briefcase,
    tts: Volume2,
    news: Newspaper,
};

// Define the sidebar structure
const sidebarStructure = [
    {
        type: "single",
        id: "all",
        label: "Dashboard",
        icon: LayoutGrid
    },
    {
        type: "group",
        label: "PDF & Writing",
        icon: FileText,
        items: [
            { id: "education", label: "Education", icon: GraduationCap },
            { id: "productivity", label: "Productivity", icon: Briefcase },
            { id: "ai", label: "AI Tools", icon: Sparkles },
        ]
    },
    {
        type: "group",
        label: "Creative Studio",
        icon: Palette,
        items: [
            { id: "design", label: "Design Tools", icon: Palette },
            { id: "media", label: "Media & Video", icon: Play },
            { id: "tts", label: "Text to Speech", icon: Volume2 },
        ]
    },
    {
        type: "group",
        label: "Development",
        icon: Code2,
        items: [
            { id: "dev", label: "Dev Resources", icon: Code2 },
            { id: "builders", label: "Website Builders", icon: Globe },
        ]
    },
    {
        type: "group",
        label: "Entertainment",
        icon: Tv,
        items: [
            { id: "streaming", label: "Streaming", icon: Tv },
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
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <LayoutGrid className="size-4" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold text-lg tracking-tight">Synapse</span>
                        <span className="text-xs text-muted-foreground">Resource Hub</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                {sidebarStructure.map((group, index) => {
                    if (group.type === "single") {
                        const Icon = group.icon;
                        const isActive = activeCategory === group.id;
                        return (
                            <SidebarGroup key={group.id || index}>
                                <SidebarMenu>
                                    <SidebarMenuItem>
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
                                </SidebarMenu>
                            </SidebarGroup>
                        );
                    }

                    return (
                        <Collapsible key={index} defaultOpen className="group/collapsible">
                            <SidebarGroup>
                                <SidebarGroupLabel asChild>
                                    <CollapsibleTrigger className="text-sm font-medium">
                                        {group.label}
                                        <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                                    </CollapsibleTrigger>
                                </SidebarGroupLabel>
                                <CollapsibleContent>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {group.items?.map((item) => {
                                                const Icon = item.icon;
                                                const isActive = activeCategory === item.id;
                                                return (
                                                    <SidebarMenuItem key={item.id}>
                                                        <SidebarMenuButton
                                                            isActive={isActive}
                                                            onClick={() => {
                                                                onCategoryChange(item.id);
                                                                window.scrollTo({ top: 0, behavior: "smooth" });
                                                            }}
                                                        >
                                                            <Icon />
                                                            <span>{item.label}</span>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                );
                                            })}
                                        </SidebarMenu>
                                    </SidebarGroupContent>
                                </CollapsibleContent>
                            </SidebarGroup>
                        </Collapsible>
                    );
                })}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
