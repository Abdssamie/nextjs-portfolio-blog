"use client";

import React from "react";

interface TechStackCardProps {
    icon: React.ReactNode;
    name: string;
    description?: string;
    className?: string;
}

export function TechStackCard({ icon, name, description, className = "" }: TechStackCardProps) {
    return (
        <div className={`tech-card group relative cursor-pointer rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-foreground/30 hover:shadow-xl dark:border-white/15 dark:hover:border-white/30 ${className}`}>
            {/* Shine effect */}
            <div className="shine pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute bottom-[55%] left-1/2 h-[150%] w-[150%] -translate-x-1/2 rounded-full bg-gradient-conic from-emerald-500/0 via-emerald-500 to-emerald-300/20 opacity-10 blur-[35px] dark:opacity-10" />
            </div>

            {/* Background tiles animation */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl [mask-image:radial-gradient(circle_at_60%_5%,black_0%,black_15%,transparent_60%)]">
                <div className="tiles absolute inset-0 opacity-0 transition-opacity duration-250 group-hover:opacity-100 group-hover:delay-250">
                    <div className="tile tile-1 absolute left-0 top-0 h-[10%] w-[22.5%] animate-tile bg-emerald-500/5 opacity-0" />
                    <div className="tile tile-2 absolute left-[22.5%] top-0 h-[10%] w-[27.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-6s]" />
                    <div className="tile tile-3 absolute left-[50%] top-0 h-[10%] w-[27.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-4s]" />
                    <div className="tile tile-4 absolute left-[77.5%] top-0 h-[10%] w-[22.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-2s]" />
                    <div className="tile tile-5 absolute left-0 top-[10%] h-[22.5%] w-[22.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-4s]" />
                    <div className="tile tile-6 absolute left-[22.5%] top-[10%] h-[22.5%] w-[27.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-2s]" />
                    <div className="tile tile-7 absolute left-[50%] top-[10%] h-[22.5%] w-[27.5%] animate-tile bg-emerald-500/5 opacity-0" />
                    <div className="tile tile-8 absolute left-[77.5%] top-[10%] h-[22.5%] w-[22.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-4s]" />
                    <div className="tile tile-9 absolute left-[50%] top-[32.5%] h-[22.5%] w-[27.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-6s]" />
                    <div className="tile tile-10 absolute left-[77.5%] top-[32.5%] h-[22.5%] w-[22.5%] animate-tile bg-emerald-500/5 opacity-0 [animation-delay:-2s]" />
                </div>

                {/* Line animations */}
                <div className="line line-1 absolute inset-0 opacity-0 transition-all duration-150 group-hover:opacity-100">
                    <div className="absolute left-0 right-0 top-[10%] h-px origin-left scale-x-0 bg-border transition-transform duration-350 group-hover:scale-x-100 group-hover:delay-0" />
                    <div className="absolute bottom-0 left-[22.5%] top-0 w-px origin-top scale-y-0 bg-border transition-transform duration-350 group-hover:scale-y-100 group-hover:delay-0" />
                </div>
                <div className="line line-2 absolute inset-0 opacity-0 transition-all duration-150 group-hover:opacity-100">
                    <div className="absolute left-0 right-0 top-[32.5%] h-px origin-left scale-x-0 bg-border transition-transform duration-350 group-hover:scale-x-100 group-hover:delay-150" />
                    <div className="absolute bottom-0 left-[50%] top-0 w-px origin-top scale-y-0 bg-border transition-transform duration-350 group-hover:scale-y-100 group-hover:delay-150" />
                </div>
                <div className="line line-3 absolute inset-0 opacity-0 transition-all duration-150 group-hover:opacity-100">
                    <div className="absolute left-0 right-0 top-[55%] h-px origin-left scale-x-0 bg-border transition-transform duration-350 group-hover:scale-x-100 group-hover:delay-300" />
                    <div className="absolute bottom-0 right-[22.5%] top-0 w-px origin-top scale-y-0 bg-border transition-transform duration-350 group-hover:scale-y-100 group-hover:delay-300" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20">
                <div className="mb-4 inline-flex rounded-xl border border-border/50 bg-muted/50 p-3 text-3xl transition-all duration-250 group-hover:border-border group-hover:bg-muted">
                    {icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground">{name}</h3>
                {description && (
                    <p className="mt-1 text-sm text-muted-foreground">{description}</p>
                )}
            </div>
        </div>
    );
}
