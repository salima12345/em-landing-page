import { gql } from '@apollo/client';

export const GET_TALENTS = gql`
  query GetTalents {
    talents(first: 200) {
      nodes {
        id
        talentId
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        singleTalent {
          hasBio
          linkedin
          mail
          quote
          twitter
          status
        }
      }
    }
  }
`;

export const GET_TALENTS_BY_IDS = gql`
  query GetTalentsByIds($ids: [ID!]) {
      talents(where: { in: $ids }, first: 200)  {
      nodes {
        id
        talentId
        slug
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        singleTalent {
          hasBio
          linkedin
          mail
          quote
          twitter
          status
        }
      }
    }
  }
`;