import million from "million/compiler";
/** @type {import('next').NextConfig} */
import withNextIntl from "next-intl/plugin";

const nextConfig = {};

const nextWithIntl = withNextIntl()(nextConfig);

export default nextWithIntl;

// export default million.next(nextWithIntl, {
//     auto: { threshold: 0.05, rsc: true },
//     hmr: true,
// });
