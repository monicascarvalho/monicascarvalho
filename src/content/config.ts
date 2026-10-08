import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    category: z.string(),
    featured: z.boolean().default(true),
    order: z.number().default(0),
    year: z.string(),
    institution: z.string().default('Universidade Paulista (UNIP)'),
    discipline: z.string().optional(),
    location: z.string(),
    builtArea: z.string().optional(),
    softwares: z.array(z.string()),
    authorRole: z.string().default('Autora (Projeto Individual)'),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    pdfDownloadUrl: z.string(),
    driveUrl: z.string().optional(),
    sheets: z.array(
      z.object({
        title: z.string(),
        image: z.string(),
        sheetNumber: z.string().optional(),
        scale: z.string().optional(),
        description: z.string().optional(),
      })
    ),
  }),
});

export const collections = {
  projects: projectsCollection,
};
