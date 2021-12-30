import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      dark: 'true',
      main: '#1112',
    },
    secondary: {
      main: '#252525',
    },
    error: {
      main: red.A400,
    },
    success: {
      main: '#fff'
    },
    background: {
      default: '#303030',
      paper: '#424242',
    },
    text: {
      primary: '#fffe',
    }
  },
});

export default theme;
