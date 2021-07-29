import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#556777',
    },
    secondary: {
      main: 'rgb(62, 150, 172)',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;