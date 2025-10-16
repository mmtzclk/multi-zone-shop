import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "fakestoreapi.com" }],
  },
  transpilePackages: ["@repo/fonts"],
  async rewrites() {
    return [
      {
        source: "/cart/:path*",
        destination: "http://localhost:3001/cart/:path*",
      },
    ];
  },
};

export default nextConfig;
