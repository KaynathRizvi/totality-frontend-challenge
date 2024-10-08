"use client"; // Ensure this is a Client Component

import { useState } from 'react';
import properties from '../../data/properties'; 
import Link from 'next/link';

export default function ListingPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (property) => {
    setCart((prevCart) => [...prevCart, property]);
    console.log("Added to cart:", property);
  };

  return (
    <div>
      <h1>All Listings</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <div className='property-images'>
              <img 
                src={property.image.src} 
                className='image-style' 
                alt={`Image of ${property.title}`} // Adding meaningful alt text
                loading="lazy" // Optimize for LCP by lazy loading images
              />
            </div>
            <span>{property.title} - ₹{property.price}/month</span>
            <Link href={`/property/${property.id}`}>
              <button className="see-more-button">See Images</button>
            </Link>
            <button className="cart-button" onClick={() => addToCart(property)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Cart Items:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title} - ₹{item.price}/month</li>
        ))}
      </ul>
    </div>
  );
}
