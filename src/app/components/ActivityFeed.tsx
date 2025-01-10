import React from 'react';
import { Paper, Typography, List, Divider } from '@mui/material';
import { activities } from '../data/activityData';
import ActivityItem from './ActivityItem';

const ActivityFeed: React.FC = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <ActivityItem activity={activity} />
            {index < activities.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default ActivityFeed;
