import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL at build time for production canonical URLs and sitemap.
// Example: SITE_URL=https://your-domain.com npm run build
const site = process.env.SITE_URL || 'https://myairanking.hk';

export default defineConfig({
  site,
  integrations: [sitemap()],
  compressHTML: true,
  redirects: {
    '/zh': '/',
    '/zh/services': '/services',
    '/zh/about': '/about',
    '/zh/contact': '/contact',
    '/zh/insights': '/insights',
  },
});
