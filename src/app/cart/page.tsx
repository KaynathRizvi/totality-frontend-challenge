import React from 'react';
import Cart from '../../components/Cart'; // Adjust the path as necessary

// Define an interface for the props
interface CartItem {
  id: number;
  title: string;
  price: number;
}

interface CartPageProps {
  cartItems: CartItem[]; // Using an array of CartItem objects
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>; // Ensuring the type matches the state setter
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
