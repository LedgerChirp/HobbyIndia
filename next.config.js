/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.shopify.com", "localhost", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
