import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cartpage = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.quantity * (parseFloat(item.ticketprice) || 0),
    0
  );

  const handlePayment = () => {
    alert('🎉 Payment Successful! Enjoy your movie!');
    clearCart();
  };

  return (
    <div
      style={{
        maxWidth: '1000px',
        margin: '40px auto',
        padding: '20px',
        background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '30px',
          color: '#4B0082',
          fontSize: '32px',
          fontWeight: 'bold',
        }}
      >
        🎬 Your Movie Cart
      </h2>

      {cartItems.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#888' }}>
          🛒 Your cart is empty. Start adding some movie tickets!
        </p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id || item.id}
              style={{
                display: 'flex',
                gap: '20px',
                background: '#fff',
                borderRadius: '15px',
                boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
                padding: '15px',
                marginBottom: '20px',
                alignItems: 'center',
              }}
            >
              <img
                src={item.image || 'https://via.placeholder.com/150x200'}
                alt={item.name}
                style={{
                  width: '120px',
                  height: '160px',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                }}
              />

              <div style={{ flex: 1 }}>
                <h3 style={{ margin: 0, color: '#333' }}>{item.name}</h3>
                <p style={{ margin: '5px 0', color: '#666' }}>
                  🎬 Directed by <strong>{item.director || 'N/A'}</strong>
                </p>
                <p style={{ margin: '5px 0', color: '#666' }}>🗣 Language: {item.language || 'Tamil'}</p>
                <p style={{ margin: '5px 0', color: '#666' }}>⏰ Show Time: {item.showtime || '6:00 PM'}</p>
                <p style={{ margin: '5px 0', color: '#000' }}>
                  💵 ₹{item.ticketprice} x{' '}
                  <span
                    style={{
                      background: '#ffc107',
                      padding: '2px 8px',
                      borderRadius: '8px',
                      color: '#000',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.quantity}
                  </span>{' '}
                  = <strong>₹{(item.quantity * parseFloat(item.ticketprice)).toFixed(2)}</strong>
                </p>

                <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => addToCart(item)}
                    style={{
                      padding: '8px 14px',
                      backgroundColor: '#28a745',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      transition: '0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    ➕ Add
                  </button>
                  <button
                    onClick={() => removeFromCart(item._id || item.id)}
                    style={{
                      padding: '8px 14px',
                      backgroundColor: '#dc3545',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      transition: '0.3s',
                      cursor: 'pointer',
                    }}
                  >
                    ➖ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div
            style={{
              backgroundColor: '#fff',
              padding: '25px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              marginTop: '30px',
            }}
          >
            <h4>🎟️ Total Tickets: {totalItems}</h4>
            <h4 style={{ marginBottom: '20px' }}>
              💰 Total Price: <span style={{ color: '#28a745' }}>₹{totalPrice.toFixed(2)}</span>
            </h4>

            <button
              onClick={handlePayment}
              style={{
                padding: '12px 30px',
                background: 'linear-gradient(to right, #00b09b, #96c93d)',
                color: '#fff',
                fontSize: '16px',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              }}
            >
              ✅ Pay ₹{totalPrice.toFixed(2)}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cartpage;
