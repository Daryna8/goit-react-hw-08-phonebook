import * as React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from '../redux/auth/operations';
import s from './PhoneBook.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const email = useSelector(state => state.auth.user.email);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
      {isLoggedIn && <p className={s.navEmail}>{email}</p>}
      <Button to="/contacts" component={NavLink} sx={{ color: 'white', mx: 1 }}>
        Contacts
      </Button>
      {isLoggedIn ? (
        <Button
          onClick={() => {
            dispatch(logoutUserThunk()).then(() => navigate('/login'));
          }}
          sx={{ color: 'white', mx: 1 }}
        >
          Logout
        </Button>
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
