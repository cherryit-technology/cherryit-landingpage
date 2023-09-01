/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  experimental: {
    optimizeImages: true,
    images: {
      allowFutureImage: true,
    },
  }
}

module.exports = nextConfig
