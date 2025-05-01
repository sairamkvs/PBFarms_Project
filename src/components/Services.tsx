import React from 'react';
import { Sprout, BookOpen, MapPin } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-green-600">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Sprout className="h-10 w-10" />,
      title: "Crop Cultivation",
      description: "We specialize in growing organic crops using eco-friendly methods that prioritize soil health and biodiversity, resulting in nutritious and flavorful produce."
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Consultation",
      description: "Get expert advice on sustainable farming practices from our team of specialists. We offer guidance on crop selection, soil management, and organic pest control."
    },
    {
      icon: <MapPin className="h-10 w-10" />,
      title: "Farm Tours",
      description: "Take a guided tour of our farm to see sustainable farming in action. Learn about our methods, interact with our team, and connect with where your food comes from."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Services" 
          subtitle="What We Offer"
        />
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 rounded-lg p-8 shadow-inner">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-semibold text-green-800 mb-4">
                Looking for Custom Farming Solutions?
              </h3>
              <p className="text-gray-700 mb-4">
                Beyond our core services, we also offer customized solutions to meet your specific needs. 
                Whether you're a restaurant owner seeking a reliable supplier of organic produce, 
                a homeowner wanting to establish a kitchen garden, or an institution looking for 
                educational farm visits, we've got you covered.
              </p>
              <p className="text-gray-700">
                Contact us today to discuss how we can assist you with your sustainable farming needs.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <button 
                className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full font-medium transition duration-300 shadow-md"
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;