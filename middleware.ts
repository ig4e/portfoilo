import createMiddleware from "next-intl/middleware";
import { locales } from "./config/i18n";

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: "en-US",
    localePrefix: "always",
    
});

export const config = {
    // Match only internationalized pathnames
    matcher: ["/", "/(ar-EG|en-US)/:path*"],
};
