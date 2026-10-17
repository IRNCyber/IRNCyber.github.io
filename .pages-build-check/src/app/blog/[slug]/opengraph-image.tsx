import { ImageResponse } from "next/og";
import { allPosts } from "content-collections";

export const dynamic = "force-static";
export const alt = "IRNCyber blog post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post._meta.path.replace(/\.mdx$/, "") }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = allPosts.find((item) => item._meta.path.replace(/\.mdx$/, "") === slug);
  const title = post?.title ?? "IRNCyber notes";
  const summary = post?.summary ?? "Cybersecurity and web development.";
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "#080b10", color: "#e9eef2", fontFamily: "Arial, sans-serif", backgroundImage: "linear-gradient(90deg, rgba(32,42,52,.42) 1px, transparent 1px), linear-gradient(rgba(32,42,52,.42) 1px, transparent 1px)", backgroundSize: "72px 72px" }}>
      <div style={{ color: "#19d3b5", fontSize: 24, letterSpacing: 4 }}>IRNCYBER · NOTES</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ fontSize: 58, fontWeight: 700, letterSpacing: -2, lineHeight: 1.15 }}>{title}</div>
        <div style={{ color: "#9aa8b5", fontSize: 24, lineHeight: 1.4 }}>{summary}</div>
      </div>
      <div style={{ color: "#71818c", fontSize: 20 }}>irncyber.github.io/blog</div>
    </div>,
    size,
  );
}
