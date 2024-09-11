import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com"; // Import EmailJS
import "../styles/Contact.css"; 
import {
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaRegCalendar,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false); // To show a success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use your EmailJS service_id, template_id, and user_id
    emailjs
      .send(
        'service_ibi2cvn', 
        'template_8l6oyvm',
        formData,
        'J0yF9Ax_2b1kWhrDq'
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSent(true); // Show success message
          setFormData({ name: "", email: "", phone: "", message: "" }); // Clear the form
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <div>
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Contact Us</h1>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt; <span>About Us</span>
          </nav>
        </div>
      </section>

      {/* Contact info Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div className="contact-info-card">
            <FaPhoneAlt className="contact-icon" />
            <div className="contact-details">
              <h3>Mobile Number</h3>
              <p>+91 9205 370 640</p>
            </div>
          </div>
          <div className="contact-info-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div className="contact-details">
              <h3>Location</h3>
              <p>
              H no. - 115 pocket 7 ground floor Rohini sector 2 delhi, 
              <br />         near Gopal ji chole bhature, New Delhi, Delhi 110085
              </p>
            </div>
          </div>
          <div className="contact-info-card">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <h3>Email</h3>
              <p>info@advitiyalearningcenter.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="contact-form-section">
        <div className="contact-timings">
          <h2>School Timings</h2>
          <div className="timing-details">
            <h3>School Hours</h3>
            <p>
              <FaClock className="icon" /> Monday to Saturday 9:00 am – 9:00 pm
            </p>
          </div>
          <div className="timing-details">
            <h3>Leave Day</h3>
            <p>
              <FaRegCalendar className="icon" /> Sunday
            </p>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
          {isSent && <p className="success-message">Message sent successfully!</p>}
        </form>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.6437887858183!2d77.09917227550328!3d28.700300375627787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03fda410a1a9%3A0x48fd378ee935ba0d!2sAdvitiya%20Rehabilitation%20And%20Learning%20Center!5e0!3m2!1sen!2sin!4v1725016539253!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;