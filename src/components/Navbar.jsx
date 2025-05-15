import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <div className="logo">WRKHRD</div>

      {/* Desktop Menu */}
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>
        <Link to="/gear" className="link">Gear</Link>
        <Link to="/accessories" className="link">Accessories</Link>
        <Link to="/contact" className="link">Contact</Link>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div className={`dropdown ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="link" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="link" onClick={toggleMenu}>About</Link>
        <Link to="/gear" className="link" onClick={toggleMenu}>Gear</Link>
        <Link to="/accessories" className="link" onClick={toggleMenu}>Accessories</Link>
        <Link to="/contact" className="link" onClick={toggleMenu}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;