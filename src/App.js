import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";

import { useDispatch } from 'react-redux';
import { setToken } from './actions/authActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const tokenFromLocalStorage = localStorage.getItem('token');
    if (tokenFromLocalStorage) {
      dispatch(setToken(tokenFromLocalStorage));
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:code" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;