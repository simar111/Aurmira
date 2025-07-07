// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import HeroSection from './components/HomeHero';
// import ContactUs from './pages/Contact';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import AboutUsPage from './pages/About';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
// import Home from './pages/Home';
// import Shop from './pages/Shop';
// import About from './pages/About';
// import Contact from './pages/Contact';

function App() {
  return (
    
    // <LoginPage />
    <Router>
      <Navbar />
      {/* <HeroSection /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;