import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import s from '../components/PhoneBook.module.css';
import { useDispatch } from 'react-redux';
import { loginUserThunk } from '../redux/auth/operations';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(loginUserThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Welcome ${res.user.email}!`);
      })
      .catch(() => {
        toast.error('Ups, check your credentials!!!');
      });
  };
  return (
    <div className={s.wrapper}>
      <Box
        onSubmit={handleSubmit(submit)}
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
          {...register('email')}
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
          {...register('password')}
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
