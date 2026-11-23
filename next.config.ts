import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Normalize the Windows drive letter (d:\ vs D:\) — a lowercase drive letter
// makes Turbopack fail with "Next.js package not found".
const projectRoot = path
  .dirname(fileURLToPath(import.meta.url))
  .replace(/^([a-z]):/, (_, d: string) => `${d.toUpperCase()}:`);

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
