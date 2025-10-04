/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fix for 'Module parse failed: Unexpected token' error with undici/fetch
  transpilePackages: ['undici'],
};

module.exports = nextConfig;
