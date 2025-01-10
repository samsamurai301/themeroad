import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: 'primary' | 'success' | 'warning' | 'error';
}

const StatCard = ({ title, value, icon, color }: StatCardProps) => (
  <Paper sx={{ p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
        <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
          {value}
        </Typography>
        <Typography variant="body2" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
          <TrendingUpIcon fontSize="small" sx={{ mr: 0.5 }} />
          +15% increase
        </Typography>
      </Box>
      <Box sx={{ 
        backgroundColor: `${color}.lighter`,
        p: 1.5,
        borderRadius: 2
      }}>
        {icon}
      </Box>
    </Box>
  </Paper>
);

const Statistics: React.FC = () => {
  const stats: StatCardProps[] = [
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
        <Box key={index}>
          <StatCard {...stat} />
        </Box>
      ))}
    </Box>
  );
};

export default Statistics;
