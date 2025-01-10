import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@mui/material';

interface ActivityItemProps {
  activity: {
    avatar: string;
    title: string;
    description: string;
  };
}

const ActivityItem: React.FC<ActivityItemProps> = ({ activity }) => {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt={activity.title} src={activity.avatar} />
      </ListItemAvatar>
      <ListItemText
        primary={activity.title}
        secondary={activity.description}
      />
    </ListItem>
  );
};

export default ActivityItem;
