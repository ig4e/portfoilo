'use client';

import { useTranslations } from 'next-intl';
import { BriefcaseIcon } from 'lucide-react';
import { Link } from '@/lib/navigation';
import { experience } from '@/config/experience';
import { Typography } from '@/components/typography';
import type { Locale } from '@/config/i18n';
import { Badge } from './ui/badge';

export interface ExperienceSectionProps {
  locale: Locale;
}

export function ExperienceSection({ locale }: ExperienceSectionProps) {
  const t = useTranslations('index');

  // Function to format date
  const formatDate = (dateString: string | null) => {
    if (!dateString) return t('experience.present');

    const date = new Date(dateString);
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'short',
    }).format(date);
  };

  return (
    <section className="scroll-mt-20 bg-black dark  px-4 py-12 pb-14" id="experience">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-4">
          <BriefcaseIcon className="h-9 w-9" />
          <Typography as="h2" element="h2">
            {t('experience.section-name')}
          </Typography>
        </div>

        <ul className="group/list">
          {experience.map((exp) => (
            <li key={exp.id} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
                  {formatDate(exp.startDate)} —{' '}
                  {formatDate(exp.endDate) || t('experience.present')}
                </header>

                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-foreground">
                    <div>
                      <Link
                        href={exp.links.website ?? exp.links.linkedin ?? '#'}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline text-base font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {exp.role[locale]} ·{' '}
                          <span className="inline-block">
                            {exp.name[locale]}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="ms-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none rtl:-rotate-90"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                        </span>
                      </Link>
                    </div>
                  </h3>

                  <p className="mt-2 text-sm leading-normal text-muted-foreground">
                    {exp.description[locale]}
                  </p>

                  {exp.projects.length > 0 && (
                    <ul
                      className="mt-1 flex flex-wrap"
                      aria-label="Related links"
                    >
                      {exp.projects.map((project) => {
                        if (!project) return null;
                        return (
                          <li key={project.id} className="me-4">
                            <Link
                              className="relative mt-2 inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary focus-visible:text-primary"
                              href={`/projects/${project.id}`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="me-1 h-3 w-3"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"
                                  clipRule="evenodd"
                                />
                                <path
                                  fillRule="evenodd"
                                  d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>{project.name[locale]}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}

                  <ul
                    className="mt-4 flex flex-wrap gap-1"
                    aria-label="Technologies used"
                  >
                    {exp.stack.slice(0, 5).map(({ id, name }) => (
                      <Badge key={id} variant="transparent">
                        {name[locale]}
                      </Badge>
                    ))}
                    {exp.stack.length > 5 && (
                      <Badge variant="transparent">
                        +{exp.stack.length - 5}
                      </Badge>
                    )}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
