import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/HomePage';
import ProgramsAndServices from './pages/ProgramAndServices';
import Donation from './pages/Donation';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SideButton from './components/SideButton'
import FloatingButtons from './components/FloatingButton';
import ScrollToTop from './components/ScrollTop';
import PageTransition from './components/PageTransition';

function App() {
  return (
    <Router>
      <PageTransition/>
      <ScrollToTop/>
      <Navbar/>
      <FloatingButtons/>
      <SideButton/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ProgramsAndServices />} />
        <Route path="/donate" element={<Donation />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
