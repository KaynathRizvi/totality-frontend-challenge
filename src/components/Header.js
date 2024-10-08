import React from 'react';
import bg from '../images/bg.png';
import '../styles/Header.css';

const Header = ({ onSearch, cartItems }) => {
  return (
    <div>
      <header className="header">
        <div className='main-title'>
          Find Your <br />
          Next Home
        </div>
        <div className='desc'>
          Our user-friendly platform makes it easy to search for rental properties.
          With detailed listings, high-quality images, and transparent pricing,
          you’ll find exactly what you’re looking for. 
        </div>
          <button className='know-button'>Know More</button>
        <div className='bg-container'>
          <img src={bg.src} alt="Urban Rental Background" className="background-image" />
        </div>
      </header>
      <div className='breaker'></div>
    </div>
  );
};

export default Header;
