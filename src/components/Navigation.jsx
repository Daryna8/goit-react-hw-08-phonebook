import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      <Button to="/register" component={NavLink} sx={{ color: 'white', mx: 1 }}>
        Register
      </Button>
      <Button to="/login" component={NavLink} sx={{ color: 'white', mx: 1 }}>
        Login
      </Button>
      <Button to="/contacts" component={NavLink} sx={{ color: 'white', mx: 1 }}>
        Contacts
      </Button>
    </Box>
  );
};
