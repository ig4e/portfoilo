import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import type { PostEntity } from '@/_generated/graphql';
import { POSTS_QUERY } from '@/apollo/queries/post';
import { Typography } from '@/components/typography';
import { Badge } from '@/components/ui/badge';
import { getClient } from '@/lib/apollo';
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
      <div className="container px-4 py-4 md:py-8">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Main content - Moved up */}
          <main className="w-full lg:col-span-9">
            {/* Header for large screens */}
            <Typography as="h3" className="mb-4 hidden lg:block" element="h3">
              {t('latest')}
            </Typography>
            {latestPosts.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                {/* Featured post */}
                {latestPosts[0]?.attributes ? (
                  <div className="col-span-full mb-6">
                    <Link
                      href={`/blog/posts/${latestPosts[0].id}/${latestPosts[0].attributes.slug}`}
                      className="block"
                    >
                      <div className="overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md">
                        <div className="relative aspect-video w-full overflow-hidden">
                          <Image
                            alt={latestPosts[0].attributes.title}
                            className="object-cover"
                            fill
                            src={
                              latestPosts[0].attributes.image.data?.attributes
                                ?.url ?? ''
                            }
                            priority
                          />
                        </div>
                        <div className="p-4 md:p-6">
                          <div className="mb-2 flex flex-wrap gap-2 md:mb-3">
                            {latestPosts[0].attributes.categories?.data
                              .slice(0, 2)
                              .map((category) => (
                                <Badge
                                  key={category.id}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {category.attributes?.name}
                                </Badge>
                              ))}
                          </div>
                          <Typography
                            as="h2"
                            element="h3"
                            className="mb-2 line-clamp-2 text-base md:mb-3 md:text-xl"
                          >
                            {latestPosts[0].attributes.title}
                          </Typography>
                          <Typography
                            as="smallText"
                            className="line-clamp-2 text-muted-foreground md:line-clamp-3 md:text-base"
                            element="p"
                          >
                            {latestPosts[0].attributes.description}
                          </Typography>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : null}

                {/* Regular posts */}
                {latestPosts.slice(1).map((post) => {
                  if (!post.id || !post.attributes) return null;

                  return (
                    <Link
                      href={`/blog/posts/${post.id}/${post.attributes.slug}`}
                      key={post.id}
                      className="block h-full"
                    >
                      <PostCard post={post as never} />
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="flex h-64 items-center justify-center">
                <Typography
                  as="largeText"
                  className="text-muted-foreground"
                  element="p"
                >
                  {t('no_posts_found')}
                </Typography>
              </div>
            )}
          </main>

          {/* Sidebar - Moved down and kept lg:order-1 */}
          <aside className="mb-6 w-full lg:order-1 lg:col-span-3 lg:mb-0 lg:self-start">
            <div className="sticky top-4 lg:top-20">
              <PostSearch />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function PostCard({
  post: { id, attributes },
}: {
  post: PostEntity;
  isPreview?: boolean;
}) {
  if (!attributes || !id) return null;

  return (
    <div className="h-full overflow-hidden rounded-lg border bg-card transition-all hover:translate-y-[-2px] hover:shadow-md">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          alt={attributes.title}
          className="object-cover"
          fill
          src={attributes.image.data?.attributes?.url ?? ''}
        />
      </div>
      <div className="p-3 md:p-4">
        <div className="mb-1 flex flex-wrap gap-1 md:mb-2">
          {attributes.categories?.data.slice(0, 2).map((category) => (
            <Badge key={category.id} variant="outline" className="text-xs">
              {category.attributes?.name}
            </Badge>
          ))}
        </div>
        <Typography
          as="h3"
          element="h3"
          className="mb-1 line-clamp-2 text-sm md:mb-2 md:text-base"
        >
          {attributes.title}
        </Typography>
        <Typography
          as="smallText"
          className="line-clamp-2 text-xs text-muted-foreground md:text-sm"
          element="p"
        >
          {attributes.description}
        </Typography>
      </div>
    </div>
  );
}
