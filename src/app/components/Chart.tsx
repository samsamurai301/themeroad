'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Paper } from '@mui/material';

interface ChartProps {
  option: object;
  style?: React.CSSProperties;
}

const Chart: React.FC<ChartProps> = ({ option, style }) => {
  return (
    <Paper sx={{ p: 3, backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
      <ReactECharts
        option={option}
        style={style || { height: 400, width: '100%' }}
        notMerge={true}
        lazyUpdate={true}
      />
    </Paper>
  );
};

export default Chart;
