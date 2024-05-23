import { useTranslations } from 'next-intl';
import { NavSheet } from '@/components/nav-sheet';
import { Typography } from '@/components/typography';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { siteConfig } from '@/config/site';
import { Link } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { NavMenu } from './header-nav';
import { LocaleSelector } from './locale-selector';
import { ModeToggle } from './mode-toggle';

export function SiteHeader() {
  const t = useTranslations('site-header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-gradient-to-t from-background/95 via-muted/25 to-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-4">
          <Link className="group flex items-center gap-2" href="/">
            <Icons.logo className="h-8 w-8" />
            <Typography as="h5" className="relative w-14" element="h4">
              <span className="block w-14 overflow-hidden whitespace-nowrap transition-all duration-200 group-hover:w-0">
                {t('name')}
              </span>
              <span className="absolute top-0 w-0 overflow-hidden text-nowrap transition-all duration-200 group-hover:w-14">
                セカイ
              </span>
            </Typography>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            <NavMenu />
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

            <div className="block md:hidden">
              <NavSheet />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
