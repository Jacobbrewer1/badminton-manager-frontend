import { SimplePaletteColorOptions, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: SimplePaletteColorOptions;
  }
  interface PaletteOptions {
    accent: SimplePaletteColorOptions;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#828282',
      light: '#b9b2bf',
      dark: '#726f75',
    },
    secondary: {
      main: '#fcfcfc',
      dark: '#c5c9c9',
      light: '#f2f7f7',
    },
    accent: {
      main: '#8f8f8f',
      dark: '#525252',
      light: '#f2f7f7',
    },
    text: {
      primary: '#121212',
      secondary: '#e4e7e6',
      disabled: '#f2f7f7',
    },
    background: {
      default: '#ebebeb',
      // paper: string;
    },
  },
});

export default theme;
