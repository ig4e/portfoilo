import { gql } from '@/_generated';

export const IMAGE_ENTITIY_Fields = gql(`
  fragment ImageEntityFields on UploadFileEntityResponse {
    data {
      id
      attributes {
        ...ImageFields
      }
    }
  }

  fragment ImageFields on UploadFile {
    url
    width
    height
    hash
    size
    blurhash
    caption
  }
`);
