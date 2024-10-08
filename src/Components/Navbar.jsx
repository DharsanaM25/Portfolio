import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav">
        <h2>Portfolio</h2>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <li><Link to="/" className="style">Home</Link></li>
          <li><Link to="/about" className="style">About</Link></li>
          <li><Link to="/skills" className="style">Skills</Link></li>
          <li><Link to="/projects" className="style">Projects</Link></li>
          <li><Link to="/contact" className="style">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
