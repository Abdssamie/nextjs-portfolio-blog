import Link from "next/link";
import Image from "next/image";
import { getAllProjects } from "@/lib/projects";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { Calendar, Clock, ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ProjectsLottieAnimation } from "@/components/projects/projects-lottie";

export const metadata = {
    title: "Projects",
    description: "Explore my portfolio of web applications and development projects.",
};

export default function ProjectsPage() {
    const projects = getAllProjects();
    const featuredProject = projects[0];
    const otherProjects = projects.slice(1);

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-16 px-4 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 dark:from-slate-900 dark:via-indigo-950 dark:to-slate-900">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

                    <div className="relative container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Lottie Animation */}
                            <div className="flex justify-center items-center">
                                <ProjectsLottieAnimation />
                            </div>

                            {/* Text Content */}
                            <div className="text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                    🚀 My work
                                </span>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                    Projects & <span className="text-primary">Builds</span>
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                                    A collection of web applications, tools, and experiments.
                                    From dashboards to automation systems, each project solves real problems.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">Full-Stack</span>
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">Dashboards</span>
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">Automation</span>
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">IoT</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects */}
                <section className="container mx-auto max-w-6xl px-4 py-16">
                    {projects.length === 0 ? (
                        <p className="text-center text-muted-foreground py-20">
                            No projects yet. Check back soon!
                        </p>
                    ) : (
                        <div className="space-y-16">
                            {/* Featured Project */}
                            {featuredProject && (
                                <Link
                                    href={`/projects/${featuredProject.slug}`}
                                    className="group block"
                                >
                                    <article className="relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl dark:border-white/10">
                                        <div className="grid md:grid-cols-2">
                                            {/* Image */}
                                            <div className="relative h-64 md:h-full min-h-[300px] bg-muted overflow-hidden">
                                                {featuredProject.image ? (
                                                    <Image
                                                        src={featuredProject.image}
                                                        alt={featuredProject.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                                        <span className="text-6xl font-bold text-primary/20">
                                                            {featuredProject.title.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                                <div className="mb-4 flex items-center gap-2">
                                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                                        Featured
                                                    </span>
                                                    {featuredProject.github && (
                                                        <SiGithub className="h-4 w-4 text-muted-foreground" />
                                                    )}
                                                    {featuredProject.demo && (
                                                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                                                    )}
                                                </div>

                                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar className="h-4 w-4" />
                                                        {new Date(featuredProject.date).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "long",
                                                        })}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="h-4 w-4" />
                                                        {featuredProject.readingTime}
                                                    </span>
                                                </div>

                                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    {featuredProject.title}
                                                </h2>

                                                <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">
                                                    {featuredProject.description}
                                                </p>

                                                {featuredProject.tags && (
                                                    <div className="mt-4 flex flex-wrap gap-2">
                                                        {featuredProject.tags.slice(0, 4).map((tag) => (
                                                            <span
                                                                key={tag}
                                                                className="px-2 py-0.5 rounded-full bg-muted text-xs text-muted-foreground"
                                                            >
                                                                {tag}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                                                    View project
                                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )}

                            {/* Other Projects Grid */}
                            {otherProjects.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-8">More Projects</h3>
                                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                        {otherProjects.map((project) => (
                                            <Link
                                                key={project.slug}
                                                href={`/projects/${project.slug}`}
                                                className="group block"
                                            >
                                                <article className="h-full rounded-2xl border border-border bg-card/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-xl dark:border-white/10">
                                                    {/* Image */}
                                                    <div className="relative h-48 bg-muted overflow-hidden">
                                                        {project.image ? (
                                                            <Image
                                                                src={project.image}
                                                                alt={project.title}
                                                                fill
                                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                            />
                                                        ) : (
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                                                <span className="text-4xl font-bold text-primary/20">
                                                                    {project.title.charAt(0)}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-6">
                                                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="h-3.5 w-3.5" />
                                                                {new Date(project.date).toLocaleDateString("en-US", {
                                                                    year: "numeric",
                                                                    month: "short",
                                                                })}
                                                            </span>
                                                            {project.github && <SiGithub className="h-3.5 w-3.5" />}
                                                            {project.demo && <ExternalLink className="h-3.5 w-3.5" />}
                                                        </div>

                                                        <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                                            {project.title}
                                                        </h3>

                                                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                                            {project.description}
                                                        </p>

                                                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            View project
                                                            <ArrowUpRight className="h-3.5 w-3.5" />
                                                        </div>
                                                    </div>
                                                </article>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </section>
            </main>
            <SiteFooter />
        </div>
    );
}
