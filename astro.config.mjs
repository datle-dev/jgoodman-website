import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://datle-dev.github.io',
  base: '/jgoodman-website/',
  // pagefind needs trailing backslash in base, otherwise path
  // of js file isn't correct
  build: {
    format: 'file'
  },
  integrations: [pagefind(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-light'
    }
  }
});