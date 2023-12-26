import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const CreateUserThunk = createAsyncThunk(
  'auth/create',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('users/signup', credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const LoginUserThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await axios.post('users/login', credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const LogoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      const res = await axios.post('users/logout');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('users/current');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
