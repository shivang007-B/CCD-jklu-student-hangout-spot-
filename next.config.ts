import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash CDN (direct photo IDs — kept for any manual overrides)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Pexels videos — hero background video in HomePage
      {
        protocol: "https",
        hostname: "videos.pexels.com",
        port: "",
        pathname: "/**",
      },
      // Pexels images
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;