import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    author: z.string().default('All About Poland'),
    reviewedBy: z.string().optional(),
    datePublished: z.string(),
    dateModified: z.string().optional(),
    tags: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
    difficulty: z.enum(['easy', 'medium', 'hard']).default('medium'),
    timeToRead: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    ogImage: z.string().optional(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    translation: z.string(),
    description: z.string(),
    category: z.string().optional(),
    relatedTerms: z.array(z.string()).default([]),
    relatedGuides: z.array(z.string()).default([]),
  }),
});

export const collections = { guides, glossary };
