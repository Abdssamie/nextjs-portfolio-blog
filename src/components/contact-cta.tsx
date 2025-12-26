import React from "react";
import { Mail, Linkedin, MessageCircle } from "lucide-react";
import { SiGithub } from "react-icons/si";

const socialLinks = [
    {
        name: "Email",
        href: "mailto:contact@abdessamie.com",
        icon: Mail,
        label: "Send me an email",
    },
    {
        name: "GitHub",
        href: "https://github.com/abdessamie",
        icon: SiGithub,
        label: "Check my code",
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/abdessamie",
        icon: Linkedin,
        label: "Connect professionally",
    },
];

export function ContactCTA() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                {/* Main CTA */}
                <div className="mb-12">
                    <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-6">
                        <MessageCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        Let&apos;s Build Something Together
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Need help automating your workflows or building
                        internal tools? I&apos;d love to hear from you.
                    </p>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-full border border-border bg-card/50 px-6 py-3 transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:shadow-lg dark:border-white/10 dark:hover:border-primary"
                        >
                            <link.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="font-medium text-foreground">{link.name}</span>
                        </a>
                    ))}
                </div>

                {/* Availability Badge */}
                <div className="mt-12 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        Available for new projects
                    </span>
                </div>
            </div>
        </section>
    );
}
