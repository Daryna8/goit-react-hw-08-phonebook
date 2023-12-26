import React from 'react';
import { Header } from './Header';
import { PhoneBook } from './PhoneBook';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route index element={<PhoneBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
