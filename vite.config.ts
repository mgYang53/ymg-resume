import { defineConfig } from "vite";
import { mdx } from "@cyco130/vite-plugin-mdx";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [mdx(), react(), tailwindcss()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
      "@components": new URL("./src/components", import.meta.url).pathname,
      "@utils": new URL("./src/utils", import.meta.url).pathname,
    },
  },
});
