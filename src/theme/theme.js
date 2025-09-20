import { createTheme } from '@mui/material/styles';

// Define the color palette based on your design
const palette = {
  primary: {
    main: '#302559', // A deep purple for primary actions and highlights
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#6E698C', // A softer purple for secondary elements
    contrastText: '#FFFFFF',
  },
  background: {
    default: '#100340', // The darkest shade for the main background
    paper: '#231B40',   // A slightly lighter shade for surfaces like cards
  },
  text: {
    primary: '#A6A3BF',   // A light, soft color for primary text
    secondary: '#6E698C', // A darker grey for secondary text
  },
};

// Create the MUI theme instance
const theme = createTheme({
  palette: palette,
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    // You can customize other typography variants here
  },
  components: {
    // Override component styles here if needed
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none', // Keep button text capitalization as is
        },
      },
    },
  },
});

export default theme;