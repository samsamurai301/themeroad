import React from 'react';
import { Paper, Box, Typography } from '@mui/material';
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

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => (
  <Paper sx={{ p: 2, backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
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

export default StatCard;
