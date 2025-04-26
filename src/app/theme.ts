// theme.ts
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { alpha } from '@mui/material';

// -------------------------------------------------------------
// EXTEND THE THEME INTERFACE FOR ECHARTS
// -------------------------------------------------------------
declare module '@mui/material/styles' {
  interface Theme {
    echartStyles: typeof customEchartsTheme;
  }
  interface ThemeOptions {
    echartStyles?: typeof customEchartsTheme;
  }
}

// -------------------------------------------------------------
// COLOR & DESIGN CONSTANTS
// -------------------------------------------------------------
const primaryMain = '#7A0BC0'; // Updated to a more vibrant purple
const secondaryMain = '#0097A7'; // Updated to a teal color
const successMain = '#34C759';
const warningMain = '#FFB300';
const errorMain = '#FF3737';
const infoMain = '#2196F3';

// Glassmorphism generator
const glassmorphismBackground = (color: string) => ({
  backgroundColor: alpha(color, 0.08),
  backdropFilter: 'blur(12px)',
  border: `1px solid ${alpha(color, 0.15)}`,
  boxShadow: `0 8px 32px ${alpha('#000', 0.1)}`,
});

// Neomorphism-inspired shadow
const neoShadow =
  'inset 8px 8px 16px rgba(0,0,0,0.1), inset -8px -8px 16px rgba(255,255,255,0.15)';

// -------------------------------------------------------------
// TYPOGRAPHY
// -------------------------------------------------------------
const typography = {
  fontFamily: "'Inter', sans-serif", // Changed to Inter for better readability
  h1: {
    fontSize: '3rem', // Increased font size
    fontWeight: 700,
    letterSpacing: '0.5px',
  },
  h2: {
    fontSize: '2.5rem', // Increased font size
    fontWeight: 700,
  },
  h3: {
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '0.4px',
  },
  h4: {
    fontSize: '1.75rem',
    fontWeight: 700,
  },
  h5: {
    fontSize: '1.5rem',
    fontWeight: 600,
  },
  body1: {
    fontSize: '1.125rem',
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  button: {
    fontWeight: 700,
    textTransform: 'none',
  },
  caption: {
    fontSize: '0.875rem',
    color: '#888888',
  },
};

// -------------------------------------------------------------
// CUSTOM ECHARTS STYLE
// -------------------------------------------------------------
const customEchartsTheme = {
  backgroundColor: 'transparent',
  textStyle: {
    fontFamily: "'Inter', sans-serif",
    color: '#888888',
  },
  title: {
    textStyle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    left: 'center',
  },
  tooltip: {
    backgroundColor: '#2c2c2c',
    borderColor: '#333',
    borderWidth: 1,
    textStyle: {
      color: '#fff',
    },
  },
  legend: {
    textStyle: {
      color: '#888888',
    },
  },
  color: [
    '#7A0BC0',
    '#2196F3',
    '#34C759',
    '#0097A7',
    '#FFB300',
    '#FF3737',
  ],
};

// -------------------------------------------------------------
// LIGHT THEME
// -------------------------------------------------------------
const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: { main: primaryMain },
    secondary: { main: secondaryMain },
    success: { main: successMain },
    warning: { main: warningMain },
    error: { main: errorMain },
    info: { main: infoMain },
    background: {
      default: '#F5F7FA', // Slightly off-white with a fresh vibe
      paper: '#FFFFFF',
    },
    text: {
      primary: '#222222',
      secondary: '#555555',
    },
  },
  typography: typography as ThemeOptions['typography'],
  shape: {
    borderRadius: 16,
  },
  spacing: 8, // MUI default spacing scale (1 = 8px). Adjust as needed
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.1)',
    '0px 4px 8px rgba(0,0,0,0.1)',
    '0px 8px 16px rgba(0,0,0,0.1)',
    '0px 16px 24px rgba(0,0,0,0.1)',
    '0px 24px 32px rgba(0,0,0,0.1)',
    '0px 32px 40px rgba(0,0,0,0.1)',
    '0px 40px 48px rgba(0,0,0,0.1)',
    '0px 48px 56px rgba(0,0,0,0.1)',
    '0px 56px 64px rgba(0,0,0,0.1)',
    '0px 64px 72px rgba(0,0,0,0.1)',
    '0px 72px 80px rgba(0,0,0,0.1)',
    '0px 80px 88px rgba(0,0,0,0.1)',
    '0px 88px 96px rgba(0,0,0,0.1)',
    '0px 96px 104px rgba(0,0,0,0.1)',
    '0px 104px 112px rgba(0,0,0,0.1)',
    '0px 112px 120px rgba(0,0,0,0.1)',
    '0px 120px 128px rgba(0,0,0,0.1)',
    '0px 128px 136px rgba(0,0,0,0.1)',
    '0px 136px 144px rgba(0,0,0,0.1)',
    '0px 144px 152px rgba(0,0,0,0.1)',
    '0px 152px 160px rgba(0,0,0,0.1)',
    '0px 160px 168px rgba(0,0,0,0.1)',
    '0px 168px 176px rgba(0,0,0,0.1)',
    '0px 176px 184px rgba(0,0,0,0.1)',
  ],
  components: {
    // -------------------------------------------------------
    // APP BAR with glassmorphism
    // -------------------------------------------------------
    MuiAppBar: {
      styleOverrides: {
        root: {
          ...glassmorphismBackground('#ffffff'),
          background: 'linear-gradient(135deg, #ffffff70 0%, #ffffff 100%)',
          color: '#222222',
        },
      },
    },
    // -------------------------------------------------------
    // BUTTON with strong hover
    // -------------------------------------------------------
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 24px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.08)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 12px rgba(0,0,0,0.12)',
          },
        },
      },
    },
    // -------------------------------------------------------
    // CARD with neomorphism
    // -------------------------------------------------------
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          boxShadow: neoShadow,
          padding: '16px',
          margin: '16px 0',
        },
      },
    },
    // -------------------------------------------------------
    // PAPER
    // -------------------------------------------------------
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#FFFFFF',
          borderRadius: 16,
          padding: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
    // -------------------------------------------------------
    // DIALOG
    // -------------------------------------------------------
    MuiDialog: {
      styleOverrides: {
        paper: {
          ...glassmorphismBackground('#ffffff'),
          borderRadius: 24,
          padding: '24px',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          marginBottom: 8,
        },
      },
    },
    // -------------------------------------------------------
    // TABS
    // -------------------------------------------------------
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
        },
        indicator: {
          height: 4,
          borderRadius: 4,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 40,
          fontWeight: 600,
          '&.Mui-selected': {
            color: primaryMain,
          },
        },
      },
    },
  },
  echartStyles: {
    ...customEchartsTheme,
  },
};

// -------------------------------------------------------------
// DARK THEME
// -------------------------------------------------------------
const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: primaryMain },
    secondary: { main: secondaryMain },
    success: { main: successMain },
    warning: { main: warningMain },
    error: { main: errorMain },
    info: { main: infoMain },
    background: {
      default: '#121212',
      paper: '#1D1D1D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
  },
  typography: typography as ThemeOptions['typography'],
  shape: {
    borderRadius: 16,
  },
  spacing: 8,
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.2)',
    '0px 4px 8px rgba(0,0,0,0.2)',
    '0px 8px 16px rgba(0,0,0,0.2)',
    '0px 16px 24px rgba(0,0,0,0.2)',
    '0px 24px 32px rgba(0,0,0,0.2)',
    '0px 32px 40px rgba(0,0,0,0.2)',
    '0px 40px 48px rgba(0,0,0,0.2)',
    '0px 48px 56px rgba(0,0,0,0.2)',
    '0px 56px 64px rgba(0,0,0,0.2)',
    '0px 64px 72px rgba(0,0,0,0.2)',
    '0px 72px 80px rgba(0,0,0,0.2)',
    '0px 80px 88px rgba(0,0,0,0.2)',
    '0px 88px 96px rgba(0,0,0,0.2)',
    '0px 96px 104px rgba(0,0,0,0.2)',
    '0px 104px 112px rgba(0,0,0,0.2)',
    '0px 112px 120px rgba(0,0,0,0.2)',
    '0px 120px 128px rgba(0,0,0,0.2)',
    '0px 128px 136px rgba(0,0,0,0.2)',
    '0px 136px 144px rgba(0,0,0,0.2)',
    '0px 144px 152px rgba(0,0,0,0.2)',
    '0px 152px 160px rgba(0,0,0,0.2)',
    '0px 160px 168px rgba(0,0,0,0.2)',
    '0px 168px 176px rgba(0,0,0,0.2)',
    '0px 176px 184px rgba(0,0,0,0.2)',
  ],
  components: {
    // -------------------------------------------------------
    // APP BAR with gradient
    // -------------------------------------------------------
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #2A2A2A 0%, #3A3A3A 100%)',
          backdropFilter: 'blur(12px)',
          boxShadow: `0 8px 32px ${alpha('#000', 0.4)}`,
          color: '#ffffff',
        },
      },
    },
    // -------------------------------------------------------
    // BUTTON with strong hover in dark
    // -------------------------------------------------------
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '8px 24px',
          boxShadow: '0 3px 6px rgba(0,0,0,0.3)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          ':hover': {
            transform: 'translateY(-2px)',
            boxShadow: `0 6px 12px ${alpha('#000', 0.5)}`,
          },
        },
      },
    },
    // -------------------------------------------------------
    // CARD with dark neomorphism
    // -------------------------------------------------------
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#1D1D1D',
          boxShadow: neoShadow.replace(
            /rgba\(255,255,255,0\.15\)/,
            'rgba(255,255,255,0.05)'
          ),
          padding: '16px',
          margin: '16px 0',
        },
      },
    },
    // -------------------------------------------------------
    // PAPER
    // -------------------------------------------------------
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#1D1D1D',
          borderRadius: 16,
          padding: '16px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        },
      },
    },
    // -------------------------------------------------------
    // DIALOG
    // -------------------------------------------------------
    MuiDialog: {
      styleOverrides: {
        paper: {
          background: 'linear-gradient(135deg, #1D1D1D 0%, #2A2A2A 100%)',
          borderRadius: 24,
          padding: '24px',
          backdropFilter: 'blur(12px)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          marginBottom: 8,
          color: '#ffffff',
        },
      },
    },
    // -------------------------------------------------------
    // TABS
    // -------------------------------------------------------
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
        },
        indicator: {
          height: 4,
          borderRadius: 4,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 40,
          fontWeight: 600,
          '&.Mui-selected': {
            color: primaryMain,
          },
        },
      },
    },
  },
  echartStyles: {
    ...customEchartsTheme,
    textStyle: {
      color: '#cccccc',
      fontFamily: "'Inter', sans-serif",
    },
    tooltip: {
      backgroundColor: '#333333',
      borderColor: '#444',
      textStyle: {
        color: '#ffffff',
      },
      borderWidth: 1,
    },
    legend: {
      textStyle: {
        color: '#cccccc',
      },
    },
  },
};

// -------------------------------------------------------------
// CREATE & EXPORT THEME INSTANCES
// -------------------------------------------------------------
export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);

// You can export this if you want to use it elsewhere or merge it into ECharts directly.
export { customEchartsTheme };
