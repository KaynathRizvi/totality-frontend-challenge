"use client";

import React, { useState } from 'react';
import Navbar from '@/components/NavBar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import properties from '../data/properties';

// Define types for your property and search criteria
interface Property {
  title: string;
  location: string;
  room: number;
  price: number;
}

interface SearchCriteria {
  location: string;
  room: string; // Assuming this is a string input
  price: string; // Assuming this is a string input
}

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [cartItems, setCartItems] = useState<Property[]>([]); // Explicitly set type

  const handleSearch = (searchCriteria: SearchCriteria) => {
    const { location, room, price } = searchCriteria;

    const results = properties.filter((property) => {
      const matchesLocation =
        location === '' || property.location.toLowerCase().includes(location.toLowerCase());
      const matchesRoom = room === '' || property.room === parseInt(room);
      const matchesPrice = price === '' || property.price <= parseInt(price);

      return matchesLocation && matchesRoom && matchesPrice;
    });

    setFilteredProperties(results);
  };

  const addToCart = (property: Property) => {
    setCartItems((prevItems) => [...prevItems, property]);
  };

  const removeFromCart = (index: number) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Header onSearch={handleSearch} cartItems={cartItems} /> {/* Pass props to Header */}
      <SearchBar onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default HomePage;