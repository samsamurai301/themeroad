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
import Notifications from './components/Notifications';
import Tasks from './components/Tasks';
import Analytics from './components/Analytics';
import { useMediaQuery, useTheme } from '@mui/material';
import './styles/animations.css';
import './styles/advanced-animations.css';

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
    <Box 
      className="gradient-bg"
      sx={{ 
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Navbar onMenuClick={handleSidebarToggle} />
      <Sidebar 
        open={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
        variant={isMobile ? "temporary" : "persistent"}
      />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          width: { sm: `calc(100% - ${sidebarOpen ? 240 : 0}px)` },
          mt: '48px', // Reduced from 64px for dense toolbar
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        }}
      >
        <Box 
          display="grid" 
          gridTemplateColumns="repeat(12, 1fr)" 
          gap={{ xs: 2, sm: 3 }}
          sx={{ maxWidth: '1600px', margin: '0 auto' }}
        >
          {/* Statistics and Chart Section */}
          <Box gridColumn="span 12">
            <Statistics />
          </Box>
          <Box gridColumn="span 12">
            <Paper 
              sx={{ 
                p: 3, 
                height: '100%',
                minHeight: '400px',
                borderRadius: '12px',
                boxShadow: theme.shadows[3],
              }}
            >
              <Chart option={sampleChartOption} />
            </Paper>
          </Box>

          {/* User Related Section */}
          <Box gridColumn={{ xs: "span 12", md: "span 4" }}>
            <Profile />
          </Box>
          <Box gridColumn={{ xs: "span 12", md: "span 4" }}>
            <Tasks />
          </Box>
          <Box gridColumn={{ xs: "span 12", md: "span 4" }}>
            <ActivityFeed />
          </Box>

          {/* Data and Analytics Section */}
          <Box gridColumn={{ xs: "span 12", lg: "span 8" }}>
            <Tables />
          </Box>
          <Box gridColumn={{ xs: "span 12", lg: "span 4" }}>
            <Notifications />
          </Box>
          <Box gridColumn="span 12">
            <Analytics />
          </Box>
          
          {/* Additional Content */}
          <Box gridColumn="span 12">
            <Cards />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;