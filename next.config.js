/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["www.linkedin.com", "cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
