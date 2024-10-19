import React from 'react';
import Cart from '../../components/Cart';

interface CartPageProps {
  cartItems: Array<{ id: number; title: string; price: number }>;
  setCartItems: React.Dispatch<React.SetStateAction<Array<{ id: number; title: string; price: number }>>>;
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