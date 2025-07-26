/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  compliance: {
    dataResidency: "asia-south1"
  }
};

module.exports = nextConfig;
