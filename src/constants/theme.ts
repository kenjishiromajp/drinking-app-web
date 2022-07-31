import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: {
    main: '#f44336',
  },
  brand: {
    900: '#f44336',
    800: '#f44336',
    700: '#f44336',
  },
};

const theme = extendTheme({ colors });
export default theme;
