/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '/nextjs-blog',
  images: {
    unoptimized: true
  },
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig