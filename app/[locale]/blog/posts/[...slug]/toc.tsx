'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Typography } from '@/components/typography';
import { Loader } from '@/components/ui/loader';
import { cn } from '@/lib/utils';

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
          <Typography as="h4" className="p-2" element="h4">
            {t('toc')}
          </Typography>
          {tree.map((item) => {
            return (
              <Item
                {...item}
                activeId={activeId}
                key={item.url}
                setActiveId={setActiveId}
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
          <a
            className={cn(
              'text-base font-semibold text-muted-foreground transition hover:text-primary/80',
              {
                'text-primary': activeId === id,
              },
            )}
            href={url}
            onClick={() => {
              setActiveId(id);
            }}
          >
            {title}
          </a>
        </li>
        <ul className="px-2">
          {children.map((child) => (
            <Item
              {...child}
              activeId={activeId}
              key={child.url}
              setActiveId={setActiveId}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
}
