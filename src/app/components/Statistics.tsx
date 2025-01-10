import React from 'react';
import { Box } from '@mui/material';
import StatCard from './StatCard';

const Statistics: React.FC = () => {
  const stats = [
    { title: 'Total Sales', value: '$23,850', icon: <AttachMoneyIcon sx={{ color: 'primary.main' }} />, color: 'primary' },
    { title: 'New Users', value: '2,356', icon: <PeopleIcon sx={{ color: 'success.main' }} />, color: 'success' },
    { title: 'Orders', value: '1,245', icon: <ShoppingCartIcon sx={{ color: 'warning.main' }} />, color: 'warning' },
    { title: 'Growth', value: '+25%', icon: <TrendingUpIcon sx={{ color: 'error.main' }} />, color: 'error' },
  ];

  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: '1fr',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(4, 1fr)'
      }}
      gap={3}
    >
      {stats.map((stat, index) => (
        <Box key={index} sx={{ borderRadius: '12px' }}>
          <StatCard {...stat} />
        </Box>
      ))}
    </Box>
  );
};

export default Statistics;
