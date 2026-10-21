import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   agentFeedback: true,
  // },
  // cacheComponents: true,
  // partialPrefetching: true,
  images: {
    remotePatterns: [
      { // thực ra cái khối này có cũng dc, ko có cũng ko sao
        hostname: "co3001-lms-project.t3.tigrisfiles.io",
        port: "",
        protocol: "https",
      }
    ]
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
