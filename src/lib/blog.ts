import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image?: string;
    tags?: string[];
    readingTime: string;
    content: string;
}

export interface BlogPostMeta {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image?: string;
    tags?: string[];
    readingTime: string;
}

export function getAllPosts(): BlogPostMeta[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    const files = fs.readdirSync(contentDirectory);

    const posts = files
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => {
            const slug = file.replace(/\.mdx$/, "");
            const filePath = path.join(contentDirectory, file);
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data, content } = matter(fileContents);

            return {
                slug,
                title: data.title || slug,
                description: data.description || "",
                date: data.date || "",
                author: data.author || "Anonymous",
                image: data.image || undefined,
                tags: data.tags || undefined,
                readingTime: readingTime(content).text,
            };
        })
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);

    if (!fs.existsSync(filePath)) {
        return null;
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
        author: data.author || "Anonymous",
        image: data.image || undefined,
        tags: data.tags || undefined,
        readingTime: readingTime(content).text,
        content,
    };
}

export function getAllSlugs(): string[] {
    if (!fs.existsSync(contentDirectory)) {
        return [];
    }

    return fs
        .readdirSync(contentDirectory)
        .filter((file) => file.endsWith(".mdx"))
        .map((file) => file.replace(/\.mdx$/, ""));
}

export interface TocItem {
    id: string;
    text: string;
    level: number;
}

export function extractToc(content: string): TocItem[] {
    const headingRegex = /^(#{1,3})\s+(.+)$/gm;
    const toc: TocItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
        const level = match[1].length;
        const text = match[2];
        const id = text.toLowerCase().replace(/\s+/g, "-");

        toc.push({ id, text, level });
    }

    return toc;
}
