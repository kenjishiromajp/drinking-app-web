import { VStack, Text, Box } from '@chakra-ui/react';
import { compile } from 'handlebars';
import { useEffect } from 'react';
import StackCards from '../../components/StackCards/StackCards';
import { useAppDispatch } from '../../hooks/useAppSelector';
import useGameSelector from '../../hooks/useGameSelector';
import useCards from '../../hooks/useCards';
import usePlayersSelector from '../../hooks/usePlayersSelector';

import MainLayout from '../../layouts/MainLayout/MainLayout';
import { initGame, pickACard } from '../../reducers/gameReducer';

function DoOrDrinkPage() {
  const dispatch = useAppDispatch();
  const allPlayers = usePlayersSelector(state => state.players);
  const { rounds, players } = useGameSelector(state => state);
  const { data } = useCards();

  useEffect(() => {
    if (data) {
      dispatch(initGame({ deck: data.cards, players: allPlayers }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const roundNumber = rounds.length;

  return (
    <MainLayout>
      <VStack justifyContent="center" flex={1}>
        <StackCards
          height="auto"
          justifySelf="center"
          flex="1"
          maxHeight={{ base: '150vw', md: '700px' }}
          onNextCard={() => {
            dispatch(pickACard());
          }}
        >
          {rounds.map(({ phrase, numberOfPlayers }) => {
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
                      __html: compile(phrase)(
                        Array(numberOfPlayers)
                          .fill('')
                          .reduce((acc, _, index) => {
                            return {
                              ...acc,
                              [`player${
                                index + 1
                              }`]: `<strong>${players[index]?.name}</strong>`,
                            };
                          }, {}),
                      ),
                    }}
                  />
                </Box>
              </VStack>
            );
          })}
        </StackCards>
      </VStack>
    </MainLayout>
  );
}

export default DoOrDrinkPage;
