import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../Cart/CartContext';

const Details = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    axios.get(`https://backend-crud-one.vercel.app/product/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error('Fetch error:', error));
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/cart');
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // mobile default
        minHeight: '100vh',
        padding: '20px',
        background: 'linear-gradient(135deg, #1e1e2f, #2b5876)',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
        animation: 'fadeIn 1s ease-in-out',
      }}
    >
      {/* Responsive Style with JS media query */}
      <style>{`
        @media (min-width: 768px) {
          .detail-container {
            flex-direction: row !important;
          }
        }
      `}</style>

      <div className="detail-container" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
        {/* Left - Image */}
        <div style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '20px',
              boxShadow: hovered
                ? '0 20px 50px rgba(255, 255, 255, 0.2)'
                : '0 15px 40px rgba(0,0,0,0.3)',
              transform: hovered ? 'scale(1.03)' : 'scale(1)',
              transition: 'all 0.4s ease',
              objectFit: 'cover',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
        </div>

        {/* Right - Details */}
        <div style={{
          flex: 1,
          background: 'rgba(255, 255, 255, 0.05)',
          padding: '30px',
          borderRadius: '20px',
          backdropFilter: 'blur(15px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <h2 style={{
            fontSize: '30px',
            marginBottom: '10px',
            background: 'linear-gradient(to right, #ff4e50, #f9d423)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: "center"
          }}>{product.name}</h2>

          <p style={{ fontSize: '18px', margin: '10px 0', textAlign: "center" }}>
            🎬 <strong>Movie:</strong> {product.name}
          </p>
          <p style={{ fontSize: '18px', margin: '10px 0', textAlign: "center" }}>
            📅 <strong>Release Date:</strong> {product.releasedate}
          </p>
          <p style={{
            fontSize: '20px',
            color: '#ff6b81',
            margin: '15px 0',
            textAlign: "center"
          }}>
            💵 <strong>Ticket Price:</strong> ₹{product.ticketprice}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <button
              onClick={handleAddToCart}
              style={{
                padding: '14px 25px',
                fontSize: '18px',
                borderRadius: '50px',
                border: 'none',
                cursor: 'pointer',
                background: 'linear-gradient(to right, #6a11cb, #2575fc)',
                color: '#fff',
                fontWeight: 'bold',
                boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
                transition: 'transform 0.3s ease',
                width: '200px',
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
