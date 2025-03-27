/ next.config.js
const repo = 'chiuricosmetics'; // Your repository name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Essential for static HTML export!
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: {
    unoptimized: true, // Required for static export
  },
  // ... any other configs you have
};

module.exports = nextConfig;
