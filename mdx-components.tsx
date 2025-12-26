/**
 * MDX Components Configuration
 * 
 * This file MUST remain at the project root - it's required by Next.js MDX setup.
 * @see https://nextjs.org/docs/app/building-your-application/configuring/mdx
 * 
 * Provides custom React components for rendering MDX content with:
 * - Styled headings with auto-generated IDs for anchor linking
 * - Custom paragraph, list, and code block styling
 * - Link styling consistent with the site theme
 * 
 * The useMDXComponents function is called automatically by the @next/mdx plugin.
 */
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 id={typeof children === "string" ? children.toLowerCase().replace(/\s+/g, "-") : undefined} className="scroll-mt-24 text-4xl font-bold tracking-tight mt-8 mb-4">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 id={typeof children === "string" ? children.toLowerCase().replace(/\s+/g, "-") : undefined} className="scroll-mt-24 text-2xl font-semibold tracking-tight mt-8 mb-4 border-b pb-2">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 id={typeof children === "string" ? children.toLowerCase().replace(/\s+/g, "-") : undefined} className="scroll-mt-24 text-xl font-semibold mt-6 mb-3">
                {children}
            </h3>
        ),
        p: ({ children }) => (
            <p className="leading-7 mb-4">
                {children}
            </p>
        ),
        ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 space-y-2">
                {children}
            </ul>
        ),
        ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 space-y-2">
                {children}
            </ol>
        ),
        li: ({ children }) => (
            <li className="leading-7">
                {children}
            </li>
        ),
        code: ({ children }) => (
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                {children}
            </code>
        ),
        pre: ({ children }) => (
            <pre className="mb-4 mt-4 overflow-x-auto rounded-lg border bg-muted p-4">
                {children}
            </pre>
        ),
        blockquote: ({ children }) => (
            <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
                {children}
            </blockquote>
        ),
        a: ({ href, children }) => (
            <a href={href} className="text-primary underline underline-offset-4 hover:text-primary/80">
                {children}
            </a>
        ),
        strong: ({ children }) => (
            <strong className="font-semibold">
                {children}
            </strong>
        ),
        ...components,
    };
}
