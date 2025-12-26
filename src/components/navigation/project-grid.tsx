import { Project } from "@/types";
import Image from "next/image";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface ProjectGridProps {
  projects: Project[];
  useNavigationMenuLink?: boolean;
}

export function ProjectGrid({ projects, useNavigationMenuLink = true }: ProjectGridProps) {
  if (projects.length !== 3) throw new Error("Expected 3 projects");

  // Limit to 3 projects
  const displayProjects = projects.slice(0, 3);

  const renderLink = (href: string, className: string, children: React.ReactNode) => {
    if (useNavigationMenuLink) {
      return (
        <NavigationMenuLink asChild>
          <a className={className} href={href}>
            {children}
          </a>
        </NavigationMenuLink>
      );
    }
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  };

  return (
    <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 md:grid-rows-2 lg:w-150">
      {displayProjects.map((project, index) => {
        // Big item (index 0) spans 2 rows
        const isFeatured = index === 0;
        const rowSpan = isFeatured ? "md:row-span-2" : "";

        return (
          <li key={index} className={rowSpan}>
            {isFeatured ? (
              // Featured Project (Big Card with Image Background)
              renderLink(
                project.href,
                "group relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md no-underline outline-none focus:shadow-md",
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />
                  <div className="relative z-20 p-6 text-white">
                    <BookOpen className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">{project.title}</div>
                    <p className="text-sm leading-tight text-gray-200">
                      {project.description}
                    </p>
                  </div>
                </>
              )
            ) : (
              // Standard Project (List Item)
              <div className="flex flex-col p-2">
                {renderLink(
                  project.href,
                  "block rounded-md p-2 hover:bg-muted",
                  <>
                    <h3 className="text-lg font-medium">{project.title}</h3>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {project.description}
                    </p>
                  </>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
