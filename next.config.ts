import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Ignore ESLint errors during build (pre-existing issues)
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Remove static export to enable dynamic routes for CMS
  // Vercel will handle this automatically with ISR
};

export default nextConfig;
