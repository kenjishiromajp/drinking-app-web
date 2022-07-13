import { Box, BoxProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface StackCardsProps extends BoxProps {
  children: ReactNode[];
}
export default function StackCards({
  height = '300px',
  children,
  ...props
}: StackCardsProps) {
  return (
    <Box width="100%" height={height} {...props} position="relative">
      {children.map((child, index) => {
        return (
          <Box
            // TODO: sort this later
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            position="absolute"
            left={0}
            top={0}
            right={0}
            bottom={0}
            p={5}
            shadow="md"
            borderWidth="1px"
            bg="white"
            display="flex"
            flex="1"
            width="100%"
            transform={`translateY(${index * 5}px)`}
          >
            {child}
          </Box>
        );
      })}
    </Box>
  );
}
