import { useState, useEffect } from 'react';
import { FaWhatsapp, FaEnvelope, FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowDown, FaInstagram, FaYoutube } from 'react-icons/fa';
import '../styles/FloatingButton.css';

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Automatically open the buttons on initial load
    setIsOpen(true);
  }, []);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`floating-buttons-container ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleButtons}>
        {isOpen ? (isMobile ? <FaArrowDown /> : <FaArrowRight />) : (isMobile ? <FaArrowUp /> : <FaArrowLeft />)}
      </button>
      <div className="floating-buttons">
        <a href="https://wa.me/+919205370640" target="_blank" rel="noopener noreferrer" className="floating-button whatsapp">
          <FaWhatsapp />
        </a>
        <a href="mailto:info@advitiyalearningcenter.com" className="floating-button email">
          <FaEnvelope />
        </a>
        <a href="https://www.instagram.com/advitiya_learning_center/" className="floating-button instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@advitiyalearningcenter7956" className="floating-button youtube">
          <FaYoutube />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
