// import React, { useState } from 'react';
// import { FiSearch, FiFilter, FiDollarSign, FiStar, FiCalendar, FiMapPin } from 'react-icons/fi';
// import Footer from '../components/Footer'


// const listingsData = [
//   {
//     id: 1,
//     type: 'Car',
//     name: 'Toyota Corolla',
//     model: '2022',
//     price: 4500,
//     rating: 4.8,
//     location: 'Downtown',
//     image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 2,
//     type: 'Bike',
//     name: 'Yamaha FZ',
//     model: '2021',
//     price: 2500,
//     rating: 4.5,
//     location: 'City Center',
//     image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 3,
//     type: 'Flat',
//     name: 'Downtown Apartment',
//     model: '2BHK',
//     price: 1200,
//     rating: 4.9,
//     location: 'Financial District',
//     image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 4,
//     type: 'Car',
//     name: 'Honda Civic',
//     model: '2020',
//     price: 5000,
//     rating: 4.7,
//     location: 'Suburbs',
//     image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 5,
//     type: 'Bike',
//     name: 'Royal Enfield',
//     model: '2022',
//     price: 3500,
//     rating: 4.6,
//     location: 'Old Town',
//     image: 'https://images.unsplash.com/photo-1580310617877-88e539a31a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 6,
//     type: 'Flat',
//     name: 'Luxury Penthouse',
//     model: '3BHK',
//     price: 2500,
//     rating: 5.0,
//     location: 'Waterfront',
//     image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//    {
//     id: 7,
//     type: 'Car',
//     name: 'Toyota Corolla',
//     model: '2022',
//     price: 5500,
//     rating: 4.8,
//     location: 'Downtown',
//     image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 8,
//     type: 'Bike',
//     name: 'Yamaha FZ',
//     model: '2021',
//     price: 3500,
//     rating: 4.5,
//     location: 'City Center',
//     image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 9,
//     type: 'Flat',
//     name: 'Downtown Apartment',
//     model: '2BHK',
//     price: 9000,
//     rating: 5.0,
//     location: 'Financial District',
//     image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 10,
//     type: 'Car',
//     name: 'Honda Civic',
//     model: '2020',
//     price: 8000,
//     rating: 4.9,
//     location: 'Suburbs',
//     image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 11,
//     type: 'Bike',
//     name: 'Royal Enfield',
//     model: '2022',
//     price: 3505,
//     rating: 4.2,
//     location: 'Old Town',
//     image: 'https://images.unsplash.com/photo-1580310617877-88e539a31a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
//   {
//     id: 12,
//     type: 'Flat',
//     name: 'Luxury Penthouse',
//     model: '3BHK',
//     price:  6550,
//     rating: 5.0,
//     location: 'Waterfront',
//     image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//   },
// ];

// export default function Booking() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('All');
//   const [maxPrice, setMaxPrice] = useState(10000);
//   const [showFilters, setShowFilters] = useState(false);

//   const filteredListings = listingsData.filter((item) => {
//     const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = category === 'All' || item.type === category;
//     const matchesPrice = item.price <= maxPrice;
//     return matchesSearch && matchesCategory && matchesPrice;
//   });

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section with Search */}
//       <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-6 ">
//         <div className="absolute inset-0 bg-black/30"></div>
//         <div className="relative max-w-6xl mx-auto pt-15">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Booking</h1>
//           <p className="text-xl text-blue-100 mb-8 max-w-2xl">
//             Discover and book premium vehicles, properties, and experiences
//           </p>
          
//           {/* Search Bar */}
//           <div className="bg-white rounded-lg shadow-xl p-4 max-w-4xl">
//             <div className="flex flex-col md:flex-row gap-4">
//               <div className="relative flex-1">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <FiSearch className="text-gray-400" />
//                 </div>
//                 <input
//                   type="text"
//                   placeholder="Search listings..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
//                 />
//               </div>
              
//               <button 
//                 onClick={() => setShowFilters(!showFilters)}
//                 className="flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-black"
//               >
//                 <FiFilter className="mr-2" />
//                 Filters
//               </button>
//             </div>

//             {/* Expanded Filters */}
//             {showFilters && (
//               <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
//                   <select
//                     value={category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
//                   >
//                     <option value="All">All Categories</option>
//                     <option value="Car">Cars</option>
//                     <option value="Bike">Bikes</option>
//                     <option value="Flat">Flats</option>
//                   </select>
//                 </div>
                
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Max Price: ${maxPrice}
//                   </label>
//                   <input
//                     type="range"
//                     min="1000"
//                     max="10000"
//                     step="12"
//                     value={maxPrice}
//                     onChange={(e) => setMaxPrice(e.target.value)}
//                     className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-6 py-12">
//         {/* Results Count */}
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-2xl font-bold text-gray-800">
//             {filteredListings.length} {filteredListings.length === 1 ? 'Result' : 'Results'}
//           </h2>
//           <div className="flex items-center space-x-2">
//             <span className="text-gray-500">Sort by:</span>
//             <select className="border-0 bg-gray-100 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500">
//               <option>Recommended</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Rating</option>
//             </select>
//           </div>
//         </div>

//         {/* Listings Grid */}
//         {filteredListings.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredListings.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="relative">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-56 object-cover"
//                   />
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
//                     <FiStar className="text-yellow-400 mr-1" />
//                     <span className="font-medium">{item.rating}</span>
//                   </div>
//                   <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
//                     ${item.price}/day
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
//                   <p className="text-gray-500 mb-2">{item.model} · {item.type}</p>
                  
//                   <div className="flex items-center text-gray-500 mb-4">
//                     <FiMapPin className="mr-1" />
//                     <span>{item.location}</span>
//                   </div>
                  
//                   <div className="flex space-x-3">
//                     <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition">
//                       Book Now
//                     </button>
//                     <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-100 rounded-lg transition">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16">
//             <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
//               <FiSearch className="text-gray-400 text-3xl" />
//             </div>
//             <h3 className="text-xl font-medium text-gray-700 mb-2">No listings found</h3>
//             <p className="text-gray-500 max-w-md mx-auto">
//               Try adjusting your search or filter criteria to find what you're looking for.
//             </p>
//           </div>
//         )}
//       </div>
//          <Footer />
//     </div>
//   );
// }






import React, { useState } from 'react';
import { FiSearch, FiFilter, FiDollarSign, FiStar, FiCalendar, FiMapPin, FiChevronDown } from 'react-icons/fi';
import Footer from '../components/Footer';
import { useBooking } from '../context/BookingContext';

const listingsData = [
  {
    id: 1,
    type: 'Car',
    name: 'Toyota Corolla',
    model: '2022',
    price: 4500,
    rating: 4.8,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Automatic Transmission', 'Air Conditioning', 'Bluetooth', 'Backup Camera', 'Keyless Entry']
  },
  {
    id: 2,
    type: 'Bike',
    name: 'Yamaha FZ',
    model: '2021',
    price: 2500,
    rating: 4.5,
    location: 'City Center',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Fuel Efficient', 'ABS Brakes', 'Digital Display', 'LED Lighting', 'Comfort Seat']
  },
  {
    id: 3,
    type: 'Flat',
    name: 'Downtown Apartment',
    model: '2BHK',
    price: 1200,
    rating: 4.9,
    location: 'Financial District',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Fully Furnished', 'Swimming Pool', 'Gym', '24/7 Security', 'Parking']
  },
  {
    id: 4,
    type: 'Car',
    name: 'Honda Civic',
    model: '2020',
    price: 5000,
    rating: 4.7,
    location: 'Suburbs',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Sunroof', 'Leather Seats', 'Navigation System', 'Heated Seats', 'Premium Sound']
  },
  {
    id: 5,
    type: 'Bike',
    name: 'Royal Enfield',
    model: '2022',
    price: 3500,
    rating: 4.6,
    location: 'Old Town',
    image: 'https://images.unsplash.com/photo-1580310617877-88e539a31a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Classic Design', 'Powerful Engine', 'Comfortable Ride', 'Retro Style', 'Cruise Control']
  },
  {
    id: 6,
    type: 'Flat',
    name: 'Luxury Penthouse',
    model: '3BHK',
    price: 2500,
    rating: 5.0,
    location: 'Waterfront',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Panoramic Views', 'Smart Home', 'Private Terrace', 'Concierge', 'Luxury Finishes']
  },
  {
    id: 7,
    type: 'Car',
    name: 'Toyota Corolla',
    model: '2022',
    price: 5500,
    rating: 4.8,
    location: 'Downtown',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Hybrid Engine', 'Lane Assist', 'Adaptive Cruise', 'Wireless Charging', 'Premium Package']
  },
  {
    id: 8,
    type: 'Bike',
    name: 'Yamaha FZ',
    model: '2021',
    price: 3500,
    rating: 4.5,
    location: 'City Center',
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Sporty Design', 'Quick Shifter', 'Traction Control', 'LED Headlights', 'Comfortable Ergonomics']
  },
  {
    id: 9,
    type: 'Flat',
    name: 'Downtown Apartment',
    model: '2BHK',
    price: 9000,
    rating: 5.0,
    location: 'Financial District',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['High Floor', 'Floor-to-Ceiling Windows', 'Smart Appliances', 'Soundproofing', 'Walk-in Closet']
  },
  {
    id: 10,
    type: 'Car',
    name: 'Honda Civic',
    model: '2020',
    price: 8000,
    rating: 4.9,
    location: 'Suburbs',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Turbo Engine', 'Sport Mode', 'Paddle Shifters', 'Premium Wheels', 'Sport Suspension']
  },
  {
    id: 11,
    type: 'Bike',
    name: 'Royal Enfield',
    model: '2022',
    price: 3505,
    rating: 4.2,
    location: 'Old Town',
    image: 'https://images.unsplash.com/photo-1580310617877-88e539a31a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Classic Thump', 'Long Seat', 'Chrome Accents', 'Vintage Look', 'Comfortable Ride']
  },
  {
    id: 12,
    type: 'Flat',
    name: 'Luxury Penthouse',
    model: '3BHK',
    price: 6550,
    rating: 5.0,
    location: 'Waterfront',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    features: ['Private Elevator', 'Home Theater', 'Wine Cellar', 'Chef Kitchen', 'Smart Lighting']
  },
];

export default function Booking() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [showFilters, setShowFilters] = useState(false);
  const [showFeatures, setShowFeatures] = useState({});
  const { addBooking } = useBooking();

  const toggleFeatures = (id) => {
    setShowFeatures(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleBookNow = (item) => {
    const bookingItem = {
      id: Date.now(),
      itemId: item.id,
      name: item.name,
      type: item.type,
      model: item.model,
      price: item.price,
      rating: item.rating,
      location: item.location,
      image: item.image,
      features: item.features,
      bookedAt: new Date().toISOString()
    };
    addBooking(bookingItem);
    alert(`${item.name} has been booked and added to your list!`);
  };

  const filteredListings = listingsData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || item.type === category;
    const matchesPrice = item.price <= maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Search */}
      <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-20 px-6 ">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-6xl mx-auto pt-15">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Find Your Perfect Booking</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl">
            Discover and book premium vehicles, properties, and experiences
          </p>
          
          {/* Search Bar */}
          <div className="bg-white rounded-lg shadow-xl p-4 max-w-4xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search listings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                />
              </div>
              
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center justify-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition text-black"
              >
                <FiFilter className="mr-2" />
                Filters
              </button>
            </div>

            {/* Expanded Filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-black"
                  >
                    <option value="All">All Categories</option>
                    <option value="Car">Cars</option>
                    <option value="Bike">Bikes</option>
                    <option value="Flat">Flats</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Max Price: ${maxPrice}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="12"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredListings.length} {filteredListings.length === 1 ? 'Result' : 'Results'}
          </h2>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Sort by:</span>
            <select className="border-0 bg-gray-100 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating</option>
            </select>
          </div>
        </div>

        {/* Listings Grid */}
        {filteredListings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{item.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    ${item.price}/day
                  </div>
                  <button 
                    onClick={() => toggleFeatures(item.id)}
                    className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-medium"
                  >
                    Features <FiChevronDown className={`ml-1 transition-transform ${showFeatures[item.id] ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                
                {/* Features Dropdown */}
                {showFeatures[item.id] && (
                  <div className="bg-gray-50 p-4 border-b">
                    <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {item.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-500 mb-2">{item.model} · {item.type}</p>
                  
                  <div className="flex items-center text-gray-500 mb-4">
                    <FiMapPin className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button 
                      onClick={() => handleBookNow(item)}
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition"
                    >
                      Book Now
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-100 rounded-lg transition">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <FiSearch className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No listings found</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Try adjusting your search or filter criteria to find what you're looking for.
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

