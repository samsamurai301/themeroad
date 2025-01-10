import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

const Cards: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 3 }}>
      <Card sx={{ maxWidth: 345, backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="Contemplative Reptile"
          sx={{ borderRadius: '12px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
          sx={{ borderRadius: '12px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Paella
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Paella is a Spanish rice dish originally from Valencia. Paella is one of the best-known dishes in Spanish cuisine.
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 345, backdropFilter: 'blur(10px)', borderRadius: '12px' }}>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space"
          sx={{ borderRadius: '12px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Live From Space
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Catch up on your favorite NASA TV shows and watch the latest NASA TV live events.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Cards;
