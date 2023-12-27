import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from 'configAxios/api';

export const createUserThunk = createAsyncThunk(
  'auth/create',
  async (body, thunkApi) => {
    try {
      const res = await api.post('users/signup', body);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login',
  async (body, thunkApi) => {
    try {
      const res = await api.post('users/login', body);
      setToken(res.data.token);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutUserThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkApi) => {
    try {
      await api.post('users/logout');
      clearToken();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue('Token is not exist');
    }

    try {
      const res = await api.get('users/current');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
