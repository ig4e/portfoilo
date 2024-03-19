import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import type { Locale } from '@/config/i18n';
import { GenericHero } from '@/components/generic-hero';
import { Posts } from './posts';

async function Blog({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('blog');

  return (
    <div className="mb-14 space-y-8">
      <GenericHero description={t('description')} title={t('my-blog')} />
      <Suspense>
        <Posts />
      </Suspense>
    </div>
  );
}

export default Blog;
