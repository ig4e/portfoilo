'use client';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { routes } from '@/config/routes';
import { siteConfig } from '@/config/site';
import { Link, usePathname } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { Icons } from '@/components/ui/icons';
import { type TOCItemType, getTableOfContents } from '@/server/get-toc';
import { TOCItems } from '@/app/[locale]/blog/posts/[...slug]/toc';

export function NavSheet() {
  const t = useTranslations('site-header');
  const [open, setOpen] = useState(false);
  const [toc, setToc] = useState<TOCItemType[]>([]);
  const pathname = usePathname();
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- necessary
  const id = useParams()?.slug?.[0];

  useEffect(() => {
    let ignore = false;

    if (id) {
      getTableOfContents({ postId: id })
        .then((tocItems) => {
          if (!ignore) setToc(tocItems);
        })
        .catch(() => null);

      return () => {
        ignore = true;
      };
    }
  }, [id]);

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost">
          <HamburgerMenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between" side="full">
        <div className="mt-4 flex flex-col gap-2">
          {routes.map((route) => {
            return (
              <Link
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    size: 'default',
                    className: 'w-full justify-start',
                  }),
                  {
                    'text-muted-foreground': !pathname.includes(route.url),
                  },
                )}
                href={route.url}
                key={route.title}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {(route.icon as unknown as JSX.Element | undefined) ? (
                  <route.icon className="w-6" />
                ) : null}

                <div>
                  <div className="font-medium leading-none">
                    {t(`links.${route.title}`)}
                  </div>
                </div>
              </Link>
            );
          })}

          {Boolean(id) && (
            <div
              className="mt-4"
              onClick={() => {
                setOpen(false);
              }}
              onKeyDown={() => {
                setOpen(false);
              }}
              role="button"
              tabIndex={0}
            >
              <TOCItems items={toc} />
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button className="w-full" size="sm">
            {t('get-in-touch')}
          </Button>
          <Link href={siteConfig.links.github} rel="noreferrer" target="_blank">
            <Button size="icon" variant="secondary">
              <Icons.gitHub className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href={siteConfig.links.linkedIn}
            rel="noreferrer"
            target="_blank"
          >
            <Button size="icon" variant="secondary">
              <Icons.linkedIn className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
