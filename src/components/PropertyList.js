"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import '../styles/PropertyList.css';

const PropertyList = ({ addToCart, properties = [] }) => {
  // Always call useState, no conditions involved
  const [currentIndex, setCurrentIndex] = useState(0);
  const propertiesToShow = 3;

  // If there are no properties, we can handle it right away
  if (properties.length === 0) {
    return <p>No properties available.</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + properties.length) % properties.length);
  };

  return (
    <div className="property-container">
      <div
        className="property-listing"
        style={{
          transform: `translateX(-${currentIndex * (100 / propertiesToShow)}%)`,
          transition: 'transform 0.9s ease-in-out'
        }}
      >
        {properties.slice(currentIndex, currentIndex + propertiesToShow).map((property) => (
          <div className="property-card" key={property.id}>
            <img 
              src={property.image.src} 
              alt={`Image of ${property.title}`} 
              className="property-image" 
            />
            <h3 className="property-title">{property.title}</h3>
            <p className="property-room">Room: {property.room} BHK</p>
            <p className="property-location">Location: {property.location}/India</p>
            <p className="property-price">Price: ₹{property.price}/month</p>
            <div className="property-button">
              <Link href={`/property/${property.id}`}>
                <button className="see-more-button">See Images</button>
              </Link>
              <button className="cart-button" onClick={() => addToCart(property)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="img-slide">
        <button
          className="slide-button"
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          ❮
        </button>
        <button
          className="slide-button"
          onClick={nextSlide}
          disabled={currentIndex >= properties.length - propertiesToShow}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default PropertyList;
