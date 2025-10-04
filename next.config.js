্/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use swcMinify and modern JavaScript features
  swcMinify: true,
  // Fix the Module parse failed error by ensuring the problematic package is compiled
  experimental: {
    serverComponentsExternalPackages: ['undici'],
  },
};

module.exports = nextConfig;
