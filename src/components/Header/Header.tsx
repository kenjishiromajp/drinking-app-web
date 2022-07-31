import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  BoxProps,
  IconButton,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Links = [
  { label: 'Home', link: '/' },
  { label: 'Game Selection', link: '/game-selection' },
  { label: 'Register Card', link: '/register-card' },
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
                as={IconButton}
                bg="transparent"
                icon={<HamburgerIcon />}
                size="md"
                cursor="pointer"
                aria-label="Open Menu"
              />
              <MenuList>
                {Links.map(({ link, label }) => (
                  <MenuItem key={link} as={Link} to={link}>
                    {label}
                  </MenuItem>
                ))}
                {isInGame && <MenuItem>Finish Game</MenuItem>}
              </MenuList>
            </Menu>
          </Flex>
        )}
      </Flex>
    </Box>
  );
}
