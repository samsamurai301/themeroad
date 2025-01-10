import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material';
import { deepOrange, deepPurple, blue, green } from '@mui/material/colors';

const ActivityFeed: React.FC = () => {
  const activities = [
    { user: 'John Doe', action: 'completed a task', time: '5 minutes ago', color: deepOrange[500] },
    { user: 'Jane Smith', action: 'created a new project', time: '2 hours ago', color: deepPurple[500] },
    { user: 'Mike Johnson', action: 'uploaded files', time: '4 hours ago', color: blue[500] },
    { user: 'Sarah Wilson', action: 'made a purchase', time: '1 day ago', color: green[500] },
  ];

  return (
    <Paper sx={{ p: 2, backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: activity.color, borderRadius: '12px' }}>
                  {activity.user.charAt(0)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={activity.user}
                secondary={
                  <>
                    <Typography component="span" variant="body2" color="text.primary">
                      {activity.action}
                    </Typography>
                    {` — ${activity.time}`}
                  </>
                }
              />
            </ListItem>
            {index < activities.length - 1 && <Divider variant="inset" component="li" />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default ActivityFeed;
