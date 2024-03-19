import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { localePrefix, locales } from '@/config/i18n';

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
