'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { useThemeMode } from '../hooks/useThemeMode';
import NavbarItem from './NavbarItem';
import useNavbarStyles from './navbarStyles';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const theme = useTheme();
  const { toggleTheme } = useThemeMode();
  const classes = useNavbarStyles();

  return (
    <AppBar 
      position="fixed" 
      className="glass"
      sx={{ 
        zIndex: theme.zIndex.drawer + 1,
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: 'none',
        color: theme.palette.text.primary,
        transition: 'all 0.2s ease',
        height: '56px', // Adjusted height
      }}
    >
      <Toolbar variant="dense" sx={{ minHeight: '56px' }}> {/* Adjusted height */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          width: '100%',
          gap: 1
        }}>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1,
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
          >
            Dashboard
          </Typography>
          <NavbarItem
            icon="menu"
            onClick={onMenuClick}
            className={classes.buttonHover}
          />
          <NavbarItem
            icon="search"
            className={classes.buttonHover}
          />
          <NavbarItem
            icon={theme.palette.mode === 'dark' ? 'brightness7' : 'brightness4'}
            onClick={toggleTheme}
            className={classes.buttonHover}
          />
          <NavbarItem
            icon="accountCircle"
            className={classes.buttonHover}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
