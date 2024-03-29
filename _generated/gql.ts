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
  'query Categories($locale: I18NLocaleCode, $pagination: PaginationArg) {\n    categories(locale: $locale, pagination: $pagination) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          name\n          description\n        }\n      }\n    }\n}':
    types.CategoriesDocument,
  '\nquery PostsSearch(\n  $query: String!\n  $pagination: PaginationArg\n  $locale: String\n  $filters: PostFiltersInput\n) {\n  search(query: $query, locale: $locale) {\n    posts(pagination: $pagination, filters: $filters) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                image {\n                  data {\n                    id\n                    attributes {\n                      url\n                      width\n                      height\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categories {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          title\n          description\n          image {\n            data {\n              id\n              attributes {\n                url\n                height\n                width\n              }\n            }\n          }\n          locale\n          slug\n          updatedAt\n          postedAt\n        }\n      }\n    }\n  }\n}\n':
    types.PostsSearchDocument,
  'query Post($postId: ID) {\n    post(id: $postId) {\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                title\n                name\n                image {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                slug\n              }\n            }\n          }\n          body\n          categories {\n            data {\n              id\n              attributes {\n                name\n                description\n              }\n            }\n          }\n          description\n          image {\n            data {\n              attributes {\n                url\n                width\n                height\n              }\n            }\n          }\n          locale\n          postedAt\n          createdAt\n          slug\n          title\n          localizations {\n            data {\n              id\n              attributes {\n                locale\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.PostDocument,
  'query PostMeta($postId: ID) {\n    post(id: $postId) {\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                name\n                image {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                slug\n              }\n            }\n          }\n          description\n          image {\n            data {\n              attributes {\n                url\n                width\n                height\n              }\n            }\n          }\n          locale\n          postedAt\n          slug\n          title\n        }\n      }\n    }\n  }\n':
    types.PostMetaDocument,
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
export function gql(
  source: 'query Categories($locale: I18NLocaleCode, $pagination: PaginationArg) {\n    categories(locale: $locale, pagination: $pagination) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          name\n          description\n        }\n      }\n    }\n}',
): (typeof documents)['query Categories($locale: I18NLocaleCode, $pagination: PaginationArg) {\n    categories(locale: $locale, pagination: $pagination) {\n      meta {\n        pagination {\n          page\n          pageCount\n          pageSize\n          total\n        }\n      }\n      data {\n        id\n        attributes {\n          name\n          description\n        }\n      }\n    }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\nquery PostsSearch(\n  $query: String!\n  $pagination: PaginationArg\n  $locale: String\n  $filters: PostFiltersInput\n) {\n  search(query: $query, locale: $locale) {\n    posts(pagination: $pagination, filters: $filters) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                image {\n                  data {\n                    id\n                    attributes {\n                      url\n                      width\n                      height\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categories {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          title\n          description\n          image {\n            data {\n              id\n              attributes {\n                url\n                height\n                width\n              }\n            }\n          }\n          locale\n          slug\n          updatedAt\n          postedAt\n        }\n      }\n    }\n  }\n}\n',
): (typeof documents)['\nquery PostsSearch(\n  $query: String!\n  $pagination: PaginationArg\n  $locale: String\n  $filters: PostFiltersInput\n) {\n  search(query: $query, locale: $locale) {\n    posts(pagination: $pagination, filters: $filters) {\n      meta {\n        pagination {\n          total\n          page\n          pageSize\n          pageCount\n        }\n      }\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                image {\n                  data {\n                    id\n                    attributes {\n                      url\n                      width\n                      height\n                    }\n                  }\n                }\n              }\n            }\n          }\n          categories {\n            data {\n              id\n              attributes {\n                name\n              }\n            }\n          }\n          title\n          description\n          image {\n            data {\n              id\n              attributes {\n                url\n                height\n                width\n              }\n            }\n          }\n          locale\n          slug\n          updatedAt\n          postedAt\n        }\n      }\n    }\n  }\n}\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query Post($postId: ID) {\n    post(id: $postId) {\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                title\n                name\n                image {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                slug\n              }\n            }\n          }\n          body\n          categories {\n            data {\n              id\n              attributes {\n                name\n                description\n              }\n            }\n          }\n          description\n          image {\n            data {\n              attributes {\n                url\n                width\n                height\n              }\n            }\n          }\n          locale\n          postedAt\n          createdAt\n          slug\n          title\n          localizations {\n            data {\n              id\n              attributes {\n                locale\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['query Post($postId: ID) {\n    post(id: $postId) {\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                title\n                name\n                image {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                slug\n              }\n            }\n          }\n          body\n          categories {\n            data {\n              id\n              attributes {\n                name\n                description\n              }\n            }\n          }\n          description\n          image {\n            data {\n              attributes {\n                url\n                width\n                height\n              }\n            }\n          }\n          locale\n          postedAt\n          createdAt\n          slug\n          title\n          localizations {\n            data {\n              id\n              attributes {\n                locale\n                slug\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query PostMeta($postId: ID) {\n    post(id: $postId) {\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                name\n                image {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                slug\n              }\n            }\n          }\n          description\n          image {\n            data {\n              attributes {\n                url\n                width\n                height\n              }\n            }\n          }\n          locale\n          postedAt\n          slug\n          title\n        }\n      }\n    }\n  }\n',
): (typeof documents)['query PostMeta($postId: ID) {\n    post(id: $postId) {\n      data {\n        id\n        attributes {\n          author {\n            data {\n              id\n              attributes {\n                name\n                image {\n                  data {\n                    attributes {\n                      url\n                    }\n                  }\n                }\n                slug\n              }\n            }\n          }\n          description\n          image {\n            data {\n              attributes {\n                url\n                width\n                height\n              }\n            }\n          }\n          locale\n          postedAt\n          slug\n          title\n        }\n      }\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
