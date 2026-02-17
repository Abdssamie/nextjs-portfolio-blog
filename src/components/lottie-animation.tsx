"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { siteConfig } from "@/config/site";

export function LottieAnimation() {
    if (!siteConfig.lottieAnimation.showOnHome) {
        return null;
    }

    return (
        <section className="container mx-auto flex justify-center py-8 px-4">
            <div className="w-full max-w-xl">
                <DotLottieReact
                    src={siteConfig.lottieAnimation.src}
                    loop
                    autoplay
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}
