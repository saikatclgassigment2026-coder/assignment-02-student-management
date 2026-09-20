import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} EduAdmin Student Information System. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
