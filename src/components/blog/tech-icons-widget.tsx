"use client";

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiCss3,
    SiNodedotjs,
    SiPrisma,
    SiPostgresql,
    SiDocker,
    SiGit,
    SiVercel
} from "react-icons/si";
import { Server, Palette, Layers, Code2, Database, Cloud } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    "React": <SiReact className="w-full h-full text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="w-full h-full" />,
    "TypeScript": <SiTypescript className="w-full h-full text-[#3178C6]" />,
    "JavaScript": <SiJavascript className="w-full h-full text-[#F7DF1E]" />,
    "Tailwind": <SiTailwindcss className="w-full h-full text-[#06B6D4]" />,
    "CSS": <SiCss3 className="w-full h-full text-[#1572B6]" />,
    "Node.js": <SiNodedotjs className="w-full h-full text-[#339933]" />,
    "Prisma": <SiPrisma className="w-full h-full" />,
    "PostgreSQL": <SiPostgresql className="w-full h-full text-[#4169E1]" />,
    "Docker": <SiDocker className="w-full h-full text-[#2496ED]" />,
    "Git": <SiGit className="w-full h-full text-[#F05032]" />,
    "Vercel": <SiVercel className="w-full h-full" />,
    "Server": <Server className="w-full h-full text-primary" />,
    "Frontend": <Palette className="w-full h-full text-pink-500" />,
    "Hooks": <Layers className="w-full h-full text-purple-500" />,
    "Design": <Palette className="w-full h-full text-pink-500" />,
    "API": <Cloud className="w-full h-full text-blue-500" />,
    "Database": <Database className="w-full h-full text-green-500" />,
};

const positions = [
    { top: "10%", left: "15%", size: "w-12 h-12", delay: "0s" },
    { top: "5%", left: "60%", size: "w-10 h-10", delay: "0.1s" },
    { top: "25%", left: "80%", size: "w-14 h-14", delay: "0.2s" },
    { top: "50%", left: "10%", size: "w-10 h-10", delay: "0.3s" },
    { top: "45%", left: "45%", size: "w-16 h-16", delay: "0.4s" },
    { top: "70%", left: "25%", size: "w-12 h-12", delay: "0.5s" },
    { top: "75%", left: "70%", size: "w-10 h-10", delay: "0.6s" },
    { top: "35%", left: "30%", size: "w-8 h-8", delay: "0.7s" },
];

interface TechIconsWidgetProps {
    tags?: string[];
}

export function TechIconsWidget({ tags = [] }: TechIconsWidgetProps) {
    const displayTags = tags.length > 0 ? tags : ["React", "TypeScript", "Next.js", "CSS"];

    return (
        <div className="relative w-full h-64 md:h-80">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 rounded-3xl" />

            {/* Scattered icons */}
            {displayTags.slice(0, positions.length).map((tag, index) => {
                const pos = positions[index % positions.length];
                const icon = iconMap[tag] || <Code2 className="w-full h-full text-muted-foreground" />;

                return (
                    <div
                        key={tag}
                        className={`absolute ${pos.size} p-2.5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-lg hover:scale-110 transition-transform duration-300`}
                        style={{
                            top: pos.top,
                            left: pos.left,
                            animationDelay: pos.delay,
                        }}
                    >
                        {icon}
                    </div>
                );
            })}

            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <span className="text-sm font-medium text-primary">
                        {displayTags.length} topics
                    </span>
                </div>
            </div>
        </div>
    );
}
