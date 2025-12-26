/**
 * Dynamic Sitemap Generator
 * 
 * Generates a sitemap.xml for search engines, including:
 * - Static pages (home, blog listing, projects listing)
 * - Dynamic blog posts from MDX content
 * - Dynamic project pages from MDX content
 */
import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllProjects } from "@/lib/projects";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://abdessamie.dev";

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();
    const projects = getAllProjects();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1,
        },
        {
            url: `${BASE_URL}/blog`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];

    // Blog post pages
    const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Project pages
    const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `${BASE_URL}/projects/${project.slug}`,
        lastModified: new Date(project.date),
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...blogPages, ...projectPages];
}
