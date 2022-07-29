import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const GET_CARDS = gql`
  query GetCardsQuery {
    cards {
      id
      numberOfPlayers
      type
      phrase
    }
  }
`;
