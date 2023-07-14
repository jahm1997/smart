/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ["www.smartinfobusiness.com", "cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
