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
      <button className='book-now'> Book Now
      </button>

      <div className='image-container'>
      <div className='property-images'>
        <img src={property.image.src} className='image-style'/>
      </div>
      <div className='additional-images'>
        <img src={property.additionalImages.src} className='image-style'/>
      </div>
      <div className='additional-images'>
        <img src={property.bedRoom.src} className='image-style'/>
      </div>
      <div className='additional-images'>
        <img src={property.kitchen.src} className='image-style'/>
      </div>
      <div className='additional-images'>
        <img src={property.additionalImages.src} className='image-style'/>
      </div>
      <div className='additional-images'>
        <img src={property.additionalImages.src} className='image-style'/>
      </div>
      </div>
    </div>
    </div>
  );
}
