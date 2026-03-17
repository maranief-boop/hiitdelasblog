/* eslint-disable turbo/no-undeclared-env-vars */
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

const SERVER_PORT = 3000;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`;

// ATENÇÃO: Substitua pelo seu domínio final quando tiver um, 
// ou mantenha o da cloudflare .pages.dev por enquanto
const LIVE_URL = "https://hiitdelas.pages.dev"; 

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCALHOST_URL;

if (isBuild) {
  BASE_URL = LIVE_URL;
}

export default defineConfig({
  server: { port: SERVER_PORT },
  site: BASE_URL,
  integrations: [
    sitemap({
      // Força o sitemap a ser gerado de forma relativa para evitar erros no deploy
      outDir: './dist',
    }),
    tailwind({
      config: { applyBaseStyles: false },
    }),
  ],
});
