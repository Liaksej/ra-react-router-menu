import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ra-react-router-menu/",
  build: {
    sourcemap: true,
  },
});
