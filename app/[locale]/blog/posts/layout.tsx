import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';
import type { Locale } from '@/config/i18n';

function layout({
  children,
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
  children: React.ReactNode;
}>) {
  unstable_setRequestLocale(locale);

  return <div>{children}</div>;
}

export default layout;
