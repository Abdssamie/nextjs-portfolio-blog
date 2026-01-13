/**
 * Featured Projects Section
 * 
 * Displays the 3 most recent projects from MDX content files on the homepage.
 * Projects are sorted by date (newest first) in the getAllProjects function.
 */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import { AnimatedText } from "@/components/ui/animated-text";

export function FeaturedProjects() {
    const allProjects = getAllProjects();
    // Display up to 3 most recent projects
    const featuredProjects = allProjects.slice(0, 3);

    if (featuredProjects.length === 0) {
        return null;
    }

    return (
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
            {/* Gradient overlay on top for smooth transition */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
            {/* Gradient overlay on bottom for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

            <div className="relative container mx-auto max-w-6xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        <AnimatedText text="Featured Projects" animation="four" />
                    </h2>
                    <p className="mt-3 text-lg text-muted-foreground">
                        Some of the things I&apos;ve built recently.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-foreground/20 hover:shadow-xl dark:border-white/10 dark:hover:border-white/20"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
                                <Image
                                    src={project.image || "/og-image.png"}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                            </div>

                            {/* Hover indicator */}
                            <div className="absolute bottom-6 right-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="text-sm font-medium text-primary">View →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
