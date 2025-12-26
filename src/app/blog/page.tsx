import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { BlogLottieAnimation } from "@/components/blog/blog-lottie";

export const metadata = {
    title: "Blog",
    description: "Thoughts on development, automation, and technology.",
};

export default function BlogPage() {
    const posts = getAllPosts();
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-16 px-4 bg-gradient-to-br from-gray-200 via-gray-100 to-gray-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

                    <div className="relative container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            {/* Lottie Animation */}
                            <div className="flex justify-center items-center">
                                <BlogLottieAnimation />
                            </div>

                            {/* Text Content */}
                            <div className="text-center md:text-left">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                    ✨ Welcome to my blog
                                </span>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                                    Insights & <span className="text-primary">Ideas</span>
                                </h1>
                                <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
                                    Exploring the world of development, automation, and modern web technologies.
                                    From practical tutorials to deep dives into the tools that power the web.
                                </p>
                                <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">Next.js</span>
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">React</span>
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">TypeScript</span>
                                    <span className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">Automation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Posts */}
                <section className="container mx-auto max-w-6xl px-4 py-16">
                    {posts.length === 0 ? (
                        <p className="text-center text-muted-foreground py-20">
                            No posts yet. Check back soon!
                        </p>
                    ) : (
                        <div className="space-y-16">
                            {/* Featured Post */}
                            {featuredPost && (
                                <Link
                                    href={`/blog/${featuredPost.slug}`}
                                    className="group block"
                                >
                                    <article className="relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-2xl dark:border-white/10">
                                        <div className="grid md:grid-cols-2">
                                            {/* Image */}
                                            <div className="relative h-64 md:h-full min-h-[300px] bg-muted overflow-hidden">
                                                {featuredPost.image ? (
                                                    <Image
                                                        src={featuredPost.image}
                                                        alt={featuredPost.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                                        <span className="text-6xl font-bold text-primary/20">
                                                            {featuredPost.title.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                                <div className="mb-4">
                                                    <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                                        Featured
                                                    </span>
                                                </div>

                                                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                                                    <span className="flex items-center gap-1.5">
                                                        <Calendar className="h-4 w-4" />
                                                        {new Date(featuredPost.date).toLocaleDateString("en-US", {
                                                            year: "numeric",
                                                            month: "long",
                                                            day: "numeric",
                                                        })}
                                                    </span>
                                                    <span className="flex items-center gap-1.5">
                                                        <Clock className="h-4 w-4" />
                                                        {featuredPost.readingTime}
                                                    </span>
                                                </div>

                                                <h2 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                                                    {featuredPost.title}
                                                </h2>

                                                <p className="mt-4 text-muted-foreground leading-relaxed line-clamp-3">
                                                    {featuredPost.description}
                                                </p>

                                                <div className="mt-6 inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-300">
                                                    Read article
                                                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            )}

                            {/* Other Posts Grid */}
                            {otherPosts.length > 0 && (
                                <div>
                                    <h3 className="text-2xl font-bold mb-8">More Articles</h3>
                                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                        {otherPosts.map((post) => (
                                            <Link
                                                key={post.slug}
                                                href={`/blog/${post.slug}`}
                                                className="group block"
                                            >
                                                <article className="h-full rounded-2xl border border-border bg-card/50 overflow-hidden transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-xl dark:border-white/10">
                                                    {/* Image */}
                                                    <div className="relative h-48 bg-muted overflow-hidden">
                                                        {post.image ? (
                                                            <Image
                                                                src={post.image}
                                                                alt={post.title}
                                                                fill
                                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                            />
                                                        ) : (
                                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                                                                <span className="text-4xl font-bold text-primary/20">
                                                                    {post.title.charAt(0)}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="p-6">
                                                        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="h-3.5 w-3.5" />
                                                                {new Date(post.date).toLocaleDateString("en-US", {
                                                                    year: "numeric",
                                                                    month: "short",
                                                                    day: "numeric",
                                                                })}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Clock className="h-3.5 w-3.5" />
                                                                {post.readingTime}
                                                            </span>
                                                        </div>

                                                        <h3 className="text-lg font-semibold tracking-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                                            {post.title}
                                                        </h3>

                                                        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                                                            {post.description}
                                                        </p>

                                                        <div className="mt-4 inline-flex items-center gap-1.5 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            Read more
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
