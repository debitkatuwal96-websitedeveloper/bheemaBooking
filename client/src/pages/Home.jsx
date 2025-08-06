import React from 'react'
import { FaCar, FaBicycle, FaHome, FaBuilding, FaMapMarkedAlt, FaStar, FaHeart } from 'react-icons/fa';
import Hero from '../components/Hero';
import Footer  from '../components/Footer'



export default function Home() {


  const categories = [
    { icon: <FaCar className="text-2xl" />, label: 'Cars', bg: 'bg-blue-100', text: 'text-blue-600' },
    { icon: <FaBicycle className="text-2xl" />, label: 'Bikes', bg: 'bg-purple-100', text: 'text-purple-600' },
    { icon: <FaBuilding className="text-2xl" />, label: 'Flats', bg: 'bg-green-100', text: 'text-green-600' },
    { icon: <FaHome className="text-2xl" />, label: 'Houses', bg: 'bg-orange-100', text: 'text-orange-600' },
    { icon: <FaMapMarkedAlt className="text-2xl" />, label: 'Places', bg: 'bg-red-100', text: 'text-red-600' },
  ];

 const featured = [
    { 
      id: 1, 
      title: 'Modern Flat in NYC', 
      category: 'Flats', 
      img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      price: '$3,200/mo',
      rating: 4.8
    },
    { 
      id: 2, 
      title: 'Luxury Car Rental', 
      category: 'Cars', 
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      price: '$7000/day',
      rating: 4.9
    },
    { 
      id: 3, 
      title: 'Cozy Cottage', 
      category: 'Houses', 
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      price: '$2500/night',
      rating: 4.7
    },
    { 
      id: 4, 
      title: 'Modern Flat in NYC', 
      category: 'Flats', 
      img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      price: '$1,900/mo',
      rating: 4.8
    },
    { 
      id: 5, 
      title: 'Luxury Car Rental', 
      category: 'Cars', 
      img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      price: '$6000/day',
      rating: 4.9
    },
    { 
      id: 6, 
      title: 'Cozy Cottage', 
      category: 'Houses', 
      img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80', 
      price: '$1800/night',
      rating: 4.7
    },
  ];



  return (
    <>
    
     <div className="font-sans">
      {/* Hero Section */}
      <Hero />

      {/* Categories */}
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Browse by Category</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find exactly what you're looking for in our specialized categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`${cat.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 text-center cursor-pointer`}
            >
              <div className={`${cat.text} w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-800">{cat.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Featured Listings */}
      <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Featured Listings</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Curated selection of premium bookings available now
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full text-red-500 hover:bg-red-500 hover:text-white transition">
                  <FaHeart />
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 rounded-full text-sm font-medium flex items-center">
                  <FaStar className="text-yellow-400 mr-1" />
                  {item.rating}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-500">{item.category}</p>
                  </div>
                  <p className="font-bold text-blue-600">{item.price}</p>
                </div>
                <button className="mt-4 w-full py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Reviews Section */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow">
              <p className="italic text-gray-600 mb-4">
                "This platform made booking my trip so much easier. Highly recommended!"
              </p>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="font-semibold">User {idx + 1}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-blue-600">50K+</p>
            <p className="text-gray-500">Bookings</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">10K+</p>
            <p className="text-gray-500">Hosts</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">98%</p>
            <p className="text-gray-500">Satisfaction</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">100+</p>
            <p className="text-gray-500">Cities</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to find your perfect booking?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Join thousands of satisfied users who found exactly what they needed
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition">
            Get Started
          </button>
          <button className="bg-transparent hover:bg-gray-800 border-2 border-gray-700 text-white font-semibold py-3 px-8 rounded-full transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
    </div>

    <Footer />
    
    </>
  )
}
