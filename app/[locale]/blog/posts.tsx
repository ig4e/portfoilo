/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain -- TODO */
/* eslint-disable @typescript-eslint/no-non-null-assertion -- TODO */
'use client';

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { useDebounce } from '@uidotdev/usehooks';
import type { HTMLMotionProps } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from 'nuqs';
import { Suspense } from 'react';
import { gql } from '@/_generated';
import type { CategoryEntity } from '@/_generated/graphql';
import { FullPagination } from '@/components/full-pagination';
import { SearchInput } from '@/components/search-input';
import { Typography } from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import { Loader } from '@/components/ui/loader';
import { Link } from '@/lib/navigation';
import { Categories } from './categories';

const POSTS_QUERY = gql(`
query PostsSearch(
  $query: String!
  $pagination: PaginationArg
  $locale: String
  $filters: PostFiltersInput
) {
  search(query: $query, locale: $locale) {
    posts(pagination: $pagination, filters: $filters) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        id
        attributes {
          author {
            data {
              id
              attributes {
                image {
                  data {
                    id
                    attributes {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
          title
          description
          image {
            data {
              id
              attributes {
                url
                height
                width
              }
            }
          }
          locale
          slug
          updatedAt
          postedAt
        }
      }
    }
  }
}
`);

export function Posts() {
  const locale = useLocale();
  const t = useTranslations('blog');

  const [page, setPage] = useQueryState('page', parseAsInteger.withDefault(1));

  const [query, setQuery] = useQueryState(
    'query',
    parseAsString.withDefault(''),
  );

  const [categories, setCategories] = useQueryState<string[]>(
    'categories',
    parseAsArrayOf(parseAsString).withDefault([]),
  );

  const debouncedQuery = useDebounce(query, 250);

  const { data: posts, loading } = useQuery(POSTS_QUERY, {
    variables: {
      query: debouncedQuery ? debouncedQuery : '*',
      locale,
      pagination: {
        pageSize: 10,
        page,
      },
      filters:
        categories.length > 0
          ? {
              categories: {
                id: {
                  in: categories,
                },
              },
            }
          : undefined,
    },
  });

  return (
    <div className="space-y-4 rounded-md border bg-background/60 p-4 md:space-y-8">
      <div className="relative flex items-center gap-4">
        <SearchInput
          placeholder={t('search')}
          onChange={(e) => void setQuery(e.target.value)}
          value={query}
        />
        <Suspense fallback={<Loader className="min-h-10" />}>
          <Categories
            onChange={(state) =>
              void setCategories(
                (state as { label: string; value: string }[]).map(
                  (d) => d.value,
                ),
              )
            }
            placeholder={t('fillters.categories')}
            className="w-1/2"
            valueIDs={categories}
          />
        </Suspense>
      </div>

      <div className="relative z-40 grid min-h-64 grid-cols-1 gap-4 will-change-auto md:grid-cols-2 lg:grid-cols-3">
        <Loader isLoading={loading} />
        {posts?.search?.posts?.data.map((post) => (
          <PostCard
            key={post.id}
            post={{
              id: post.id!,
              slug: post.attributes?.slug!,
              image: post.attributes?.image.data?.attributes?.url!,
              name: post.attributes?.title!,
              description: post.attributes?.description!,
              categories: post.attributes?.categories?.data!,
            }}
          />
        ))}
      </div>

      <FullPagination
        total={posts?.search?.posts?.meta.pagination.pageCount ?? 1}
        onChange={(newPage) => void setPage(newPage)}
      />
    </div>
  );
}

interface Post {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
  categories: CategoryEntity[];
}

export function PostCard({ post }: HTMLMotionProps<'div'> & { post: Post }) {
  return (
    <div
      key={post.slug}
      id={post.id}
      className="group relative overflow-hidden rounded-md border transition duration-500 hover:-translate-y-1 hover:border-primary"
    >
      <Link href={`/blog/posts/${post.id}/${post.slug}`}>
        <Image
          height={500}
          width={500}
          src={post.image}
          className="aspect-video h-full w-full object-cover"
          alt={post.name}
        />

        <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-between gap-2 bg-gradient-to-b from-transparent to-background p-4 ">
          <div className="flex flex-col items-start gap-2">
            <Typography element="h4" as="h4">
              {post.name}
            </Typography>

            <Typography element="p" as="mutedText" className="line-clamp-2">
              {post.description}
            </Typography>

            <div className="flex flex-wrap items-center gap-2">
              {post.categories.slice(0, 4).map(({ id, attributes }) => (
                <Badge key={id} variant="transparent">
                  {attributes?.name}
                </Badge>
              ))}
            </div>
          </div>

          <ExternalLinkIcon className="h-5 w-5 min-w-5 opacity-100 transition duration-300 group-hover:opacity-100 md:opacity-0" />
        </div>
      </Link>
    </div>
  );
}
