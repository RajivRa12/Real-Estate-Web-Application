import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProperties } from '@/hooks/useProperties';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Properties = () => {
  const [searchParams] = useSearchParams();
  const { properties, loading, error } = useProperties();
  const [filter, setFilter] = useState(searchParams.get('type') || 'all');

  const filteredProperties = properties;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[400px] rounded-[34px] mx-4 my-8 overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/6b01e6b366b44cfe6c59890c372b7ae56ee832f0?width=2668"
          alt="Featured Properties"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold text-center mb-4">
            Featured Properties For Sale
          </h1>
          <p className="text-xl text-center mb-8 text-gray-200">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-[46px] p-6 shadow-2xl w-full max-w-5xl">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-600 bg-white">
                  <option>For Buying</option>
                  <option>For Rent</option>
                </select>
              </div>

              <div className="flex-1">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-600 bg-white">
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>

              <div className="flex-1">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-600 bg-white">
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Singapore</option>
                </select>
              </div>

              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold">
                Find Property
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-blue-800">Featured Property</h2>
            <Button variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50">
              See 268 New Projects →
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {filteredProperties.slice(0, 2).map((property) => (
                <div key={property.id} className="bg-white rounded-3xl overflow-hidden shadow-lg">
                  <div className="h-80 relative">
                    <img 
                      src={property.image} 
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                    <button className="absolute top-4 right-4 bg-blue-800 text-white p-2 rounded-lg">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.5 7.75C7.5 6.35 7.5 5.65 7.7725 5.115C8.01218 4.64462 8.39462 4.26218 8.865 4.0225C9.4 3.75 10.1 3.75 11.5 3.75H18.5C19.9 3.75 20.6 3.75 21.135 4.0225"/>
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <svg className="w-5 h-5 text-blue-800 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                      </svg>
                      <span className="text-gray-600">{property.city}, {property.state}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
                    <p className="text-gray-600 mb-4">
                      Spacious 3BHK apartment in a prime location with modern amenities.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold">$450,000</span>
                      <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full">
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Newsletter Section */}
          <section className="py-16 px-4 bg-blue-800 bg-opacity-80 text-white rounded-3xl">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-6">Get in Touch with Us</h2>
              <p className="text-3xl mb-12">
                Subscribe now for exclusive property insights and deals!
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
                <input 
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full text-lg text-gray-800 bg-gray-200"
                />
                <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full text-lg">
                  Submit
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-800 bg-opacity-80 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.4931 29.8952H25.7466V32H17.4087V17.2662H11.1552V32H2.8173V14.5529L1.46565 15.9013L0 14.4214L14.2819 0L28.5639 14.4214L27.0982 15.9013L25.7466 14.5529V17.2662H23.6621V12.4481L14.2819 2.95992L4.90178 12.4481V29.8952H9.07074V15.1614H19.4931V29.8952ZM32 19.371V32H29.9155V27.7903H21.5776V19.371H32ZM29.9155 21.4758H23.6621V25.6855H29.9155V21.4758Z" fill="#D9D9D9"/>
              </svg>
              <span className="text-2xl font-bold text-gray-300">PropBot</span>
            </div>
            
            <div className="flex items-center space-x-8 mb-4 md:mb-0">
              <span className="text-white">For Sale</span>
              <span className="text-white">Rentals</span>
              <span className="text-white">New Projects</span>
              <span className="text-white">Property News</span>
            </div>
            
            <div className="text-white">
              @2025 Propbot. All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Properties;
