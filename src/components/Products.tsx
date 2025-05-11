import React, { useState } from 'react';
import SectionTitle from './ui/SectionTitle';

interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  seasonal: boolean;
  price: number;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    // { id: 'vegetables', name: 'Vegetables' },
    // { id: 'fruits', name: 'Fruits' },
    // { id: 'herbs', name: 'Herbs & Greens' },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Urad Dal',
      category: 'pulses',
      image: '/Urad_Dal_Pack.png',
      description: 'High-quality Urad Dal perfect for various Indian dishes.',
      seasonal: false,
      price: 199,
    },
    {
      id: 2,
      name: 'Toor Dal',
      category: 'pulses',
      image: '/Toor_Dal_Pack.png',
      description: 'Premium Toor Dal ideal for making delicious dals and soups.',
      seasonal: false,
      price: 199,
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Our Products" subtitle="Farm Fresh Produce" />

        {/* Category Selection */}
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

        {/* Product Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => {
              const [selectedWeight, setSelectedWeight] = useState(1); // Default to 1kg

              return (
                <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="h-50 overflow-hidden">
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

                    {/* Weight Selection Dropdown */}
                    <div className="mt-4">
                      <label htmlFor={`weight-${product.id}`} className="block text-gray-700 font-medium">Select Weight:</label>
                      <select
                        id={`weight-${product.id}`}
                        className="mt-2 p-2 border rounded w-full"
                        value={selectedWeight}
                        onChange={(e) => setSelectedWeight(Number(e.target.value))}
                      >
                        <option value={1}>1 kg</option>
                        <option value={5}>5 kg</option>
                        <option value={10}>10 kg</option>
                      </select>
                    </div>

                    {/* Total Price Display */}
                    <p className="mt-4 text-lg font-semibold text-green-600">
                      Total: ₹{product.price * selectedWeight}
                    </p>

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
              );
            })
          ) : (
            // If no matching products, display "Coming Soon!"
            <div className="text-center text-gray-600 text-xl font-semibold col-span-2">
              🚀 Coming Soon! Stay tuned for more products. 🚀
            </div>
          )}
        </div>

        {/* Footer Section */}
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