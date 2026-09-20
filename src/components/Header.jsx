import React from 'react';
import { GraduationCap } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo-container">
          <GraduationCap className="logo-icon" size={32} />
          <h1 className="logo-text">EduAdmin</h1>
        </div>
        <div className="header-nav">
          <span className="portal-badge">Student Portal</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
