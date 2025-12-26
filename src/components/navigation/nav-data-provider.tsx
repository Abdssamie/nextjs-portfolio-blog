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
 * Transforms MDX projects to the navigation Project format
 */
function transformProjectsForNav(projects: ReturnType<typeof getAllProjects>): Project[] {
    return projects.slice(0, 3).map((project) => ({
        title: project.title,
        href: `/projects/${project.slug}`,
        description: project.description,
        image: project.image || "/next.svg",
    }));
}

export function NavigationDataProvider() {
    const posts = getAllPosts();
    const projects = getAllProjects();

    const navBlogs = transformBlogsForNav(posts);
    const navProjects = transformProjectsForNav(projects);

    return <MainNavigation blogs={navBlogs} projects={navProjects} />;
}
