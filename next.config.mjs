/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.valencygraphics.com', 'images4.alphacoders.com', 'images.unsplash.com', 'img.icons8.com', 'graphicriver.img.customer.envatousercontent.com', 'cdnb.artstation.com', 'static.thenounproject.com', 'cs3.gtaall.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4000/api/:path*',
      },
    ]
  },
};

export default nextConfig;
