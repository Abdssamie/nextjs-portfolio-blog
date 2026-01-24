import React from "react";
import Image from "next/image";

export function AvaloniaIcon({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`} style={{ width: '1em', height: '1em' }}>
            <Image
                src="https://i.ibb.co/1GK0Yc0C/image.png"
                alt="Avalonia UI"
                fill
                className="object-contain"
            />
        </div>
    );
}
