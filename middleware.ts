import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix } from "./config/i18n";

export default createMiddleware({
    locales: locales,
    defaultLocale,
    localePrefix,
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(ar-EG|en-US)/:path*"],
};
