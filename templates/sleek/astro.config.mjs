import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://hiitdelas.com.br", // Verifique se o seu domínio está certo aqui
  integrations: [
    mdx(),
    sitemap(), // Deixe apenas assim, sem configurações extras dentro dos parênteses
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
