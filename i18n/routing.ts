import { defineRouting } from 'next-intl/routing';
import { defaultLocale, locales, localePrefix } from '@/config/i18n';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  localePrefix,
});
