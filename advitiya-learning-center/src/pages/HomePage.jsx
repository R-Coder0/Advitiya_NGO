import "../styles/HomePage.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import program2Image from "../assets/heroimage.jpg";
import program1Image from "../assets/heroimage.jpg";
import serviceImage from "../assets/heroimage.jpg";
import aboutus from "../assets/aboutsection.jpg";
import EnquiryModal from "../components/EnquiryModal";
const programsData = [
  {
    id: 1,
    title: "Special Education Program",
    shortDescription:
      "Our Special Education Program focuses on individualized learning strategies to support each student's unique needs...",
    fullDescription: `
      <p>At Advitiya Learning Center, we are committed to creating an inclusive and nurturing educational environment through our Special Education Program. We employ a comprehensive approach that integrates multi-sensory techniques and differentiated instruction, ensuring that every student's unique learning needs are met.</p><br>
      <p>Our program modifies reading materials, offers varied assignments, and utilizes flexible grouping strategies to cater to diverse learning styles. We also integrate assistive technology and Universal Design for Learning (UDL) principles, ensuring equitable access to educational content for all students.</p><br>
      <p>To foster a positive learning atmosphere, we implement Positive Behavior Support (PBS) strategies that set clear expectations and routines, while promoting social skills development. Collaborative learning is encouraged through group work, peer tutoring, and cooperative tasks, enhancing engagement and peer interaction.</p><br>
      <p>Individualized Education Programs (IEPs) guide each student's personalized learning path, addressing both academic and emotional needs. Our program emphasizes functional skills training through real-life simulations and project-based learning (PBL), preparing students for practical problem-solving.</p><br>
      <p>Additionally, we offer Functional Communication Training for students with communication challenges and incorporate mindfulness and relaxation techniques to help manage stress and improve focus. By combining adaptive learning technologies with social-emotional learning (SEL) practices, we aim to develop our students' emotional intelligence and interpersonal skills, ensuring a holistic and effective educational experience.</p>`,
    image: program1Image,
  },
  {
    id: 2,
    title: "Therapy and Behavioral Support",
    shortDescription:
      "We offer comprehensive therapy sessions including speech, occupational, and behavioral modification classes...",
    fullDescription: `
      <p>At Advitiya Learning Center, our Therapy and Behavioral Support Program is meticulously designed to enhance the physical, emotional, and social well-being of our students. We provide a range of targeted therapies, including speech therapy to improve communication skills, occupational therapy to assist with daily living activities, and behavioral modification techniques to promote positive behavior.</p><br>
      <p>Each student's therapy plan is uniquely tailored to their specific needs and goals, ensuring a personalized approach that fosters growth and development. Our program also incorporates sensory integration strategies to help students manage sensory processing challenges effectively.</p><br>
      <p>Cognitive-behavioral therapy (CBT) is utilized to address emotional and psychological issues, while our social skills training sessions involve group activities and role-playing exercises to build confidence and improve interpersonal relationships.</p><br>
      <p>We understand the importance of a consistent therapeutic approach, which is why we work closely with families to ensure these strategies are implemented both at school and at home, creating a supportive and comprehensive care network.</p>`,
    image: program2Image,
  },
  {
    id: 3,
    title: "Vocational Training",
    shortDescription:
      "Equip students with practical skills through courses like Mandala Art, Lipan Art, and computer applications...",
    fullDescription: `
      <p>Our Vocational Training Program at Advitiya Learning Center is dedicated to preparing students for future employment and independent living. We offer a diverse array of courses, such as Mandala Art, Lipan Art, and computer applications, aimed at equipping students with practical skills that can be directly applied in real-world settings.</p><br>
      <p>This program is designed to build confidence and independence, teaching students how to perform tasks relevant to their interests and capabilities. Through hands-on training and real-life simulations, students gain the skills needed to excel in the workplace.</p><br>
      <p>Moreover, our program includes job coaching and placement services, assisting students in finding meaningful employment opportunities. We partner with local businesses and organizations to provide internships and job shadowing experiences, allowing students to apply their skills in supportive environments.</p><br>
      <p>By offering a comprehensive approach to vocational training, we empower our students to achieve their full potential and lead fulfilling lives.</p>`,
    image: program2Image,
  },
];
const renderProgramDescription = (description) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

const Homepage = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [showModal, setShowModal] = useState(false); // Add this if it was missing
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const openProgramModal = (program) => {
    setSelectedProgram(program);
    setShowEnquiryForm(false);
    setShowModal(true); // This will open the program modal
  };

  const openEnquiryForm = () => {
    setShowEnquiryForm(true);
  };

  const closeModal = () => {
    setSelectedProgram(null);
    setShowModal(false);
    setShowEnquiryForm(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content fade-in">
          <h1 className="Hero-h1">Empowering Every Unique Ability</h1>
          <p>
            Join Advitiya Learning Center in creating an inclusive world through
            specialized education and support for differently-abled students.
          </p>
          <Link to="/services" className="cta-button">
            Get Involved
          </Link>
        </div>
      </section>
      {/* Programs Section */}
      <section className="programs fade-in">
        <div className="container">
          <h2>Our Programs</h2>
          <p className="program-intro">
            Discover our diverse range of programs designed to support the
            holistic development of our students, helping them succeed in all
            aspects of life.
          </p>
          <div className="program-list">
            {programsData.map((program) => (
              <div key={program.id} className="program-item card">
                <div className="program-img-wrapper">
                  <img src={program.image} alt={program.title} />
                </div>
                <div className="card-content">
                  <h3>{program.title}</h3>
                  <p>{program.shortDescription}</p>
                  <button
                    className="cta-button"
                    onClick={() => openProgramModal(program)}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Full Program Description */}
      {selectedProgram && !showEnquiryForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProgram.title}</h2>
            <img src={selectedProgram.image} alt={selectedProgram.title} />
              <button className="enquiry-button" onClick={openEnquiryForm}>
                Enquire Now
              </button>
            <div
              className="program-description"
              dangerouslySetInnerHTML={{
                __html: selectedProgram.fullDescription,
              }}
            ></div>
          </div>
        </div>
      )}

      {/* Enquiry Form Modal */}
      {selectedProgram && showEnquiryForm && (
        <EnquiryModal
          showModal={showEnquiryForm}
          closeModal={closeModal}
          service={selectedProgram.title}
        />
      )}

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2>Our Services</h2>
          <p>
            Explore our wide range of specialized services tailored to the needs
            of differently-abled students.
          </p>
          <div className="services-container">
            <div className="service-card">
              <img src={serviceImage} alt="Individualized Learning Plans" />
              <div className="service-content">
                <h3 className="service-title">Individualized Learning Plans</h3>
                <p className="service-description">
                  Customized education plans that cater to each student's
                  learning style and pace.
                </p>
                <Link to="/services" className="know-more-btn">
                  Know More
                </Link>
              </div>
            </div>
            <div className="service-card">
              <img src={serviceImage} alt="Therapeutic Services" />
              <div className="service-content">
                <h3 className="service-title">Therapeutic Services</h3>
                <p className="service-description">
                  Comprehensive therapy options including speech, occupational,
                  and physical therapy.
                </p>
                <Link to="/services" className="know-more-btn">
                  Know More
                </Link>
              </div>
            </div>
            <div className="service-card">
              <img src={serviceImage} alt="Counseling and Support" />
              <div className="service-content">
                <h3 className="service-title">Counseling and Support</h3>
                <p className="service-description">
                  Mental health support services for students and their families
                  to foster emotional well-being.
                </p>
                <Link to="/services" className="know-more-btn">
                  Know More
                </Link>
              </div>
            </div>
            <div className="service-card">
              <img src={serviceImage} alt="NIOS Classes" />
              <div className="service-content">
                <h3 className="service-title">NIOS Classes</h3>
                <p className="service-description">
                  Open schooling options through NIOS to help students achieve
                  academic qualifications.
                </p>
                <Link to="/services" className="know-more-btn">
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="home-about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>About Us</h2>
              <p>
                At Advitiya Learning Center, we are dedicated to enhancing the
                lives of differently-abled students through tailored education,
                personalized support, and vocational training. Our mission is to
                empower each student to realize their full potential, fostering
                independence and confidence.
              </p>
              <p>
                Our experienced team of educators, therapists, and specialists
                work collaboratively to design individualized learning plans,
                ensuring that every student receives the attention and resources
                they need to thrive in their academic and personal lives.
              </p>
              <p>
                We are committed to providing a nurturing and inclusive
                environment that encourages growth, creativity, and
                self-expression, positively impacting the lives of our students
                and their families.
              </p>
              <Link to="/about" className="cta-button">
                Learn More
              </Link>
            </div>
            <div className="about-image">
              <img src={aboutus} alt="About Us" />
              <img src={aboutus} alt="About Us" />
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="testimonials-heading">Testimonials</h2>
          <h3 className="testimonials-subheading">What Parents Say</h3>
          <div className="testimonial-list">
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Gaurav Dhaka</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  The best special school with dedicated staff and tailored
                  sessions for children with disabilities.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Yensh Nim</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Exceptional school for special needs children offering
                  therapies for ASD, ADHD, and more.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Yensh Nim</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Exceptional school for special needs children offering
                  therapies for ASD, ADHD, and more.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Yensh Nim</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  Exceptional school for special needs children offering
                  therapies for ASD, ADHD, and more.
                </p>
              </div>
            </div>
            <div className="testimonial-item">
              <div className="testimonial-header">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Profile"
                  className="testimonial-profile"
                />
                <div>
                  <h4 className="testimonial-name">Abhishek Rajput</h4>
                  <p className="testimonial-time">a year ago</p>
                </div>
                <img
                  src="https://via.placeholder.com/20"
                  alt="Google"
                  className="testimonial-google-icon"
                />
              </div>
              <div className="testimonial-content">
                <div className="testimonial-stars">★★★★★</div>
                <p>
                  The support and encouragement my child receives from Advitiya
                  is unmatched. The staff is dedicated and compassionate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
