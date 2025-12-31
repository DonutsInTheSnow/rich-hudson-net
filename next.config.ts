// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        pathname: '/images/**',
      },
    ],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; " +
              "script-src 'self' 'unsafe-inline' https://web3forms.com; " +
              "style-src 'self' 'unsafe-inline'; " +
              "img-src 'self' https: data: blob:; " +
              "font-src 'self' data:; " +
              "connect-src 'self' https://api.web3forms.com; " +
              "form-action 'self' https://api.web3forms.com; " +
              "frame-src 'none'; " +
              "object-src 'none'; " +
              "base-uri 'self';"
          },
        ],
      },
    ];
  },
};

export default nextConfig;
