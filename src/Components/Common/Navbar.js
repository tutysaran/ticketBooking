// Navbar.js
import React from 'react';
import { Input } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const { Search } = Input;

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const navigate = useNavigate();

 
  const hideNavbarPaths = ['/'];
  if (hideNavbarPaths.includes(location.pathname)) return null;

  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ Remove token
    navigate("/");                    // ✅ Redirect to login
  };

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

          <button className="btn btn-outline-light" onClick={handleLogout}>
            LogOut
          </button>

          {/* Search Input */}
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
