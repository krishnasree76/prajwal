import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOrderClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        <a href="#top" className="logo-link flex-center" onClick={closeMenu}>
          <img src="/assets/logo.png" alt="Prajwal Fresh Basket" className="nav-logo" />
          <div className="nav-brand-text">
            <span>PRAJWAL</span>
            <span>FRESH BASKET</span>
          </div>
        </a>
        
        {/* Desktop Links */}
        <ul className="nav-links d-none-mobile">
          <li><a href="#top" className="nav-link">Home</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button className="btn btn-primary d-none-mobile" onClick={onOrderClick}>ORDER NOW</button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="icon-btn menu-btn d-mobile-only" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-links">
          <li><a href="#top" onClick={closeMenu}>Home</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          <li className="mobile-cta-li">
            <button className="btn btn-primary full-width" onClick={() => { closeMenu(); onOrderClick(); }}>
              ORDER NOW
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
