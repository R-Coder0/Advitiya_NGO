import { Link } from "react-router-dom";
import { Facebook, Instagram, LocationOn, Email, Phone, YouTube } from "@mui/icons-material";
import logo from "../assets/footerlogo.png";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Logo and About Section */}
          <div className="footer-logo">
            <img src={logo} alt="Advitiya Learning Center" />
            <p>
              Advitiya Learning Center is dedicated to empowering differently-abled students through innovative learning programs, personalized support, and a community of inclusiveness and growth.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/profile.php?id=100077740533098"><Facebook /></a>
              <a href="https://www.instagram.com/advitiya_learning_center/"><Instagram /></a>
              <a href="https://www.youtube.com/@advitiyalearningcenter7956"><YouTube /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <p>
              <LocationOn /> H no. - 115 pocket 7 ground floor Rohini sector 2 delhi, 
              <br /> near Gopal ji chole bhature, New Delhi, Delhi 110085
            </p>
            <p>
              <Phone /> <a href="tel:+919205370640">+91 9205370640</a>
            </p>
            <p>
              <Email /> <a href="mailto:info@advitiyalearningcenter.com">info@advitiyalearningcenter.com</a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2024 Advitiya Learning Center. All rights reserved.</p>
          <p>Developed by <a href="https://bussinesskaro.com/">BUSSINESSKARO.COM</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
