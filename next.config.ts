import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lh.or.kr',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'www.xn--3-3u6ey6lv7rsa.kr',
        pathname: '/images/**',
      },
    ],
  },
};

export default nextConfig;
