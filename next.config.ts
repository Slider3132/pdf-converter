import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
    DOMAIN: process.env.DOMAIN,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
};

export default nextConfig;
