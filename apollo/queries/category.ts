import { gql } from '@/_generated';

export const CATEGORIES_QUERY = gql(`
  query FindManyCategories(
    $filters: CategoryFiltersInput
    $pagination: PaginationArg
    $sort: [String]
    $locale: I18NLocaleCode
  ) {
    categories(
      filters: $filters
      pagination: $pagination
      sort: $sort
      locale: $locale
    ) {
      meta {
        pagination {
          total
          page
          pageSize
          pageCount
        }
      }
      data {
        ...CategoryFields
      }
    }
  }
`);
