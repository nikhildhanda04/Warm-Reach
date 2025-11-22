import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'canvas', 'jsdom'];
      // Fix for pdf-parse compatibility
      config.resolve.alias = {
        ...config.resolve.alias,
        canvas: false,
      };
    }
    return config;
  },
  // Ensure server-side rendering works with pdf-parse
  experimental: {
    serverComponentsExternalPackages: ['pdf-parse', 'mammoth'],
  },
};

export default nextConfig;
