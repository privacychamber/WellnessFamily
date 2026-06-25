import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/WellnessFamily",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
