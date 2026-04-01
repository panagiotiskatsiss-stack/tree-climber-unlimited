import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.youform.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
