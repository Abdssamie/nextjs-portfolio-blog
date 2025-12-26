import React from "react";
import { TechStackCard } from "./tech-stack-card";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiPython,
    SiPostgresql,
    SiDocker,
    SiTailwindcss,
    SiNodedotjs,
    SiGit,
    SiFastapi,
    SiNeovim,
} from "react-icons/si";

const technologies = [
    {
        icon: <SiReact className="text-[#61DAFB]" />,
        name: "React",
        description: "UI library for building interfaces",
        span: "md:col-span-1",
    },
    {
        icon: <SiNextdotjs className="text-foreground" />,
        name: "Next.js",
        description: "Full-stack React framework",
        span: "md:col-span-1",
    },
    {
        icon: <SiTypescript className="text-[#3178C6]" />,
        name: "TypeScript",
        description: "Type-safe JavaScript",
        span: "md:col-span-2",
    },
    {
        icon: <SiPython className="text-[#3776AB]" />,
        name: "Python",
        description: "Backend & automation",
        span: "md:col-span-1",
    },
    {
        icon: <SiFastapi className="text-[#009688]" />,
        name: "FastAPI",
        description: "High-performance APIs",
        span: "md:col-span-1",
    },
    {
        icon: <SiPostgresql className="text-[#4169E1]" />,
        name: "PostgreSQL",
        description: "Relational database",
        span: "md:col-span-1",
    },
    {
        icon: <SiDocker className="text-[#2496ED]" />,
        name: "Docker",
        description: "Containerization",
        span: "md:col-span-1",
    },
    {
        icon: <SiTailwindcss className="text-[#06B6D4]" />,
        name: "Tailwind CSS",
        description: "Utility-first styling",
        span: "md:col-span-2",
    },
    {
        icon: <SiNodedotjs className="text-[#339933]" />,
        name: "Node.js",
        description: "JavaScript runtime",
        span: "md:col-span-1",
    },
    {
        icon: <SiGit className="text-[#F05032]" />,
        name: "Git",
        description: "Version control",
        span: "md:col-span-1",
    },
    {
        icon: <SiNeovim className="text-[#57A143]" />,
        name: "Neovim",
        description: "Hyperextensible Vim-based text editor",
        span: "md:col-span-2",
    },
];

export function TechStackSection() {
    return (
        <section className="container mx-auto py-16 px-4">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Tech Stack
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">
                    Technologies I work with daily to build scalable applications.
                </p>
            </div>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
                {technologies.map((tech) => (
                    <TechStackCard
                        key={tech.name}
                        icon={tech.icon}
                        name={tech.name}
                        description={tech.description}
                        className={tech.span}
                    />
                ))}
            </div>
        </section>
    );
}
