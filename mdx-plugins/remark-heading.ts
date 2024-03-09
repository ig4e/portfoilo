/* eslint-disable @typescript-eslint/no-unsafe-argument  -- TOC  */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- TOC */
/* eslint-disable @typescript-eslint/no-explicit-any  -- TOC */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  -- TOC */
import Slugger from 'github-slugger';
import type { Transformer } from 'unified';
import { visit } from 'unist-util-visit';
import type { Root } from 'remark-gfm';
import type { TOCItemType } from '@/server/get-toc';
import { flattenNode } from '@/mdx-plugins/utils/remark';

const slugger = new Slugger();

export interface HProperties {
  id?: string;
}

/**
 * Add heading ids and extract TOC
 *
 * Attach an array of `TOCItemType` to `vfile.data.toc`
 */
export function remarkHeading(): Transformer<Root, Root> {
  return (node, file) => {
    const toc: TOCItemType[] = [];
    slugger.reset();

    visit(node, ['heading'], (heading) => {
      heading.data ||= {};
      heading.data.hProperties ||= {};

      const text = flattenNode(heading);
      const properties = heading.data.hProperties as any;
      const id = slugger.slug(properties.id ?? text);

      properties.id = id;

      toc.push({
        title: text,
        url: `#${id}`,
        depth: (heading as { depth: number }).depth,
      });

      return 'skip';
    });

    file.data.toc = toc;
  };
}
