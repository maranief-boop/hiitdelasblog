/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // O segredo está aqui: o domínio oficial SEMPRE
  site: "https://hiitdelas.com.br",
  
  server: { port: 3000 },
  
  integrations: [
    sitemap(), 
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
