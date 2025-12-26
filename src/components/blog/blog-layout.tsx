import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { TableOfContents } from "./toc";
import { TocItem } from "@/lib/blog";
import { TopicsLine } from "./topics-line";

interface BlogLayoutProps {
    children: React.ReactNode;
    title: string;
    description: string;
    date: string;
    author: string;
    readingTime: string;
    image?: string;
    tags?: string[];
    toc: TocItem[];
}

export function BlogLayout({
    children,
    title,
    description,
    date,
    readingTime,
    image,
    tags,
    toc,
}: BlogLayoutProps) {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <article>
            {/* Hero Image - Full Width */}
            {image && (
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
            )}

            <div className="container mx-auto max-w-6xl px-4 py-12">
                {/* Back link */}
                <Link
                    href="/blog"
                    className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Blog
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
