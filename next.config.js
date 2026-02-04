/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Allows images without Next Image optimization
  },
  trailingSlash: true, // Ensures folders like /about/ instead of /about
};

module.exports = nextConfig;
