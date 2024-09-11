import { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const togglePopup = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the menu if it's open
    }
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <img src={logo} alt="Advitiya Rehabilitation and Learning Center" />
        </div>
        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/gallery" onClick={toggleMenu}>Gallery</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </nav>
          <button className="donate-btn" onClick={togglePopup}>Donate Now</button>
        <div className="contact-info">
          <FaPhoneAlt className="phone-icon" />
          <div className="contact-details">
            <p>CONTACT US</p>
            <a href="tel:+919205370640">+91 9205370640</a>
          </div>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content">
            <h2>Make a Difference</h2>
            <p>Your donation helps us support and empower differently-abled students. Thank you for your generosity!</p>
            <Link to="/donate" className="donate-link" onClick={togglePopup}>Proceed to Donate</Link>
            <button className="close-popup" onClick={togglePopup}>Close</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
