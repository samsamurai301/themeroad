'use client';

import React, { useState } from 'react';
import { Box, Paper } from '@mui/material';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Chart from './components/Chart';
import Tables from './components/Tables';
import Cards from './components/Cards';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import ActivityFeed from './components/ActivityFeed';
import { useMediaQuery, useTheme } from '@mui/material';

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);

  const sampleChartOption = {
    title: {
      text: 'Monthly Analytics',
      textStyle: {
        fontSize: 16,
      }
    },
    tooltip: {
      trigger: 'axis',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      boundaryGap: false,
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Sales',
        type: 'line',
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        smooth: true,
        areaStyle: {
          opacity: 0.3
        },
        lineStyle: {
          width: 3
        }
      }
    ]
  };

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar onMenuClick={handleSidebarToggle} />
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        variant={isMobile ? "temporary" : "permanent"}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${240}px)` },
          ml: { sm: `${240}px` },
          mt: '64px'
        }}
      >
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={3}>
          <Box gridColumn="span 12">
            <Statistics />
          </Box>
          <Box gridColumn={{ xs: "span 12", md: "span 8" }}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Chart option={sampleChartOption} />
            </Paper>
          </Box>
          <Box gridColumn={{ xs: "span 12", md: "span 4" }}>
            <ActivityFeed />
          </Box>
          <Box gridColumn={{ xs: "span 12", md: "span 4" }}>
            <Profile />
          </Box>
          <Box gridColumn={{ xs: "span 12", md: "span 8" }}>
            <Tables />
          </Box>
          <Box gridColumn="span 12">
            <Cards />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
