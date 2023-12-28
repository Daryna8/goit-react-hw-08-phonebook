import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';
import { selectIsLoggedIn } from '../redux/auth/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <>
          <Button
            to="/register"
            component={NavLink}
            sx={{ color: 'white', mx: 1 }}
          >
            Register
          </Button>
          <Button
            to="/login"
            component={NavLink}
            sx={{ color: 'white', mx: 1 }}
          >
            Login
          </Button>
        </>
      )}
    </Box>
  );
};
