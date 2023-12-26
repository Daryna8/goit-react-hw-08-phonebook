import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Navigation } from './Navigation';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Button to="/" component={NavLink} sx={{ color: 'white', mx: 1 }}>
            Contact Book
          </Button>
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
