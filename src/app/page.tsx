"use client";

import React, { useState } from 'react';
import Navbar from '@/components/NavBar';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import properties from '../data/properties';

const HomePage = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (searchCriteria) => {
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

  const addToCart = (property) => {
    setCartItems((prevItems) => [...prevItems, property]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Navbar cartItems={cartItems} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Header />
      <SearchBar onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} addToCart={addToCart} />
      <Footer />
    </div>
  );
};

export default HomePage;
