'use client';

import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableViewIcon from '@mui/icons-material/TableView';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
  variant: "permanent" | "persistent" | "temporary";
}

const Sidebar: React.FC<SidebarProps> = ({ open, onClose, variant }) => {
  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
    { text: 'Tables', icon: <TableViewIcon />, path: '/tables' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  const drawerContent = (
    <>
      <Box sx={{ p: 2 }}>
        <Box sx={{ height: '64px', display: 'flex', alignItems: 'center' }}>
          {/* Logo or Brand */}
        </Box>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box component="nav">
      <Drawer
        variant={variant}
        open={open}
        onClose={onClose}
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
