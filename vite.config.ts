import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    open: true,
    // port: 6452,
  },
  plugins: [react()],
});
