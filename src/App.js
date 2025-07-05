// App.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Home from './Page/Home/Home';
import Cart from './Page/Cart/Cartpage';
import './App.css';
import Details from './Page/Details/Details';
import CustomCard from './Components/CustomCard';
import Login from './Components/Login/Login';
import ProtectedRoute from './Components/Common/ProtectedRoute';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home searchTerm={searchTerm} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <CustomCard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/buy/:id"
        element={
            <ProtectedRoute>
              <Details />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
