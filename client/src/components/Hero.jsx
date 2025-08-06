
import React from 'react';
import { FaSearch, FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa';

export default function HeroSection() {
  return (
    <>
   <section className="relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white pt-32 pb-24 px-6">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Book <span className="text-blue-200">Anything</span>, <br/>Anywhere
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover and book unique experiences, accommodations, and transportation
          </p>
        </div>

        {/* Advanced Search Bar */}
        <div className="bg-white rounded-xl shadow-2xl p-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Location */}
            <div className="relative col-span-12 md:col-span-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaMapMarkerAlt className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Where to?"
                className="pl-10 w-full h-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>

            {/* Dates */}
            <div className="relative col-span-6 md:col-span-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400" />
              </div>
              <input
                type="date"
                className="pl-10 w-full h-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
              />
            </div>

            {/* Guests */}
            <div className="relative col-span-6 md:col-span-3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUsers className="text-gray-400" />
              </div>
              <select className="pl-10 w-full h-full py-3 px-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 appearance-none">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3+ Guests</option>
              </select>
            </div>

            {/* Search Button */}
            <button className="col-span-12 md:col-span-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md flex items-center justify-center">
              <FaSearch className="mr-2" />
              Search
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {['10,000+ Bookings', 'Verified Hosts', '24/7 Support', 'Best Price Guarantee'].map((item) => (
            <div key={item} className="flex items-center">
              <div className="w-2 h-2 bg-blue-300 rounded-full mr-2"></div>
              <span className="text-blue-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}