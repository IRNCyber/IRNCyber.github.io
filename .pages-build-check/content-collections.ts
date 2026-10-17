import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";

const posts = defineCollection({
    name: "posts",
    directory: "content",
    include: "**/*.mdx",
    schema: z.object({
        title: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        author: z.string().optional(),
        summary: z.string(),
        image: z.string().optional(),
        tags: z.array(z.string()).default([]),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        return {
        ...document,
            tags: document.tags ?? [],
            readingTime: `${Math.max(1, Math.ceil(document.content.trim().split(/\s+/).length / 220))} min read`,
            tableOfContents: [...document.content.matchAll(/^#{2,3}\s+(.+)$/gm)].map((match) => ({
                title: match[1].replace(/[`*_]/g, "").trim(),
                id: match[1].replace(/[`*_]/g, "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
                depth: match[0].startsWith("###") ? 3 : 2,
            })),
            mdx,
        };
    },
});

export default defineConfig({
    collections: [posts],
});

