import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h1></h1>
      <div className='nav'>
        <h2>Portfolio</h2>
        <ul>
          <li><Link to="/" className='style'>Home</Link></li>
          <li><Link to="/about" className='style'>About</Link></li>
          <li><Link to="/skills" className='style'>Skills</Link></li>
          <li><Link to="/projects" className='style'>Projects</Link></li>
          <li><Link to="/contact" className='style'>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
