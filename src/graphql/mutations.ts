import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const CREATE_CARD = gql`
  mutation Mutation($createCardInput: CreateCardInput!) {
    createCard(createCardInput: $createCardInput) {
      id
      phrase
      numberOfPlayers
      type
    }
  }
`;
