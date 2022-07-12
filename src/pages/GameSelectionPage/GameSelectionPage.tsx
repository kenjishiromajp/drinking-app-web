import { Box, Button, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AVAILABLE_GAMES from '../../constants/availableGames';
import MainLayout from '../../layouts/MainLayout/MainLayout';

function GameSelectionPage() {
  return (
    <MainLayout>
      <VStack spacing={4} align="stretch">
        {AVAILABLE_GAMES.map(({ title, path, bgImage }) => (
          <Button
            key={path}
            padding={0}
            overflow="hidden"
            as={Link}
            to={`/game-selection/${path}`}
          >
            <Box
              width="100%"
              bgImage={`url('${bgImage}')`}
              h="40px"
              color="white"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              {title}
            </Box>
          </Button>
        ))}
      </VStack>
    </MainLayout>
  );
}

export default GameSelectionPage;
