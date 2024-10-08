import React from 'react';

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <p>Total: ${total}</p>
      {/* Add form fields for user information and payment here */}
    </div>
  );
};

export default Checkout;
