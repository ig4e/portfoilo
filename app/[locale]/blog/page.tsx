import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { GenericHero } from '@/components/generic-hero';
import type { Locale } from '@/config/i18n';
import { Posts } from './posts-page';

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
      <Posts locale={locale} />
    </div>
  );
}

export default Blog;
