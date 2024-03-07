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

  return (
    <div className="container min-h-[calc(100vh-9.5rem)]">
      <div className="">{children}</div>
    </div>
  );
}

export default layout;
