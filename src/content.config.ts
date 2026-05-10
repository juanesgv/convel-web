import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const servicios = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/servicios' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    order: z.number().default(0),
    eyebrow: z.string().optional(),
    summary: z.string(),
    capabilities: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const segmentos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/segmentos' }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    order: z.number().default(0),
    summary: z.string(),
    examples: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { servicios, segmentos };
