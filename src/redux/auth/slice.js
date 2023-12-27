import {
  createUserThunk,
  loginUserThunk,
  logoutUserThunk,
  refreshThunk,
} from './operations';

import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: '',
    email: '',
  },
  token: '',
  isLoggedIn: false,
  isRefresh: false,
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logoutUserThunk.fulfilled, state => {
        state.user = initialState.user;
        state.isLoggedIn = false;
        state.token = '';
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.email;
        state.isLoggedIn = true;
        state.isRefresh = false;
      })
      .addCase(refreshThunk.pending, state => {
        state.isRefresh = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isRefresh = false;
      })

      .addMatcher(
        isAnyOf(createUserThunk.fulfilled, loginUserThunk.fulfilled),
        (state, { payload }) => {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        }
      )
      .addMatcher(
        isAnyOf(
          createUserThunk.pending,
          loginUserThunk.pending,
          logoutUserThunk.pending
        ),
        state => {
          state.isLoading = true;
          state.isError = null;
        }
      )

      .addMatcher(
        isAnyOf(
          createUserThunk.rejected,
          loginUserThunk.rejected,
          logoutUserThunk.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.isError = payload;
        }
      );
  },
});

export const authReducer = slice.reducer;
