import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Checkbox } from '@mui/material';

const tasks = [
  { id: 1, text: 'Complete project report', completed: false },
  { id: 2, text: 'Review team feedback', completed: true },
  { id: 3, text: 'Update project plan', completed: false },
  { id: 4, text: 'Prepare presentation slides', completed: true },
];

const Tasks: React.FC = () => {
  return (
    <Paper sx={{ p: 3, borderRadius: '12px', boxShadow: 3 }}>
      <Typography variant="h6" gutterBottom>
        Tasks
      </Typography>
      <List>
        {tasks.map(task => (
          <ListItem key={task.id}>
            <Checkbox checked={task.completed} />
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Tasks;
