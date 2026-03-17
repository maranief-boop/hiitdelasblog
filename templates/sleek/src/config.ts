// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "HIIT Delas";
export const SITE_DESCRIPTION =
  "Ciência e Treino de Alta Intensidade para Mulheres.";
export const TWITTER_HANDLE = "@yourtwitterhandle";
export const MY_NAME = "Captain Awesome";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
