import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import HowItWorksSection from './HowItWorksSection';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Templates from './pages/Templates';
import Login from './pages/Login';
import Signup from './pages/Signup';

const HomePage = () => (
  <>
    <HeroSection />
    <FeaturesSection />
    <HowItWorksSection />
  </>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
      <Footer />
    </div>
  );
};

export default LandingPage;