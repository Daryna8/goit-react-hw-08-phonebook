import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import HomeIcon from '@mui/icons-material/Home';
import { Button, IconButton } from '@mui/material';
import { Navigation } from './Navigation';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <IconButton to="/" component={NavLink} sx={{ color: 'white' }}>
            <HomeIcon />
          </IconButton>
          {isLoggedIn && (
            <Button to="/contacts" component={NavLink} sx={{ color: 'white' }}>
              Contact Book
            </Button>
          )}
          <Navigation />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
