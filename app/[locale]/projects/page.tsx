import { Suspense, use } from 'react';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/config/i18n';
import { GenericHero } from '@/components/generic-hero';
import { ProjectsPageList } from './projects';

export const metadata: Metadata = {
  title: 'Projects - Ahmed Mohamed',
};

function ProjectsPage(props: { params: Promise<{ locale: Locale }> }) {
  const params = use(props.params);

  const { locale } = params;

  setRequestLocale(locale);
  const t = useTranslations('project');

  return (
    <div className="container my-4 mb-8 space-y-8">
      <GenericHero description={t('description')} title={t('my-projects')} />

      <Suspense>
        <ProjectsPageList params={{ locale }} />
      </Suspense>
    </div>
  );
}

export default ProjectsPage;
