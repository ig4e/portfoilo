import { setRequestLocale } from 'next-intl/server';
import React from 'react';
import type { Locale } from '@/config/i18n';

async function layout(
  props: Readonly<{
    params: { locale: Locale };
    children: React.ReactNode;
  }>,
) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  setRequestLocale(locale);

  return (
    <div className="min-h-[calc(100vh-9.5rem)]">
      <div className="">{children}</div>
    </div>
  );
}

export default layout;
