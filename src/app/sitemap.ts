import type { MetadataRoute } from "next";
import { allPosts } from "content-collections";

const origin = "https://irncyber.github.io";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    { url: `${origin}/blog/`, changeFrequency: "weekly", priority: 0.7 },
    ...allPosts.map((post) => ({
      url: `${origin}/blog/${post._meta.path.replace(/\.mdx$/, "")}/`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
