'use client';
import React, { useMemo, useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { Link } from '@/lib/navigation';
import type { Project } from '@/config/projects';
import { projects } from '@/config/projects';
import type { Locale } from '@/config/i18n';
import { cn } from '@/lib/utils';
import { useViewport } from '@/hooks/use-viewport';
import { Badge } from '@/components/ui/badge';
import { Typography } from '@/components/typography';

export function ProjectParallax() {
  const locale = useLocale() as Locale;
  const { isMobile } = useViewport();

  const projectRows = useMemo(() => {
    return [
      Array(2).fill(projects.slice(0, 3)).flat(),
      Array(2).fill(projects.slice(3, 6)).flat(),
      Array(2).fill(projects.slice(6, 9)).flat(),
    ] as Project[][];
  }, []);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      locale === 'en-US' ? [-1000, 1000] : [1000, -1000],
    ),
    springConfig,
  );

  const translateXReverse = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      locale === 'en-US' ? [1000, -1000] : [-1000, 1000],
    ),
    springConfig,
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.4, 1]),
    springConfig,
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig,
  );

  const translateY = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2],
      isMobile ? [-500, 100] : [-550, 200],
    ),
    springConfig,
  );

  return (
    <div
      className="dark relative flex flex-col overflow-hidden bg-black py-40 antialiased [perspective:1000px] [transform-style:preserve-3d]"
      ref={ref}
      style={{
        height: isMobile
          ? `calc(50vh + ${projectRows.length * 400}px)`
          : `calc(50vh + ${projectRows.length * 560}px)`,
      }}
    >
      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        {projectRows.map((row, index) => {
          const isOdd = index % 2 === 0;
          return (
            <motion.div
              className={cn('mb-20 flex gap-10 space-x-reverse md:gap-20', {
                'flex-row-reverse': isOdd,
              })}
              key={`project-row-${row.length * index}`}
            >
              {row.map((project, projectIndex) => (
                <AnimationProjectCard
                  key={`project-row-card-${project.id}-${row.length * projectIndex}`}
                  locale={locale}
                  project={project}
                  translate={isOdd ? translateXReverse : translateX}
                />
              ))}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export function Header() {
  const t = useTranslations('project');

  return (
    <div className="container relative inset-x-0 z-40 px-4 py-20 md:py-40">
      <Typography
        className="whitespace-nowrap text-[3rem] font-semibold leading-tight sm:text-6xl md:leading-normal"
        element="h2"
      >
        {t('my-projects')}
      </Typography>
      <p className="mt-8 max-w-2xl text-base dark:text-neutral-200 md:text-xl">
        {t('description')}
      </p>
    </div>
  );
}

export function AnimationProjectCard({
  project,
  translate,
  locale,
}: {
  project: Project;
  translate: MotionValue<number>;
  locale: Locale;
}) {
  return (
    <motion.div
      className="group/product relative w-[25rem] flex-shrink-0 md:w-[35rem]"
      key={project.id}
      style={{
        x: translate,
      }}
      whileHover={{
        y: -10,
      }}
    >
      <ProjectCard locale={locale} project={project} />
    </motion.div>
  );
}

export function ProjectCard({
  project,
  locale,
  className,
}: {
  project: Project;
  locale: Locale;
  className?: string;
}) {
  return (
    <Link className={cn('', className)} href={`/projects/${project.id}`}>
      <Image
        alt={project.name[locale]}
        className="h-full w-full rounded-lg object-cover"
        src={project.image}
        width={500}
      />

      <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-between gap-2 bg-gradient-to-b from-transparent to-background p-4">
        <div className="flex flex-col items-start gap-2">
          <Typography as="h4" element="h4">
            {project.name[locale]}
          </Typography>

          <Typography as="mutedText" className="line-clamp-2" element="p">
            {project.shortDescription[locale]}
          </Typography>

          <div className="flex flex-wrap items-center gap-2">
            {project.stack.slice(0, 4).map(({ id, name }) => (
              <Badge key={id} variant="transparent">
                {name[locale]}
              </Badge>
            ))}
          </div>
        </div>

        <ExternalLinkIcon className="h-5 w-5 min-w-5 opacity-100 transition duration-300 group-hover:opacity-100 md:opacity-0" />
      </div>
    </Link>
  );
}
