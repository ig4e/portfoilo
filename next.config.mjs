/* eslint-disable import/no-mutable-exports  -- million */
import million from 'million/compiler';
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
};

const withNextIntl = createNextIntlPlugin();
let exportedConfig = withNextIntl(nextConfig);

if (process.env.NODE_ENV === 'production') {
  exportedConfig = million.next(exportedConfig, {
    auto: { rsc: true },
  });
}

export default exportedConfig;
