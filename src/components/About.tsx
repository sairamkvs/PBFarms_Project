import React from 'react';
import { Leaf, Truck, Heart } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';

const AboutCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-green-800 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const About: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-green-600" />,
      title: "Organic Farming",
      description: "We cultivate healthy crops without the use of harmful chemicals, ensuring quality food for all."
    },
    {
      icon: <Truck className="h-8 w-8 text-green-600" />,
      title: "Farm-to-Table",
      description: "Our produce is delivered directly to your doorstep, connecting you with fresh and local food."
    },
    {
      icon: <Heart className="h-8 w-8 text-green-600" />,
      title: "Sustainability",
      description: "We believe in sustainable practices that promote the health of our planet and community well-being."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Us" subtitle="Our Mission & Values" />
        
        <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
          <div>
            <h3 className="text-2xl font-semibold text-green-800 mb-4">Welcome to Prakruti Bhagyam Farms</h3>
            <p className="text-gray-600 mb-4">
              At Prakruti Bhagyam Farms, we believe in the power of sustainable agriculture to transform our relationship 
              with food and the earth. Our journey began with a simple vision: to grow nutritious food in harmony with nature.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we're proud to offer you the freshest organic produce, grown with care in our farms. 
              Every vegetable, fruit, and herb represents our commitment to health, sustainability, and community.
            </p>
            
            <div className="flex items-center">
              <div className="bg-green-100 h-1 flex-grow"></div>
              <p className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">Est. 2018</p>
              <div className="bg-green-100 h-1 flex-grow"></div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Organic farm fields" 
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-md hidden md:block">
              <p className="text-green-800 font-semibold">100% Organic</p>
              <p className="text-gray-600 text-sm">Certified Natural Products</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {values.map((value, index) => (
            <AboutCard 
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;