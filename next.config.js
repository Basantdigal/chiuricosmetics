/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/chiuricosmetics",
  assetPrefix: "/chiuricosmetics/",
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

module.exports = nextConfig;
