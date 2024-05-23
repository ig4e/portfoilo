import { gql } from '@/_generated';

export const POST_LOCALIZATIONS = gql(`
  fragment PostLocalizations on PostEntity {
    id
    attributes {
      title
      slug
      locale
    }
  }
`);

export const POST_FIELDS = gql(`
  fragment PostFields on PostEntity {
    id
    attributes {
      slug
      image {
        ...ImageEntityFields
      }
      title
      description
      body
      locale
      categories {
        data {
          ...CategoryFields
        }
      }
      author {
        data {
          ...PostAuthor
        }
      }
      localizations {
        data {
          ...PostLocalizations
        }
      }
      views
      postedAt
      createdAt
    }
  }
`);

export const POST_MINIMAL_FIELDS = gql(`
 fragment PostMinimalFields on PostEntity {
    id
    attributes {
      slug
      image {
        ...ImageEntityFields
      }
      title
      description
      body
      locale
      views
      postedAt
      createdAt
    }
  }
`);

export const POST_META_FIELDS = gql(`
 fragment PostMetaFields on PostEntity {
    id
    attributes {
      slug
      image {
        ...ImageEntityFields
      }
      title
      description
      body
      locale
      views
      author {
        data {
          ...PostAuthor
        }
      }
      postedAt
      createdAt
    }
  }
`);
