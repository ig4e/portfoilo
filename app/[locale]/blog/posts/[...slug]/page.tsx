/* eslint-disable @typescript-eslint/no-unsafe-call -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-unsafe-member-access -- TODO FIX MDX TYPES */
/* eslint-disable @typescript-eslint/no-shadow  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-non-null-assertion  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-unnecessary-condition  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-unsafe-argument  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-unsafe-assignment  -- TODO FIX MDX TYPES  */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain  -- TODO FIX MDX TYPES  */

import { POST_META_QUERY, POST_QUERY } from '@/apollo/queries/post';
import { GenericHero } from '@/components/generic-hero';
import { RenderMDX } from '@/components/render-mdx';
import { Typography } from '@/components/typography';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { Locale } from '@/config/i18n';
import { getClient } from '@/lib/apollo';
import { Link } from '@/lib/navigation';
import { calculateRT } from '@/lib/utils';
import { getTableOfContents } from '@/server/get-toc';
import { AtSign, ClockIcon } from 'lucide-react';
import type { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import Image from 'next/image';
import { PostDate } from './date';
import { LocaleAlert } from './locale-alert';
import { MobileTOC, OneLineTOC, TOCItems } from './toc';
import { Track } from './track';

export interface PostPageProps {
  params: {
    locale: Locale;
    readonly slug: [string, string];
  };
}

export const fetchCache = 'force-no-store';

export async function generateMetadata({
  params: {
    slug: [id],
  },
}: PostPageProps) {
  const {
    data: { post },
  } = await getClient().query({
    query: POST_META_QUERY,
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
  const toc = await getTableOfContents({
    content: post?.data?.attributes?.body!,
  });
  const postData = {
    id: post?.data?.id!,
    title: post?.data?.attributes?.title!,
    description: post?.data?.attributes?.description!,
    body: post?.data?.attributes?.body!,
    image: {
      url: post?.data?.attributes?.image?.data?.attributes?.url!,
      width: post?.data?.attributes?.image?.data?.attributes?.width!,
      height: post?.data?.attributes?.image?.data?.attributes?.height!,
    },
    author: {
      name: post?.data?.attributes?.author?.data?.attributes!.name!,
      title: post?.data?.attributes?.author?.data?.attributes!.title!,
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
    <div className="pb-16" suppressHydrationWarning>
      <Track postId={id} />
      <GenericHero description={postData.description} title={postData.title} />

      <div className="relative rounded-md bg-background/60 py-8 md:px-4">
        <div className="container flex flex-col-reverse justify-between rounded-md bg-background/60 lg:flex lg:flex-row">
          <article className="lg:w-[70%] lg:ps-8">
            {postData ? (
              <>
                <LocaleAlert
                  localizations={postData.localizations}
                  post={{
                    id: postData.id,
                    locale: postData.locale,
                    slug: postData.slug,
                  }}
                />

                <AspectRatio
                  ratio={postData.image?.width / postData.image?.height}
                >
                  <div className="h-full w-full overflow-hidden rounded-md p-0.5">
                    <Image
                      alt={postData.title}
                      className="h-full w-full rounded-md bg-accent object-fill"
                      height={postData.image.height}
                      priority
                      src={postData.image?.url}
                      width={postData.image.width}
                    />
                  </div>
                </AspectRatio>
                <div className="prose prose-stone mt-4 break-before-all overflow-hidden break-words dark:prose-invert md:max-w-4xl">
                  <RenderMDX source={postData.body} />
                </div>
              </>
            ) : null}
            <header className="fixed inset-x-0 bottom-0 z-10 w-screen border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
              <div className="container flex h-14 items-center justify-between gap-8">
                <MobileTOC items={toc} />
                <OneLineTOC items={toc} />
              </div>
            </header>
          </article>

          <aside className="top-20 h-full w-full self-start pb-8 lg:sticky lg:mt-0 lg:min-h-screen lg:w-3/12 lg:border-s lg:ps-[4.16%] lg:pt-5">
            <ScrollArea>
              <div className="space-y-4">
                <div className="space-y-4 border-b pb-4">
                  <Typography as="mutedText" element="span">
                    {t('written-by')}
                  </Typography>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={postData.author.image} />
                      <AvatarFallback className="text-lg font-semibold uppercase">
                        {postData.author.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <Typography as="h5" element="h5">
                        {postData.author.name}
                      </Typography>
                      <Typography
                        as="mutedText"
                        className="flex max-w-fit items-center gap-1 text-ellipsis whitespace-nowrap"
                        element="h6"
                      >
                        {postData.author.title}
                      </Typography>
                    </div>
                  </div>

                  <div>
                    <Typography
                      as="mutedText"
                      className="flex items-center gap-1"
                      element="h6"
                    >
                      <AtSign className="h-3 w-3" />
                      <PostDate date={postData.postedAt} />
                    </Typography>
                    <Typography
                      as="mutedText"
                      className="flex items-center gap-1"
                      element="h6"
                    >
                      <ClockIcon className="h-3 w-3" />
                      {t('rt', {
                        count: calculateRT(postData.body),
                      })}
                    </Typography>
                  </div>
                </div>

                <div className="space-y-4 border-b pb-4">
                  <Typography as="mutedText" element="span">
                    {t('categories')}
                  </Typography>

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
                                <Badge
                                  className="text-base"
                                  variant="secondary"
                                >
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
                </div>

                <div className="hidden lg:block">
                  <TOCItems items={toc} />
                </div>
              </div>
            </ScrollArea>
          </aside>
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

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return  -- TODO FIX MDX TYPES
  return posts.data.map(
    (post: { id: string; attributes: { slug: string; locale: string } }) => ({
      slug: [String(post.id), String(post.attributes.slug)],
    }),
  );
}

export default Post;
