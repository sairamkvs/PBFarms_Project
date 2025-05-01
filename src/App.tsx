import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "PB Farms - Prakruti Bhagyam Farms";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <About />
      <Services />
      <Products />
      <Testimonials />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;