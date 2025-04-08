import { setRequestLocale } from 'next-intl/server';
import React from 'react';
import type { Locale } from '@/config/i18n';

async function layout(
  props: Readonly<{
    params: Promise<{ locale: Locale }>;
    children: React.ReactNode;
  }>,
) {
  const params = await props.params;

  const { children } = props;

  const { locale } = params;
  setRequestLocale(locale);

  return <div className="min-h-[calc(100vh-4rem)]">{children}</div>;
}

export default layout;
