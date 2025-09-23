// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "/Portfolio_new/", // important for GitHub Pages
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
});
