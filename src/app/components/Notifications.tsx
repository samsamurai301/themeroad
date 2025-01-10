import React, { useState } from 'react';
import { Snackbar, Alert, Button } from '@mui/material';

const Notifications: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event: Event | React.SyntheticEvent<Element, Event>, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleAlertClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Show Notification
      </Button>
      <Snackbar 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
        sx={{ backdropFilter: 'blur(10px)', borderRadius: '12px' }}
      >
        <Alert 
          onClose={handleAlertClose} 
          severity="success" 
          sx={{ width: '100%', borderRadius: '12px' }}
        >
          This is a success message!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Notifications;
