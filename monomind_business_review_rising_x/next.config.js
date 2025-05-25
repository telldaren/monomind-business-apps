/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.next',
  eslint: {
    // Remove the distDir key from here
  },
  // Image optimization is enabled by default on Vercel
};

module.exports = nextConfig;
