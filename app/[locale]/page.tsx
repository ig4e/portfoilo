import { use } from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/hero-section';
import { ProjectParallax } from '@/components/project-parallax';
import { SkillsSection } from '@/components/skills-section';
import { ExperienceSection } from '@/components/experience-section';
import { Typography } from '@/components/typography';
import { Icons } from '@/components/ui/icons';
import type { Locale } from '@/config/i18n';

export default function Home(
  props: Readonly<{
    params: Promise<{ locale: Locale }>;
  }>,
) {
  const params = use(props.params);

  const { locale } = params;

  setRequestLocale(locale);

  const t = useTranslations('index');

  return (
    <main>
      <HeroSection />

      <section
        className="dark scroll-mt-20 bg-black px-4 py-12 text-white"
        id="about"
      >
        <div className="mx-auto flex min-h-[40vh] max-w-4xl flex-col gap-8 overflow-x-hidden overflow-y-clip">
          <div className="mb-4 flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Icons.logo className="h-9 w-9" />
            </div>
            <Typography as="h2" element="h2" className="text-gradient-primary">
              {t('about-me.section-name')}
            </Typography>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            <div className="col-span-12 space-y-2 md:col-span-4">
              <Typography
                as="h3"
                element="h3"
                className="text-gradient-primary"
              >
                {t('about-me.name')}
              </Typography>

              <Typography
                as="h6"
                className="text-muted-foreground"
                element="h4"
              >
                {t('about-me.title')}
              </Typography>
            </div>

            <div className="col-span-12 space-y-4 md:col-span-8">
              <Typography className="leading-relaxed" element="p">
                {t('about-me.my-start')}
              </Typography>

              <Typography className="leading-relaxed" element="p">
                {t('about-me.my-foucs')}
              </Typography>

              <Typography className="leading-relaxed" element="p">
                {t('about-me.my-life')}
              </Typography>
            </div>
          </div>
        </div>
      </section>

      <ExperienceSection locale={locale} />
      <ProjectParallax />

      <SkillsSection />
    </main>
  );
}
