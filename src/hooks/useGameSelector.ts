import { GameReducerState } from '../reducers/gameReducer';
import { useAppSelector } from './useAppSelector';

const useGameSelector = <T = any>(
  callback: (playersState: GameReducerState) => T,
) => useAppSelector<T>(state => callback(state.game));

export default useGameSelector;
