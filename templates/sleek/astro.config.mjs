import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// Voltamos ao básico para o site subir agora
export default defineConfig({
  site: "https://hiitdelas.com.br",
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
  ],
});
