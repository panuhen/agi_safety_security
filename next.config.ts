import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Remove basePath and assetPrefix
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;