import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface MdxItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  content: string;
  [key: string]: unknown;
}

export interface MdxItemMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  [key: string]: unknown;
}

export function getAllItems<T extends MdxItemMeta>(
  contentDirectory: string,
  customFields: (data: Record<string, unknown>, content: string) => Partial<T> = () => ({})
): T[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);

  const items = files
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
        readingTime: readingTime(content).text,
        ...data,
        ...customFields(data, content),
      } as T;
    })
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    });

  return items;
}

export function getItemBySlug<T extends MdxItem>(
  contentDirectory: string,
  slug: string,
  customFields: (data: Record<string, unknown>, content: string) => Partial<T> = () => ({})
): T | null {
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
    readingTime: readingTime(content).text,
    content,
    ...data,
    ...customFields(data, content),
  } as T;
}

export function getAllSlugs(contentDirectory: string): string[] {
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
