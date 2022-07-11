import { createSlice } from '@reduxjs/toolkit';
import type { ActionPayload } from '../models/ActionPayload';
import { DrinkingGameCard } from '../models/DrinkingGameCard';

export interface GameReducerState {
  deck: DrinkingGameCard[];
  rounds: DrinkingGameCard[];
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

const initialState: GameReducerState = {
  rounds: [],
  deck: [],
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
      { payload }: ActionPayload<DrinkingGameCard[]>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.rounds = [];
      // eslint-disable-next-line no-param-reassign
      state.deck = payload;
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
