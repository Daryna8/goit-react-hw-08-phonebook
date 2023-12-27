import React, { useEffect } from 'react';
import { Header } from './Header';
import { PhoneBook } from './PhoneBook';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { HomePage } from 'pages/HomePage';
import { PrivateRoute } from 'guards/PrivateRoute';
import { PublicRoute } from 'guards/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { refreshThunk } from '../redux/auth/operations';
import { Loader } from './Loader';
// import { Loader } from './Loader';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  const isRefresh = useSelector(state => state.auth.isRefresh);

  return isRefresh ? (
    <Loader />
  ) : (
    <div>
      <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <PhoneBook />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
