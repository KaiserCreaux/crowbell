import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolioCollection = defineCollection({
	// Load Markdown and MDX files in the `src/content/` directory.
	loader: glob({ base: './src/content', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) => z.object({
		title: z.string(),
		project_abstract: z.string(),
		date: z.string(),
		slug: z.string(),
		image_url: image(),
		image_alt: z.string(),
		project_roles: z.string(),
		project_deliverable: z.string(),
	}),
});

export const collections = { portfolio: portfolioCollection, };


