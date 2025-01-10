'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Divider,
  useTheme,
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
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { text: 'Analytics', icon: <BarChartIcon />, path: '/analytics' },
    { text: 'Tables', icon: <TableViewIcon />, path: '/tables' },
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    if (variant === 'temporary') {
      onClose();
    }
  };

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
            border: 'none',
            backgroundColor: theme.palette.mode === 'light' 
              ? 'rgba(255, 255, 255, 0.9)'
              : 'rgba(0, 0, 0, 0.9)',
            backdropFilter: 'blur(10px)',
            boxShadow: theme.shadows[4],
            transition: theme.transitions.create(['transform', 'width', 'background-color'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
        }}
      >
        <Box sx={{ overflow: 'auto', height: '100%' }}>
          <Box 
            sx={{ 
              p: 2,
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box 
              component="img"
              src="/logo.png" // Add your logo
              alt="Logo"
              sx={{ height: 40 }}
              className="glass"
            />
          </Box>
          <Divider sx={{ mb: 2 }} />
          <List sx={{ px: 2 }}>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  onClick={() => handleNavigation(item.path)}
                  selected={pathname === item.path}
                  sx={{
                    borderRadius: '12px',
                    '&:hover': {
                      backgroundColor: theme.palette.mode === 'light' 
                        ? 'rgba(0, 0, 0, 0.04)'
                        : 'rgba(255, 255, 255, 0.08)',
                    },
                    '&.Mui-selected': {
                      backgroundColor: theme.palette.primary.main,
                      color: 'white',
                      '&:hover': {
                        backgroundColor: theme.palette.primary.dark,
                      },
                    },
                  }}
                  className="button-hover"
                >
                  <ListItemIcon 
                    sx={{ 
                      minWidth: 40,
                      color: 'inherit'
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text}
                    sx={{
                      '& .MuiListItemText-primary': {
                        fontWeight: 500,
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
