import { createSlice } from '@reduxjs/toolkit';
import type { Player } from '../components/PlayersForm/PlayersForm';
import type { ActionPayload } from '../models/ActionPayload';

export interface PlayersReducerState {
  players: Player[];
}

const initialState: PlayersReducerState = {
  players: [],
};

const playerReducer = createSlice({
  name: 'players',
  initialState,
  reducers: {
    addPlayer: (state: PlayersReducerState, action: ActionPayload<Player>) => {
      // eslint-disable-next-line no-param-reassign
      state.players = [...state.players, action.payload];
    },
    updatePlayers: (
      state: PlayersReducerState,
      action: ActionPayload<Player[]>,
    ) => {
      // eslint-disable-next-line no-param-reassign
      state.players = action.payload;
    },
  },
});

export const { addPlayer, updatePlayers } = playerReducer.actions;
export default playerReducer.reducer;
