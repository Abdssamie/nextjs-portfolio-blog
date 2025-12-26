import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, extractToc } from "@/lib/blog";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { BlogLayout } from "@/components/blog/blog-layout";
import { MDXContent } from "@/components/blog/mdx-content";
import { ContactCTA } from "@/components/contact-cta";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    const ogImage = post.image || "/blog/default-thumbnail.png";

    return {
        title: post.title,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [ogImage],
        },
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const toc = extractToc(post.content);

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <BlogLayout
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    author={post.author}
                    readingTime={post.readingTime}
                    image={post.image}
                    tags={post.tags}
                    toc={toc}
                >
                    <MDXContent source={post.content} />
                </BlogLayout>
                <ContactCTA />
            </main>
            <SiteFooter />
        </div>
    );
}
