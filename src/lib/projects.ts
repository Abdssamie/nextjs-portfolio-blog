import path from "path";
import { getAllItems, getItemBySlug, getAllSlugs as getSlugs, extractToc as extractTocUtil, TocItem, MdxItem, MdxItemMeta } from "./mdx";

const contentDirectory = path.join(process.cwd(), "content/projects");

export interface ProjectSection {
    image: string;
    title: string;
    description: string;
}

export interface ProjectPost extends MdxItem {
    image?: string;
    tags?: string[];
    github?: string;
    demo?: string;
    sections?: ProjectSection[];
}

export interface ProjectPostMeta extends MdxItemMeta {
    image?: string;
    tags?: string[];
    github?: string;
    demo?: string;
    sections?: ProjectSection[];
}

export function getAllProjects(): ProjectPostMeta[] {
    return getAllItems<ProjectPostMeta>(contentDirectory, (data) => ({
        image: (data.image as string) || undefined,
        tags: (data.tags as string[]) || undefined,
        github: (data.github as string) || undefined,
        demo: (data.demo as string) || undefined,
        sections: (data.sections as ProjectSection[]) || undefined,
    }));
}

export function getProjectBySlug(slug: string): ProjectPost | null {
    return getItemBySlug<ProjectPost>(contentDirectory, slug, (data) => ({
        image: (data.image as string) || undefined,
        tags: (data.tags as string[]) || undefined,
        github: (data.github as string) || undefined,
        demo: (data.demo as string) || undefined,
        sections: (data.sections as ProjectSection[]) || undefined,
    }));
}

export function getAllProjectSlugs(): string[] {
    return getSlugs(contentDirectory);
}

export { type TocItem };

export function extractProjectToc(content: string): TocItem[] {
    return extractTocUtil(content);
}
