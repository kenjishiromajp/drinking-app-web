import { Box, BoxProps, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ReactNode, useMemo, useState } from 'react';
import Flippy from '../Flippy/Flippy';
import { FrontSide, BackSide } from '../Flippy/FlippyCard';

interface StackCardsProps extends BoxProps {
  children: ReactNode[];
  onNextCard?: () => any;
}
export default function StackCards({
  height = '300px',
  children,
  onNextCard = () => {},
  ...props
}: StackCardsProps) {
  const [countClicks, setCountClicks] = useState(0);
  const isFlipped = useMemo(() => {
    return countClicks % 2 !== 0;
  }, [countClicks]);

  return (
    <Box width="100%" height={height} {...props} position="relative">
      {children.map((child, index) => {
        return (
          <motion.div
            // TODO: sort this later
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            initial={{
              opacity: 0,
              y: '100%',
            }}
            transition={{
              type: 'tween',
              duration: 0.5,
              delay: 0.25,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Box
              position="absolute"
              left={0}
              top={0}
              right={0}
              bottom={0}
              display="flex"
              flex="1"
              width="100%"
              transition="transform 0.2s ease"
              transform={`translateY(${(children.length - index) * -5}px)`}
            >
              <Flippy
                onClick={() => {
                  const newCounter = countClicks + 1;
                  if (newCounter % 2 === 0) {
                    setCountClicks(0);
                    return onNextCard();
                  }
                  return setCountClicks(newCounter);
                }}
                style={{ width: '100%' }}
                isFlipped={index === children.length - 1 && isFlipped}
                flipDirection="horizontal"
              >
                <FrontSide
                  style={{
                    backgroundColor: '#f44336',
                    border: 'solid 5px white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    borderRadius: '1rem',
                  }}
                >
                  <Image
                    objectFit="contain"
                    display="block"
                    src="/logo.png"
                    height="70px"
                  />
                </FrontSide>
                <BackSide
                  style={{
                    backgroundColor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    borderRadius: '1rem',
                  }}
                >
                  {child}
                </BackSide>
              </Flippy>
            </Box>
          </motion.div>
        );
      })}
    </Box>
  );
}
