/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  async redirects() {
    return [
      {
        source: '/',
        destination: '/',
        permanent: true
      }
    ]
  },
}

module.exports = nextConfig
