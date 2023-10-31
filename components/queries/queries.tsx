// Archivo: queries.tsx

import { gql } from '@apollo/client';

export const GET_ITEMS = gql`
  query GetItems {
    items {
      author
      category {
        id
        title
      }
      content
      id
      image
      title
    }
  }
`;
