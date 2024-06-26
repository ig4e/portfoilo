import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { Link } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { LocaleSelector } from '@/components/locale-selector';
import { ModeToggle } from '@/components/mode-toggle';
import { Typography } from '@/components/typography';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';

function SiteFooter() {
  const t = useTranslations('site-header');

  return (
    <header className="z-50 w-full border-b border-border/40 bg-background py-4 relative">
      <div className="container flex max-w-screen-2xl items-center">
        <div className="flex flex-col gap-2">
          <Link className="group flex items-center gap-2" href="/">
            <Icons.logo className="h-8 w-8" />
            <Typography as="h5" className="relative" element="h4">
              <span className="block whitespace-nowrap group-hover:hidden">
                セカイ
              </span>
              <span className="hidden group-hover:block">{t('name')}</span>
            </Typography>
          </Link>

          <div className=" flex items-center gap-4">
            <Typography as="mutedText" element="h4">
              Copyright © 2024 Ahmed Mohamed.
            </Typography>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2" suppressHydrationWarning>
            <Link
              className="hidden md:flex"
              href={siteConfig.links.github}
              rel="noreferrer"
              target="_blank"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'aspect-square !h-9 !w-9 px-0',
                )}
              >
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>

            <Link
              className="hidden md:flex"
              href={siteConfig.links.linkedIn}
              rel="noreferrer"
              target="_blank"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                  }),
                  'aspect-square !h-9 !w-9 px-0',
                )}
              >
                <Icons.linkedIn className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>

            <ModeToggle />
            <LocaleSelector />
          </nav>
        </div>
      </div>
    </header>
  );
}

export { SiteFooter };
