/* eslint-disable react/no-unstable-nested-components -- NEXT INTL */
'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { HeroScrollText } from '@/components/hero-scroll-text';
import { Typography } from '@/components/typography';
import { Button } from '@/components/ui/button';
import { Noise } from '@/components/ui/images';
import type { Locale } from '@/config/i18n';
import { Link } from '@/lib/navigation';
import { cn } from '@/lib/utils';

export function HeroSection() {
  const t = useTranslations('index');
  const locale = useLocale() as Locale;

  return (
    <div className="mb-12" id="hero">
      <section className="flex min-h-[50vh] flex-col items-center justify-center gap-12 overflow-hidden text-center md:min-h-screen">
        <div className="overflow-hidden">
          <div className="absolute inset-x-0 top-0 -z-[10] min-h-[40vh] overflow-hidden bg-gradient-to-b from-rose-500 to-red-100 opacity-50 blur-3xl dark:from-rose-900 md:min-h-[60vh]" />

          <div
            className="absolute inset-x-0 top-0 -z-[5] h-[50vh] w-full overflow-hidden !fill-current !text-white brightness-125 md:h-[60vh]"
            style={{
              background: `url("/assets/background.svg")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />

          <div className="absolute inset-0 top-0 -z-[4] h-[50vh] overflow-hidden bg-gradient-to-b from-transparent to-background md:h-[60vh]" />

          <div
            className="top-18 absolute inset-0 -z-[1] mix-blend-overlay"
            style={{
              backgroundRepeat: 'repeat',
              backgroundImage: `url('${Noise.src}')`,
              opacity: 0.2,
            }}
          />
        </div>

        <motion.div
          animate={{ opacity: 1 }}
          className="container flex flex-col items-center gap-12"
          initial={{ opacity: 0.5 }}
          transition={{
            duration: 0.2,
          }}
        >
          <Typography
            className={cn(
              'container text-balance bg-gradient-to-t from-foreground to-foreground/35 bg-clip-text text-center text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:leading-normal lg:text-7xl xl:text-8xl',
              {
                'text-5xl leading-normal sm:text-7xl md:leading-relaxed lg:text-8xl xl:text-9xl':
                  locale === 'ar-EG',
              },
            )}
            element="h1"
          >
            {t.rich('hero.title.text', {
              highlight: (chunks) => (
                <span className="bg-gradient-to-tr from-primary to-[#db2777] bg-clip-text text-transparent">
                  {chunks}
                </span>
              ),
            })}
          </Typography>

          <div className="mt-4 flex items-center gap-4">
            <Link href="/projects">
              <Button size="xl">{t('hero.my-projects')}</Button>
            </Link>
            <Button size="xl" variant="secondary">
              {t('hero.resume')}
            </Button>
          </div>

          <Typography as="mutedText" className="place-self-end" element="span">
            {t.rich('hero.title.highlight-meaning', {
              highlight: (chunks) => (
                <span className="font-bold">{chunks}</span>
              ),
            })}
          </Typography>
        </motion.div>

        <HeroScrollText />
      </section>
    </div>
  );
}
