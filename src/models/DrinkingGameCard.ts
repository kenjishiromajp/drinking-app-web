import DrinkingGameTypes from './DrinkingGameTypes';

export type DrinkingGameCardOptions = {
  [DrinkingGameTypes.DoOrDrinkCard]: {
    phrase: string;
  };
};

export type DrinkingGameCard<K extends DrinkingGameTypes = DrinkingGameTypes> =
  {
    type: K;
    numberOfPlayers: number;
  } & DrinkingGameCardOptions[K];
