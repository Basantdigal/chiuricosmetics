// next.config.js
const repo = 'chiuricosmetics'; // Your repository name
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

module.exports = {
  output: 'export', // Crucial for static export with newer Next.js versions
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
    unoptimized: true, // Necessary for static export (`next export`)
  },
};
