import "./header.css";
import React from 'react';

const Header: React.FC = () => {
  return (
    <div>
      <header className="header">
        <h1>Shaheers Portfolio</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/about-us">About Us</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
