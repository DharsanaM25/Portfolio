import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css';
const Footer = () => {
  return (
    <>
      <div className='footer'>
        <ul className='foot'>
          <li><i className="fa fa-phone"></i>
          +91 7845788547</li>
          <li><i className="fa fa-envelope"></i>
          dharsana252@gmail.com</li>
        </ul>
        <ul className='foot1'>
            <div className="social-icons">
          <a href="https://github.com/DharsanaM25" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-github"></i> Github
          </a><br />
          <a href="https://www.linkedin.com/in/dharsana-m/" target="_blank" rel="noopener noreferrer" className="icon">
            <i className="fa fa-linkedin"></i> LinkedIN
          </a>
        </div>
           
        </ul>
      </div>
    </>
  );
};

export default Footer;