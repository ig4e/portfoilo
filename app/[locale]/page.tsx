import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { HeroSection } from '@/components/hero-section';
import { ProjectParallax } from '@/components/project-parallax';
import { SkillsSection } from '@/components/skills-section';
import { Typography } from '@/components/typography';
import { Icons } from '@/components/ui/icons';
import type { Locale } from '@/config/i18n';

export default function Home({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  unstable_setRequestLocale(locale);
  const t = useTranslations('index');

  return (
    <main>
      <HeroSection />

      <section
        className="scroll-m t-20 dark bg-black px-4 py-12 text-white"
        id="about"
      >
        <div className="mx-auto flex min-h-[40vh] max-w-3xl flex-col gap-4 overflow-x-hidden overflow-y-clip">
          <div className="mb-6 flex items-center gap-4">
            <Icons.logo className="h-9 w-9" />
            <Typography as="h2" element="h2">
              {t('about-me.section-name')}
            </Typography>
          </div>

          <div>
            <Typography as="h3" className="" element="h3">
              {t('about-me.name')}
            </Typography>

            <Typography as="h6" className="text-muted-foreground" element="h4">
              {t('about-me.title')}
            </Typography>
          </div>

          <div className="space-y-4">
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
      </section>

      <ProjectParallax />
      <SkillsSection />
    </main>
  );
}
