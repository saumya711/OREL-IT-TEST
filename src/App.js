import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./pages/Login";
import Header from "./components/Header";
import Home from "./pages/Home";
import SingleProduct from "./pages/SingleProduct";
import Profile from "./pages/Profile";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <BrowserRouter>
      <Header />
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