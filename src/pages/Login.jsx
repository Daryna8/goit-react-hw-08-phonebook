import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import s from '../components/PhoneBook.module.css';

export const Login = () => {
  return (
    <div className={s.wrapper}>
      <Box
        component="form"
        noValidate
        sx={{
          mt: 1,
        }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};