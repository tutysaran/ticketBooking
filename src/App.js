import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Common/Navbar';
import Home from './Page/Home/Home';
import Cart from './Page/Cart/Cartpage';
import './App.css';
import Details from './Page/Details/Details'
import CustomCard from './Components/CustomCard';
import Login from './Components/Login/Login';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
         <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home searchTerm={searchTerm} />} />
        <Route path="/movies" element={<CustomCard />} />
       <Route path="/buy/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        
      </Routes>
    </>
  );
};

export default App;
