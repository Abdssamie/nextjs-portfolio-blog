import { Blog } from "@/types";
import Image from "next/image";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import { BookOpen } from "lucide-react";
import Link from "next/link";

interface BlogGridProps {
  blogs: Blog[];
  useNavigationMenuLink?: boolean;
}

export function BlogGrid({ blogs, useNavigationMenuLink = true }: BlogGridProps) {
  if (blogs.length !== 3) throw new Error("Expected 3 blogs");

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
    <ul className="grid w-100 gap-3 p-4 md:w-125 md:grid-cols-2 md:grid-rows-2 md:grid-flow-col lg:w-150">
      <li>
        <div className="flex flex-col p-2">
          {renderLink(
            `/blog/${blogs[1].slug}`,
            "block rounded-md p-2 hover:bg-muted",
             <>
                <h3 className="text-lg font-medium">{blogs[1].title}</h3>
                <p className="text-sm leading-tight text-muted-foreground">
                  {blogs[1].description}
                </p>
             </>
          )}
        </div>
      </li>
      <li>
        <div className="flex flex-col p-2">
          {renderLink(
            `/blog/${blogs[2].slug}`,
            "block rounded-md p-2 hover:bg-muted",
             <>
                <h3 className="text-lg font-medium">{blogs[2].title}</h3>
                <p className="text-sm leading-tight text-muted-foreground">
                  {blogs[2].description}
                </p>
             </>
          )}
        </div>
      </li>
      <li className="md:row-span-2">
        {renderLink(
          "/blog",
          "group relative flex h-full w-full select-none flex-col justify-end overflow-hidden rounded-md no-underline outline-none focus:shadow-md",
           <>
              {/* Image fills the container. object-cover ensures it covers the area. */}
              <Image
                src={blogs[0].image}
                alt="Blog"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none" />

              {/* Content sits on top */}
              <div className="relative z-20 p-6 text-white">
                <BookOpen className="h-6 w-6" />
                <div className="mb-2 mt-4 text-lg font-medium">All Posts</div>
                <p className="text-sm leading-tight text-gray-200">
                  Explore thoughts on software architecture, career growth, and
                  the modern web.
                </p>
              </div>
           </>
        )}
      </li>
    </ul>
  );
}
