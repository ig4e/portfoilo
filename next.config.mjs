import million from "million/compiler";
/** @type {import('next').NextConfig} */
import withNextIntl from "next-intl/plugin";

const nextConfig = {};

export default million.next(withNextIntl()(nextConfig), {
    auto: { threshold: 0.05, rsc: true },
    hmr: true,
});
