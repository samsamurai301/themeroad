// app/components/Navbar.tsx
'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { RootState } from '../redux/store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = ['Home', 'About', 'Services', 'Contact'];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        {isMobile ? (
          <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {menuItems.map((item) => (
              <Button key={item} color="inherit">
                {item}
              </Button>
            ))}
          </Box>
        )}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: isMobile ? 'center' : 'left' }}>
          Stunning UI
        </Typography>
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleToggleTheme}>
          {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
        <IconButton color="inherit" onClick={handleMenuClick}>
          <AccountCircleIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem component="button" key={item}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
