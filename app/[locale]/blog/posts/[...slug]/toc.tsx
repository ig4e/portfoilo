'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/lib/navigation';
import { cn } from '@/lib/utils';
import { Loader } from '@/components/ui/loader';
import { Typography } from '@/components/typography';

interface TOCItem {
  title: string;
  url: string;
  children: TOCItem[];
}

export function Toc() {
  const t = useTranslations('blog');
  const [tree, setTree] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const toc = document.querySelector('div.prose > ul:nth-child(2)');
    if (toc) {
      const parseList = (element: HTMLElement): TOCItem[] => {
        const items: TOCItem[] = [];
        const listItems = Array.from(element.children);
        listItems.forEach((li) => {
          const link = li.querySelector('a');
          const title = link?.innerText ?? '';
          const url = link?.getAttribute('href') ?? '';
          const nestedList = li.querySelector('ul');
          const children = nestedList ? parseList(nestedList) : [];
          items.push({ title, url, children });
        });
        return items;
      };

      const treeData: TOCItem[] = parseList(toc as unknown as HTMLElement);
      setTree(treeData);
      setIsLoading(false);
    }
  }, []);

  return (
    <div className={cn({ 'h-64': isLoading })}>
      {isLoading ? (
        <Loader className="inset-0" />
      ) : (
        <>
          <Typography element="h4" as="h4" className="p-2">
            {t('toc')}
          </Typography>
          {tree.map((item) => {
            return (
              <Item
                {...item}
                setActiveId={setActiveId}
                activeId={activeId}
                key={item.url}
              />
            );
          })}
        </>
      )}
    </div>
  );
}

function Item({
  title,
  url,
  children,
  setActiveId,
  activeId,
}: TOCItem & { setActiveId: (id: string) => void; activeId: string }) {
  const id = useMemo(() => decodeURIComponent(url).replace('#', ''), [url]);
  const observer = useRef<IntersectionObserver>(null);

  useEffect(() => {
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    //@ts-expect-error -- TODO
    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: '0% 0% -35% 0px',
    });

    const elements = document.querySelectorAll('h2, h3, h4, h5, h6');
    elements.forEach((elem) => observer.current?.observe(elem));
    return () => observer.current?.disconnect();
  }, [setActiveId]);

  return (
    <div className="prose prose-sm">
      <ul>
        <li>
          <Link
            href={url}
            className={cn(
              'text-muted-foreground font-semibold text-base hover:text-primary/80 transition',
              {
                'text-primary': activeId === id,
              },
            )}
            onClick={() => {
              setActiveId(id);
            }}
          >
            {title}
          </Link>
        </li>
        <ul className="px-2">
          {children.map((child) => (
            <Item
              {...child}
              key={child.url}
              setActiveId={setActiveId}
              activeId={activeId}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
}
