import { unstable_setRequestLocale } from 'next-intl/server';
import React from 'react';
import type { Locale } from '@/config/i18n';

function layout({
  params,
  children,
}: Readonly<{
  params: { locale: Locale };
  children: React.ReactNode;
}>) {
  const { locale } = params;
  unstable_setRequestLocale(locale);

  return <div className="min-h-[calc(100vh-4rem)]">{children}</div>;
}

export default layout;
