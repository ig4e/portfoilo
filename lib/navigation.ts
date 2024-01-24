import { locales } from "@/config/i18n";
import { createSharedPathnamesNavigation } from "next-intl/navigation";


export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales: locales, localePrefix });
