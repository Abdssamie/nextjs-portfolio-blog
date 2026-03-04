import path from "path";
import { cache } from "react";
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

export const getAllPosts = cache((): BlogPostMeta[] => {
    return getAllItems<BlogPostMeta>(contentDirectory, blogFieldMapper);
});

export const getPostBySlug = cache((slug: string): BlogPost | null => {
    return getItemBySlug<BlogPost>(contentDirectory, slug, blogFieldMapper);
});

export const getAllSlugs = cache((): string[] => {
    return getSlugs(contentDirectory);
});

export { type TocItem };

export function extractToc(content: string): TocItem[] {
    return extractTocUtil(content);
}
