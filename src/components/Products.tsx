import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  seasonal: boolean;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'herbs', name: 'Herbs & Greens' },
  ];
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Vine-ripened, juicy tomatoes grown without synthetic fertilizers or pesticides.',
      seasonal: true
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      category: 'herbs',
      image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Nutrient-rich, dark leafy greens perfect for salads and cooking.',
      seasonal: false
    },
    {
      id: 3,
      name: 'Organic Strawberries',
      category: 'fruits',
      image: 'https://images.pexels.com/photos/46174/strawberries-berries-fruit-freshness-46174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Sweet, juicy strawberries picked at peak ripeness.',
      seasonal: true
    },
    {
      id: 4,
      name: 'Bell Peppers',
      category: 'vegetables',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Colorful, crunchy peppers perfect for salads and cooking.',
      seasonal: false
    },
    {
      id: 5,
      name: 'Fresh Basil',
      category: 'herbs',
      image: 'https://images.pexels.com/photos/5507907/pexels-photo-5507907.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Aromatic herb essential for Italian cuisine and many other dishes.',
      seasonal: false
    },
    {
      id: 6,
      name: 'Organic Apples',
      category: 'fruits',
      image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Crisp and sweet apples grown using sustainable practices.',
      seasonal: true
    }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Our Products" 
          subtitle="Farm Fresh Produce"
        />
        
        <div className="flex justify-center mt-8 mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 bg-white p-2 rounded-lg shadow-sm">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  {product.seasonal && (
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-medium">
                      Seasonal
                    </span>
                  )}
                </div>
                <p className="text-gray-600">{product.description}</p>
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-green-600 font-medium">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </span>
                  <button className="bg-green-100 hover:bg-green-200 text-green-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Our products vary by season to ensure you always get the freshest, highest quality produce.
            Contact us for current availability and pricing.
          </p>
          <button 
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-full font-medium transition duration-300 shadow-md"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Request Product List
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;