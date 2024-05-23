/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  fragment PostAuthor on AuthorEntity {\n    id\n    attributes {\n      slug\n      title\n      name\n      bio\n      image {\n        ...ImageEntityFields\n      }\n      locale\n    }\n  }\n": types.PostAuthorFragmentDoc,
    "\n  fragment CategoryFields on CategoryEntity {\n    id\n    attributes {\n      name\n      description\n      locale\n    }\n  }\n": types.CategoryFieldsFragmentDoc,
    "\n  fragment ImageEntityFields on UploadFileEntityResponse {\n    data {\n      id\n      attributes {\n        ...ImageFields\n      }\n    }\n  }\n\n  fragment ImageFields on UploadFile {\n    url\n    width\n    height\n    hash\n    size\n    blurhash\n    caption\n  }\n": types.ImageEntityFieldsFragmentDoc,
    "\n  fragment PostLocalizations on PostEntity {\n    id\n    attributes {\n      title\n      slug\n      locale\n    }\n  }\n": types.PostLocalizationsFragmentDoc,
    "\n  fragment PostFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      categories {\n        data {\n          ...CategoryFields\n        }\n      }\n      author {\n        data {\n          ...PostAuthor\n        }\n      }\n      localizations {\n        data {\n          ...PostLocalizations\n        }\n      }\n      views\n      postedAt\n      createdAt\n    }\n  }\n": types.PostFieldsFragmentDoc,
    "\n fragment PostMinimalFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      views\n      postedAt\n      createdAt\n    }\n  }\n": types.PostMinimalFieldsFragmentDoc,
    "\n fragment PostMetaFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      views\n      author {\n        data {\n          ...PostAuthor\n        }\n      }\n      postedAt\n      createdAt\n    }\n  }\n": types.PostMetaFieldsFragmentDoc,
    "mutation UpdatePost($data: PostInput!, $updatePostId: ID!) {\n    updatePost(data: $data, id: $updatePostId) {\n      data {\n        ...PostMinimalFields\n      }\n    }\n}": types.UpdatePostDocument,
    "\n  query FindManyCategories(\n    $filters: CategoryFiltersInput\n    $pagination: PaginationArg\n    $sort: [String]\n    $locale: I18NLocaleCode\n  ) {\n    categories(\n      filters: $filters\n      pagination: $pagination\n      sort: $sort\n      locale: $locale\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        ...CategoryFields\n      }\n    }\n  }\n": types.FindManyCategoriesDocument,
    "  \n  query FindManyPosts(\n    $sort: [String]\n    $locale: I18NLocaleCode\n    $filters: PostFiltersInput\n    $pagination: PaginationArg\n  ) {\n    posts(\n      sort: $sort\n      locale: $locale\n      filters: $filters\n      pagination: $pagination\n    ) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        ...PostFields\n      }\n    }\n  }\n": types.FindManyPostsDocument,
    "\n  query PostQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostFields\n      }\n    }\n  }\n": types.PostQueryDocument,
    "\n  query PostMetaQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostMetaFields\n      }\n    }\n  }\n": types.PostMetaQueryDocument,
    "\n  query PostMinimalQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostMinimalFields\n      }\n    }\n  }\n": types.PostMinimalQueryDocument,
    "query Categories($locale: I18NLocaleCode, $pagination: PaginationArg) {\n    categories(locale: $locale, pagination: $pagination) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          name\n          description\n        }\n      }\n    }\n}": types.CategoriesDocument,
    "\nquery PostsSearch(\n  $query: String!\n  $pagination: PaginationArg\n  $locale: String\n  $filters: PostFiltersInput\n) {\n  search(query: $query, locale: $locale) {\n    posts(pagination: $pagination, filters: $filters) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                image {\n                  data {\n                    id\n                    attributes {\n                      url\n                      width\n                      height\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categories {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          title\n          description\n          image {\n            data {\n              id\n              attributes {\n                url\n                height\n                width\n              }\n            }\n          }\n          locale\n          slug\n          updatedAt\n          postedAt\n        }\n      }\n    }\n  }\n}\n": types.PostsSearchDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PostAuthor on AuthorEntity {\n    id\n    attributes {\n      slug\n      title\n      name\n      bio\n      image {\n        ...ImageEntityFields\n      }\n      locale\n    }\n  }\n"): (typeof documents)["\n  fragment PostAuthor on AuthorEntity {\n    id\n    attributes {\n      slug\n      title\n      name\n      bio\n      image {\n        ...ImageEntityFields\n      }\n      locale\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment CategoryFields on CategoryEntity {\n    id\n    attributes {\n      name\n      description\n      locale\n    }\n  }\n"): (typeof documents)["\n  fragment CategoryFields on CategoryEntity {\n    id\n    attributes {\n      name\n      description\n      locale\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment ImageEntityFields on UploadFileEntityResponse {\n    data {\n      id\n      attributes {\n        ...ImageFields\n      }\n    }\n  }\n\n  fragment ImageFields on UploadFile {\n    url\n    width\n    height\n    hash\n    size\n    blurhash\n    caption\n  }\n"): (typeof documents)["\n  fragment ImageEntityFields on UploadFileEntityResponse {\n    data {\n      id\n      attributes {\n        ...ImageFields\n      }\n    }\n  }\n\n  fragment ImageFields on UploadFile {\n    url\n    width\n    height\n    hash\n    size\n    blurhash\n    caption\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PostLocalizations on PostEntity {\n    id\n    attributes {\n      title\n      slug\n      locale\n    }\n  }\n"): (typeof documents)["\n  fragment PostLocalizations on PostEntity {\n    id\n    attributes {\n      title\n      slug\n      locale\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment PostFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      categories {\n        data {\n          ...CategoryFields\n        }\n      }\n      author {\n        data {\n          ...PostAuthor\n        }\n      }\n      localizations {\n        data {\n          ...PostLocalizations\n        }\n      }\n      views\n      postedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n  fragment PostFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      categories {\n        data {\n          ...CategoryFields\n        }\n      }\n      author {\n        data {\n          ...PostAuthor\n        }\n      }\n      localizations {\n        data {\n          ...PostLocalizations\n        }\n      }\n      views\n      postedAt\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n fragment PostMinimalFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      views\n      postedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n fragment PostMinimalFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      views\n      postedAt\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n fragment PostMetaFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      views\n      author {\n        data {\n          ...PostAuthor\n        }\n      }\n      postedAt\n      createdAt\n    }\n  }\n"): (typeof documents)["\n fragment PostMetaFields on PostEntity {\n    id\n    attributes {\n      slug\n      image {\n        ...ImageEntityFields\n      }\n      title\n      description\n      body\n      locale\n      views\n      author {\n        data {\n          ...PostAuthor\n        }\n      }\n      postedAt\n      createdAt\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation UpdatePost($data: PostInput!, $updatePostId: ID!) {\n    updatePost(data: $data, id: $updatePostId) {\n      data {\n        ...PostMinimalFields\n      }\n    }\n}"): (typeof documents)["mutation UpdatePost($data: PostInput!, $updatePostId: ID!) {\n    updatePost(data: $data, id: $updatePostId) {\n      data {\n        ...PostMinimalFields\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FindManyCategories(\n    $filters: CategoryFiltersInput\n    $pagination: PaginationArg\n    $sort: [String]\n    $locale: I18NLocaleCode\n  ) {\n    categories(\n      filters: $filters\n      pagination: $pagination\n      sort: $sort\n      locale: $locale\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        ...CategoryFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindManyCategories(\n    $filters: CategoryFiltersInput\n    $pagination: PaginationArg\n    $sort: [String]\n    $locale: I18NLocaleCode\n  ) {\n    categories(\n      filters: $filters\n      pagination: $pagination\n      sort: $sort\n      locale: $locale\n    ) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        ...CategoryFields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "  \n  query FindManyPosts(\n    $sort: [String]\n    $locale: I18NLocaleCode\n    $filters: PostFiltersInput\n    $pagination: PaginationArg\n  ) {\n    posts(\n      sort: $sort\n      locale: $locale\n      filters: $filters\n      pagination: $pagination\n    ) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        ...PostFields\n      }\n    }\n  }\n"): (typeof documents)["  \n  query FindManyPosts(\n    $sort: [String]\n    $locale: I18NLocaleCode\n    $filters: PostFiltersInput\n    $pagination: PaginationArg\n  ) {\n    posts(\n      sort: $sort\n      locale: $locale\n      filters: $filters\n      pagination: $pagination\n    ) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        ...PostFields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PostQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query PostQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostFields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PostMetaQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostMetaFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query PostMetaQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostMetaFields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PostMinimalQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostMinimalFields\n      }\n    }\n  }\n"): (typeof documents)["\n  query PostMinimalQuery($postId: ID, $locale: I18NLocaleCode) {\n    post(id: $postId, locale: $locale) {\n      data {\n        ...PostMinimalFields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query Categories($locale: I18NLocaleCode, $pagination: PaginationArg) {\n    categories(locale: $locale, pagination: $pagination) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          name\n          description\n        }\n      }\n    }\n}"): (typeof documents)["query Categories($locale: I18NLocaleCode, $pagination: PaginationArg) {\n    categories(locale: $locale, pagination: $pagination) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          name\n          description\n        }\n      }\n    }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery PostsSearch(\n  $query: String!\n  $pagination: PaginationArg\n  $locale: String\n  $filters: PostFiltersInput\n) {\n  search(query: $query, locale: $locale) {\n    posts(pagination: $pagination, filters: $filters) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                image {\n                  data {\n                    id\n                    attributes {\n                      url\n                      width\n                      height\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categories {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          title\n          description\n          image {\n            data {\n              id\n              attributes {\n                url\n                height\n                width\n              }\n            }\n          }\n          locale\n          slug\n          updatedAt\n          postedAt\n        }\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery PostsSearch(\n  $query: String!\n  $pagination: PaginationArg\n  $locale: String\n  $filters: PostFiltersInput\n) {\n  search(query: $query, locale: $locale) {\n    posts(pagination: $pagination, filters: $filters) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                image {\n                  data {\n                    id\n                    attributes {\n                      url\n                      width\n                      height\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categories {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          title\n          description\n          image {\n            data {\n              id\n              attributes {\n                url\n                height\n                width\n              }\n            }\n          }\n          locale\n          slug\n          updatedAt\n          postedAt\n        }\n      }\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;