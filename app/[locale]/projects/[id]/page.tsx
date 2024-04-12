import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Typography } from '@/components/typography';
import { Icons } from '@/components/ui/icons';
import type { Locale } from '@/config/i18n';
import { projects } from '@/config/projects';
import { Link } from '@/lib/navigation';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MadeWithSection } from './made-with-section';
import { HeroSection } from './hero-section';

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
              <div className="flex w-full items-center justify-between gap-2">
                <Typography as="h3" className="" element="h3">
                  {project.name[locale]}
                </Typography>

                <div className="flex items-center gap-2">
                  {project.links.github ? (
                    <Link
                      href={project.links.github}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div
                        className={cn(
                          buttonVariants({
                            variant: 'secondary',
                          }),
                          'aspect-square !h-9 !w-9 px-0',
                        )}
                      >
                        <Icons.gitHub className="h-4 w-4" />
                        <span className="sr-only">GitHub</span>
                      </div>
                    </Link>
                  ) : null}

                  {project.links.website ? (
                    <Link
                      href={project.links.website}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <div
                        className={cn(
                          buttonVariants({
                            variant: 'secondary',
                          }),
                          'aspect-square !h-9 !w-9 px-0',
                        )}
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                        <span className="sr-only">Webiste</span>
                      </div>
                    </Link>
                  ) : null}
                </div>
              </div>

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
