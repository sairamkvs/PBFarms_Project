import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center mt-14"
      style={{
        backgroundImage: 'url("https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 py-16 z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          From Our Farm <br /> 
          <span className="text-green-400">To Your Table</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
          Organic, sustainable farming for a healthier community and planet
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full font-medium transition duration-300 transform hover:scale-105"
            onClick={scrollToAbout}
          >
            Learn More
          </button>
          
          <button 
            className="bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-2 border-white py-3 px-8 rounded-full font-medium transition duration-300"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
      
      <button 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        onClick={scrollToAbout}
        aria-label="Scroll down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;