/* eslint-disable @typescript-eslint/no-unsafe-member-access -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  -- TODO FIX MDX TYPES */
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


function RenderMDX({ source }: { source: string }) {
  return (
    <MDXRemote
      components={{
        //@ts-expect-error -- type mismatch nothing i can do
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
              //@ts-expect-error -- type mismatch nothing i can do
              rehypePrettyCode,
              {
                theme: {
                  dark: 'red',
                  light: 'min-light',
                },
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
