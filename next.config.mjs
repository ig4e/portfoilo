import million from "million/compiler";
import withNextIntl from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const nextWithIntl = withNextIntl()(nextConfig);

let exportedConfig = nextWithIntl;

if (process.env.NODE_ENV === "production") {
    exportedConfig = million.next(nextWithIntl, {
        auto: { threshold: 0.02, rsc: true },
        hmr: true,
    });
}

export default exportedConfig;
