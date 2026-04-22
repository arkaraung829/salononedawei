// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://salononedawei.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  },
  i18n: {
    locales: ['en', 'my'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false
    }
  }
});
