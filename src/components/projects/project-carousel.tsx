"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { ProjectSection } from "@/lib/projects";

interface ProjectCarouselProps {
    sections: ProjectSection[];
}

export function ProjectCarousel({ sections }: ProjectCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % sections.length);
    }, [sections.length]);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    const openPreview = () => {
        setIsPreviewOpen(true);
        setIsPaused(true);
    };

    const closePreview = () => {
        setIsPreviewOpen(false);
    };

    // Close preview on Escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                closePreview();
            }
        };

        if (isPreviewOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isPreviewOpen]);

    // Auto-play
    useEffect(() => {
        if (isPaused || sections.length <= 1) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, sections.length, nextSlide]);

    if (sections.length === 0) return null;

    const currentSection = sections[currentIndex];
    const isEven = currentIndex % 2 === 0;

    return (
        <>
            <section
                className="relative py-12 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => !isPreviewOpen && setIsPaused(false)}
            >
                <div className="container mx-auto max-w-6xl px-4">
                    <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? "" : "md:[direction:rtl]"}`}>
                        {/* Image */}
                        <div
                            className={`relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden bg-card border border-border shadow-lg group cursor-pointer ${isEven ? "" : "md:[direction:ltr]"}`}
                            onClick={openPreview}
                        >
                            <Image
                                src={currentSection.image}
                                alt={currentSection.title}
                                fill
                                className="object-contain p-4"
                                priority
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 rounded-full p-3">
                                    <ZoomIn className="w-6 h-6 text-foreground" />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className={`space-y-4 ${isEven ? "" : "md:[direction:ltr]"}`}>
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                Section {currentIndex + 1} of {sections.length}
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                {currentSection.title}
                            </h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {currentSection.description}
                            </p>
                        </div>
                    </div>

                    {/* Navigation */}
                    {sections.length > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-4">
                            {/* Prev Button */}
                            <button
                                onClick={prevSlide}
                                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {sections.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                                            ? "bg-primary w-8"
                                            : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={nextSlide}
                                className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors cursor-pointer"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Image Preview Modal */}
            {isPreviewOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    onClick={closePreview}
                >
                    {/* Close button */}
                    <button
                        onClick={closePreview}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                        aria-label="Close preview"
                    >
                        <X className="w-6 h-6 text-white" />
                    </button>

                    {/* Image container */}
                    <div
                        className="relative w-full max-w-5xl h-[80vh] rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={currentSection.image}
                            alt={currentSection.title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Image title */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                        <h4 className="text-white text-xl font-semibold">{currentSection.title}</h4>
                        <p className="text-white/70 text-sm mt-1">Click anywhere or press Escape to close</p>
                    </div>

                    {/* Navigation in preview */}
                    {sections.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prevSlide();
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6 text-white" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    nextSlide();
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6 text-white" />
                            </button>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
