import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";

export const dynamic = "force-static";

function xml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export async function GET() {
  const posts = [...allPosts].sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
  const items = posts.map((post) => {
    const url = `${DATA.url}/blog/${post._meta.path.replace(/\.mdx$/, "")}/`;
    return `<item><title>${xml(post.title)}</title><link>${xml(url)}</link><guid>${xml(url)}</guid><description>${xml(post.summary)}</description><pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate></item>`;
  }).join("");
  const feed = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${xml(DATA.name)} · Notes</title><link>${xml(DATA.url)}/blog</link><description>Notes on web development, cybersecurity fundamentals, and learning.</description><language>en</language>${items}</channel></rss>`;
  return new Response(feed, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
