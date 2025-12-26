/**
 * Navigation Data Provider (Server Component)
 * 
 * This server component fetches blog posts and projects from MDX content files
 * and passes them to the client-side MainNavigation component.
 * 
 * Must be used in place of MainNavigation in server-rendered pages.
 */

import { getAllPosts } from "@/lib/blog";
import { getAllProjects } from "@/lib/projects";
import { MainNavigation } from "./navigation-menu";
import type { Blog, Project } from "@/types";

/**
 * Transforms MDX blog posts to the navigation Blog format
 */
function transformBlogsForNav(posts: ReturnType<typeof getAllPosts>): Blog[] {
    return posts.slice(0, 3).map((post, index) => ({
        id: String(index + 1),
        title: post.title,
        description: post.description,
        image: post.image || "/blog/default-thumbnail.png",
        date: post.date,
        slug: post.slug,
    }));
}

/**
 * Placeholder projects used when fewer than 3 real projects exist
 */
const placeholderProjects: Project[] = [
    {
        title: "Coming Soon",
        href: "/projects",
        description: "New project in development. Stay tuned for updates!",
        image: "/og-image.png",
    },
    {
        title: "More Projects",
        href: "/projects",
        description: "Check back soon for more exciting projects and builds.",
        image: "/og-image.png",
    },
];

/**
 * Transforms MDX projects to the navigation Project format
 * Pads with placeholder projects if fewer than 3 exist
 */
function transformProjectsForNav(projects: ReturnType<typeof getAllProjects>): Project[] {
    const realProjects = projects.slice(0, 3).map((project) => ({
        title: project.title,
        href: `/projects/${project.slug}`,
        description: project.description,
        image: project.image || "/og-image.png",
    }));

    // Pad with placeholders if fewer than 3 real projects
    while (realProjects.length < 3) {
        realProjects.push(placeholderProjects[realProjects.length - 1] || placeholderProjects[0]);
    }

    return realProjects;
}

export function NavigationDataProvider() {
    const posts = getAllPosts();
    const projects = getAllProjects();

    const navBlogs = transformBlogsForNav(posts);
    const navProjects = transformProjectsForNav(projects);

    return <MainNavigation blogs={navBlogs} projects={navProjects} />;
}
