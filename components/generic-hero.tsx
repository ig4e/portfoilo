'use client';

import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import { Typography } from '@/components/typography';
import { Noise } from '@/components/ui/images';
import type { Locale } from '@/config/i18n';
import { cn } from '@/lib/utils';

export interface GenericHeroProps {
  title: string;
  description: string;
  classNames?: {
    container?: string;
    textContainer?: string;
    title?: string;
    description?: string;
  };
}

export function GenericHero({
  title,
  description,
  classNames = {
    container: '',
    description: '',
    textContainer: '',
    title: '',
  },
}: GenericHeroProps) {
  const locale = useLocale() as Locale;

  return (
    <div className={cn('mb-12', classNames.container)}>
      <section className="flex flex-col items-center justify-center gap-12 overflow-hidden text-center">
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
          className={cn(
            'container flex flex-col items-center gap-12',
            classNames.textContainer,
          )}
          initial={{ opacity: 0.5 }}
          transition={{
            duration: 0.2,
          }}
        >
          <div className="flex flex-col items-center gap-4 md:mt-8">
            <Typography
              className={cn(
                'container text-balance bg-gradient-to-t from-foreground to-foreground/35 bg-clip-text pb-4 text-center text-5xl font-semibold leading-tight text-transparent sm:text-6xl md:leading-normal lg:text-7xl xl:text-8xl',
                {
                  'pb-8 text-5xl leading-relaxed sm:text-7xl lg:text-8xl xl:text-9xl':
                    locale === 'ar-EG',
                },
                classNames.title,
              )}
              element="h1"
            >
              {title}
            </Typography>

            <Typography
              as="h3"
              className={cn(
                'max-w-4xl text-balance font-normal text-muted-foreground',
                classNames.description,
              )}
              element="p"
            >
              {description}
            </Typography>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
