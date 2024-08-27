import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: 'https://datle-dev.github.io',
  base: '/jgoodman-website',
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})