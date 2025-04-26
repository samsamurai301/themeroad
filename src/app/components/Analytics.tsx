import React from 'react';
import { Paper, Typography } from '@mui/material';
import Chart from './Chart';
import { customEchartsTheme } from '../theme';

const analyticsChartOption = {
  ...customEchartsTheme,
  title: {
    text: 'Extra Analytics - Users',
    textStyle: { fontSize: 16 },
  },
  tooltip: { trigger: 'axis' },
  legend: { data: ['Users'] },
  grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
  xAxis: { 
    type: 'category', 
    data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], 
    boundaryGap: false 
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Users',
      type: 'line',
      data: [150, 230, 224, 218, 135, 147, 260],
      smooth: true,
      areaStyle: { opacity: 0.2 },
      lineStyle: { width: 3 },
    },
  ],
};

const segmentsChartOption = {
  title: {
    text: 'User Segments',
    textStyle: { fontSize: 16 },
  },
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Free', 'Pro', 'Enterprise'] },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Users',
      type: 'bar',
      data: [120, 180, 70],
      itemStyle: { borderRadius: 8 },
    },
  ],
};

const Analytics: React.FC = () => {
  return (
    <Paper 
      sx={{ 
        p: 3, 
        borderRadius: '16px',
        backgroundColor: 'background.paper',
        // boxShadow: (theme) => theme.customShadows.card
      }}
    >
      <Typography variant="h6">Extra Analytics</Typography>
      <Typography variant="body2">Additional dashboard insights...</Typography>
      <Chart option={analyticsChartOption} />
      <Chart option={segmentsChartOption} />
    </Paper>
  );
};

export default Analytics;