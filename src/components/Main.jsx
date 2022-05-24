import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Recipes from '../pages/Recipes';
import Register from '../pages/Register';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/recipes' element={<Recipes />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
