/* eslint-disable import/no-named-as-default -- REHYPE THING I WONT FIX */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  -- TODO FIX MDX TYPES */
import fs from 'node:fs';
import path from 'node:path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Options as rehypeAutolinkHeadingsOptions } from 'rehype-autolink-headings';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import type { Options as rehypePrettyCodeOptions } from 'rehype-pretty-code';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Pre } from '@/components/mdx/pre';

// Read and parse the custom themes
const crimsonDark = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), 'lib/shiki-themes/crimson-dark.json'),
    'utf-8',
  ),
);
const crimsonLight = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), 'lib/shiki-themes/crimson-light.json'),
    'utf-8',
  ),
);

function RenderMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      components={{
        pre: Pre,
        table: Table,
        tbody: TableBody,
        thead: TableHeader,
        tr: TableRow,
        th: TableHead,
        td: TableCell,
      }}
      options={{
        mdxOptions: {
          development: process.env.NODE_ENV === 'development',
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: 'wrap',
                properties: {
                  ariaHidden: true,
                  tabIndex: -1,
                  className: 'hash-link',
                },
              } satisfies rehypeAutolinkHeadingsOptions,
            ],
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.tagName === 'pre') {
                  const [codeEl] = node.children;
                  if (codeEl.tagName !== 'code') return;

                  node.raw = codeEl.children?.[0].value;
                }
              });
            },
            [
              rehypePrettyCode,
              {
                theme: {
                  dark: crimsonDark,
                  light: crimsonLight,
                },
                keepBackground: false,
              } satisfies rehypePrettyCodeOptions,
            ],
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === 'element' && node?.tagName === 'figure') {
                  if (!('data-rehype-pretty-code-figure' in node.properties)) {
                    return;
                  }

                  for (const child of node.children) {
                    if (child.tagName === 'pre') {
                      child.properties.raw = node.raw;
                    }
                  }
                }
              });
            },
          ],
        },
      }}
      source={source}
    />
  );
}

export { RenderMDX };
