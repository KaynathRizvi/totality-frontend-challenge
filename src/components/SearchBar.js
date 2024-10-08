import React, { useState } from 'react';
import '../styles/SearchBar.css';
import search_button from '../images/search.png';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [room, setRoom] = useState('');
  const [price, setPrice] = useState('');

  const handleSearch = () => {
    onSearch({ location, room, price });
  };

  return (
    <div className="search-container">
      <div className='search-bar'>
        <div className='filter-type'>
          <label htmlFor="location">Location</label>
          <input 
            type="text" 
            id="location"
            placeholder="Mumbai" 
            className="search-input" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </div>
        <div className='filter-type'>
          <label htmlFor="room">Room</label>
          <input 
            type="number" 
            id="room"
            placeholder="2" 
            className="search-input" 
            value={room} 
            onChange={(e) => setRoom(e.target.value)} 
          />
        </div>
        <div className='filter-type'>
          <label htmlFor="price">Price</label>
          <input 
            type="text" 
            id="price"
            placeholder="20000₹" 
            className="search-input" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
          />
        </div>
        <button className="search-button" onClick={handleSearch}>
          <img 
            src={search_button.src} 
            alt="Search" 
            className="search-icon" 
          />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
