import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs, extractProjectToc } from "@/lib/projects";
import { SiteHeader } from "@/components/header";
import { SiteFooter } from "@/components/site-footer";
import { ProjectLayout } from "@/components/projects/project-layout";
import { MDXContent } from "@/components/blog/mdx-content";
import { ContactCTA } from "@/components/contact-cta";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    const ogImage = project.image || "/og-image.png";

    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: project.title,
            description: project.description,
            type: "article",
            publishedTime: project.date,
            images: [ogImage],
        },
        twitter: {
            card: "summary_large_image",
            title: project.title,
            description: project.description,
            images: [ogImage],
        },
    };
}

export default async function ProjectPage({ params }: PageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const toc = extractProjectToc(project.content);

    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">
                <ProjectLayout
                    title={project.title}
                    description={project.description}
                    date={project.date}
                    readingTime={project.readingTime}
                    image={project.image}
                    tags={project.tags}
                    github={project.github}
                    demo={project.demo}
                    sections={project.sections}
                    toc={toc}
                >
                    <MDXContent source={project.content} />
                </ProjectLayout>
                <ContactCTA />
            </main>
            <SiteFooter />
        </div>
    );
}
