import type { NextConfig } from "next";

/**
 * `basePath` sólo se aplica al publicar en GitHub Pages, donde el sitio vive
 * en /<repo>. En desarrollo y en cualquier host propio queda vacío.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true,
  experimental: { optimizePackageImports: ["minisearch"] },
};

export default nextConfig;
