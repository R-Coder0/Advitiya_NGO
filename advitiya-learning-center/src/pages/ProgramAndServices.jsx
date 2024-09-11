import { Link } from "react-router-dom";
import "../styles/Service.css"; // Ensure this file contains the styles
import {
  FaChalkboardTeacher,
  FaBrain,
  FaLanguage,
  FaHandsHelping,
  FaHeart,
  FaSchool,
  FaChild,
  FaPalette,
  FaLightbulb,
  FaLaptop,
  FaMusic,
  FaTools,
  FaMousePointer,
  FaLifeRing,
  FaHome,
  FaPaintBrush,
  FaTshirt,
  FaGift,
  FaArtstation,
  FaDesktop,
  FaBookOpen,
} from "react-icons/fa";
import { useState } from "react";
import EnquiryModal from "../components/EnquiryModal"; 
import image from '../assets/profile.jpg'
const ServicesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [isVocationalModalOpen, setIsVocationalModalOpen] = useState(false);
  const [selectedVocationalService, setSelectedVocationalService] = useState(
    null
  );

  const services = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Special Education/ Remedial classes",
      description: "Tailored education programs to support learning needs.",
    },
    {
      icon: <FaBrain />,
      title: "ABA / Behaviour Modification classes",
      description: "Classes aimed at modifying behavioral challenges.",
    },
    {
      icon: <FaLanguage />,
      title: "Speech and Language Therapy",
      description: "Therapies to enhance communication skills.",
    },
    {
      icon: <FaHandsHelping />,
      title: "Occupational /Physical Therapy",
      description: "Therapies for physical and occupational development.",
    },
    {
      icon: <FaHeart />,
      title: "Counselling",
      description: "Mental health and emotional support sessions.",
    },
    {
      icon: <FaSchool />,
      title: "NIOS classes",
      description: "National Institute of Open Schooling classes.",
    },
    {
      icon: <FaChild />,
      title: "Educational and Psychological testing/assessment",
      description:
        "Testing services for educational and psychological assessment.",
    },
    {
      icon: <FaPalette />,
      title: "Beyond academics/co-curricular activities",
      description: "Dance, Music, Sports, Art and Craft, Yoga, Cooking etc.",
    },
    {
      icon: <FaLightbulb />,
      title: "Early Intervention",
      description: "Programs designed for early childhood support.",
    },
    {
      icon: <FaLaptop />,
      title: "Digital tools learning",
      description: "Learning sessions for digital tools and technology.",
    },
    {
      icon: <FaLifeRing />,
      title: "ADL & Soft skills",
      description: "Training for activities of daily living and soft skills.",
    },
    {
      icon: <FaMusic />,
      title: "Music & Dance therapy",
      description: "Therapeutic use of music and dance for development.",
    },
    {
      icon: <FaTools />,
      title: "Vocational training",
      description:
        "Includes courses on Mandala art, Lipan art, hand printing, resin art, and more.",
    },
    {
      icon: <FaMousePointer />,
      title: "Computer training",
      description: "Training on computer skills and software applications.",
    },
    {
      icon: <FaLifeRing />,
      title: "Activity of daily living",
      description: "Programs focused on improving daily living skills.",
    },
  ];

  const vocationalServices = [
    {
      icon: <FaPaintBrush className="vocational-icon" />,
      title: 'Mandala Art on Mugs',
      description: 'Learn creative art techniques for decorating mugs with beautiful mandalas.',
      longDescription: 'Dive deeper into the world of Mandala art and learn how to intricately design unique patterns on mugs using various tools and colors. This course will teach you patience, precision, and the joy of creating something truly personal and artistic.',
      image: image, // Replace with actual image path
    },
    {
      icon: <FaArtstation className="vocational-icon" />,
      title: 'Lipan Art',
      description: 'Explore traditional Lipan art techniques for creating unique designs.',
      longDescription: 'Discover the heritage of Lipan art, a traditional Indian craft involving intricate patterns made with clay and mirrors. This course will guide you through every step, helping you master the techniques to create stunning pieces of Lipan art.',
      image: image, // Replace with actual image path
    },
    {
      icon: <FaTshirt className="vocational-icon" />,
      title: 'Hand Printing on T-shirts',
      description: 'Master the art of hand printing to create custom designs on T-shirts.',
      longDescription: 'This course offers hands-on experience in hand printing, allowing you to design and print your custom T-shirts. Learn about different printing techniques, color choices, and how to turn your creative ideas into wearable art.',
      image: image, // Replace with actual image path
    },
    {
      icon: <FaGift className="vocational-icon" />,
      title: 'Making Gift and Decorative Items',
      description: 'Craft decorative and gift items tailored for various festivals and occasions.',
      longDescription: 'From festive decorations to unique gift items, this course teaches you how to craft beautiful and thoughtful creations. Learn techniques that blend traditional crafts with modern aesthetics, perfect for any celebration.',
      image: image, // Replace with actual image path
    },
    {
      icon: <FaArtstation className="vocational-icon" />,
      title: 'Resin Art',
      description: 'Discover the art of resin to make stunning and creative pieces of art.',
      longDescription: 'Resin art is a fascinating and contemporary art form. In this course, you will learn how to create stunning resin art pieces, including coasters, jewelry, and home décor items. Explore color mixing, pouring techniques, and finishing touches.',
      image: image, // Replace with actual image path
    },
    {
      icon: <FaBookOpen className="vocational-icon" />,
      title: 'Course on Library Science',
      description: 'Gain knowledge in library science to organize and manage library resources.',
      longDescription: 'This course covers the essentials of library science, including cataloging, management, and digital libraries. It’s ideal for those looking to work in library settings or enhance their organizational skills for any collection of resources.',
      image: image, // Replace with actual image path
    },
    {
      icon: <FaDesktop className="vocational-icon" />,
      title: 'Course on Computer Software and Applications',
      description: 'Learn essential software and computer applications skills for the modern workplace.',
      longDescription: 'Aimed at those wanting to upskill in the digital world, this course covers key software applications like Microsoft Office, basic programming, and other essential digital skills needed in today’s tech-driven workplace.',
      image: image, // Replace with actual image path
    },
  ];

  const openEnquiryModal = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const closeEnquiryModal = () => {
    setSelectedService("");
    setShowModal(false);
  };

  const openVocationalModal = (service) => {
    setSelectedVocationalService(service);
    setIsVocationalModalOpen(true);
  };

  const closeVocationalModal = () => {
    setSelectedVocationalService(null);
    setIsVocationalModalOpen(false);
  };

  return (
    <div>
      {/* hero */}
      <section className="services-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Services</h1>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> 
            <Link to="/">Home</Link> &gt; <span>Services</span>
          </nav>
        </div>
      </section>

      {/* Services */}
      <section className="services-page">
        <div className="services-header">
          <h1>Our Services</h1>
          <p>Explore the wide range of services we offer to support differently-abled individuals.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="enquiry-button" onClick={() => openEnquiryModal(service.title)}>Enquire Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Vocational Training Section */}
      <section className="vocational-training-section">
        <h2 className="section-title">Vocational Training</h2>
        <ul className="vocational-list">
          {vocationalServices.map((service, index) => (
            <li key={index} className="vocational-item">
              {service.icon}
              <h3 className="vocational-item-title">{service.title}</h3>
              <p className="vocational-item-description">{service.description}</p>
              <button className="service-know-more-btn" onClick={() => openVocationalModal(service)}>Know More</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Enquiry Modal */}
      <EnquiryModal showModal={showModal} closeModal={closeEnquiryModal} service={selectedService} />

      {/* Vocational Modal */}
      {isVocationalModalOpen && selectedVocationalService && (
        <div className="modal-overlay" onClick={closeVocationalModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeVocationalModal}>&times;</button>
            <img src={selectedVocationalService.image} alt={selectedVocationalService.title} className="modal-image" />
            <h3 className="modal-title">{selectedVocationalService.title}</h3>
            <p className="modal-description">{selectedVocationalService.longDescription}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;