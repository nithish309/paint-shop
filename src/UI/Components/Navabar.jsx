import './Navbar.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from '/images/logo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lora-regular">
      <div
        className="navbar bg-base-100"
        style={{
          backgroundColor: 'white',
          color: '#ee2d7d',
          paddingBottom: '1.5em',
          paddingTop: '1.5em',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {/* Logo on the left */}
        <div className="logo-container">
          <Link to="/" style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
            <img height="75px" width="75px" src={logo} alt="Logo" className="rotate-logo"/>
          </Link>
        </div>

        {/* Menu for larger devices */}
        <div className='menu-container'>
          <ul className="menu menu-horizontal">
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products" >Products</Link>
            </li>
            {/* <li>
              <Link to="/deals">Deals</Link>
            </li> */}
            {/* <li>
              <Link to="/about">About</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Icons for larger devices */}
        <div className="social-icons">
          <a href="https://www.facebook.com/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook rotate-logo"></i>
          </a>
          <a href="https://www.instagram.com/?hl=en" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram rotate-logo"></i>
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'show' : ''}`} onClick={toggleMenu}>
        <ul>
        <li>
            <Link to="/" onClick={toggleMenu}>Home</Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleMenu}>Products</Link>
          </li>
          {/* <li>
            <Link to="/deals" onClick={toggleMenu}>Deals</Link>
          </li> */}
          {/* <li>
            <Link to="/about" onClick={toggleMenu}>About</Link>
          </li> */}
          <li>
            <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>

      <hr />
    </div>
  );
};

export default Navbar;
