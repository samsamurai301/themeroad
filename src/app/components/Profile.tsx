import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const Profile: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
      <Card sx={{ maxWidth: 345, backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/profile.jpg"
          alt="Profile Picture"
          sx={{ borderRadius: '12px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            John is a software engineer with over 10 years of experience in web development. He specializes in building high-performance web applications and has a passion for creating stunning user interfaces.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
