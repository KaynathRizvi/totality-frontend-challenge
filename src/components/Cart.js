import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <h3>{item.title}</h3>
            <p>Price: ₹{item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
