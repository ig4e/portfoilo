import { remark } from 'remark';
import { remarkHeading } from '@/mdx-plugins/remark-heading';

export interface TOCItemType {
  title: string;
  url: string;
  depth: number;
}

export type TableOfContents = TOCItemType[];

/**
 * Get Table of Contents from markdown/mdx document (using remark)
 *
 * @param content - Markdown content
 */
export async function getTableOfContents({
  content,
  postId,
}: {
  content?: string;
  postId?: string;
}): Promise<TableOfContents> {
  let body = content;

  if (!content && postId) {
    const postResponse = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace('/graphql', '/api')}/posts/${postId}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
        },
        next: { revalidate: 3600 },
      },
    );

    const post = (await postResponse.json()) as {
      data: {
        attributes: { body: string };
      };
    };

    body = post.data.attributes.body;
  }

  const result = await remark().use(remarkHeading).process(body);

  if ('toc' in result.data) return result.data.toc as TableOfContents;

  return [];
}
