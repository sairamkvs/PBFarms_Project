import React from 'react';
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import logo from '/public/LOGO1.jpg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-green-900 text-green-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
            <img 
              src={logo} // Update this path to your logo's location
              alt="PB Farms Logo" 
              className="h-8 w-8 mr-2"
            />
              <span className="text-xl font-bold text-white">
                <span className="text-green-300">PB</span> Farms
              </span>
            </div>
            <p className="text-green-200 mb-6">
              Prakruti Bhagyam Farms: Cultivating organic goodness, delivering fresh produce from farm to table.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-800 p-2 rounded-full hover:bg-green-700 transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  className="text-green-200 hover:text-white transition"
                  onClick={() => scrollToSection('#home')}
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  className="text-green-200 hover:text-white transition"
                  onClick={() => scrollToSection('#about')}
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  className="text-green-200 hover:text-white transition"
                  onClick={() => scrollToSection('#services')}
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  className="text-green-200 hover:text-white transition"
                  onClick={() => scrollToSection('#products')}
                >
                  Products
                </button>
              </li>
              <li>
                <button 
                  className="text-green-200 hover:text-white transition"
                  onClick={() => scrollToSection('#contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-green-200 hover:text-white transition">
                  Crop Cultivation
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition">
                  Consultation
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition">
                  Farm Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition">
                  Organic Certification
                </a>
              </li>
              <li>
                <a href="#" className="text-green-200 hover:text-white transition">
                  Workshops
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic">
              <p className="text-green-200 mb-2">
                Prakruti Bhagyam Farms<br />
                Telangana, India<br />
              </p>
              <p className="text-green-200 mb-2">
                <span className="text-white">Phone:</span> +91 9573601450
              </p>
              <p className="text-green-200">
                <span className="text-white">Email:</span>prakruthibhagyam@gmail.com
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-12 pt-8 text-center">
          <p className="text-green-300">
            &copy; {currentYear} Prakruti Bhagyam Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;