import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    draft: z.boolean().default(false),
    ogImagePath: z.string().optional(),
    canonicalURL: z.string().url().optional(),
    external: z.boolean().default(false),
  }),
});

export const collections = { blog };
