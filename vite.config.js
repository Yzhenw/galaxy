import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    open: true,
    proxy: {
      "/pp": { target: "http://api.hustmaths.top/api/", changeOrigin: true },
    },
  },
});
