"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function LottieAnimation() {
    return (
        <section className="container mx-auto flex justify-center py-8 px-4">
            <div className="w-full max-w-xl">
                <DotLottieReact
                    src="/Web Development.lottie"
                    loop
                    autoplay
                    className="w-full h-auto"
                />
            </div>
        </section>
    );
}
