import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface StackCardsProps {
  children: ReactNode[];
}
export default function StackCards({ children }: StackCardsProps) {
  return (
    <Box position="relative">
      {children.map((child, index) => {
        return (
          <Box
            // TODO: sort this later
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            position="absolute"
            left={0}
            top={0}
            p={5}
            shadow="md"
            borderWidth="1px"
            bg="white"
            transform={`translateY(${index * 5}px)`}
          >
            {child}
          </Box>
        );
      })}
    </Box>
  );
}
