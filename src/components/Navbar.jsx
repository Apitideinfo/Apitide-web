import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <img
            src="/static/images/logo.png"
            alt="APITIDE Logo"
            className="logo-img"
            width="38"
            height="38"
          />
          <span>APITIDE</span>
        </Link>

        <nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMobileMenu}>
            Home
          </Link>
          <Link to="/services" className={isActive('/services') ? 'active' : ''} onClick={closeMobileMenu}>
            Services
          </Link>
          <Link to="/ai-tools" className={isActive('/ai-tools') ? 'active' : ''} onClick={closeMobileMenu}>
            AI Tools
          </Link>
          <Link to="/resources" className={isActive('/resources') ? 'active' : ''} onClick={closeMobileMenu}>
            Resources
          </Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={closeMobileMenu}>
            About
          </Link>
          <Link to="/projects" className={isActive('/projects') ? 'active' : ''} onClick={closeMobileMenu}>
            Projects
          </Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={closeMobileMenu}>
            Contact
          </Link>
          <Link to="/contact" className="mobile-menu-cta" onClick={closeMobileMenu}>
            Book Consultation
          </Link>
        </nav>

        <Link to="/contact" className="header-cta">
          Book Consultation
        </Link>

        <div
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
