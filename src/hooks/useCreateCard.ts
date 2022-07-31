import { gql, useMutation } from '@apollo/client';
import { DrinkingGameCard } from '../models/DrinkingGameCard';

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

const useCreateCard = () => {
  return useMutation<
    { createCard: DrinkingGameCard },
    { createCardInput: DrinkingGameCard }
  >(CREATE_CARD);
};
export default useCreateCard;
