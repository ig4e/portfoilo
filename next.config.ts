/* eslint-disable import/no-default-export -- NO SUPPORT FOR NEXT CONFIG */
import createNextIntlPlugin from 'next-intl/plugin';
import { type NextConfig } from 'next/dist/server/config-shared';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-227df0c783494ba6bf7b3308de901be8.r2.dev',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
const exportedConfig = withNextIntl(nextConfig);

export default exportedConfig;
