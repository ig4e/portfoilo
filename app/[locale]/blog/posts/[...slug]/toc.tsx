'use client';

import { Book, TextIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ScrollArea } from '@/components/ui/scroll-area';
import * as Primitive from '@/components/ui/toc';
import { useAnchorObserver } from '@/hooks/use-anchor-observer';
import { Link } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import type { TOCItemType } from '@/server/get-toc';

type PosType = [top: number, height: number];

export function MobileTOC({ items }: { items: TOCItemType[] }): JSX.Element {
  const [open, setOpen] = useState(false);
  const t = useTranslations('blog');

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger className="flex items-center gap-2">
        <Book className="h-5 w-5" />
        {t('toc-small')}
      </PopoverTrigger>
      <PopoverContent align="center" className="mx-auto mb-3.5 w-screen">
        <ScrollArea className="h-full w-full rounded-md">
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
            <TOCItems items={items} />
          </div>
        </ScrollArea>

        <Button
          className="mt-4 w-full"
          onClick={() => {
            setOpen(false);
          }}
          variant="outline"
        >
          Close
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export function TOCItems({ items }: { items: TOCItemType[] }): JSX.Element {
  const t = useTranslations('blog');
  const containerRef = useRef<HTMLDivElement>(null);
  const markerRef = useRef<HTMLDivElement>(null);

  const setPos = ([top, height]: PosType): void => {
    const element = markerRef.current;
    if (!element) return;

    element.style.setProperty('top', `${top}px`);
    element.style.setProperty('height', `${height}px`);
    element.style.setProperty('display', `block`);
  };

  return (
    <ScrollArea className="pt-4 text-sm first:pt-0" ref={containerRef}>
      <Primitive.TOCScrollProvider containerRef={containerRef} toc={items}>
        <div
          className="absolute start-0 hidden border-s-2 border-primary transition-all"
          ref={markerRef}
          role="none"
        />
        <h3 className="mb-4 inline-flex items-center gap-2">
          <TextIcon className="size-4" />
          {t('toc')}
        </h3>
        <div className="flex flex-col gap-1 border-s-2 text-muted-foreground">
          {items.map((item) => (
            <TOCItem item={item} key={item.url} setMarker={setPos} />
          ))}
        </div>
      </Primitive.TOCScrollProvider>
    </ScrollArea>
  );
}

export function OneLineTOC({ items }: { items: TOCItemType[] }) {
  const headings = useMemo(() => {
    return items.map((item) => item.url.split('#')[1]);
  }, [items]);

  const activeAnchor = useAnchorObserver(headings);

  const activeAnchorData =
    items.find((item) => activeAnchor === item.url.split('#')[1]) ?? items[0];

  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Primitive.TOCScrollProvider containerRef={containerRef} toc={items}>
      <div className="text-foreground">
        <Link href={activeAnchorData.url}>
          <span className="line-clamp-1 overflow-hidden text-ellipsis py-1 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary">
            {activeAnchorData.title}
          </span>
        </Link>
      </div>
    </Primitive.TOCScrollProvider>
  );
}

function TOCItem({
  item,
  setMarker,
}: {
  item: TOCItemType;
  setMarker: (v: PosType) => void;
}): JSX.Element {
  const active = Primitive.useActiveAnchor(item.url);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (active && ref.current) {
      setMarker([ref.current.offsetTop, ref.current.clientHeight]);
    }
  }, [active, setMarker]);

  return (
    <Primitive.TOCItem
      className={cn(
        'overflow-hidden text-ellipsis py-1 transition-colors data-[active=true]:font-medium data-[active=true]:text-primary',
        item.depth <= 2 && 'ps-4',
        item.depth === 3 && 'ps-7',
        item.depth >= 4 && 'ps-10',
      )}
      href={item.url}
      ref={ref}
    >
      {item.title}
    </Primitive.TOCItem>
  );
}
