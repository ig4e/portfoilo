import { gql } from "@/_generated";
import GenericHero from "@/components/generic-hero";
import RenderMDX from "@/components/renderMDX";
import Typography from "@/components/typography";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Locale, locales } from "@/config/i18n";
import { getClient } from "@/lib/apollo";
import { Link } from "@/lib/navigation";
import { calculateRT, toLocaleDateString } from "@/lib/utils";
import { AtSign, Clock } from "lucide-react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import LocaleAlert from "./locale-alert";
import { Metadata } from "next";

interface PostPageProps {
    params: {
        locale: Locale;
        readonly slug: [string, string];
    };
}

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
        locale,
    },
}: PostPageProps) {
    const {
        data: { post },
    } = await getClient().query({
        query: POST_METADATA_QUERY,
        variables: {
            postId: id,
        },
    });

    return {
        title: post?.data?.attributes?.title!,
        description: post?.data?.attributes?.description!,
        openGraph: {
            title: post?.data?.attributes?.title!,
            description: post?.data?.attributes?.description!,
            images: [
                {
                    url: post?.data?.attributes?.image?.data?.attributes?.url!,
                    width: post?.data?.attributes?.image?.data?.attributes
                        ?.width!,
                    height: post?.data?.attributes?.image?.data?.attributes
                        ?.height!,
                },
            ],
            type: "article",
            alternateLocale: ["ar-EG", "en-US"],
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
    const t = await getTranslations("blog");
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
        image: post?.data?.attributes?.image?.data?.attributes?.url!,
        author: {
            name: post?.data?.attributes?.author?.data?.attributes!.name!,
            image: post?.data?.attributes?.author?.data?.attributes!.image?.data
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
        postedAt: post?.data?.attributes?.postedAt!,
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
                title={postData?.title}
                description={postData?.description}
                classNames={{ description: "max-w-3xl" }}
            ></GenericHero>

            <div className="rounded-md bg-background/60 p-4 py-8 backdrop-blur-3xl">
                <div className="relative mx-auto max-w-3xl space-y-8">
                    {postData && (
                        <LocaleAlert
                            post={{
                                id: postData.id,
                                locale: postData.locale,
                                slug: postData.slug,
                            }}
                            localizations={postData.localizations}
                        ></LocaleAlert>
                    )}

                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={postData?.author.image} />
                            <AvatarFallback className="text-lg font-semibold uppercase">
                                {postData?.author.name.slice(0, 2)}
                            </AvatarFallback>
                        </Avatar>

                        <div className="space-y-1">
                            <Typography element="h4" as="h4">
                                {postData?.author.name}
                            </Typography>

                            <Typography
                                element="h4"
                                as="mutedText"
                                className="flex items-center gap-1"
                            >
                                <Clock className="h-4 w-4"></Clock>
                                {t("rt", {
                                    count: calculateRT(postData?.body),
                                })}
                            </Typography>

                            <Typography
                                element="h4"
                                as="mutedText"
                                className="flex items-center gap-1"
                            >
                                <AtSign className="h-4 w-4"></AtSign>
                                {toLocaleDateString(postData?.postedAt)}
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {postData?.categories.map((category) => {
                            return (
                                <Link
                                    href={`/blog?categories=${category.id}`}
                                    key={category.id}
                                >
                                    <TooltipProvider key={category.id}>
                                        <Tooltip key={category.id}>
                                            <TooltipTrigger>
                                                <Badge
                                                    variant={"secondary"}
                                                    className="text-base"
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
                    <Separator></Separator>
                    <Image
                        src={postData?.image}
                        width={1000}
                        height={1000}
                        className="h-auto w-full rounded-md object-cover"
                        alt={postData?.title}
                    ></Image>
                    <div className="prose prose-stone max-w-3xl dark:prose-invert">
                        {post?.data?.attributes?.body && (
                            <RenderMDX source={postData?.body!}></RenderMDX>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// export async function generateStaticParams() {
//     const posts = await fetch(
//         `${process.env.NEXT_PUBLIC_STRAPI_API_URL?.replace("/graphql", "/api")}/posts?pagination[pageSize]=100`,
//         {
//             headers: {
//                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
//             },
//             next: { revalidate: 3600 },
//         },
//     ).then((res) => res.json());

//     return posts.data.map(
//         (post: {
//             id: string;
//             attributes: { slug: string; locale: string };
//         }) => ({
//             slug: [String(post.id), String(post.attributes.slug)],
//         }),
//     );
// }

export default Post;
