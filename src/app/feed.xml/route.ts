
import { generateRssFeed } from "@/lib/rss";

export async function GET() {
    const feedXml = await generateRssFeed();

    return new Response(feedXml, {
        headers: {
            "Content-Type": "application/xml",
        },
    });
}
