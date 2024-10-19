// File: C:\Users\Kaynath Zehra\totality-frontend-challenge\src\components\Cart.tsx
import React from 'react';
import '../styles/Cart.css';

// Define the type for a cart item
interface CartItem {
  title: string;
  price: number; // Adjust type if price can be a string (e.g., for currency formats)
}

// Define the props for the Cart component
interface CartProps {
  cartItems: CartItem[]; // Array of cart items
  removeFromCart: (index: number) => void; // Function to remove an item from the cart
}

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
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
