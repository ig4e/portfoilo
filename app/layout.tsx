import { type ReactNode } from 'react';
import type { Locale } from '@/config/i18n';
import { locales } from '@/config/i18n';

interface Iprops {
  children: ReactNode;
}

// Even though this component is just passing its children through, the presence
// of this file fixes an issue in Next.js 13.3.0 where link clicks that switch
// the locale would otherwise be ignored.
export default function RootLayout({ children }: Iprops): ReactNode {
  return children;
}

export function generateStaticParams(): {
  locale: Locale;
}[] {
  return locales.map((locale) => ({ locale }));
}
