import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@sight/shared",
    "@sight/ui",
    "@sight/validators",
  ],
};

export default nextConfig;
