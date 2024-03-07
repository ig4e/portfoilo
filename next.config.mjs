/* eslint-disable import/no-mutable-exports  -- million*/
/* eslint-disable import/no-default-export -- required default export */
import million from 'million/compiler';
import withNextIntl from 'next-intl/plugin';
import MillionLint from '@million/lint';

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

const nextWithIntl = withNextIntl()(nextConfig);

let exportedConfig = nextWithIntl;

if (process.env.NODE_ENV === 'production') {
  exportedConfig = million.next(exportedConfig, {
    auto: { threshold: 0.02, rsc: true },
  });
} else {
  exportedConfig = MillionLint.next({})(exportedConfig);
}

export default exportedConfig;
