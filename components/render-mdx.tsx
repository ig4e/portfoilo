/* eslint-disable @typescript-eslint/no-unsafe-call  -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  -- TODO FIX MDX TYPES */
import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import type { Options as TocOptions } from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';
import { getLocale } from 'next-intl/server';
import type { Locale } from '@/config/i18n';
import { Pre } from './mdx/pre';

async function RenderMDX({ source }: { source: string }) {
  const locale = (await getLocale()) as Locale;

  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          development: process.env.NODE_ENV === 'development',
          remarkPlugins: [
            [
              remarkToc,
              {
                tight: true,
                heading: locale === 'ar-EG' ? 'محتوي' : 'Contents',
              } as TocOptions,
            ],
            remarkGfm,
          ],
          rehypePlugins: [
            rehypeSlug,
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
              },
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
      components={{
        //@ts-expect-error -- type mismatch nothing i can do
        pre: Pre,
      }}
    />
  );
}

export { RenderMDX };
