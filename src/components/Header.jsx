import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import ContactsIcon from '@mui/icons-material/Contacts';
import { Button } from '@mui/material';
import { Navigation } from './Navigation';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <ContactsIcon />
          <Button to="/" component={NavLink} sx={{ color: 'white', mx: 1 }}>
            Contact Book
          </Button>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
