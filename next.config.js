// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     experimental: {
//       serverComponentsExternalPackages: ['pdf-parse'],
//     },
//     webpack: (config) => {
//       config.resolve.alias.canvas = false;
//       config.resolve.alias.encoding = false;
//       return config;
//     },
//   };
  
//   module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed from experimental and placed at the top level with the new name
  serverExternalPackages: ['pdf-parse'], // <-- MOVED AND RENAMED

  // Keep the webpack config as it was
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  // The experimental block can be removed if serverComponentsExternalPackages was the only thing in it
  // experimental: {
  // },
};

module.exports = nextConfig;