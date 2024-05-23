import { gql } from '@/_generated';

export const UPDATE_POST_MUTATION =
  gql(`mutation UpdatePost($data: PostInput!, $updatePostId: ID!) {
    updatePost(data: $data, id: $updatePostId) {
      data {
        ...PostMinimalFields
      }
    }
}`);
