// app/theme.ts
import { createTheme, Theme } from '@mui/material/styles';

// Common Typography (applies to both light and dark themes)
const commonTypography = {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontFamily: 'Cormorant Garamond, serif',
    fontWeight: 700,
    fontSize: '3rem',
  },
  h2: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    fontSize: '2.5rem',
  },
  body1: {
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
  },
  button: {
    fontFamily: 'Space Grotesk, sans-serif',
    fontWeight: 600,
    textTransform: 'none' as const,
  },
};

// Light Theme
export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1A73E8', // Electric Blue
    },
    secondary: {
      main: '#FF7043', // Sunset Orange
    },
    background: {
      default: '#FAFAFA', // Off-White
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2F2F2F',
    },
  },
  typography: commonTypography,
});

// Dark Theme
export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#BB86FC', // Light Purple
    },
    secondary: {
      main: '#03DAC6', // Teal
    },
    background: {
      default: '#121212', // Dark Gray
      paper: '#1E1E1E',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: commonTypography,
});
