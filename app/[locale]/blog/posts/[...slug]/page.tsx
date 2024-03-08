/* eslint-disable @typescript-eslint/no-unsafe-call -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-shadow  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-non-null-assertion  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-unnecessary-condition  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-unsafe-argument  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain  -- TODO FIX MDX TYPES  */

import { AtSign, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { gql } from '@/_generated';
import { GenericHero } from '@/components/generic-hero';
import { RenderMDX } from '@/components/render-mdx';
import { Typography } from '@/components/typography';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Locale } from '@/config/i18n';
import { getClient } from '@/lib/apollo';
import { Link } from '@/lib/navigation';
import { calculateRT, toLocaleDateString } from '@/lib/utils';
import { LocaleAlert } from './locale-alert';
import { Toc } from './toc';

interface PostPageProps {
  params: {
    locale: Locale;
    readonly slug: [string, string];
  };
}

//export const fetchCache = 'force-no-store';

const POST_QUERY = gql(`query Post($postId: ID) {
    post(id: $postId) {
      data {
        id
        attributes {
          author {
            data {
              id
              attributes {
                name
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                slug
              }
            }
          }
          body
          categories {
            data {
              id
              attributes {
                name
                description
              }
            }
          }
          description
          image {
            data {
              attributes {
                url
              }
            }
          }
          locale
          postedAt
          createdAt
          slug
          title
          localizations {
            data {
              id
              attributes {
                locale
                slug
              }
            }
          }
        }
      }
    }
  }
`);

const POST_METADATA_QUERY = gql(`query PostMeta($postId: ID) {
    post(id: $postId) {
      data {
        id
        attributes {
          author {
            data {
              id
              attributes {
                name
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                slug
              }
            }
          }
          description
          image {
            data {
              attributes {
                url
                width
                height
              }
            }
          }
          locale
          postedAt
          slug
          title
        }
      }
    }
  }
`);

export async function generateMetadata({
  params: {
    slug: [id],
  },
}: PostPageProps) {
  const {
    data: { post },
  } = await getClient().query({
    query: POST_METADATA_QUERY,
    variables: {
      postId: id,
    },
    errorPolicy: 'ignore',
    fetchPolicy: 'no-cache',
  });

  return {
    title: post?.data?.attributes?.title!,
    description: post?.data?.attributes?.description!,
    openGraph: {
      title: post?.data?.attributes?.title!,
      description: post?.data?.attributes?.description!,
      images: [
        {
          url: post?.data?.attributes?.image.data?.attributes?.url!,
          width: post?.data?.attributes?.image.data?.attributes?.width!,
          height: post?.data?.attributes?.image.data?.attributes?.height!,
        },
      ],
      type: 'article',
      alternateLocale: ['ar-EG', 'en-US'],
      authors: [post?.data?.attributes?.author?.data?.attributes!.name],
    },
  } as Metadata;
}

async function Post({
  params: {
    locale,
    slug: [id],
  },
}: PostPageProps) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations('blog');
  const {
    data: { post },
  } = await getClient().query({
    query: POST_QUERY,
    variables: {
      postId: id,
    },
  });

  const postData = {
    id: post?.data?.id!,
    title: post?.data?.attributes?.title!,
    description: post?.data?.attributes?.description!,
    body: post?.data?.attributes?.body!,
    image: post?.data?.attributes?.image.data?.attributes?.url!,
    author: {
      name: post?.data?.attributes?.author?.data?.attributes!.name!,
      image:
        post?.data?.attributes?.author?.data?.attributes!.image?.data
          ?.attributes?.url!,
    },
    categories: post?.data?.attributes?.categories?.data!.map(
      ({ id, attributes }) => ({
        id: id!,
        name: attributes?.name!,
        description: attributes?.description!,
      }),
    )!,
    slug: post?.data?.attributes?.slug!,
    locale: post?.data?.attributes?.locale! as Locale,
    postedAt:
      post?.data?.attributes?.postedAt! ?? post?.data?.attributes?.createdAt,
    localizations: post?.data?.attributes?.localizations?.data!.map(
      ({ id, attributes }) => ({
        id: id!,
        locale: attributes?.locale!,
        slug: attributes?.slug!,
      }),
    )!,
  };

  return (
    <div className="space-y-16 pb-16" suppressHydrationWarning>
      <GenericHero
        classNames={{ description: 'max-w-3xl' }}
        description={postData.description}
        title={postData.title}
      />

      <div className="rounded-md bg-background/60 p-4 py-8 backdrop-blur-3xl md:flex md:gap-4">
        <div className="mx-auto max-w-4xl space-y-8">
          {postData ? (
            <LocaleAlert
              localizations={postData.localizations}
              post={{
                id: postData.id,
                locale: postData.locale,
                slug: postData.slug,
              }}
            />
          ) : null}

          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={postData.author.image} />
              <AvatarFallback className="text-lg font-semibold uppercase">
                {postData.author.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <Typography as="h4" element="h4">
                {postData.author.name}
              </Typography>

              <Typography
                as="mutedText"
                className="flex items-center gap-1"
                element="h4"
              >
                <Clock className="h-4 w-4" />
                {t('rt', {
                  count: calculateRT(postData.body),
                })}
              </Typography>

              <Typography
                as="mutedText"
                className="flex items-center gap-1"
                element="h4"
              >
                <AtSign className="h-4 w-4" />
                {toLocaleDateString(postData.postedAt)}
              </Typography>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {postData.categories.map((category) => {
              return (
                <Link
                  href={`/blog?categories=${category.id}`}
                  key={category.id}
                >
                  <TooltipProvider key={category.id}>
                    <Tooltip key={category.id}>
                      <TooltipTrigger>
                        <Badge className="text-base" variant="secondary">
                          {category.name}
                        </Badge>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{category.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              );
            })}
          </div>
          <Separator />
          <Image
            alt={postData.title}
            className="h-auto w-full rounded-md object-cover"
            height={1000}
            src={postData.image}
            width={1000}
          />
          <div className="prose prose-stone max-w-3xl dark:prose-invert">
            {post?.data?.attributes?.body ? (
              <RenderMDX
                source={postData.body}
                sourceLocale={postData.locale}
              />
            ) : null}
          </div>
        </div>

        <div className="sticky top-20 hidden h-full w-full max-w-80 rounded-md border bg-accent/50 p-2 md:block">
          <Toc />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace('/graphql', '/api')}/posts?pagination[pageSize]=100&locale[0]=en-US&locale[1]=ar-EG`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
      },
      next: { revalidate: 3600 },
    },
  ).then((res) => res.json());

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access  -- TODO FIX MDX TYPES
  return posts.data.map(
    (post: { id: string; attributes: { slug: string; locale: string } }) => ({
      slug: [String(post.id), String(post.attributes.slug)],
    }),
  );
}

export default Post;
