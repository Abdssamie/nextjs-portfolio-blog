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
    SiLinear,
    SiGithub,
    SiSharp,
    SiDotnet,
    SiRedis,
    SiExpress,
} from "react-icons/si";
import { AnimatedText } from "@/components/ui/animated-text";
import { siteConfig } from "@/config/site";

const iconComponentMap: Record<string, React.ReactNode> = {
  SiReact: <SiReact className="text-[#61DAFB]" />,
  SiNextdotjs: <SiNextdotjs className="text-foreground" />,
  SiTypescript: <SiTypescript className="text-[#3178C6]" />,
  SiPython: <SiPython className="text-[#3776AB]" />,
  SiFastapi: <SiFastapi className="text-[#009688]" />,
  SiPostgresql: <SiPostgresql className="text-[#4169E1]" />,
  SiDocker: <SiDocker className="text-[#2496ED]" />,
  SiTailwindcss: <SiTailwindcss className="text-[#06B6D4]" />,
  SiNodedotjs: <SiNodedotjs className="text-[#339933]" />,
  SiGit: <SiGit className="text-[#F05032]" />,
  SiNeovim: <SiNeovim className="text-[#57A143]" />,
  SiLinear: <SiLinear className="text-[#5E6AD2]" />,
  SiGithub: <SiGithub className="text-foreground" />,
  SiSharp: <SiSharp className="text-[#512BD4]" />,
  SiDotnet: <SiDotnet className="text-[#512BD4]" />,
  SiRedis: <SiRedis className="text-[#DC382D]" />,
  SiExpress: <SiExpress className="text-foreground" />,
};

export function TechStackSection() {
    const technologies = siteConfig.techStack.map((tech) => ({
        ...tech,
        icon: iconComponentMap[tech.iconName] || <SiGithub className="text-foreground" />,
    }));

    return (
        <section className="container mx-auto py-16 px-4">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    <AnimatedText text="Tech Stack" animation="three" />
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
