import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Use unoptimized images for static export compatibility
  },
  // Enable static export for Vercel
  output: "export",
};

export default nextConfig;
