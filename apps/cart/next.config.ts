import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@repo/ui", "@repo/types"],
  basePath: "/cart",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "fakestoreapi.com" }],
  },
};

export default nextConfig;
