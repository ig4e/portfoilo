import { gql } from '@/_generated';

export const POSTS_QUERY = gql(`  
  query FindManyPosts(
    $sort: [String]
    $locale: I18NLocaleCode
    $filters: PostFiltersInput
    $pagination: PaginationArg
  ) {
    posts(
      sort: $sort
      locale: $locale
      filters: $filters
      pagination: $pagination
    ) {
      meta {
        pagination {
          page
          pageCount
          pageSize
          total
        }
      }
      data {
        ...PostFields
      }
    }
  }
`);

export const POST_QUERY = gql(`
  query PostQuery($postId: ID, $locale: I18NLocaleCode) {
    post(id: $postId, locale: $locale) {
      data {
        ...PostFields
      }
    }
  }
`);

export const POST_META_QUERY = gql(`
  query PostMetaQuery($postId: ID, $locale: I18NLocaleCode) {
    post(id: $postId, locale: $locale) {
      data {
        ...PostMetaFields
      }
    }
  }
`);

export const POST_MINIMAL_QUERY = gql(`
  query PostMinimalQuery($postId: ID, $locale: I18NLocaleCode) {
    post(id: $postId, locale: $locale) {
      data {
        ...PostMinimalFields
      }
    }
  }
`);
