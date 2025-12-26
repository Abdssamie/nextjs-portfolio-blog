import path from "path";
import { getAllItems, getItemBySlug, getAllSlugs as getSlugs, extractToc as extractTocUtil, TocItem, MdxItem, MdxItemMeta } from "./mdx";

const contentDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost extends MdxItem {
    author: string;
    image?: string;
    tags?: string[];
}

export interface BlogPostMeta extends MdxItemMeta {
    author: string;
    image?: string;
    tags?: string[];
}

export function getAllPosts(): BlogPostMeta[] {
    return getAllItems<BlogPostMeta>(contentDirectory, (data) => ({
        author: data.author || "Anonymous",
        image: data.image || undefined,
        tags: data.tags || undefined,
    }));
}

export function getPostBySlug(slug: string): BlogPost | null {
    return getItemBySlug<BlogPost>(contentDirectory, slug, (data) => ({
        author: data.author || "Anonymous",
        image: data.image || undefined,
        tags: data.tags || undefined,
    }));
}

export function getAllSlugs(): string[] {
    return getSlugs(contentDirectory);
}

export { type TocItem };

export function extractToc(content: string): TocItem[] {
    return extractTocUtil(content);
}
