import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    category: z.enum([
      'Residencial',
      'Corporativo / Comercial',
      'Equipamento Público',
      'Interiores',
      'Concurso / Acadêmico'
    ]),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    year: z.string(),
    semester: z.string(),
    location: z.string(),
    siteArea: z.string().optional(),
    builtArea: z.string(),
    softwares: z.array(z.string()),
    authorRole: z.string(),
    bimWorkflow: z.object({
      tools: z.array(z.string()),
      highlight: z.string(),
    }).optional(),
    approvalCompliance: z.array(z.string()).optional(),
    heroImage: z.string(),
    heroImageAlt: z.string(),
    processGallery: z.array(z.object({
      image: z.string(),
      caption: z.string(),
    })).optional(),
    technicalDrawings: z.array(z.object({
      title: z.string(),
      sheetType: z.string(),
      scale: z.string(),
      image: z.string(),
      highResImage: z.string().optional(),
      description: z.string(),
    })),
    constructionDetails: z.array(z.object({
      title: z.string(),
      detailScale: z.string(),
      description: z.string(),
      image: z.string(),
    })).optional(),
    renders: z.array(z.object({
      title: z.string(),
      image: z.string(),
      caption: z.string(),
    })).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
