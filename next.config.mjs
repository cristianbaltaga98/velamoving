/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // No basePath needed for custom domain
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
