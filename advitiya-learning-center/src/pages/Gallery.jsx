import "../styles/Gallery.css";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import clientImage1 from "../assets/profile.jpg";
import clientImage2 from "../assets/profile.jpg";
import clientImage3 from "../assets/profile.jpg";
import clientImage4 from "../assets/profile.jpg";
import clientImage5 from "../assets/profile.jpg";
import clientImage6 from "../assets/profile.jpg";
import clientImage7 from "../assets/profile.jpg";

const receptionImages = [
  { url: clientImage1, alt: "Reception Image 1" },
  { url: clientImage2, alt: "Reception Image 2" },
  { url: clientImage3, alt: "Reception Image 3" },
  { url: clientImage4, alt: "Reception Image 3" },
  { url: clientImage5, alt: "Reception Image 3" },
  { url: clientImage6, alt: "Reception Image 3" },
  { url: clientImage7, alt: "Reception Image 3" },
];

const GallerySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % receptionImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex + receptionImages.length - 1) % receptionImages.length
    );
  };

  return (
    <div>
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h2>Gallery</h2>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt;
            <span>Gallery</span>
          </nav>
        </div>
      </section>

      <section className="gallery-section">
        <h2 style={{fontSize:'2.5rem', marginTop:'10px', marginBottom:'10px'}}>Reception Images</h2>
        <div className="image-grid">
          {receptionImages.map((image, index) => (
            <div
              key={index}
              className="image-card"
              onClick={() => openModal(index)}
            >
              <img src={image.url} alt={image.alt} />
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="gallery-modal-backdrop">
            <div className="gallery-modal-content">
              <button
                onClick={closeModal}
                className="gallery-modal-close-btn"
              >
                ✖
              </button>
              <button
                onClick={prevImage}
                className="gallery-modal-nav-btn prevbtn"
              >
                〈
              </button>
              <img
                src={receptionImages[currentIndex].url}
                alt={receptionImages[currentIndex].alt}
                className="gallery-modal-image"
              />
              <button
                onClick={nextImage}
                className="gallery-modal-nav-btn nextbtn"
              >
                〉
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default GallerySection;
