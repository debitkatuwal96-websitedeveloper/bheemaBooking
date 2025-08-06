import React from 'react';
import { FiUsers, FiTarget, FiEye, FiAward, FiCalendar, FiHome, FiActivity, FiStar, FiBriefcase, FiMap } from 'react-icons/fi';
import { FaCar } from 'react-icons/fa';
import Footer from '../components/Footer'

export default function About() {
  const team = [
    {
      name: 'Jane Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      social: ['twitter', 'linkedin', 'instagram']
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      social: ['twitter', 'github', 'linkedin']
    },
    {
      name: 'Emily Chen',
      role: 'Product Designer',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      social: ['dribbble', 'behance', 'instagram']
    },
  ];

  const milestones = [
    { 
      year: '2020', 
      title: 'Company Founded', 
      text: 'Launched with a vision to revolutionize vehicle bookings',
      icon: <FiAward className="text-2xl text-blue-500" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    { 
      year: '2021', 
      title: 'First Milestone', 
      text: 'Reached 10K users and launched our mobile app',
      icon: <FiUsers className="text-2xl text-blue-500" />,
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    { 
      year: '2023', 
      title: 'Global Expansion', 
      text: 'Successfully expanded services to 5 countries',
      icon: <FiTarget className="text-2xl text-blue-500" />,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
  ];

  const bookingTypes = [
    {
      icon: <FaCar className="text-3xl text-blue-600" />,
      title: "Vehicle Rentals",
      description: "Luxury cars, SUVs, bikes, and scooters for all your travel needs",
      stats: "10,000+ vehicles available",
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FiHome className="text-3xl text-blue-600" />,
      title: "Property Stays",
      description: "Apartments, villas, and unique homes worldwide",
      stats: "5,000+ properties listed",
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FiBriefcase className="text-3xl text-blue-600" />,
      title: "Equipment Hire",
      description: "Professional gear for events, construction, and more",
      stats: "1,200+ equipment options",
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FiActivity className="text-3xl text-blue-600" />,
      title: "Adventure Bookings",
      description: "Bikes, boats, and outdoor adventure equipment",
      stats: "800+ adventure partners",
      image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: <FiMap className="text-3xl text-blue-600" />,
      title: "Experience Packages",
      description: "Curated tours and local experiences",
      stats: "500+ unique experiences",
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const testimonials = [
    {
      quote: "This platform saved me hours of searching for the perfect rental car. The process was seamless!",
      author: "Alex Johnson",
      role: "Frequent Traveler",
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      quote: "As a host, I've doubled my income while meeting amazing people from around the world.",
      author: "Sarah Williams",
      role: "Property Host",
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    },
    {
      quote: "The equipment rental service helped us complete our film project on time and budget.",
      author: "Michael Chen",
      role: "Film Director",
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-32 px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pioneering the future of bookings through innovation and exceptional service
          </p>
        </div>
      </div>

      {/* Booking Types Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Booking Ecosystem</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your rental and booking needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {bookingTypes.map((type, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">{type.title}</h3>
                <p className="text-gray-600 text-center mb-3">{type.description}</p>
                <p className="text-sm text-blue-500 text-center font-medium">{type.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission & Vision with Images */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiTarget className="text-blue-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To redefine rental experiences by providing seamless, affordable access to vehicles, properties, and equipment through cutting-edge technology and unparalleled customer service.
              </p>
            </div>
          </div>
          
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FiEye className="text-blue-600 text-2xl" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become the global leader in flexible rental solutions, transforming how people access vehicles, properties, and equipment through an integrated, user-friendly platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials with Images */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Community Says</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from users and partners who've experienced our platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-600 italic mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Leadership</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              The brilliant minds driving our company forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-xl h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-300 mb-4">{member.role}</p>
                    <div className="flex space-x-3">
                      {member.social.map((platform, i) => (
                        <button key={i} className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
                          <span className="text-white text-sm">{platform[0].toUpperCase()}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section with Images */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Journey</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Key milestones in our company's evolution
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          {milestones.map((milestone, idx) => (
            <div 
              key={idx} 
              className={`relative mb-12 ${idx % 2 === 0 ? 'pr-8 md:pr-0 md:pl-8 text-left md:text-right' : 'pl-8'}`}
            >
              <div className={`bg-white rounded-xl shadow-md relative ${idx % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} overflow-hidden`}>
                <div className="h-48 bg-[url('${milestone.image}')] bg-cover bg-center"></div>
                <div className="p-6">
                  <div className={`absolute top-6 -ml-10 w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center ${idx % 2 === 0 ? 'md:-right-10 md:left-auto' : '-left-10'}`}>
                    {milestone.icon}
                  </div>
                  <div className={`absolute top-8 w-4 h-4 bg-white transform rotate-45 ${idx % 2 === 0 ? '-right-2 md:right-auto md:-left-2' : '-left-2'}`}></div>
                  <div className="flex items-center mb-2">
                    <FiCalendar className="text-blue-500 mr-2" />
                    <span className="text-blue-600 font-medium">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-200">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">5+</div>
              <div className="text-blue-200">Countries</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Satisfaction Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section  */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="relative bg-[url('https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center rounded-xl shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience the Future of Bookings?</h2>
            <p className="text-gray-200 max-w-2xl mx-auto mb-8">
              Join thousands of satisfied users who found exactly what they needed through our platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
                Start Booking Now
              </button>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
         <Footer />
    </div>
  );
}