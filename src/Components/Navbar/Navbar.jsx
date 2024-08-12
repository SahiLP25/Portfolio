import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <h2 className={`logo ${isScrolled ? 'logo-scrolled' : ''}`}>
          Port<span>folio</span>
        </h2>
        <div className="navmenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={1000}
            className={`navlink ${isScrolled ? 'navlink-scrolled' : ''}`}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="abt"
            spy={true}
            smooth={true}
            offset={-10}
            duration={1000}
            className={`navlink ${isScrolled ? 'navlink-scrolled' : ''}`}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="new"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
            className={`navlink ${isScrolled ? 'navlink-scrolled' : ''}`}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-60}
            duration={800}
            className={`navlink ${isScrolled ? 'navlink-scrolled' : ''}`}
          >
            Portfolio
          </Link>
        </div>
        <div className="navbutton">
          <button className={`contact-btn ${isScrolled ? 'contact-btn-scrolled' : ''}`}>
            <Link
              activeClass="active"
              to="Contactus"
              spy={true}
              smooth={true}
              offset={-60}
              duration={800}
              className="navlink"
            >
              Contact us
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;