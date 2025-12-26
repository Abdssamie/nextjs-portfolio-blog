import React from "react";
import Image from "next/image";

export function AboutSection() {
    return (
        <section className="relative py-20 px-4 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900">
            {/* Gradient overlay on top for smooth transition */}
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
            {/* Gradient overlay on bottom for smooth transition */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />

            <div className="relative container mx-auto max-w-4xl">
                <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 md:p-12 shadow-xl backdrop-blur-sm dark:border-white/10 dark:bg-white/5">
                    {/* Profile Image */}
                    <div className="mb-6 flex justify-center md:justify-start">
                        <div className="relative">
                            <Image
                                src="/profile.jpeg"
                                alt="Abdessamie"
                                width={100}
                                height={100}
                                className="rounded-full border-4 border-white shadow-lg dark:border-white/20"
                            />
                        </div>
                    </div>

                    <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
                        Hi, I&apos;m Abdessamie.{" "}
                        <span className="text-slate-500 dark:text-white/70">Nice to meet you.</span>
                    </h2>

                    <div className="space-y-4 text-base leading-relaxed text-slate-600 dark:text-white/80 sm:text-lg md:text-xl">
                        <p>
                            I specialize in building <strong className="text-slate-900 dark:text-white">automation systems</strong> and helping businesses
                            create powerful <strong className="text-slate-900 dark:text-white">internal tools</strong> that streamline their operations.
                            From client-facing applications to back-office workflows, I turn complex manual processes into
                            elegant, automated solutions.
                        </p>

                        <p>
                            Whether it&apos;s integrating APIs, building custom dashboards, or designing systems that
                            scale with your business—I&apos;m passionate about creating technology that works
                            <em> for </em> you, not the other way around.
                        </p>

                        <p>
                            I&apos;m naturally curious, quietly confident, and always exploring new ways to make
                            businesses more efficient through thoughtful automation and clean code.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
