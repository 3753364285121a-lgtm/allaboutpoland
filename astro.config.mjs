// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://polandhowto.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/search') && !page.includes('/404'),
      i18n: {
        defaultLocale: 'ru',
        locales: {
          ru: 'ru-RU',
          pl: 'pl-PL',
          en: 'en-US',
        },
      },
    }),
    vue(),
  ],

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'pl', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },

  trailingSlash: 'never',
});
