// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()], },
  integrations: [preact(), mdx(), sitemap()],
  adapter: netlify(),
})