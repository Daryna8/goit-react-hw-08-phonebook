import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import s from '../components/PhoneBook.module.css';
import { useDispatch } from 'react-redux';
import { createUserThunk } from '../redux/auth/operations';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const Register = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const submit = data => {
    dispatch(createUserThunk(data))
      .unwrap()
      .then(res => {
        toast.success(`Successful registration! Welcome ${res.user.email}!`);
      })
      .catch(() => {
        toast.error('Ups, something went wrong. Please try again!!!');
      });
  };
  return (
    <div className={s.wrapper}>
      <Box
        onSubmit={handleSubmit(submit)}
        component="form"
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="Name"
          label="Name"
          name="name"
          autoComplete="name"
          autoFocus
          {...register('name')}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
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
          Register
        </Button>
      </Box>
    </div>
  );
};
