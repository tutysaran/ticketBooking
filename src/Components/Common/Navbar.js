// Navbar.js
import React from 'react';
import { Input } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Search } = Input;

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location=useLocation();
  if(location.pathname==='/')return null; 
  if(location.pathname==='/cart')return null; 
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-5">
      <div className="container-fluid d-flex flex-wrap justify-content-between align-items-center">
        
        {/* Brand */}
        <div className="navbar-brand text-white fw-bold fs-4">
          🎟 Ticketsss
        </div>

      
        <div className="d-flex flex-wrap align-items-center gap-3 ">
          <Link to="/home">
            <button className="btn btn-outline-light">Home</button>
          </Link>

          <Link to="/movies">
            <button className="btn btn-outline-light">Movies</button>
          </Link>

          <Link to="/cart">
            <button className="btn btn-outline-light">View Cart</button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline-light">LogOut</button>
          </Link>

          {/* Search Input with left margin */}
          <div className="ms-4">
            <Search
              placeholder="Search by movie name or director"
              enterButton
              allowClear
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ maxWidth: 300 }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
