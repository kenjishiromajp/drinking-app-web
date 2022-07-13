import { VStack, Text, Box } from '@chakra-ui/react';
import { compile } from 'handlebars';
import { useEffect } from 'react';
import StackCards from '../../components/StackCards/StackCards';
import { useAppDispatch } from '../../hooks/useAppSelector';
import useGameSelector from '../../hooks/useGameSelector';
import usePlayersSelector from '../../hooks/usePlayersSelector';
// import { useAppDispatch } from '../../hooks/useAppSelector';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import { DrinkingGameCard } from '../../models/DrinkingGameCard';
import DrinkingGameTypes from '../../models/DrinkingGameTypes';
import { initGame, pickACard } from '../../reducers/gameReducer';

const MOCK_DRINKING_GAME_CARDS: DrinkingGameCard[] = [
  {
    numberOfPlayers: 2,
    phrase:
      "{{{player1}}} can post a story on {{{player2}}}'s instagram, if {{{player2}}} denies he/she has to drink 3 shots",
    type: DrinkingGameTypes.DoOrDrinkCard,
  },
  {
    numberOfPlayers: 2,
    phrase:
      "{{{player1}}} can comment on anyone's picture on {{{player2}}}'s instagram, if {{{player2}}} denies he/she has to drink 3 shots",
    type: DrinkingGameTypes.DoOrDrinkCard,
  },
  {
    numberOfPlayers: 2,
    phrase:
      '{{{player1}}} and {{{player2}}} has to record a Tiktok, if not both drink 2 shots',
    type: DrinkingGameTypes.DoOrDrinkCard,
  },
];

function DoOrDrinkPage() {
  const dispatch = useAppDispatch();
  const players = usePlayersSelector(state => state.players);
  const {
    // deck,
    rounds,
    players: [player1, player2],
  } = useGameSelector(state => state);

  useEffect(() => {
    // TODO: get the data from a real source
    dispatch(initGame({ deck: MOCK_DRINKING_GAME_CARDS, players }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const roundNumber = rounds.length;

  return (
    <MainLayout>
      <StackCards
        justifySelf="center"
        flex="1"
        maxHeight="500px"
        onClick={() => {
          dispatch(pickACard());
        }}
      >
        {rounds.map(({ phrase }) => {
          return (
            <VStack flex="1" key={phrase}>
              <h3>ROUND {roundNumber}</h3>
              <Box
                flex="1"
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <Text
                  fontSize="4xl"
                  textAlign="center"
                  className="cursive"
                  dangerouslySetInnerHTML={{
                    __html: compile(phrase)({
                      player1: `<strong>${player1?.name}</strong>`,
                      player2: `<strong>${player2?.name}</strong>`,
                    }),
                  }}
                />
              </Box>
            </VStack>
          );
        })}
      </StackCards>
    </MainLayout>
  );
}

export default DoOrDrinkPage;
