// next.config.js
const repo = 'chiuricosmetics';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',         // Essential for static sites
  basePath: `/${repo}`,     // Tells Next.js the site prefix
  assetPrefix: `/${repo}/`, // Helps with assets if needed, often redundant with basePath for simple cases
  images: {
    unoptimized: true,     // Required for static export ('next export')
  },
};

module.exports = nextConfig;
