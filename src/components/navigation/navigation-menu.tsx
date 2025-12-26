/**
 * Main Navigation Menu (Client Component)
 * 
 * Renders the primary site navigation with dropdown menus for Projects and Blog.
 * Receives data as props from NavigationDataProvider (server component).
 * 
 * @see NavigationDataProvider - Server wrapper that provides content data
 */
"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ProjectGrid } from "./project-grid";
import { BlogGrid } from "./blog-grid";
import { Project, Blog } from "@/types";

interface MainNavigationProps {
  projects: Project[];
  blogs: Blog[];
}

export function MainNavigation({ projects, blogs }: MainNavigationProps) {
  // Ensure we have exactly 3 items for the grid layout
  // If less than 3, we won't render the dropdown content
  const hasEnoughProjects = projects.length >= 3;
  const hasEnoughBlogs = blogs.length >= 3;

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/" passHref>
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          {hasEnoughProjects ? (
            <>
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ProjectGrid projects={projects.slice(0, 3)} />
              </NavigationMenuContent>
            </>
          ) : (
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/projects" passHref>
                Projects
              </Link>
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>

        <NavigationMenuItem>
          {hasEnoughBlogs ? (
            <>
              <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
              <NavigationMenuContent>
                <BlogGrid blogs={blogs.slice(0, 3)} />
              </NavigationMenuContent>
            </>
          ) : (
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/blog" passHref>
                Blog
              </Link>
            </NavigationMenuLink>
          )}
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
