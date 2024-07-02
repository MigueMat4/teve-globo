import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://teveglobo.live/",
  integrations: [tailwind(), icon()],
  adapter: node({
    mode: "standalone"
  }),
});