import { PlayersReducerState } from '../reducers/playerReducer';
import { useAppSelector } from './useAppSelector';

const usePlayersSelector = (
  callback: (playersState: PlayersReducerState) => any,
) => useAppSelector(state => callback(state.players));

export default usePlayersSelector;
