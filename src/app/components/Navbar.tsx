'use client';

import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { RootState } from '../redux/store';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ borderRadius: '12px' }} // Rounded corners
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" sx={{ borderRadius: '12px' }}>
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" onClick={() => dispatch(toggleTheme())} sx={{ borderRadius: '12px' }}>
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton color="inherit" sx={{ borderRadius: '12px' }}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
