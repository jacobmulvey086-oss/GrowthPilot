/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use 'export' for Capacitor native builds, comment out for web deployment with API routes
  // output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
