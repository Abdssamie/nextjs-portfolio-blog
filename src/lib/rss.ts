
import RSS from "rss";
import { getAllPosts } from "@/lib/blog";

export async function generateRssFeed() {
    const site_url = process.env.NEXT_PUBLIC_SITE_URL || "https://abdessamie.dev";
    const allPosts = getAllPosts();

    const feedOptions = {
        title: "Abdessamie | Full Stack Developer & Automation Expert",
        description: "I build automation systems, internal tools, and client-facing applications that streamline business operations.",
        site_url: site_url,
        feed_url: `${site_url}/feed.xml`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Abdessamie`,
    };

    const feed = new RSS(feedOptions);

    allPosts.forEach((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: `${site_url}/blog/${post.slug}`,
            date: post.date,
        });
    });

    return feed.xml({ indent: true });
}
