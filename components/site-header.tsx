import { useTranslations } from 'next-intl';
import { routes } from '@/config/routes';
import { siteConfig } from '@/config/site';
import { Link } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { NavSheet } from '@/components/nav-sheet';
import { Typography } from '@/components/typography';
import { Button, buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { ModeToggle } from './mode-toggle';
import { LocaleSelector } from './locale-selector';

export function SiteHeader() {
  const t = useTranslations('site-header');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-4">
          <Link className="group flex items-center gap-2" href="/">
            <Icons.logo className="h-8 w-8" />
            <Typography as="h5" className="relative w-14" element="h4">
              <span className="block w-14 overflow-hidden whitespace-nowrap transition-all duration-200 group-hover:w-0">
                セカイ
              </span>
              <span className="absolute top-0 w-0 overflow-hidden transition-all duration-200 group-hover:w-14">
                {t('name')}
              </span>
            </Typography>
          </Link>

          <div className="hidden items-center gap-4 md:flex">
            {routes.map((route) => {
              return (
                <Link href={route.url} key={route.title}>
                  <Typography as="link" element="h4">
                    {t(`links.${route.title}`)}
                  </Typography>
                </Link>
              );
            })}
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

            <Button className="hidden md:flex" size="sm">
              {t('get-in-touch')}
            </Button>

            <div className="block md:hidden">
              <NavSheet />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
