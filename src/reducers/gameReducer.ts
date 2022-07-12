import { createSlice } from '@reduxjs/toolkit';
import { Player } from '../components/PlayersForm/PlayersForm';
import type { ActionPayload } from '../models/ActionPayload';
import { DrinkingGameCard } from '../models/DrinkingGameCard';

export interface GameReducerState {
  deck: DrinkingGameCard[];
  rounds: DrinkingGameCard[];
  players: Player[];
}

const getCardsThatWereNotPicked = (
  deck: DrinkingGameCard[],
  previousPickedCards: DrinkingGameCard[],
) => {
  const previousPickedCardsStringified = previousPickedCards.map(value =>
    JSON.stringify(value),
  );
  return deck.filter(
    props => !previousPickedCardsStringified.includes(JSON.stringify(props)),
  );
};

const shuffle = (array: any[]) =>
  array.sort(() => Math.floor(Math.random() * 2) - 1);

const initialState: GameReducerState = {
  rounds: [],
  deck: [],
  players: [],
};

const gameReducer = createSlice({
  name: 'game',
  initialState,
  reducers: {
    resetGame: (state: GameReducerState) => {
      // eslint-disable-next-line no-param-reassign
      state.rounds = [];
    },
    initGame: (
      state: GameReducerState,
      {
        payload: { deck, players },
      }: ActionPayload<{ deck: DrinkingGameCard[]; players: Player[] }>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.deck = shuffle([...deck]);
      // eslint-disable-next-line no-param-reassign
      state.rounds = [{ ...state.deck[0] }];
      // Shuffling the players
      // eslint-disable-next-line no-param-reassign
      state.players = shuffle([...players]);
    },
    pickACard: (state: GameReducerState) => {
      const [card] = getCardsThatWereNotPicked(state.deck, state.rounds);
      if (!card) {
        throw new Error('There is no more card to pick');
      }
      // eslint-disable-next-line no-param-reassign
      state.rounds = [...state.rounds, card];
    },
  },
});

export const { initGame, pickACard, resetGame } = gameReducer.actions;
export default gameReducer.reducer;
