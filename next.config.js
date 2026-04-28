/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "virtualvri.com",
      },
    ],
  },
};

module.exports = nextConfig;
