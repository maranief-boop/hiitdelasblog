import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hiitdelas.com.br",
  // Adicionamos o outDir explicitamente como relativo para evitar o erro do deploy
  outDir: "./dist", 
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    sitemap(),
  ],
});
