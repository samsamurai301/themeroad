'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '../hooks/useThemeMode';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const theme = useTheme();
  const { toggleTheme } = useThemeMode();

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
          <IconButton
            color="inherit"
            onClick={onMenuClick}
            size="small"
            className="button-hover"
          >
            <MenuIcon />
          </IconButton>
          <IconButton color="inherit" size="small" className="button-hover">
            <SearchIcon />
          </IconButton>
          <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit" size="small" className="button-hover">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <IconButton color="inherit" size="small" className="button-hover">
            <AccountCircleIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
