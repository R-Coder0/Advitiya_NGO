import { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/EnquiryModal.css'; 

// eslint-disable-next-line react/prop-types
const EnquiryModal = ({ showModal, closeModal, service }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;  
    return re.test(String(phone));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setIsSubmitting(true);

    emailjs.send(
      'service_ibi2cvn',      
      'template_mlovkvw',     
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,  
        message: formData.message,
        service: service,
      },
      'J0yF9Ax_2b1kWhrDq'          
    ).then((_response) => {
      setIsSubmitting(false);
      setSuccess('Your enquiry has been sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      
      setTimeout(() => {
        closeModal();
        setSuccess(''); 
      }, 3000);

    }, (_error) => {
      setIsSubmitting(false);
      setError('There was an error sending your enquiry. Please try again later.');
    });
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <h2>Enquire About {service}</h2>
        <form onSubmit={handleSubmit} className="enquiry-form">
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <input
            type="text"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
          ></textarea>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Enquiry'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
