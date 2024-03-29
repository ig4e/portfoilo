import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Typography } from '@/components/typography';
import { Icons } from '@/components/ui/icons';
import type { Locale } from '@/config/i18n';
import { projects } from '@/config/projects';
import { HeroSection } from './hero-section';
import { MadeWithSection } from './made-with-section';

interface PageProps {
  params: { locale: Locale; id: string };
}

export function generateMetadata({
  params: { id, locale },
}: PageProps): Metadata {
  const project = projects.find((p) => p.id === id);

  if (!project)
    return {
      title: '404',
      description: '404: Page not found',
    };

  return {
    title: project.name[locale],
    description: project.description[locale],
    openGraph: {
      title: project.name[locale],
      description: project.description[locale],
      images: [project.image.src],
      type: 'article',
    },
  };
}

function ProjectPage({ params }: PageProps) {
  const { locale, id } = params;
  unstable_setRequestLocale(locale);

  const project = projects.find((p) => p.id === id);
  const t = useTranslations('project');

  if (!project) {
    return notFound();
  }

  return (
    <div className="">
      <HeroSection projectId={project.id} />

      <div className="dark">
        <section className="bg-black px-4 py-12 text-white" id="about">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 overflow-x-hidden overflow-y-clip">
            <div className="mb-6 flex items-center gap-4">
              <Icons.logo className="h-9 w-9" />
              <Typography as="h2" element="h2">
                {t('about-project')}
              </Typography>
            </div>

            <div>
              <Typography as="h3" className="" element="h3">
                {project.name[locale]}
              </Typography>

              <Typography
                as="h6"
                className="text-muted-foreground"
                element="h4"
              >
                {project.workArea[locale]}
              </Typography>
            </div>

            <div className="space-y-4">
              <Typography className="leading-relaxed" element="p">
                {project.description[locale]}
              </Typography>
            </div>
          </div>
        </section>

        <MadeWithSection projectId={project.id} />
      </div>
    </div>
  );
}

export default ProjectPage;

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}
