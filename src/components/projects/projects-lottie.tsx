"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function ProjectsLottieAnimation() {
    return (
        <div className="flex justify-center items-center w-full max-w-6xl">
            <DotLottieReact
                src="/Animated Dashboards.lottie"
                loop
                autoplay
                style={{ width: "100%", height: "auto" }}
            />
        </div>
    );
}
