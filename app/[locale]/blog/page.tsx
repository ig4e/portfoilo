import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Suspense } from 'react';
import { GenericHero } from '@/components/generic-hero';
import type { Locale } from '@/config/i18n';
import { Posts } from './posts-page';

async function Blog(
  props: Readonly<{
    params: Promise<{ locale: Locale }>;
  }>,
) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);
  const t = await getTranslations('blog');

  return (
    <div className="mb-14 space-y-8">
      <GenericHero description={t('description')} title={t('my-blog')} />
      <Suspense fallback={<div>Loading...</div>}>
        <Posts locale={locale} />
      </Suspense>
    </div>
  );
}

export default Blog;
