import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  author: z.string().default('Editorial Team'),
  tags: z.array(z.string()).default([]),
  keywords: z.array(z.string()).default([]),
  alternateSlug: z.string().optional(),
  image: z.string().optional(),
  draft: z.boolean().default(false),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: articleSchema,
});

const insightsZh = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights-zh' }),
  schema: articleSchema.extend({
    author: z.string().default('編輯團隊'),
  }),
});

export const collections = { insights, insightsZh };
