"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MobileNavProps {
    items: { label: string; href: string }[];
    socials?: { label: string; href: string; icon: React.ReactNode }[];
}

export function MobileNav({ items, socials }: MobileNavProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            {/* Hamburger button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md hover:bg-muted transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Mobile menu overlay */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 top-16 z-40 bg-background/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Menu panel */}
                    <nav className="fixed left-0 right-0 top-16 z-50 border-b bg-background p-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
                        <ul className="flex flex-col space-y-2">
                            {items.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block rounded-md px-4 py-3 text-lg font-medium hover:bg-muted transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {socials && socials.length > 0 && (
                            <div className="mt-4 flex items-center gap-4 px-4 pt-4 border-t">
                                {socials.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        )}
                    </nav>
                </>
            )}
        </div>
    );
}
