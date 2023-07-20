import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7695EC',
    },
    background: {
      default: '#FFF',
    },
    text: {
      primary: '#000',
      secondary: '#777',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderColor: '#000', 
          color: '#000'
        },
        contained: {
          color: '#fff'
        },
        root: {
          borderRadius: '8px',
          width: '120px',
          height: '32px',
          textTransform: 'capitalize',
          fontSize: '16px',
          fontWeight: 'bold',
        }
      }
    }
  }
})