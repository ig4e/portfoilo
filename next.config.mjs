import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
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
  }
};

const withNextIntl = createNextIntlPlugin();
const exportedConfig = withNextIntl(nextConfig);

export default exportedConfig;
