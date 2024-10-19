// File: src/app/cart/page.tsx
import React from 'react';
import Cart from '../../components/Cart'; 

interface CartItem {
  title: string;
  price: number;
}

interface CartPageProps {
  cartItems: CartItem[]; 
  setCartItems: (items: CartItem[]) => void; 
}

const CartPage: React.FC<CartPageProps> = ({ cartItems, setCartItems }) => {
  const removeFromCart = (index: number) => {
    const newCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newCartItems);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default CartPage;
