/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVodAsset = /* GraphQL */ `
  query GetVodAsset($id: ID!) {
    getVodAsset(id: $id) {
      id
      title
      caption
      author
      tags
      createdAt
      updatedAt
      video {
        id
        createdAt
        updatedAt
      }
    }
  }
`;
export const listVodAssets = /* GraphQL */ `
  query ListVodAssets(
    $filter: ModelvodAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVodAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        caption
        author
        tags
        createdAt
        updatedAt
        video {
          id
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const byTags = /* GraphQL */ `
  query ByTags(
    $tags: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelvodAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byTags(
      tags: $tags
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        caption
        author
        tags
        createdAt
        updatedAt
        video {
          id
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listVideoObjects = /* GraphQL */ `
  query ListVideoObjects(
    $filter: ModelvideoObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoObjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideoObject = /* GraphQL */ `
  query GetVideoObject($id: ID!) {
    getVideoObject(id: $id) {
      id
      createdAt
      updatedAt
    }
  }
`;
