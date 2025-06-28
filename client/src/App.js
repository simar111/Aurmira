import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HomeHero';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <FeaturedProducts />
    </>
  );
}

export default App;
