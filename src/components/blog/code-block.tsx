"use client";

import { Highlight, themes } from "prism-react-renderer";
import { useTheme } from "@/lib/providers/themer-provider";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
    children: string;
    language?: string;
}

export function CodeBlock({ children, language = "typescript" }: CodeBlockProps) {
    const { resolvedTheme } = useTheme();
    const [copied, setCopied] = useState(false);

    const theme = resolvedTheme === "dark" ? themes.nightOwl : themes.nightOwlLight;

    const handleCopy = async () => {
        await navigator.clipboard.writeText(children.trim());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group relative my-6">
            {/* Language badge and copy button */}
            <div className="absolute right-2 top-2 flex items-center gap-2 z-10">
                {language && (
                    <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        {language}
                    </span>
                )}
                <button
                    onClick={handleCopy}
                    className="rounded bg-muted/80 p-1.5 text-muted-foreground opacity-0 transition-opacity hover:bg-muted hover:text-foreground group-hover:opacity-100"
                    aria-label="Copy code"
                >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </button>
            </div>

            <Highlight theme={theme} code={children.trim()} language={language}>
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={`${className} overflow-x-auto rounded-xl border p-4 pt-10 text-sm`}
                        style={{ ...style, backgroundColor: "transparent" }}
                    >
                        <code className="block min-w-max">
                            {tokens.map((line, i) => (
                                <div key={i} {...getLineProps({ line })} className="table-row">
                                    <span className="table-cell select-none pr-4 text-right text-muted-foreground/50">
                                        {i + 1}
                                    </span>
                                    <span className="table-cell">
                                        {line.map((token, key) => (
                                            <span key={key} {...getTokenProps({ token })} />
                                        ))}
                                    </span>
                                </div>
                            ))}
                        </code>
                    </pre>
                )}
            </Highlight>
        </div>
    );
}
