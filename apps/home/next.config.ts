import type { NextConfig } from "next";
const isDev = process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: "",
  assetPrefix: "",
  transpilePackages: [
    "@repo/ui",
    "@repo/types",
    "@repo/fonts",
    "@repo/cart-store",
  ],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "fakestoreapi.com" }],
  },
  async rewrites() {
    if (!isDev) return [];
    return [
      {
        source: "/cart/:path*",
        destination: "http://localhost:3002/cart/:path*",
      },
    ];
  },
};

export default nextConfig;
