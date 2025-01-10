import React from 'react';
import { Paper, Typography } from '@mui/material';
import Chart from './Chart';
import { analyticsChartOption, segmentsChartOption } from './chartOptions';

const Analytics: React.FC = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: '12px' }}>
      <Typography variant="h6">Extra Analytics</Typography>
      <Typography variant="body2">Additional dashboard insights...</Typography>
      <Chart option={analyticsChartOption} />
      <Chart option={segmentsChartOption} />
    </Paper>
  );
};

export default Analytics;
