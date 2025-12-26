import { MDXRemote } from "next-mdx-remote/rsc";
import { CodeBlockWrapper } from "./code-block-wrapper";

interface MDXContentProps {
    source: string;
}

const components = {
    h1: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = typeof children === "string" ? children.toLowerCase().replace(/\s+/g, "-") : undefined;
        return <h1 id={id} className="scroll-mt-24 text-4xl font-bold tracking-tight mt-10 mb-4" {...props}>{children}</h1>;
    },
    h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = typeof children === "string" ? children.toLowerCase().replace(/\s+/g, "-") : undefined;
        return <h2 id={id} className="scroll-mt-24 text-2xl font-semibold tracking-tight mt-10 mb-4 pb-2 border-b border-border" {...props}>{children}</h2>;
    },
    h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
        const id = typeof children === "string" ? children.toLowerCase().replace(/\s+/g, "-") : undefined;
        return <h3 id={id} className="scroll-mt-24 text-xl font-semibold mt-8 mb-3" {...props}>{children}</h3>;
    },
    p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
        <p className="leading-7 mb-6 text-muted-foreground" {...props}>{children}</p>
    ),
    ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
        <ul className="my-6 ml-6 list-disc space-y-2 text-muted-foreground" {...props}>{children}</ul>
    ),
    ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
        <ol className="my-6 ml-6 list-decimal space-y-2 text-muted-foreground" {...props}>{children}</ol>
    ),
    li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
        <li className="leading-7" {...props}>{children}</li>
    ),
    code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
        // Inline code (no className means it's not from a code block)
        if (!className) {
            return (
                <code className="relative rounded-md bg-muted px-[0.4rem] py-[0.2rem] font-mono text-sm text-primary" {...props}>
                    {children}
                </code>
            );
        }
        // Code block code - extracted by pre
        return <code className={className} {...props}>{children}</code>;
    },
    pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
        // Extract the code content and language from children
        const codeElement = children as React.ReactElement<{
            children: string;
            className?: string;
        }>;
        const code = codeElement?.props?.children || "";
        const className = codeElement?.props?.className || "";
        const language = className.replace(/language-/, "") || "typescript";

        return <CodeBlockWrapper code={String(code)} language={language} {...props} />;
    },
    blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
        <blockquote className="my-6 border-l-4 border-primary pl-6 italic text-muted-foreground" {...props}>{children}</blockquote>
    ),
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
        <a href={href} className="font-medium text-primary underline underline-offset-4 hover:text-primary/80 transition-colors" {...props}>{children}</a>
    ),
    strong: ({ children, ...props }: React.HTMLAttributes<HTMLElement>) => (
        <strong className="font-semibold text-foreground" {...props}>{children}</strong>
    ),
    hr: () => <hr className="my-8 border-border" />,
};

export function MDXContent({ source }: MDXContentProps) {
    return <MDXRemote source={source} components={components} />;
}
