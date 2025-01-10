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
  subtitle1: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    fontSize: '1.25rem',
  },
  caption: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '0.875rem',
  },
};

const commonComponents = {
  MuiPaper: {
    styleOverrides: {
      root: {
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
  MuiAppBar: {
    styleOverrides: {
      root: {
        backgroundImage: 'none',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: false,
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        fontWeight: 500,
        borderRadius: '6px',
        transition: 'all 0.2s ease',
        variants: [],
      },
    },
  },
  MuiTable: {
    styleOverrides: {
      root: {
        borderCollapse: 'separate',
        borderSpacing: '0 10px',
        variants: [],
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottom: 'none',
        padding: '16px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        '&:first-of-type': {
          borderTopLeftRadius: '10px',
          borderBottomLeftRadius: '10px',
        },
        '&:last-of-type': {
          borderTopRightRadius: '10px',
          borderBottomRightRadius: '10px',
        },
      },
      head: {
        fontWeight: 700,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      root: {
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
    },
  },
};

// Light Theme
export const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976D2',
    },
    secondary: {
      main: '#FF7043', // Sunset Orange
    },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF', // White
    },
    text: {
      primary: '#2F2F2F',
      secondary: '#757575',
    },
    success: {
      main: '#4CAF50', // Green
    },
    error: {
      main: '#F44336', // Red
    },
    warning: {
      main: '#FF9800', // Orange
    },
    info: {
      main: '#2196F3', // Blue
    },
  },
  typography: {
    ...commonTypography,
    h1: {
      ...commonTypography.h1,
      fontSize: '3.5rem',
    },
    h2: {
      ...commonTypography.h2,
      fontSize: '3rem',
    },
    body1: {
      ...commonTypography.body1,
      fontSize: '1.1rem',
    },
    button: {
      ...commonTypography.button,
      borderRadius: '12px', // Rounded buttons
    },
  },
  shape: {
    borderRadius: 12, // Rounded components
  },
  components: {
    ...commonComponents,
    MuiPaper: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiPaper.styleOverrides.root,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
        },
      },
    },
  },
});

// Dark Theme
export const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90CAF9',
    },
    secondary: {
      main: '#03DAC6', // Teal
    },
    background: {
      default: '#0A1929',
      paper: '#132F4C',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0BEC5',
    },
    success: {
      main: '#4CAF50', // Green
    },
    error: {
      main: '#F44336', // Red
    },
    warning: {
      main: '#FF9800', // Orange
    },
    info: {
      main: '#2196F3', // Blue
    },
  },
  typography: {
    ...commonTypography,
    h1: {
      ...commonTypography.h1,
      fontSize: '3.5rem',
    },
    h2: {
      ...commonTypography.h2,
      fontSize: '3rem',
    },
    body1: {
      ...commonTypography.body1,
      fontSize: '1.1rem',
    },
    button: {
      ...commonTypography.button,
      borderRadius: '12px', // Rounded buttons
    },
  },
  shape: {
    borderRadius: 12, // Rounded components
  },
  components: {
    ...commonComponents,
    MuiPaper: {
      styleOverrides: {
        root: {
          ...commonComponents.MuiPaper.styleOverrides.root,
          backgroundColor: 'rgba(30, 30, 30, 0.8)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        },
      },
    },
  },
});
