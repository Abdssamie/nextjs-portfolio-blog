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
    "React": <SiReact className="w-4 h-4 text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="w-4 h-4" />,
    "TypeScript": <SiTypescript className="w-4 h-4 text-[#3178C6]" />,
    "JavaScript": <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
    "Tailwind": <SiTailwindcss className="w-4 h-4 text-[#06B6D4]" />,
    "CSS": <SiCss3 className="w-4 h-4 text-[#1572B6]" />,
    "Node.js": <SiNodedotjs className="w-4 h-4 text-[#339933]" />,
    "Prisma": <SiPrisma className="w-4 h-4" />,
    "PostgreSQL": <SiPostgresql className="w-4 h-4 text-[#4169E1]" />,
    "Docker": <SiDocker className="w-4 h-4 text-[#2496ED]" />,
    "Git": <SiGit className="w-4 h-4 text-[#F05032]" />,
    "Vercel": <SiVercel className="w-4 h-4" />,
    "Server": <Server className="w-4 h-4 text-primary" />,
    "Frontend": <Palette className="w-4 h-4 text-pink-500" />,
    "Hooks": <Layers className="w-4 h-4 text-purple-500" />,
    "Design": <Palette className="w-4 h-4 text-pink-500" />,
    "API": <Cloud className="w-4 h-4 text-blue-500" />,
    "Database": <Database className="w-4 h-4 text-green-500" />,
};

interface TopicsLineProps {
    tags?: string[];
}

export function TopicsLine({ tags = [] }: TopicsLineProps) {
    if (tags.length === 0) return null;

    return (
        <div className="flex flex-wrap items-center gap-3">
            {tags.map((tag) => {
                const icon = iconMap[tag] || <Code2 className="w-4 h-4 text-muted-foreground" />;

                return (
                    <div
                        key={tag}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border text-sm"
                    >
                        {icon}
                        <span className="text-muted-foreground">{tag}</span>
                    </div>
                );
            })}
        </div>
    );
}
