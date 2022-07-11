import { createSlice } from '@reduxjs/toolkit';
import type { Player } from '../components/PlayersForm/PlayersForm';

export interface PlayersReducerState {
  players: Player[];
}
interface ActionPayload<K = any> {
  payload: K;
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
  },
});

export const { addPlayer } = playerReducer.actions;
export default playerReducer.reducer;
