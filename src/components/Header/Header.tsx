import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  useColorModeValue,
  Stack,
  BoxProps,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = [
  { label: 'Home', link: '/' },
  { label: 'Game Selection', link: '/game-selection' },
];

interface HeaderProps extends BoxProps {}
export default function Header({ ...props }: HeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} {...props}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box>Logo</Box>
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map(({ link, label }) => (
              <Link key={link} to={link}>
                {label}
              </Link>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
            >
              <Avatar
                size="sm"
                src="https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>Finish Game</MenuItem>
              <MenuItem>Edit players</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            {Links.map(({ link, label }) => (
              <Link key={link} to={link}>
                {label}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
