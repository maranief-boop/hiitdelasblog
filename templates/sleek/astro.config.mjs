import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap"; // <-- Adicionamos esta linha

// https://astro.build/config
export default defineConfig({
  site: "https://hiitdelas.com.br",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(), // <-- Adicionamos esta linha aqui
  ],
});
