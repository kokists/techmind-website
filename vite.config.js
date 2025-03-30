// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Import Node.js 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Set '@' as an alias for the '/src' directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add server options if needed, e.g., server: { port: 3000 }
});
