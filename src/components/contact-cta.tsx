import React from "react";
import { siteConfig } from "@/config/site";
import { AnimatedText } from "@/components/ui/animated-text";

const socialLinks = [
    {
        name: siteConfig.social.email.label,
        href: siteConfig.social.email.href,
        icon: siteConfig.social.email.icon,
        label: siteConfig.social.email.ctaLabel,
    },
    {
        name: siteConfig.social.github.label,
        href: siteConfig.social.github.href,
        icon: siteConfig.social.github.icon,
        label: siteConfig.social.github.ctaLabel,
    },
    {
        name: siteConfig.social.linkedin.label,
        href: siteConfig.social.linkedin.href,
        icon: siteConfig.social.linkedin.icon,
        label: siteConfig.social.linkedin.ctaLabel,
    },
];

export function ContactCTA() {
    return (
        <section className="py-24 px-4">
            <div className="container mx-auto max-w-4xl text-center">
                {/* Main CTA */}
                <div className="mb-12">
                    <div className="inline-flex items-center justify-center rounded-full bg-primary/10 p-4 mb-6">
                        <siteConfig.contact.ctaIcon className="h-8 w-8 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                        <AnimatedText text={siteConfig.contact.title} animation="one" />
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        {siteConfig.contact.description}
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
                        {siteConfig.contact.availability}
                    </span>
                </div>
            </div>
        </section>
    );
}
