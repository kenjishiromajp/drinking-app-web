import { gql, useQuery } from '@apollo/client';
import { DrinkingGameCard } from '../models/DrinkingGameCard';

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

const useCards = () => {
  return useQuery<{ cards: DrinkingGameCard[] }>(GET_CARDS);
};
export default useCards;
