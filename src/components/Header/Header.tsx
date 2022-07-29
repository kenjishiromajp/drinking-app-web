import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  BoxProps,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Links = [
  { label: 'Home', link: '/' },
  { label: 'Game Selection', link: '/game-selection' },
];

interface HeaderProps extends BoxProps {}
export default function Header({ ...props }: HeaderProps) {
  const location = useLocation();

  const isInGame = useMemo(() => {
    return !!location.pathname.match('/game-selection/');
  }, [location.pathname]);

  const isHomePage = useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);

  return (
    <Box bg="transparent" px={4} {...props}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Image
          objectFit="contain"
          display="block"
          src="/logo.png"
          height="50px"
        />
        {!isHomePage && (
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
                {Links.map(({ link, label }) => (
                  <MenuItem key={link} as={Link} to={link}>
                    {label}
                  </MenuItem>
                ))}
                {isInGame && (
                  <>
                    <MenuItem>Finish Game</MenuItem>
                    <MenuItem>Edit players</MenuItem>
                  </>
                )}
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
