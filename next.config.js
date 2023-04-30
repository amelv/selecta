/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.fbcdn.net",
      },      {
        protocol: "https",
        hostname: "*.scdn.co",
      },
    ],
  },
};

module.exports = nextConfig;
