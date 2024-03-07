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
    <header className="z-50 w-full border-b border-border/40 bg-background/95 py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex max-w-screen-2xl items-center">
        <div className="flex flex-col gap-2">
          <Link href="/" className="group flex items-center gap-2">
            <Icons.logo className="h-8 w-8" />
            <Typography element="h4" as="h5" className="relative">
              <span className="block whitespace-nowrap group-hover:hidden">
                セカイ
              </span>
              <span className="hidden group-hover:block">{t('name')}</span>
            </Typography>
          </Link>

          <div className=" flex items-center gap-4">
            <Typography element="h4" as="mutedText">
              Copyright © 2024 Ahmed Mohamed.
            </Typography>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center gap-2" suppressHydrationWarning>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex"
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
              href={siteConfig.links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex"
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
