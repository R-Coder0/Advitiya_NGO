import "../styles/DonationPage.css"; // Ensure this CSS file contains the styles
import { useState } from "react";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle donation submission logic here (e.g., API call to process the donation)
    alert("Thank you for your donation!");
  };

  return (
    <div className="donation-page">
      {/* Hero Section */}
      <section className="donation-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Support Our Mission</h1>
          <p>
            Your generous donations help us empower differently-abled students
            with the education and support they need to thrive.
          </p>
        </div>
      </section>

      {/* Donation Details Section */}
      <section className="donation-details">
        <div className="container">
          <h2>Why Your Donation Matters</h2>
          <p>
            At Advitiya Learning Center, every donation directly supports our
            mission to provide quality education, therapies, and resources to
            differently-abled students. Your contribution helps us create a more
            inclusive and supportive environment where every student can reach
            their full potential.
          </p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="donation-form-section">
        <div className="container">
          <h2>Make a Donation</h2>
          <form onSubmit={handleSubmit} className="donation-form">
            <div className="form-group">
              <label htmlFor="donationAmount">Donation Amount</label>
              <input
                type="number"
                id="donationAmount"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                placeholder="Enter amount (e.g., 500)"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="donorName">Your Name</label>
              <input
                type="text"
                id="donorName"
                value={donorName}
                onChange={(e) => setDonorName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="donorEmail">Your Email</label>
              <input
                type="email"
                id="donorEmail"
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write a message (optional)"
              ></textarea>
            </div>

            <button type="submit" className="donate-button">
              Donate Now
            </button>
          </form>
        </div>
      </section>

      {/* Impact Section (Optional) */}
      <section className="impact-section">
        <div className="container">
          <h2>Your Impact</h2>
          <p>
            Thanks to your generosity, we’ve been able to provide thousands of
            hours of education, therapies, and support to differently-abled
            students. Every donation helps us change lives and create a more
            inclusive future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
