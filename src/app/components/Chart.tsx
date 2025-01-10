// app/components/Chart.tsx
'use client';

import React from 'react';
import ReactECharts from 'echarts-for-react';

interface ChartProps {
  option: object;
  style?: React.CSSProperties;
}

const Chart: React.FC<ChartProps> = ({ option, style }) => {
  return (
    <ReactECharts
      option={option}
      style={style || { height: 400, width: '100%' }}
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default Chart;
