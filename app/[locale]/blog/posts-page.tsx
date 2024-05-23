import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import type { PostEntity } from '@/_generated/graphql';
import { POSTS_QUERY } from '@/apollo/queries/post';
import { Typography } from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import { getClient } from '@/lib/apollo';
import { cn } from '@/lib/utils';
import { Link } from '@/lib/navigation';
import { type Locale } from '@/config/i18n';
import { PostSearch } from './search';

export async function Posts({ locale }: { locale: Locale }) {
  const t = await getTranslations('blog');

  const latestPostsQuery = await getClient().query({
    query: POSTS_QUERY,
    variables: {
      sort: ['postedAt:desc'],
      locale,
    },
  });

  const latestPosts = latestPostsQuery.data.posts?.data ?? [];

  return (
    <div className="bg-background">
      <div className="container relative flex flex-col-reverse justify-between py-8 md:px-4 lg:flex lg:flex-row">
        <aside className="top-20 h-full self-start pb-8 lg:sticky lg:mt-0 lg:min-h-screen lg:w-3/12 lg:min-w-96 lg:border-e lg:pe-8">
          <PostSearch />
        </aside>

        <article className="space-y-4 lg:w-full lg:ps-8">
          <Typography as="h3" className="w-full" element="h3">
            {t('latest')}
          </Typography>

          <div className="grid w-full grid-flow-row gap-8 lg:grid-cols-2">
            {latestPosts.map((post, index) => {
              const isPreview = index === 0;
              if (!post.id || !post.attributes) return null;

              return (
                <Link
                  className={cn({ 'col-span-2': isPreview })}
                  href={`/blog/posts/${post.id}/${post.attributes.slug}`}
                  key={post.id}
                >
                  <PostCard isPreview={isPreview} post={post as never} />
                </Link>
              );
            })}
          </div>
        </article>
      </div>
    </div>
  );
}

function PostCard({
  post: { id, attributes },
  isPreview,
}: {
  post: PostEntity;
  isPreview: boolean;
}) {
  if (!attributes || !id) return null;

  return (
    <div
      className={cn(
        'flex flex-col gap-y-5 rounded-md border p-3 transition hover:bg-accent',
        {
          'border-b pb-8': isPreview,
        },
      )}
    >
      <Image
        alt={attributes.title}
        className="h-auto w-full rounded-lg"
        height={1000}
        src={attributes.image.data?.attributes?.url ?? ''}
        width={1000}
      />

      <div className="flex h-full flex-col gap-2">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Typography as="h2" element="h3">
            {attributes.title}
          </Typography>
          <div className="flex flex-wrap items-center gap-2">
            {attributes.categories?.data.slice(0, 4).map((category) => (
              <Badge className="text-sm" key={id} variant="transparent">
                {category.attributes?.name}
              </Badge>
            ))}
          </div>
        </div>

        <Typography
          as="largeText"
          className="line-clamp-2 text-muted-foreground"
          element="p"
        >
          {attributes.description}
        </Typography>
      </div>
    </div>
  );
}
