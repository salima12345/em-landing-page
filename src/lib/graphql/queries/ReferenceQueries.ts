import { gql } from '@apollo/client';

export const GET_REFERENCES = gql`
  query GetReferences {
    references(first: 200) {
      nodes {
        uri
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        singleReferences {
          expertises {
            nodes {
              id
            }
          }
          gallery {
            description
            image {
              node {
                sourceUrl
              }
            }
            video {
              node {
                sourceUrl
              }
            }
          }
          linkCompanyWebsite
        }
        content
      }
    }
  }
`;

export const GET_REFERENCE_BY_SLUG = gql`
  query GetReferenceBySlug($slug: String!) {
    references(where: { name: $slug }) {
      nodes {
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        singleReferences {
          gallery {
            description
            image {
              node {
                sourceUrl
              }
            }
            video {
              node {
                sourceUrl
              }
            }
          }
          linkCompanyWebsite
        }
        content
        expertises {
          nodes {
            id
          }
        }
      }
    }
  }
`;