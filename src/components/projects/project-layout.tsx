import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { TableOfContents } from "@/components/blog/toc";
import { TopicsLine } from "@/components/blog/topics-line";
import { TocItem, ProjectSection } from "@/lib/projects";
import { ProjectCarousel } from "./project-carousel";

interface ProjectLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    date: string;
    readingTime: string;
    image?: string;
    tags?: string[];
    github?: string;
    demo?: string;
    sections?: ProjectSection[];
    toc: TocItem[];
}

export function ProjectLayout({
    children,
    title,
    description,
    date,
    readingTime,
    image,
    tags,
    github,
    demo,
    sections,
    toc,
}: ProjectLayoutProps) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const hasSections = sections && sections.length > 0;

    return (
        <article>
            {/* Carousel Hero - if sections exist */}
            {hasSections ? (
                <ProjectCarousel sections={sections} />
            ) : image ? (
                /* Single Hero Image - fallback */
                <div className="relative w-full aspect-video max-h-[500px] overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>
            ) : null}

            <div className="container mx-auto max-w-6xl px-4 py-12">
                {/* Back link */}
                <Link
                    href="/projects"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Projects
                </Link>

                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        {title}
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground">{description}</p>

                    <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {formattedDate}
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {readingTime}
                        </span>

                        {/* Links */}
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                            >
                                <SiGithub className="h-4 w-4" />
                                GitHub
                            </a>
                        )}
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                            </a>
                        )}
                    </div>
                </header>

                {/* Topics Line */}
                {tags && tags.length > 0 && (
                    <div className="mb-10">
                        <TopicsLine tags={tags} />
                    </div>
                )}

                {/* Content with TOC sidebar */}
                <div className="flex gap-12">
                    {/* Main content */}
                    <div className="min-w-0 flex-1">
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            {children}
                        </div>
                    </div>

                    {/* TOC Sidebar - hidden on mobile */}
                    <aside className="hidden w-64 shrink-0 lg:block">
                        <TableOfContents items={toc} />
                    </aside>
                </div>
            </div>
        </article>
    );
}
