import { defineConfig } from "tsup";

export default defineConfig([
  // React + CSS bundle
  {
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ["react", "react-dom"],
    outDir: "dist",
  },
  // Standalone CSS
  {
    entry: ["src/css/glass.css"],
    outDir: "dist/css",
  },
]);
