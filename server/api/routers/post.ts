import { UPDATE_POST_MUTATION } from '@/apollo/mutations/post';
import { POST_MINIMAL_QUERY } from '@/apollo/queries/post';
import { getClient } from '@/server/apollo';
import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

export const postRouter = createTRPCRouter({
  view: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const client = getClient();
      const { data } = await client.query({
        query: POST_MINIMAL_QUERY,
        variables: {
          postId: input.id,
        },
      });

      if (!data.post?.data?.attributes?.title) {
        throw new TRPCError({ code: 'BAD_REQUEST' });
      }

      const newPost = await client.mutate({
        mutation: UPDATE_POST_MUTATION,
        variables: {
          updatePostId: input.id,
          data: {
            views: ((data.post.data.attributes.views ?? 0) as number) + 1,
          },
        },
      });

      return { ok: true };
    }),
});
