import { gql } from '@/_generated';

export const POST_AUTHOR = gql(`
  fragment PostAuthor on AuthorEntity {
    id
    attributes {
      slug
      title
      name
      bio
      image {
        ...ImageEntityFields
      }
      locale
    }
  }
`);
