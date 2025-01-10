'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Charts from './components/Charts';
import Tables from './components/Tables';
import Cards from './components/Cards';
import Notifications from './components/Notifications';
import Profile from './components/Profile';
import CustomNav from './components/CustomNav';
import { Box, Typography } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <Navbar />
      <Box sx={{ p: 3 }}>
        <Typography variant="h1" gutterBottom>
          Welcome to the Stunning UI Template
        </Typography>
        <Typography variant="body1">
          This is a fully customizable and optimized UI template using Next.js, Redux, and MUI.
        </Typography>
        <Charts />
        <Tables />
        <Cards />
        <Notifications />
        <Profile />
        <CustomNav />
      </Box>
    </Box>
  );
};

export default Home;
