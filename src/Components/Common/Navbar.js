import React, { useState } from 'react';
import { Input } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const { Search } = Input;

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const hideNavbarPaths = ['/'];
  if (hideNavbarPaths.includes(location.pathname)) return null;

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav
      style={{
        background: 'linear-gradient(to right, #3f2b96, #a8c0ff)',
        padding: '12px 20px',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: '#fff',
            letterSpacing: '1px',
          }}
        >
          🎟 Ticketsss
        </div>

        {/* Hamburger for mobile */}
        <div
          onClick={() => setShowMenu(!showMenu)}
          style={{
            fontSize: '24px',
            color: '#fff',
            cursor: 'pointer',
            display: 'block',
          }}
          className="hamburger"
        >
          ☰
        </div>

        {/* Menu Links */}
        <div
          style={{
            display: showMenu ? 'flex' : 'none',
            flexDirection: 'column',
            width: '100%',
            marginTop: '10px',
          }}
          className="mobile-links"
        >
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/movies" style={linkStyle}>Movies</Link>
          <Link to="/cart" style={linkStyle}>Cart</Link>
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
          <div style={{ marginTop: 10, padding: '0 10px' }}>
            <Search
              placeholder="Search movie/director"
              enterButton
              allowClear
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', maxWidth: 350 }}
            />
          </div>
        </div>

        {/* Desktop Links */}
        <div
          className="desktop-links"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '15px',
          }}
        >
          <Link to="/home" style={linkStyle}>Home</Link>
          <Link to="/movies" style={linkStyle}>Movies</Link>
          <Link to="/cart" style={linkStyle}>Cart</Link>
          <button onClick={handleLogout} style={buttonStyle}>Logout</button>
          <Search
            placeholder="Search movie/director"
            enterButton
            allowClear
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 250 }}
          />
        </div>
      </div>

      {/* Media query for desktop menu */}
      <style>{`
        @media (min-width: 768px) {
          .mobile-links {
            display: none !important;
          }
          .desktop-links {
            display: flex !important;
          }
          .hamburger {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  padding: '8px 12px',
  fontSize: '16px',
  borderRadius: '5px',
  textAlign: 'center',
};

const buttonStyle = {
  background: 'transparent',
  border: '1px solid white',
  color: '#fff',
  padding: '6px 14px',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '5px auto',
};

export default Navbar;
