import { defineConfig } from 'astro/config';
import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
    site: 'https://datle-dev.github.io',
    base: '/jgoodman-website/',
    // pagefind needs trailing backslash in base, otherwise path
    // of js file isn't correct
    build: {
        format: 'file',
    },
    integrations: [
        pagefind(),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-light',
        },
    },
});
