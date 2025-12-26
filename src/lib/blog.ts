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

const blogFieldMapper = (data: Record<string, unknown>) => ({
    author: (data.author as string) || "Anonymous",
    image: (data.image as string) || undefined,
    tags: (data.tags as string[]) || undefined,
});

export function getAllPosts(): BlogPostMeta[] {
    return getAllItems<BlogPostMeta>(contentDirectory, blogFieldMapper);
}

export function getPostBySlug(slug: string): BlogPost | null {
    return getItemBySlug<BlogPost>(contentDirectory, slug, blogFieldMapper);
}

export function getAllSlugs(): string[] {
    return getSlugs(contentDirectory);
}

export { type TocItem };

export function extractToc(content: string): TocItem[] {
    return extractTocUtil(content);
}
