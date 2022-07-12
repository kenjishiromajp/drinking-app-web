import { PlayersReducerState } from '../reducers/playerReducer';
import { useAppSelector } from './useAppSelector';

const usePlayersSelector = <T = any>(
  callback: (playersState: PlayersReducerState) => T,
) => useAppSelector<T>(state => callback(state.players));

export default usePlayersSelector;
