/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  // Configurações para desenvolvimento
  experimental: {
    optimizeCss: false,
  },
  // Configurações de webpack para evitar problemas com recursos
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    return config
  },
  // Removido output: 'export' para desenvolvimento
  // output: 'export', // Para GitHub Pages
  // trailingSlash: true, // Para GitHub Pages
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/portifolio2' : '', // Ajuste conforme seu repositório
}

module.exports = nextConfig
