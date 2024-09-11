import { Link } from "react-router-dom";
import "../styles/AboutUs.css"; // Ensure this file contains the styles
import aboutImage1 from "../assets/aboutsection.jpg"; // Replace with your image path
import aboutImage2 from "../assets/aboutsection.jpg"; // Replace with your image path
import { FaEye, FaHome } from "react-icons/fa";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";

const AboutHeroSection = () => {
  const [count, setCount] = useState(0);

  // Counter animation effect
  useEffect(() => {
    let start = 0;
    const end = 60; // Final number you want to count to
    const speed = 50; // Lower is faster

    const step = () => {
      start += Math.ceil(end / speed);
      if (start >= end) {
        setCount(end);
      } else {
        setCount(start);
        requestAnimationFrame(step);
      }
    };

    step();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Us</h1>
          <nav className="breadcrumb">
            <FaHome className="breadcrumb-icon" /> {/* Home icon */}
            <Link to="/">Home</Link> &gt;
             <span>About Us</span>
          </nav>
        </div>
      </section>
      {/* About Us */}
      <section className="about-us-section">
        <div className="about-container">
          <div className="about-images">
            <img
              src={aboutImage1}
              alt="About Us Image 1"
              className="about-img-1"
            />
            <img
              src={aboutImage2}
              alt="About Us Image 2"
              className="about-img-2"
            />
          </div>
          <div className="stats">
            <h2>{count}+</h2> {/* Counter with animation */}
            <p>Students</p>
          </div>
          <div className="about-content">
            <h2>ABOUT US</h2>
            <h3>Advitiya Learning Center</h3>
            <p>
              Advitiya is here with a motto, and that is to set the spirit of
              freedom inherent in every CWSN. Efforts here are made to find the
              latent talents and potential beholder by the differently abled
              children. The special education teachers who have joined their
              hands for Advitiya are not just to provide special education
              services and facilities but also to give a sense of warmth and
              belongingness towards their students.
            </p>
            <p>
              We aim to make our students independent as much as possible so
              that they can lead their life effectively and can carry their
              daily living activities on their own. Various behavioral programs
              and specially designed therapies are being used to make the best
              behavior modifications. Special efforts are made to enhance
              creativity and imaginative skills, encourage language and
              communication skills, and manage behavioral issues.
            </p>
            <div className="vision-section">
              <div className="vision-icon">
                <FaEye size={30} color="var(--primary-color)" />
              </div>
              <div className="vision-content">
                <h3>Vision</h3>
                <p>
                  Each and every child is given remedial education along with
                  regular feedback to their parents or guardians. Advitiya holds
                  transparency for its work, and that is what makes it unique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quotes */}
      <section className="quote-section">
        <div className="quote-overlay">
          <h2>“Every child beholds importance to us”</h2>
          <p>
            In this era of high competition and increased exposure to the
            technology, it’s no more a big deal for the students to keep
            themselves updated for their job opportunities and career pursuits.
            So, to be in this rat race, we need to start our preparation at an
            early stage and thus to prepare its student for the global stage
            Advitiya learning center has started vocational courses, via NIOS,
            at school level.
          </p>
        </div>
      </section>
      {/* Mission */}
      <section className="mission-section">
        <h2 className="mission-title">OUR MISSION</h2>
        <div className="mission-content">
          <ul className="mission-list">
            <li>
              To set the spirit of freedom inherent in every child with special
              needs (CWSN), discovering their hidden talents and potential.
            </li>
            <li>
              To provide individualized education plans that focus on enhancing
              the abilities of differently-abled students through innovative and
              personalized approaches.
            </li>
            <li>
              To create a warm and inclusive environment where students feel a
              sense of belonging and are motivated to achieve their fullest
              potential.
            </li>
            <li>
              To empower students to become as independent as possible, enabling
              them to perform daily living activities on their own.
            </li>
          </ul>
          <ul className="mission-list">
            <li>
              To offer specially designed therapies and behavioral programs that
              support behavior modification, enhancing creativity, language,
              communication, and managing behavioral issues.
            </li>
            <li>
              To provide remedial education tailored to individual needs,
              accompanied by regular feedback to parents or guardians, ensuring
              transparency and active involvement.
            </li>
            <li>
              To equip students with vocational skills at the school level
              through courses offered via NIOS, preparing them for future job
              opportunities and career pursuits.
            </li>
            <li>
              To foster an inclusive community by promoting awareness and
              advocacy for the rights of differently-abled individuals within
              society.
            </li>
          </ul>
        </div>
      </section>
      {/* Leadership */}
      <section className="leadership-section">
        {/* Description Card */}
        <div className="leadership-description">
          <img src={logo} alt="School Logo" className="description-logo" />
          <p className="description-text">
            The school logo reflects the quintessence and values that the school
            upholds. The dove soaring high typifies the students to elevate
            themselves to lofty heights and not to look down even when there is
            turbulence, which will automatically force them to excel. The
            symbolic representation of Christ School Bengaluru, in the form of a
            lamp, signifies the enlightenment of mind and intellect. The
            triangle represents perfection and the source of unlimited
            potential. The circle symbolizes wholeness and oneness. The circles
            enclosing the triangle epitomize a means of warding off negativity
            and generating positivism and protection. The rays emitting out of
            the triangle are the core values that one has to attain with all
            earnestness, sincerity, and endeavor to radiate this light to every
            corner of the world.
          </p>
        </div>

        {/* Leadership Title */}
        <h2 className="leadership-title">LEADERSHIP</h2>

        {/* Leaders Section */}
        <div className="leaders-container">
          <div className="leader-card">
            <img src={profile} alt="Leader 1" className="leader-image" />
            <h3 className="leader-name">Leader Name 1</h3>
          </div>
          <div className="leader-card">
            <img src={profile} alt="Leader 2" className="leader-image" />
            <h3 className="leader-name">Leader Name 2</h3>
          </div>
          {/* Add more leader cards as needed */}
        </div>
      </section>
    </div>
  );
};

export default AboutHeroSection;
