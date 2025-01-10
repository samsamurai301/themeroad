import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import { cardData } from '../data/cardData';

const Cards: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 3 }}>
      {cardData.map((card, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={card.image}
            alt={card.alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default Cards;
