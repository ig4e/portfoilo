import { gql } from '@/_generated';

export const CATEGORY_FIELDS = gql(`
  fragment CategoryFields on CategoryEntity {
    id
    attributes {
      name
      description
      locale
    }
  }
`);
