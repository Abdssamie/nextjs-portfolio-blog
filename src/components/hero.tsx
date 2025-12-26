import React from "react";

export function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-24 text-center">
      <h1 className="flex flex-col items-center text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        <span className="mb-4">Building</span>
        <div className="relative h-12 overflow-hidden sm:h-16 md:h-20 lg:h-24">
          <ul className="animate-flip text-primary flex flex-col items-center">
            <li className="flex h-12 items-center justify-center sm:h-16 md:h-20 lg:h-24">
              <span className="bg-sky-500 px-4 py-1 text-white shadow-lg skew-x-[-10deg]">
                React & Next.js
              </span>
            </li>
            <li className="flex h-12 items-center justify-center sm:h-16 md:h-20 lg:h-24">
              <span className="bg-emerald-500 px-4 py-1 text-white shadow-lg skew-x-[-10deg]">
                Python & SQL
              </span>
            </li>
            <li className="flex h-12 items-center justify-center sm:h-16 md:h-20 lg:h-24">
              <span className="bg-orange-500 px-4 py-1 text-white shadow-lg skew-x-[-10deg]">
                Full Stack Apps
              </span>
            </li>
          </ul>
        </div>
        <span className="mt-4">Solutions</span>
      </h1>
      
      <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground sm:text-xl">
        I am a Full Stack Developer specializing in React, Next.js, TypeScript, Python, and Postgres.
        I turn complex problems into scalable, user-friendly applications.
      </p>
    </section>
  );
}
