/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.receiteria.com.br',
        port: '',
        pathname: '/wp-content/uploads**',
      },
    ],
  },
}