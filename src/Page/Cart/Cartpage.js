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
    <div className="container mt-5">
      <h2 className="text-center mb-4">🎬 Your Movie Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">🛒 Your cart is empty. Add some movie tickets!</p>
      ) : (
        <>
          <div className="row flex-nowrap overflow-auto pb-3">
            {cartItems.map((item) => (
              <div key={item._id || item.id} className="col-10 col-sm-6 col-md-4 col-lg-3 me-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src={item.image || 'https://via.placeholder.com/300x180?text=No+Image'}
                    className="card-img-top"
                    alt={item.name}
                    style={{ height: '180px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name || '🎬 Movie Name'}</h5>
                    <p className="card-text text-muted">🗣 Language: {item.language || 'English'}</p>
                    <p className="card-text">⏰ Show Time: {item.showtime || '6:30 PM'}</p>
                    <p className="card-text">🎟️ Ticket Price: ₹{item.ticketprice}</p>
                    <p className="card-text">🪑 Seats: {item.quantity}</p>
                    <p className="fw-bold">
                      Subtotal: ₹{(item.quantity * (parseFloat(item.ticketprice) || 0)).toFixed(2)}
                    </p>

                    <div className="d-flex justify-content-between">
                      <button className="btn btn-outline-success btn-sm" onClick={() => addToCart(item)}>
                        ➕ Add
                      </button>
                      <button className="btn btn-outline-danger btn-sm" onClick={() => removeFromCart(item._id || item.id)}>
                        ➖ Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-4 bg-light rounded shadow-sm">
            <h5>🧾 Total Tickets: {totalItems}</h5>
            <h5>💰 Total Amount: ₹{totalPrice.toFixed(2)}</h5>

            <button className="btn btn-primary mt-3" onClick={handlePayment}>
              ✅ Proceed to Pay ₹{totalPrice.toFixed(2)}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cartpage;
