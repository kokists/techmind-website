import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Final working config
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
});
