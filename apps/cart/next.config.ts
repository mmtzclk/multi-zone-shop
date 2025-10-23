import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  basePath: "/cart",
  assetPrefix: "/cart",
  transpilePackages: [
    "@repo/ui",
    "@repo/types",
    "@repo/fonts",
    "@repo/cart-store",
  ],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "fakestoreapi.com" }],
  },
};

export default nextConfig;
