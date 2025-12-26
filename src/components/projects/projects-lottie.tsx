"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function ProjectsLottieAnimation() {
    return (
        <div className="flex justify-center items-center">
            <DotLottieReact
                src="/Animated Dashboards.lottie"
                loop
                autoplay
                style={{ width: "350px", height: "350px" }}
            />
        </div>
    );
}
