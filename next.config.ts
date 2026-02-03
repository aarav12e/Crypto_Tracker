import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript : {
    ignoreBuildErrors: true,
  },
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.coingecko.com',
      },
       {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
      }
    ]
  }
};

export default nextConfig;
