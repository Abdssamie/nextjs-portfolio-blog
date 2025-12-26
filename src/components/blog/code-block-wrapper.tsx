"use client";

import { CodeBlock } from "./code-block";

interface CodeBlockWrapperProps {
    code: string;
    language: string;
}

export function CodeBlockWrapper({ code, language }: CodeBlockWrapperProps) {
    return <CodeBlock language={language}>{code}</CodeBlock>;
}
