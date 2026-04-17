// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://allaboutpoland.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
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
