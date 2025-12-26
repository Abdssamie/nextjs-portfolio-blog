"use client";

import { useEffect, useState, useCallback } from "react";
import { TocItem } from "@/lib/blog";
import { List } from "lucide-react";

interface TableOfContentsProps {
    items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>("");

    const handleScroll = useCallback(() => {
        const headings = items.map((item) => document.getElementById(item.id)).filter(Boolean);

        let currentActiveId = "";
        for (const heading of headings) {
            if (heading) {
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 150) {
                    currentActiveId = heading.id;
                }
            }
        }

        if (currentActiveId !== activeId) {
            setActiveId(currentActiveId);
        }
    }, [items, activeId]);

    useEffect(() => {
        // Initial check
        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    if (items.length === 0) {
        return null;
    }

    return (
        <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-auto">
            <div className="flex items-center gap-2 mb-4">
                <List className="h-4 w-4 text-muted-foreground" />
                <h4 className="text-sm font-semibold text-foreground">
                    On this page
                </h4>
            </div>
            <ul className="space-y-1 text-sm border-l border-border">
                {items.map((item) => (
                    <li key={item.id}>
                        <a
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                const element = document.getElementById(item.id);
                                if (element) {
                                    element.scrollIntoView({ behavior: "smooth" });
                                    setActiveId(item.id);
                                }
                            }}
                            className={`block py-1.5 transition-all duration-200 hover:text-foreground border-l-2 -ml-[2px] ${activeId === item.id
                                    ? "border-primary text-primary font-medium bg-primary/5"
                                    : "border-transparent text-muted-foreground hover:border-muted-foreground/50"
                                }`}
                            style={{
                                paddingLeft: `${(item.level - 1) * 12 + 12}px`,
                            }}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
