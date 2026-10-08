import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://monicascarvalho.github.io',
  base: '/portifolio',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});

