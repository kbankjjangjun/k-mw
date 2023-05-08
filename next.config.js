/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'www.kbanknow.com',
      'm.kbankcorp.co.kr',
      'm.kbanknow.com',
      'img.icons8.com',
      'images.unsplash.com',
    ],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: 'https://ib.kbankcorp.co.kr:10443/:path',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
