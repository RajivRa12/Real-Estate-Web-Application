import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useProperties, useFeaturedProperties } from '@/hooks/useProperties';
import Navigation from '@/components/Navigation';
import APITest from '@/components/APITest';

const Homepage = () => {
  const { properties, loading, error } = useProperties();
  const { properties: featuredProperties } = useFeaturedProperties(2);

  // Get random sample of properties for different sections
  const saleProperties = properties.slice(2, 6);
  const rentProperties = properties.slice(6, 10);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* API Test Section - Remove this after testing */}
      <section className="py-8 px-4">
        <APITest />
      </section>
      
      {/* Hero Section */}
      <section className="relative h-[600px] rounded-[34px] mx-4 my-8 overflow-hidden">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/55f2474ee4286a6dbb0f5a8a19ca556d29b404c1?width=2668"
          alt="Dream Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl font-bold text-center mb-4">
            Find Your Dream Home in One Click!
          </h1>
          <p className="text-xl text-center mb-8 text-gray-200">
            Discover, Buy, or Rent Verified Properties with Ease.
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-[46px] p-6 shadow-2xl w-full max-w-5xl">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              {/* Search Location */}
              <div className="flex-1 relative">
                <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-3">
                  <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <input 
                    type="text" 
                    placeholder="Search Location..." 
                    className="flex-1 text-gray-600 placeholder-gray-400 bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="flex-1">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-600 bg-white">
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </div>

              {/* Property Category */}
              <div className="flex-1">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-600 bg-white">
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                </select>
              </div>

              {/* Location */}
              <div className="flex-1">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-full text-gray-600 bg-white">
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Singapore</option>
                </select>
              </div>

              {/* Search Button */}
              <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-full font-semibold">
                Find Property
              </Button>
            </div>
          </div>

          {/* List Your Property Button */}
          <div className="mt-6">
            <Button variant="outline" className="border-2 border-blue-800 text-blue-800 hover:bg-blue-50 px-6 py-3 rounded-full">
              List Your Property
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">What We Do?</h2>
          <p className="text-xl text-gray-600 mb-12">
            Helping you find, buy, and rent the perfect property with ease.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service Card 1 - Buy & Sell Properties */}
            <div className="bg-gray-100 rounded-xl p-8 text-center relative">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 40 40">
                  <path d="M20 0L0 10V15L20 25L40 15V10L20 0ZM20 30L0 20V25L20 35L40 25V20L20 30Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Buy & Sell Properties</h3>
              <p className="text-sm text-gray-600">
                Find verified homes for sale or list your property with ease.
              </p>
            </div>

            {/* Service Card 2 - Find Rental Homes (Highlighted) */}
            <div className="bg-white rounded-xl p-8 text-center shadow-lg relative">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 40 40">
                  <path d="M21.1168 22.7833C20.3335 23.55 19.3835 24.1667 18.3335 24.55V38.3333H13.3335V35H8.3335V30H13.3335V24.5333C10.4335 23.5 8.3335 20.7667 8.3335 17.5C8.3335 13.3333 11.6668 10 15.8335 10H16.0002C15.2168 11.5833 14.8668 13.3333 15.0502 15.1333C14.0668 15.4667 13.3335 16.4 13.3335 17.5C13.3335 18.8833 14.4502 20 15.8335 20C16.2168 20 16.5835 19.9 16.9168 19.75C17.9835 21.15 19.4502 22.2 21.1168 22.7833ZM34.5502 32.4L29.9502 34.3333L28.6502 31.2667L24.0502 33.2167L22.1002 28.6L26.7168 26.6667L24.6002 21.6667C21.5168 21.8 18.5168 20.0833 17.2502 17.0833C15.6502 13.2667 17.4502 8.86666 21.2668 7.25C21.6668 7.08333 22.1002 6.96666 22.5002 6.86666C21.4002 4.78333 19.1668 3.33333 16.6668 3.33333C12.9835 3.33333 10.0002 6.31666 10.0002 10V10.4C9.50016 10.8333 9.00016 11.3667 8.5835 11.9167C8.4335 11.3 8.3335 10.6667 8.3335 10C8.3335 5.4 12.0668 1.66666 16.6668 1.66666C21.2668 1.66666 25.0002 5.4 25.0002 10C25.0002 12.3667 24.0002 14.45 22.4168 15.95C23.1168 16.6667 24.1668 16.8833 25.1335 16.4667C26.4168 15.9333 27.0002 14.4667 26.4668 13.2C26.4109 13.0448 26.3323 12.8988 26.2335 12.7667C26.5002 11.8833 26.6668 10.9667 26.6668 10C26.6668 8.95 26.5002 7.93333 26.2002 6.98333C28.3335 7.58333 30.1668 9.06666 31.0835 11.2667C32.3502 14.2667 31.4835 17.6167 29.1668 19.6833L34.5502 32.4Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Find Rental Homes</h3>
              <p className="text-sm text-gray-600">
                Browse through thousands of rental options suited to your needs
              </p>
            </div>

            {/* Service Card 3 - Smart AI Property Search */}
            <div className="bg-gray-100 rounded-xl p-8 text-center relative">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 40 40">
                  <path d="M31.7832 20.0167C32.0002 20.0473 32.209 20.1205 32.3977 20.2319C32.5864 20.3434 32.7513 20.4909 32.8828 20.6662C33.0144 20.8414 33.1102 21.0409 33.1646 21.2532C33.219 21.4655 33.231 21.6864 33.1999 21.9033C32.7821 24.7934 31.4276 27.4665 29.3443 29.5126C27.2609 31.5586 24.5637 32.8646 21.6666 33.23V35C21.6666 35.442 21.491 35.8659 21.1784 36.1785C20.8658 36.4911 20.4419 36.6667 19.9999 36.6667C19.5579 36.6667 19.1339 36.4911 18.8214 36.1785C18.5088 35.8659 18.3332 35.442 18.3332 35V33.23C15.4365 32.864 12.7398 31.5578 10.6568 29.5118C8.57383 27.4658 7.2195 24.793 6.80156 21.9033C6.73879 21.4657 6.85244 21.0211 7.11749 20.6673C7.38254 20.3135 7.77729 20.0794 8.21489 20.0167C8.6525 19.9539 9.09712 20.0675 9.45094 20.3326C9.80476 20.5976 10.0388 20.9924 10.1016 21.43C10.4463 23.8093 11.6365 25.9849 13.4542 27.5583C15.272 29.1317 17.5957 29.9977 19.9999 29.9977C22.404 29.9977 24.7278 29.1317 26.5455 27.5583C28.3633 25.9849 29.5535 23.8093 29.8982 21.43C29.9293 21.2133 30.0027 21.0049 30.1143 20.8165C30.226 20.6282 30.3736 20.4638 30.5488 20.3325C30.724 20.2013 30.9233 20.1058 31.1354 20.0516C31.3475 19.9974 31.5665 19.9856 31.7832 20.0167ZM19.9999 3.33333C21.3649 3.33333 22.6532 3.66166 23.7899 4.24333C23.0355 4.77399 22.4425 5.50298 22.0767 6.34969C21.7108 7.19639 21.5863 8.12779 21.7169 9.04087C21.8474 9.95395 22.2281 10.8131 22.8166 11.5233C23.4051 12.2335 24.1786 12.7671 25.0516 13.065L25.6816 13.2817C25.9223 13.3638 26.141 13.4999 26.3209 13.6796C26.5009 13.8593 26.6374 14.0778 26.7199 14.3183L26.9349 14.9483C27.2182 15.7817 27.7082 16.5017 28.3332 17.06V20C28.3332 22.2101 27.4553 24.3298 25.8925 25.8926C24.3296 27.4554 22.21 28.3333 19.9999 28.3333C17.7898 28.3333 15.6701 27.4554 14.1073 25.8926C12.5445 24.3298 11.6666 22.2101 11.6666 20V11.6667C11.6666 9.45653 12.5445 7.33691 14.1073 5.77411C15.6701 4.2113 17.7898 3.33333 19.9999 3.33333Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Smart AI Property Search</h3>
              <p className="text-sm text-gray-600">
                Get instant recommendations based on your budget & location
              </p>
            </div>

            {/* Service Card 4 - Safe & Secure Transactions */}
            <div className="bg-gray-100 rounded-xl p-8 text-center relative">
              <div className="w-20 h-20 bg-gray-300 rounded-full mx-auto mb-6 relative">
                <svg className="w-10 h-10 text-blue-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" fill="currentColor" viewBox="0 0 40 40">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12.1766 12.93L12.7483 18.0767L11.5916 18.1683C10.8074 18.2308 10.0668 18.5544 9.48824 19.0874C8.90964 19.6203 8.52645 20.3319 8.39994 21.1083C7.79605 24.7893 7.79605 28.544 8.39994 32.225C8.52611 33.0017 8.90915 33.7137 9.48778 34.247C10.0664 34.7803 10.8072 35.1041 11.5916 35.1667L14.0849 35.3667C18.0216 35.68 21.9783 35.68 25.9149 35.3667L28.4083 35.1667C29.1924 35.1042 29.933 34.7806 30.5116 34.2476C31.0902 33.7147 31.4734 33.0031 31.5999 32.2267C32.2038 28.5457 32.2038 24.791 31.5999 21.11C31.4734 20.3336 31.0902 19.622 30.5116 19.089C29.933 18.556 29.1924 18.2325 28.4083 18.17L27.2516 18.0783L27.8233 12.9317C27.8899 12.3228 27.8899 11.7144 27.8233 11.1067L27.7849 10.765C27.5712 8.8498 26.659 7.0806 25.2227 5.79573C23.7865 4.51086 21.927 3.80051 19.9999 3.80051C18.0728 3.80051 16.2134 4.51086 14.7771 5.79573C13.3409 7.0806 12.4287 8.8498 12.2149 10.765L12.1766 11.1067C12.1098 11.7132 12.1098 12.3252 12.1766 12.9317M20.6233 6.33333C19.9249 6.25123 19.2173 6.30802 18.541 6.50045C17.8647 6.69287 17.2331 7.01713 16.6826 7.45457C16.1321 7.892 15.6735 8.43397 15.3332 9.0493C14.993 9.66463 14.7777 10.3412 14.6999 11.04L14.6616 11.3817C14.6151 11.8048 14.6151 12.2318 14.6616 12.655L15.2433 17.8867C18.4099 17.6833 21.5883 17.6833 24.7566 17.8867L25.3383 12.6533C25.3846 12.2307 25.3846 11.8043 25.3383 11.3817L25.2999 11.04C25.167 9.84227 24.6323 8.72486 23.7831 7.86986C22.9338 7.01487 21.8201 6.47435 20.6233 6.33333ZM19.9999 24.1667C19.3369 24.1667 18.701 24.4301 18.2322 24.8989C17.7633 25.3677 17.4999 26.0036 17.4999 26.6667C17.4999 27.3297 17.7633 27.9656 18.2322 28.4344C18.701 28.9033 19.3369 29.1667 19.9999 29.1667C20.663 29.1667 21.2989 28.9033 21.7677 28.4344C22.2365 27.9656 22.4999 27.3297 22.4999 26.6667C22.4999 26.0036 22.2365 25.3677 21.7677 24.8989C21.2989 24.4301 20.663 24.1667 19.9999 24.1667Z"/>
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Safe & Secure Transactions</h3>
              <p className="text-sm text-gray-600">
                Verified listings & secure deals to ensure a smooth experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 px-4 bg-gray-50">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProperties.map((property) => (
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
        </div>
      </section>

      {/* Properties For Sale Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-800 mb-4">Best Properties Available For Sale</h2>
              <p className="text-xl text-gray-600">
                Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full">
              View More Properties
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {saleProperties.map((property) => (
                <div key={property.id} className="bg-gray-100 rounded-xl overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={property.image} 
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        </svg>
                        <span className="text-gray-400 text-sm">{property.city}, {property.state}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                        <span className="text-gray-400 text-sm">4.5/5</span>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-4 text-sm">
                      Spacious 3BHK apartment in a prime location with modern amenities.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button size="sm" className="bg-blue-800 hover:bg-blue-900 text-white rounded-full">
                        Buy Now
                      </Button>
                      <span className="text-xl font-semibold">$450,000</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Properties For Rent Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-4xl font-bold text-blue-800 mb-4">Find The Perfect Rental Home</h2>
              <p className="text-xl text-gray-600">
                Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!
              </p>
            </div>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full">
              View All Rentals
            </Button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading properties...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {rentProperties.map((property) => (
                <div key={property.id} className="bg-gray-100 rounded-xl overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src={property.image} 
                      alt={property.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                        </svg>
                        <span className="text-gray-400 text-sm">{property.city}, {property.state}</span>
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
                        </svg>
                        <span className="text-gray-400 text-sm">4.5/5</span>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-4 text-sm">
                      Spacious 3BHK apartment in a prime location with modern amenities.
                    </p>
                    <div className="flex justify-between items-center">
                      <Button size="sm" className="bg-blue-800 hover:bg-blue-900 text-white rounded-full">
                        Buy Now
                      </Button>
                      <span className="text-lg font-semibold">$1,500/month</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Start Your Journey Today Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Start Your Journey Today!</h2>
          <p className="text-xl text-gray-600 mb-12">
            Create a profile in seconds and find your ideal home.
          </p>

          <div className="flex flex-col md:flex-row gap-4 max-w-5xl">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-600 bg-white shadow-sm"
              />
            </div>
            <div className="flex-1">
              <select className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-600 bg-white shadow-sm">
                <option>Select User Type</option>
                <option>Buyer</option>
                <option>Seller</option>
                <option>Renter</option>
              </select>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter Your Location"
                className="w-full px-6 py-4 border border-gray-300 rounded-lg text-gray-600 bg-white shadow-sm"
              />
            </div>
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold">
              Continue
            </Button>
          </div>
        </div>
      </section>

      {/* We Provide Latest Properties Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/04ab54adfef1ad0312d7cd07d0e3a36be844c03d?width=1020"
                  alt="Modern Architecture"
                  className="w-full h-64 object-cover rounded-lg border-8 border-gray-200"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f33645a3fe6da26dfc1967c23694332cdd9fb769?width=816"
                  alt="Interior Design"
                  className="w-full h-48 object-cover rounded-lg border-8 border-gray-200 mt-16"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-blue-800 text-center">
                We Provide Latest Properties For Our Valuable Clients
              </h2>

              {/* Budget Friendly */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L9 7V9C9 10.1 9.9 11 11 11V17C11 18.1 11.9 19 13 19H15C16.1 19 17 18.1 17 17V11C18.1 11 19 10.1 19 9H21Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">Budget Friendly</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
                  </p>
                </div>
              </div>

              {/* Trusted By Thousand */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10.1V11.1C14.8,12.6 13.4,14.2 12,14.2C10.6,14.2 9.2,12.6 9.2,11.1V10.1C9.2,8.6 10.6,7 12,7Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">Trusted By Thousand</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
                  </p>
                </div>
              </div>

              {/* Prime Location */}
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800 p-3 rounded-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-2">Prime Location</h3>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-blue-800 bg-opacity-80 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Get in Touch with Us</h2>
          <p className="text-3xl mb-12">
            Subscribe now for exclusive property insights and deals!
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <Input 
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
              <Link to="/properties?type=sale" className="text-white hover:text-gray-300">For Sale</Link>
              <Link to="/properties?type=rent" className="text-white hover:text-gray-300">Rentals</Link>
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

export default Homepage;
