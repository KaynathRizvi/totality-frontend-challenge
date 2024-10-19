import React from 'react';
import Cart from '../../components/Cart'; // Adjust path as necessary

// Define an interface for the props
interface CartPageProps {
  cartItems: Array<{ id: number; title: string; price: number }>; // Adjust the structure based on your actual data
  setCartItems: React.Dispatch<React.SetStateAction<Array<{ id: number; title: string; price: number }>>>; // Adjust the type as needed
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default CartPage;
