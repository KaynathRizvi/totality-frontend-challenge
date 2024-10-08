"use client";

import { useState } from 'react';
import Navbar from '@/components/NavBar';
import properties from '../../../data/properties'; 
import './page.css';

export default function PropertyPage({ params }) {
  const [cartItems, setCartItems] = useState([]);
  const { id } = params;

  const property = properties.find((property) => property.id === parseInt(id));

  if (!property) {
    return <p>Property not found!</p>;
  }

  const { title, location, price, room, images, additionalImages, bedRoom, kitchen } = property;

  const [showAdditionalImages, setShowAdditionalImages] = useState(false);

  const toggleImages = () => {
    setShowAdditionalImages((prev) => !prev);
  };

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <div className='page-container'>
        <h1>{title}</h1>
        <p>Location: {location}</p>
        <p>Price: ₹{price}/month</p>
        <p>Room: {room} BHK</p>
        <button className='book-now'>Book Now</button>

        <div className='image-container'>
          <div className='property-images'>
            <img src={images[0]} alt="Main property" className='image-style' />
          </div>
          {showAdditionalImages && (
            <div className='additional-images'>
              {additionalImages.map((img, index) => (
                <img key={index} src={img} alt={`Additional ${index + 1}`} className='image-style' />
              ))}
            </div>
          )}
          <button onClick={toggleImages}>
            {showAdditionalImages ? 'Hide Additional Images' : 'Show Additional Images'}
          </button>
        </div>
      </div>
    </div>
  );
}
