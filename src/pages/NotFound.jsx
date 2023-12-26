import React from 'react';
import { Link } from 'react-router-dom';
import s from '../components/PhoneBook.module.css';
import { Button } from '@mui/material';

export const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <h1>Sorry, this page was not found!</h1>

      <Button
        to="/"
        component={Link}
        variant="contained"
        sx={{
          display: {
            xs: 'flex',
            mt: 3,
            mb: 2,
            width: '38ch',
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        }}
      >
        Back to homepage!
      </Button>
    </div>
  );
};
