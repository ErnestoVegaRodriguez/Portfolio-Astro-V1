import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";
//import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // i18n settings
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es", {
      path: "es",
      codes: ["es", "es-ES"]
    }],
    routing: {
      prefixDefaultLocale: true
    },
    fallback: {
      es: "en"
    }
  },
  integrations: [mdx(), compress({
    CSS: true,
    HTML: false,
    Image: false,
    JavaScript: true,
    SVG: false
  }), tailwind()],
  // site: 'http://localhost:4321',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  experimental: {
    clientPrerender: true
  },
  //output: "hybrid",
  //adapter: vercel(),
});