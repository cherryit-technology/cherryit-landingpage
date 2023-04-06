import { Podkova, Red_Hat_Display } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const podkova = Podkova({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
});

export const redHatDisplay = Red_Hat_Display({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#EF4230',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [ podkova.style.fontFamily, redHatDisplay.style.fontFamily ].join(',')
  },
});

export default theme;