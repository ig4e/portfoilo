'use client';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useMemo, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import type { Locale } from '@/config/i18n';
import { skills } from '@/config/skills';
import { hexToRgb } from '@/lib/utils';
import { Typography } from '@/components/typography';
import { Icons } from '@/components/ui/icons';
import { Noise } from '@/components/ui/images';
import { Link } from '@/lib/navigation';
import { useViewport } from '@/hooks/use-viewport';

function SkillsSection() {
  const t = useTranslations('index');

  return (
    <section
      className="dark scroll-mt-20 bg-black py-12 text-white"
      id="skills"
    >
      <div
        className="container flex min-h-[40vh]  flex-col gap-4 overflow-x-hidden overflow-y-clip"
        id="skill-cards"
      >
        <div className="w-full ">
          <div className="mb-6 flex items-center gap-4 ">
            <Icons.logo className="h-9 w-9" />
            <Typography as="h2" element="h2">
              {t('skills.section-name')}
            </Typography>
          </div>
        </div>

        {skills.map((skillSection) => (
          <SkillsTypeSection
            key={skillSection.type}
            skillSection={skillSection}
          />
        ))}
      </div>
    </section>
  );
}

export function SkillsTypeSection({
  skillSection,
}: {
  skillSection: (typeof skills)[number];
}) {
  const t = useTranslations('index');
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useViewport();

  useEffect(() => {
    if (isMobile) return () => void 0;
    const { current } = sectionRef;

    if (current) current.addEventListener('mousemove', onMouseMove);

    function onMouseMove(e: MouseEvent) {
      if (!current) return;

      for (const card of document.getElementsByClassName('card')) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        (card as HTMLDivElement).style.setProperty('--x', `${x}px`);
        (card as HTMLDivElement).style.setProperty('--y', `${y}px`);
      }
    }

    return () => {
      if (current) current.removeEventListener('mousemove', onMouseMove);
    };
  }, [sectionRef, isMobile]);

  return (
    <div className="space-y-4" key={skillSection.type} ref={sectionRef}>
      <Typography as="h3" element="h3">
        {t(`skills.${skillSection.type}`)}
      </Typography>

      <div className="group/section grid gap-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {skillSection.items.map((skill) => (
          <SkillCard item={skill} key={skill.name['en-US']} />
        ))}
      </div>
    </div>
  );
}

function SkillCard({
  item,
}: {
  item: (typeof skills)[number]['items'][number];
}) {
  const locale = useLocale() as Locale;
  const itemRgbColor = useMemo(() => hexToRgb(item.color), [item.color]);

  return (
    <Link href={item.link} target="_blank">
      <div className="card group relative cursor-pointer overflow-hidden rounded-md bg-secondary px-[1px] py-[1.5px]">
        <div
          about="card-blur"
          className="absolute inset-0 z-[3] h-full w-full opacity-0 blur-xl transition-all duration-300 will-change-auto group-hover:opacity-100"
          style={{
            background: `radial-gradient(var(--circle-size, 700px) circle at var(--x, 100px) var(--y, 100px), rgba(${itemRgbColor.r}, ${itemRgbColor.g}, ${itemRgbColor.b}, 0.25), transparent 40%)`,
          }}
        />

        <div
          about="card-border"
          className="absolute inset-0 z-[1] h-full w-full opacity-0 transition-all duration-300 will-change-auto group-hover/section:opacity-100"
          style={{
            background: `radial-gradient(var(--circle-size,250px) circle at var(--x, 100px) var(--y, 100px), rgba(${itemRgbColor.r}, ${itemRgbColor.g}, ${itemRgbColor.b}, 0.4), transparent 40%)`,
          }}
        />

        <div
          className="top-18 absolute inset-0 z-[4] mix-blend-overlay"
          style={{
            backgroundRepeat: 'repeat',
            backgroundImage: `url('${Noise.src}')`,
            opacity: 0.1,
          }}
        />

        <div
          className="absolute inset-10 z-[3] h-full w-full animate-skillcardlight opacity-15 blur-3xl will-change-auto md:bottom-0 md:left-0 md:h-1/2"
          style={{
            backgroundColor: item.color,
          }}
        />

        <div className="relative z-[2] flex h-full w-full flex-row-reverse items-center gap-4 rounded-[inherit] bg-black p-4 md:aspect-square md:flex-col">
          <ExternalLink className="absolute end-2 top-2 self-end opacity-0 transition-all group-hover:opacity-100 md:end-4 md:top-4" />
          <item.icon className="z-10 flex h-16 w-auto min-w-[4rem] max-w-full items-center justify-center place-self-center justify-self-center rounded-sm md:mt-auto" />

          <div className="me-auto mt-auto space-y-1">
            <Typography as="h4" element="h4">
              {item.name[locale]}
            </Typography>
            <Typography as="mutedText" className="" element="p">
              {item.description[locale]}
            </Typography>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { SkillsSection };
