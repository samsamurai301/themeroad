// app/page.tsx
'use client';

import React from 'react';
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import { Box, Typography } from '@mui/material';

const Home: React.FC = () => {
  const sampleOption = {
    title: {
      text: 'Stunning UI Template - Sample Chart',
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [120, 200, 150, 80, 70, 110, 130],
        smooth: true,
        lineStyle: {
          width: 3,
        },
      },
    ],
  };
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
      </Box>
      <Box sx={{ p: 3 }}>
      <Chart option={sampleOption} />
      </Box>
    </Box>
  );
};

export default Home;
