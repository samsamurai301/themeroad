import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const CustomNav: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const isMobile = useMediaQuery('(max-width:768px)');

  const toggleDrawer = (open: boolean) => {
    setDrawerOpen(open);
  };

  const menuItems = ['Dashboard', 'Profile', 'Settings', 'Notifications'];

  return (
    <AppBar position="sticky" color="secondary" sx={{ backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
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
          Custom Navigation
        </Typography>
      </Toolbar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)} sx={{ borderRadius: '12px' }}>
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

export default CustomNav;
