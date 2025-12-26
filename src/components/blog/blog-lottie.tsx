"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function BlogLottieAnimation() {
    return (
        <div className="flex justify-center items-center py-8">
            <DotLottieReact
                src="/Developer.lottie"
                loop
                autoplay
                style={{ width: "300px", height: "300px" }}
            />
        </div>
    );
}
