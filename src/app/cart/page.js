import React from 'react';
import Cart from '../../components/Cart'; // Adjust path as necessary
import properties from '../../data/properties'; // Example data import

const CartPage = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default CartPage;
