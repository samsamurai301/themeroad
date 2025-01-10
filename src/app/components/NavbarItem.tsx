import React from 'react';
import { IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface NavbarItemProps {
  icon: 'menu' | 'search' | 'brightness4' | 'brightness7' | 'accountCircle';
  onClick?: () => void;
  className?: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ icon, onClick, className }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'menu':
        return <MenuIcon />;
      case 'search':
        return <SearchIcon />;
      case 'brightness4':
        return <Brightness4Icon />;
      case 'brightness7':
        return <Brightness7Icon />;
      case 'accountCircle':
        return <AccountCircleIcon />;
      default:
        return null;
    }
  };

  return (
    <IconButton onClick={onClick} className={className}>
      {renderIcon()}
    </IconButton>
  );
};

export default NavbarItem;
