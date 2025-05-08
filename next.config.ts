import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: [
      'dev251.kodesolution.com',
      'plus.unsplash.com',
      'images.unsplash.com'
    ] // 👈 Thêm domain ở đây
  }
}

export default nextConfig
