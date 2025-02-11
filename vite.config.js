import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // Automatically opens the bundle report in your browser
      filename: "bundle-analysis.html", // Output file for the report
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias for the root directory
      "@routes": path.resolve(__dirname, "./src/routes"), // Alias for routes folder
      "@pages": path.resolve(__dirname, "./src/pages"), // Alias for pages folder
      "@components": path.resolve(__dirname, "./src/components"), // Alias for components
      "@helpers": path.resolve(__dirname, "./src/_helper"), // Alias for helper functions
    },
  },
  server: {
    host: "0.0.0.0", // Ensures the app is accessible externally
    port: 5173, // Default port for development server
  },
  build: {
    chunkSizeWarningLimit: 1000, // Adjust the limit for chunk size warnings
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            return "vendor";
          }
        },
      },
    },
  },
});
