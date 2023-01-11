/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.dog.ceo'
      }
    ]
  },
  webpack(config) {
    config.resolve.alias['next-intl/config'] = require.resolve('./i18n.tsx');
    return config;
  }
};

module.exports = nextConfig;
