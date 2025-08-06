// import React, { useState, useEffect } from 'react';
// import { FiCalendar, FiDollarSign, FiCheckCircle, FiStar, FiMapPin, FiUser, FiCreditCard, FiX, FiChevronDown } from 'react-icons/fi';
// import DatePicker from 'react-datepicker';
// import Footer from '../../components/Footer'
// import 'react-datepicker/dist/react-datepicker.css';

// const BookingCard = ({ listing }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [showPayment, setShowPayment] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);
//   const [showFeatures, setShowFeatures] = useState(false);

//   // Calculate total price when dates change
//   useEffect(() => {
//     if (startDate && endDate) {
//       const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
//       setTotalPrice(days * listing.pricePerDay);
//     } else {
//       setTotalPrice(0);
//     }
//   }, [startDate, endDate, listing.pricePerDay]);

//   const handleBooking = () => {
//     if (totalPrice > 0) {
//       setShowPayment(true);
//     }
//   };

//   const confirmPayment = () => {
//     setBookingConfirmed(true);
//     setShowPayment(false);
//   };

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//       {/* Listing Image with Features */}
//       <div className="relative h-64">
//         <img
//           src={listing.image}
//           alt={listing.title}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//           <h2 className="text-xl font-bold text-white">{listing.title}</h2>
//           <div className="flex items-center text-white/90 mt-1">
//             <FiMapPin className="mr-1" />
//             <span className="text-sm">{listing.location}</span>
//             <span className="mx-2">•</span>
//             <FiStar className="text-yellow-400 mr-1" />
//             <span>{listing.rating}</span>
//           </div>
//         </div>
//         <button 
//           onClick={() => setShowFeatures(!showFeatures)}
//           className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-medium"
//         >
//           Features <FiChevronDown className={`ml-1 transition-transform ${showFeatures ? 'rotate-180' : ''}`} />
//         </button>
//       </div>

//       {/* Features Dropdown */}
//       {showFeatures && (
//         <div className="bg-gray-50 p-4 border-b">
//           <h4 className="font-medium text-gray-800 mb-2">Vehicle Features:</h4>
//           <div className="grid grid-cols-2 gap-2">
//             {listing.features.map((feature, i) => (
//               <div key={i} className="flex items-center text-sm text-gray-600">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Booking Form */}
//       <div className="p-6">
//         {!bookingConfirmed ? (
//           <>
//             {/* Price Display */}
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center text-lg font-semibold">
//                 <FiDollarSign className="text-green-500 mr-1" />
//                 <span>{listing.pricePerDay}</span>
//                 <span className="text-gray-500 text-sm ml-1">/day</span>
//               </div>
//               {totalPrice > 0 && (
//                 <div className="text-lg font-bold">
//                   Total: <span className="text-green-600">${totalPrice}</span>
//                 </div>
//               )}
//             </div>

//             {/* Date Selection */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
//                   <FiCalendar className="mr-2" /> Pickup Date
//                 </label>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   selectsStart
//                   startDate={startDate}
//                   endDate={endDate}
//                   minDate={new Date()}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholderText="Select date"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
//                   <FiCalendar className="mr-2" /> Return Date
//                 </label>
//                 <DatePicker
//                   selected={endDate}
//                   onChange={(date) => setEndDate(date)}
//                   selectsEnd
//                   startDate={startDate}
//                   endDate={endDate}
//                   minDate={startDate || new Date()}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholderText="Select date"
//                 />
//               </div>
//             </div>

//             {/* Payment Modal */}
//             {showPayment && (
//               <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//                 <div className="bg-white rounded-xl max-w-md w-full p-6 animate-fade-in">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold">Complete Your Booking</h3>
//                     <button 
//                       onClick={() => setShowPayment(false)}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <FiX />
//                     </button>
//                   </div>
                  
//                   <div className="mb-6 bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center mb-3">
//                       <img 
//                         src={listing.image} 
//                         alt={listing.title}
//                         className="w-16 h-16 rounded-lg object-cover mr-4"
//                       />
//                       <div>
//                         <h4 className="font-medium">{listing.title}</h4>
//                         <p className="text-sm text-gray-600">{listing.type}</p>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Dates:</span>
//                         <span className="font-medium">
//                           {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Daily Rate:</span>
//                         <span className="font-medium">${listing.pricePerDay}/day</span>
//                       </div>
//                       <div className="flex justify-between border-t pt-2">
//                         <span className="text-gray-600">Total:</span>
//                         <span className="font-bold text-green-600">${totalPrice}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <label className="block text-sm font-medium mb-2">Payment Method</label>
//                     <div className="flex space-x-4">
//                       <button
//                         onClick={() => setPaymentMethod('credit')}
//                         className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'credit' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
//                       >
//                         <FiCreditCard className="inline mr-2" />
//                         Credit Card
//                       </button>
//                       <button
//                         onClick={() => setPaymentMethod('paypal')}
//                         className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
//                       >
//                         PayPal
//                       </button>
//                     </div>
//                   </div>

//                   {paymentMethod === 'credit' && (
//                     <div className="space-y-4 mb-6">
//                       <div>
//                         <label className="block text-sm font-medium mb-1">Card Number</label>
//                         <input
//                           type="text"
//                           placeholder="1234 5678 9012 3456"
//                           className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium mb-1">Expiry Date</label>
//                           <input
//                             type="text"
//                             placeholder="MM/YY"
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium mb-1">CVV</label>
//                           <input
//                             type="text"
//                             placeholder="123"
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex space-x-3">
//                     <button
//                       onClick={() => setShowPayment(false)}
//                       className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={confirmPayment}
//                       className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
//                     >
//                       <FiCheckCircle className="mr-2" />
//                       Confirm Payment
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Book Now Button */}
//             <button
//               onClick={handleBooking}
//               disabled={totalPrice === 0}
//               className={`w-full py-3 rounded-lg text-white font-semibold flex justify-center items-center gap-2 transition ${
//                 totalPrice === 0
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               <FiCheckCircle />
//               Book Now
//             </button>
//           </>
//         ) : (
//           <div className="text-center py-8">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FiCheckCircle className="text-green-500 text-3xl" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
//             <p className="text-gray-600 mb-6">
//               Your booking for {listing.title} has been confirmed.
//             </p>
//             <div className="bg-gray-100 rounded-lg p-4 text-left">
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-600">Dates:</span>
//                 <span className="font-medium">
//                   {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Paid:</span>
//                 <span className="font-bold text-green-600">${totalPrice}</span>
//               </div>
//             </div>
//             <button
//               onClick={() => setBookingConfirmed(false)}
//               className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
//             >
//               Make Another Booking
//             </button>
//           </div>
//         )}
//       </div>
      
//     </div>
//   );
// };

// const BookList = () => {
//   const listings = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'Range Rover Evoque',
//       pricePerDay: 1500,
//       rating: 4.8,
//       location: 'Downtown',
//       type: 'Luxury SUV',
//       features: ['Automatic Transmission', 'Leather Seats', 'Navigation', 'Bluetooth', 'Sunroof', 'Backup Camera']
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'Mercedes C-Class',
//       pricePerDay: 1200,
//       rating: 4.7,
//       location: 'City Center',
//       type: 'Premium Sedan',
//       features: ['Automatic Transmission', 'Premium Sound', 'Heated Seats', 'Keyless Entry', 'Parking Sensors', 'LED Lights']
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'VW Golf',
//       pricePerDay: 8000,
//       rating: 4.5,
//       location: 'Suburbs',
//       type: 'Compact Hatchback',
//       features: ['Manual Transmission', 'Apple CarPlay', 'Cruise Control', 'Alloy Wheels', 'Rear Air Vents', 'USB Ports']
//     },
//       {
//       id: 4,
//       image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'Range Rover Evoque',
//       pricePerDay: 2550,
//       rating: 4.8,
//       location: 'Downtown',
//       type: 'Luxury SUV',
//       features: ['Automatic Transmission', 'Leather Seats', 'Navigation', 'Bluetooth', 'Sunroof', 'Backup Camera']
//     },
//     {
//       id: 5,
//       image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'Mercedes C-Class',
//       pricePerDay: 11020,
//       rating: 4.7,
//       location: 'City Center',
//       type: 'Premium Sedan',
//       features: ['Automatic Transmission', 'Premium Sound', 'Heated Seats', 'Keyless Entry', 'Parking Sensors', 'LED Lights']
//     },
//     {
//       id: 6,
//       image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'VW Golf',
//       pricePerDay: 6580,
//       rating: 4.5,
//       location: 'Suburbs',
//       type: 'Compact Hatchback',
//       features: ['Manual Transmission', 'Apple CarPlay', 'Cruise Control', 'Alloy Wheels', 'Rear Air Vents', 'USB Ports']
//     },
//       {
//       id: 7,
//       image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'Range Rover Evoque',
//       pricePerDay: 2150,
//       rating: 4.8,
//       location: 'Downtown',
//       type: 'Luxury SUV',
//       features: ['Automatic Transmission', 'Leather Seats', 'Navigation', 'Bluetooth', 'Sunroof', 'Backup Camera']
//     },
//     {
//       id: 8,
//       image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'Mercedes C-Class',
//       pricePerDay: 12000,
//       rating: 4.7,
//       location: 'City Center',
//       type: 'Premium Sedan',
//       features: ['Automatic Transmission', 'Premium Sound', 'Heated Seats', 'Keyless Entry', 'Parking Sensors', 'LED Lights']
//     },
//     {
//       id: 9,
//       image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       title: 'VW Golf',
//       pricePerDay: 4580,
//       rating: 4.5,
//       location: 'Suburbs',
//       type: 'Compact Hatchback',
//       features: ['Manual Transmission', 'Apple CarPlay', 'Cruise Control', 'Alloy Wheels', 'Rear Air Vents', 'USB Ports']
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-24 px-6">
//         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')] bg-cover bg-center opacity-20"></div>
//         <div className="relative max-w-7xl mx-auto text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Vehicle Rentals</h1>
//           <p className="text-xl text-blue-100 max-w-3xl mx-auto">
//             Experience luxury and performance with our curated collection of premium vehicles
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {listings.map((listing) => (
//             <BookingCard key={listing.id} listing={listing} />
//           ))}
//         </div>
//       </div>
//          <Footer />
//     </div>
//   );
// };

// export default BookList;

// import React, { useState, useEffect } from 'react';
// import { 
//   FiCalendar, 
//   FiDollarSign, 
//   FiCheckCircle, 
//   FiStar, 
//   FiMapPin, 
//   FiUser, 
//   FiCreditCard, 
//   FiX, 
//   FiChevronDown,
//   FiSearch,
//   FiFilter
// } from 'react-icons/fi';
// import DatePicker from 'react-datepicker';
// import Footer from '../../components/Footer';
// import { useBooking } from '../../context/BookingContext';
// import 'react-datepicker/dist/react-datepicker.css';

// const BookingCard = ({ booking, isInBookingsList, onRemove }) => {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [showPayment, setShowPayment] = useState(false);
//   const [paymentMethod, setPaymentMethod] = useState('credit');
//   const [bookingConfirmed, setBookingConfirmed] = useState(false);
//   const [showFeatures, setShowFeatures] = useState(false);
//   const { addBooking } = useBooking();

//   useEffect(() => {
//     if (startDate && endDate) {
//       const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
//       setTotalPrice(days * booking.price);
//     } else {
//       setTotalPrice(0);
//     }
//   }, [startDate, endDate, booking.price]);

//   const handleBooking = () => {
//     if (totalPrice > 0) {
//       setShowPayment(true);
//     }
//   };

//   const confirmPayment = () => {
//     const bookingItem = {
//       id: Date.now(),
//       itemId: booking.id,
//       name: booking.name,
//       type: booking.type,
//       model: booking.model,
//       price: booking.price,
//       rating: booking.rating,
//       location: booking.location,
//       image: booking.image,
//       features: booking.features,
//       bookedAt: new Date().toISOString(),
//       startDate: startDate.toISOString(),
//       endDate: endDate.toISOString(),
//       totalPrice: totalPrice
//     };
    
//     addBooking(bookingItem);
//     setBookingConfirmed(true);
//     setShowPayment(false);
//   };

//   if (isInBookingsList) {
//     return (
//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="relative h-48">
//           <img
//             src={booking.image}
//             alt={booking.name}
//             className="w-full h-full object-cover"
//           />
//           <button 
//             onClick={() => onRemove(booking.id)}
//             className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-red-100 transition"
//           >
//             <FiX className="text-red-500" />
//           </button>
//         </div>
        
//         <div className="p-6">
//           <h3 className="text-xl font-bold text-gray-800 mb-1">{booking.name}</h3>
//           <p className="text-gray-500 mb-2">{booking.model} · {booking.type}</p>
          
//           <div className="flex items-center text-gray-500 mb-2">
//             <FiMapPin className="mr-1" />
//             <span>{booking.location}</span>
//           </div>
          
//           <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
//             <div className="flex items-center text-lg font-semibold">
//               <FiDollarSign className="text-green-500 mr-1" />
//               <span>{booking.price}</span>
//               <span className="text-gray-500 text-sm ml-1">/day</span>
//             </div>
//             <div className="flex items-center">
//               <FiStar className="text-yellow-400 mr-1" />
//               <span>{booking.rating}</span>
//             </div>
//           </div>
          
//           <div className="mt-4 text-sm text-gray-500">
//             <div className="flex items-center">
//               <FiCalendar className="mr-2" />
//               <span>Booked on: {new Date(booking.bookedAt).toLocaleDateString()}</span>
//             </div>
//             {booking.startDate && booking.endDate && (
//               <div className="flex items-center mt-1">
//                 <FiCalendar className="mr-2" />
//                 <span>Dates: {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</span>
//               </div>
//             )}
//             {booking.totalPrice && (
//               <div className="flex items-center mt-1">
//                 <FiDollarSign className="mr-2" />
//                 <span>Total Paid: ${booking.totalPrice}</span>
//               </div>
//             )}

//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
//       {/* Listing Image with Features */}
//       <div className="relative h-64">
//         <img
//           src={booking.image}
//           alt={booking.name}
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
//           <h2 className="text-xl font-bold text-white">{booking.name}</h2>
//           <div className="flex items-center text-white/90 mt-1">
//             <FiMapPin className="mr-1" />
//             <span className="text-sm">{booking.location}</span>
//             <span className="mx-2">•</span>
//             <FiStar className="text-yellow-400 mr-1" />
//             <span>{booking.rating}</span>
//           </div>
//         </div>
//         <button 
//           onClick={() => setShowFeatures(!showFeatures)}
//           className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-medium"
//         >
//           Features <FiChevronDown className={`ml-1 transition-transform ${showFeatures ? 'rotate-180' : ''}`} />
//         </button>
//       </div>

//       {/* Features Dropdown */}
//       {showFeatures && (
//         <div className="bg-gray-50 p-4 border-b">
//           <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
//           <div className="grid grid-cols-2 gap-2">
//             {booking.features.map((feature, i) => (
//               <div key={i} className="flex items-center text-sm text-gray-600">
//                 <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
//                 {feature}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Booking Form */}
//       <div className="p-6">
//         {!bookingConfirmed ? (
//           <>
//             {/* Price Display */}
//             <div className="flex justify-between items-center mb-6">
//               <div className="flex items-center text-lg font-semibold">
//                 <FiDollarSign className="text-green-500 mr-1" />
//                 <span>{booking.price}</span>
//                 <span className="text-gray-500 text-sm ml-1">/day</span>
//               </div>
//               {totalPrice > 0 && (
//                 <div className="text-lg font-bold">
//                   Total: <span className="text-green-600">${totalPrice}</span>
//                 </div>
//               )}
//             </div>

//             {/* Date Selection */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
//                   <FiCalendar className="mr-2" /> Pickup Date
//                 </label>
//                 <DatePicker
//                   selected={startDate}
//                   onChange={(date) => setStartDate(date)}
//                   selectsStart
//                   startDate={startDate}
//                   endDate={endDate}
//                   minDate={new Date()}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholderText="Select date"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
//                   <FiCalendar className="mr-2" /> Return Date
//                 </label>
//                 <DatePicker
//                   selected={endDate}
//                   onChange={(date) => setEndDate(date)}
//                   selectsEnd
//                   startDate={startDate}
//                   endDate={endDate}
//                   minDate={startDate || new Date()}
//                   className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholderText="Select date"
//                 />
//               </div>
//             </div>

//             {/* Payment Modal */}
//             {showPayment && (
//               <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
//                 <div className="bg-white rounded-xl max-w-md w-full p-6 animate-fade-in">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="text-xl font-bold">Complete Your Booking</h3>
//                     <button 
//                       onClick={() => setShowPayment(false)}
//                       className="text-gray-500 hover:text-gray-700"
//                     >
//                       <FiX />
//                     </button>
//                   </div>
                  
//                   <div className="mb-6 bg-gray-50 rounded-lg p-4">
//                     <div className="flex items-center mb-3">
//                       <img 
//                         src={booking.image} 
//                         alt={booking.name}
//                         className="w-16 h-16 rounded-lg object-cover mr-4"
//                       />
//                       <div>
//                         <h4 className="font-medium">{booking.name}</h4>
//                         <p className="text-sm text-gray-600">{booking.type}</p>
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Dates:</span>
//                         <span className="font-medium">
//                           {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Daily Rate:</span>
//                         <span className="font-medium">${booking.price}/day</span>
//                       </div>
//                       <div className="flex justify-between border-t pt-2">
//                         <span className="text-gray-600">Total:</span>
//                         <span className="font-bold text-green-600">${totalPrice}</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <label className="block text-sm font-medium mb-2">Payment Method</label>
//                     <div className="flex space-x-4">
//                       <button
//                         onClick={() => setPaymentMethod('credit')}
//                         className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'credit' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
//                       >
//                         <FiCreditCard className="inline mr-2" />
//                         Credit Card
//                       </button>
//                       <button
//                         onClick={() => setPaymentMethod('paypal')}
//                         className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
//                       >
//                         PayPal
//                       </button>
//                     </div>
//                   </div>

//                   {paymentMethod === 'credit' && (
//                     <div className="space-y-4 mb-6">
//                       <div>
//                         <label className="block text-sm font-medium mb-1">Card Number</label>
//                         <input
//                           type="text"
//                           placeholder="1234 5678 9012 3456"
//                           className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="grid grid-cols-2 gap-4">
//                         <div>
//                           <label className="block text-sm font-medium mb-1">Expiry Date</label>
//                           <input
//                             type="text"
//                             placeholder="MM/YY"
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium mb-1">CVV</label>
//                           <input
//                             type="text"
//                             placeholder="123"
//                             className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   )}

//                   <div className="flex space-x-3">
//                     <button
//                       onClick={() => setShowPayment(false)}
//                       className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100"
//                     >
//                       Back
//                     </button>
//                     <button
//                       onClick={confirmPayment}
//                       className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
//                     >
//                       <FiCheckCircle className="mr-2" />
//                       Confirm Payment
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Book Now Button */}
//             <button
//               onClick={handleBooking}
//               disabled={totalPrice === 0}
//               className={`w-full py-3 rounded-lg text-white font-semibold flex justify-center items-center gap-2 transition ${
//                 totalPrice === 0
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-blue-600 hover:bg-blue-700'
//               }`}
//             >
//               <FiCheckCircle />
//               Book Now
//             </button>
//           </>
//         ) : (
//           <div className="text-center py-8">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//               <FiCheckCircle className="text-green-500 text-3xl" />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
//             <p className="text-gray-600 mb-6">
//               Your booking for {booking.name} has been confirmed.
//             </p>
//             <div className="bg-gray-100 rounded-lg p-4 text-left">
//               <div className="flex justify-between mb-2">
//                 <span className="text-gray-600">Dates:</span>
//                 <span className="font-medium">
//                   {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
//                 </span>
//               </div>
//               <div className="flex justify-between">
//                 <span className="text-gray-600">Total Paid:</span>
//                 <span className="font-bold text-green-600">${totalPrice}</span>
//               </div>
//             </div>
//             <button
//               onClick={() => setBookingConfirmed(false)}
//               className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
//             >
//               Make Another Booking
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const BookList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [category, setCategory] = useState('All');
//   const [maxPrice, setMaxPrice] = useState(10000);
//   const [showFilters, setShowFilters] = useState(false);
//   const [showFeatures, setShowFeatures] = useState({});
//   const { bookings, removeBooking } = useBooking();

//   const listingsData = [
//     {
//       id: 1,
//       type: 'Car',
//       name: 'Toyota Corolla',
//       model: '2022',
//       price: 4500,
//       rating: 4.8,
//       location: 'Downtown',
//       image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Automatic Transmission', 'Air Conditioning', 'Bluetooth', 'Backup Camera', 'Keyless Entry']
//     },
//     {
//       id: 2,
//       type: 'Bike',
//       name: 'Yamaha FZ',
//       model: '2021',
//       price: 2500,
//       rating: 4.5,
//       location: 'City Center',
//       image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Fuel Efficient', 'ABS Brakes', 'Digital Display', 'LED Lighting', 'Comfort Seat']
//     },
//     {
//       id: 3,
//       type: 'Flat',
//       name: 'Downtown Apartment',
//       model: '2BHK',
//       price: 1200,
//       rating: 4.9,
//       location: 'Financial District',
//       image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Fully Furnished', 'Swimming Pool', 'Gym', '24/7 Security', 'Parking']
//     },
//     {
//       id: 4,
//       type: 'Car',
//       name: 'Honda Civic',
//       model: '2020',
//       price: 5000,
//       rating: 4.7,
//       location: 'Suburbs',
//       image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Sunroof', 'Leather Seats', 'Navigation System', 'Heated Seats', 'Premium Sound']
//     },
//     {
//       id: 5,
//       type: 'Bike',
//       name: 'Royal Enfield',
//       model: '2022',
//       price: 3500,
//       rating: 4.6,
//       location: 'Old Town',
//       image: 'https://images.unsplash.com/photo-1580310617877-88e539a31a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Classic Design', 'Powerful Engine', 'Comfortable Ride', 'Retro Style', 'Cruise Control']
//     },
//     {
//       id: 6,
//       type: 'Flat',
//       name: 'Luxury Penthouse',
//       model: '3BHK',
//       price: 2500,
//       rating: 5.0,
//       location: 'Waterfront',
//       image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Panoramic Views', 'Smart Home', 'Private Terrace', 'Concierge', 'Luxury Finishes']
//     },
//     {
//       id: 7,
//       type: 'Car',
//       name: 'Toyota Corolla',
//       model: '2022',
//       price: 5500,
//       rating: 4.8,
//       location: 'Downtown',
//       image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Hybrid Engine', 'Lane Assist', 'Adaptive Cruise', 'Wireless Charging', 'Premium Package']
//     },
//     {
//       id: 8,
//       type: 'Bike',
//       name: 'Yamaha FZ',
//       model: '2021',
//       price: 3500,
//       rating: 4.5,
//       location: 'City Center',
//       image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Sporty Design', 'Quick Shifter', 'Traction Control', 'LED Headlights', 'Comfortable Ergonomics']
//     },
//     {
//       id: 9,
//       type: 'Flat',
//       name: 'Downtown Apartment',
//       model: '2BHK',
//       price: 9000,
//       rating: 5.0,
//       location: 'Financial District',
//       image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['High Floor', 'Floor-to-Ceiling Windows', 'Smart Appliances', 'Soundproofing', 'Walk-in Closet']
//     },
//     {
//       id: 10,
//       type: 'Car',
//       name: 'Honda Civic',
//       model: '2020',
//       price: 8000,
//       rating: 4.9,
//       location: 'Suburbs',
//       image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Turbo Engine', 'Sport Mode', 'Paddle Shifters', 'Premium Wheels', 'Sport Suspension']
//     },
//     {
//       id: 11,
//       type: 'Bike',
//       name: 'Royal Enfield',
//       model: '2022',
//       price: 3505,
//       rating: 4.2,
//       location: 'Old Town',
//       image: 'https://images.unsplash.com/photo-1580310617877-88e539a31a2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Classic Thump', 'Long Seat', 'Chrome Accents', 'Vintage Look', 'Comfortable Ride']
//     },
//     {
//       id: 12,
//       type: 'Flat',
//       name: 'Luxury Penthouse',
//       model: '3BHK',
//       price: 6550,
//       rating: 5.0,
//       location: 'Waterfront',
//       image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
//       features: ['Private Elevator', 'Home Theater', 'Wine Cellar', 'Chef\'s Kitchen', 'Smart Lighting']
//     },
//   ];

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
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
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
//         {/* My Bookings Section */}
//         {bookings.length > 0 && (
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings ({bookings.length})</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {bookings.map((booking) => (
//                 <BookingCard 
//                   key={booking.id} 
//                   booking={booking} 
//                   isInBookingsList={true}
//                   onRemove={removeBooking}
//                 />
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Available Listings Section */}
//         <div>
//           <div className="flex justify-between items-center mb-8">
//             <h2 className="text-2xl font-bold text-gray-800">
//               {filteredListings.length} Available {filteredListings.length === 1 ? 'Listing' : 'Listings'}
//             </h2>
//             <div className="flex items-center space-x-2">
//               <span className="text-gray-500">Sort by:</span>
//               <select className="border-0 bg-gray-100 rounded-md px-3 py-1 focus:ring-2 focus:ring-blue-500">
//                 <option>Recommended</option>
//                 <option>Price: Low to High</option>
//                 <option>Price: High to Low</option>
//                 <option>Rating</option>
//               </select>
//             </div>
//           </div>

//           {filteredListings.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredListings.map((item) => (
//                 <BookingCard 
//                   key={item.id} 
//                   booking={item} 
//                   isInBookingsList={false}
//                 />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-16">
//               <div className="mx-auto w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-4">
//                 <FiSearch className="text-gray-400 text-3xl" />
//               </div>
//               <h3 className="text-xl font-medium text-gray-700 mb-2">No listings found</h3>
//               <p className="text-gray-500 max-w-md mx-auto">
//                 Try adjusting your search or filter criteria to find what you're looking for.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default BookList;





import React, { useState, useEffect } from 'react';
import { 
  FiCalendar, 
  FiDollarSign, 
  FiCheckCircle, 
  FiStar, 
  FiMapPin, 
  FiUser, 
  FiCreditCard, 
  FiX, 
  FiChevronDown,
  FiSearch,
  FiFilter
} from 'react-icons/fi';
import DatePicker from 'react-datepicker';
import Footer from '../../components/Footer';
import { useBooking } from '../../context/BookingContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';

const BookingCard = ({ booking, isInBookingsList, onRemove }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);
  const { addBooking } = useBooking();

  useEffect(() => {
    if (startDate && endDate) {
      const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
      setTotalPrice(days * booking.price);
    } else {
      setTotalPrice(0);
    }
  }, [startDate, endDate, booking.price]);

  const handleBooking = () => {
    if (!startDate || !endDate) {
      toast.error('Please select both pickup and return dates', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    setShowPayment(true);
  };

  const confirmPayment = () => {
    const bookingItem = {
      id: Date.now(),
      itemId: booking.id,
      name: booking.name,
      type: booking.type,
      model: booking.model,
      price: booking.price,
      rating: booking.rating,
      location: booking.location,
      image: booking.image,
      features: booking.features,
      bookedAt: new Date().toISOString(),
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      totalPrice: totalPrice
    };
    
    addBooking(bookingItem);
    setBookingConfirmed(true);
    setShowPayment(false);
    
    toast.success('Booking confirmed successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (isInBookingsList) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="relative h-48">
          <img
            src={booking.image}
            alt={booking.name}
            className="w-full h-full object-cover"
          />
          <button 
            onClick={() => onRemove(booking.id)}
            className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-red-100 transition"
          >
            <FiX className="text-red-500" />
          </button>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{booking.name}</h3>
          <p className="text-gray-500 mb-2">{booking.model} · {booking.type}</p>
          
          <div className="flex items-center text-gray-500 mb-2">
            <FiMapPin className="mr-1" />
            <span>{booking.location}</span>
          </div>
          
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center text-lg font-semibold">
              <FiDollarSign className="text-green-500 mr-1" />
              <span>{booking.price}</span>
              <span className="text-gray-500 text-sm ml-1">/day</span>
            </div>
            <div className="flex items-center">
              <FiStar className="text-yellow-400 mr-1" />
              <span>{booking.rating}</span>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            <div className="flex items-center">
              <FiCalendar className="mr-2" />
              <span>Booked on: {new Date(booking.bookedAt).toLocaleDateString()}</span>
            </div>
            {booking.startDate && booking.endDate && (
              <div className="flex items-center mt-1">
                <FiCalendar className="mr-2" />
                <span>Dates: {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</span>
              </div>
            )}
            {booking.totalPrice && (
              <div className="flex items-center mt-1">
                <FiDollarSign className="mr-2" />
                <span>Total Paid: ${booking.totalPrice}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Notification Container */}
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      {/* Listing Image with Features */}
      <div className="relative h-64">
        <img
          src={booking.image}
          alt={booking.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h2 className="text-xl font-bold text-white">{booking.name}</h2>
          <div className="flex items-center text-white/90 mt-1">
            <FiMapPin className="mr-1" />
            <span className="text-sm">{booking.location}</span>
            <span className="mx-2">•</span>
            <FiStar className="text-yellow-400 mr-1" />
            <span>{booking.rating}</span>
          </div>
        </div>
        <button 
          onClick={() => setShowFeatures(!showFeatures)}
          className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center text-sm font-medium"
        >
          Features <FiChevronDown className={`ml-1 transition-transform ${showFeatures ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Features Dropdown */}
      {showFeatures && (
        <div className="bg-gray-50 p-4 border-b">
          <h4 className="font-medium text-gray-800 mb-2">Features:</h4>
          <div className="grid grid-cols-2 gap-2">
            {booking.features.map((feature, i) => (
              <div key={i} className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {feature}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Booking Form */}
      <div className="p-6">
        {!bookingConfirmed ? (
          <>
            {/* Price Display */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center text-lg font-semibold">
                <FiDollarSign className="text-green-500 mr-1" />
                <span>{booking.price}</span>
                <span className="text-gray-500 text-sm ml-1">/day</span>
              </div>
              {totalPrice > 0 && (
                <div className="text-lg font-bold">
                  Total: <span className="text-green-600">${totalPrice}</span>
                </div>
              )}
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FiCalendar className="mr-2" /> Pickup Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  minDate={new Date()}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholderText="Select date"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                  <FiCalendar className="mr-2" /> Return Date
                </label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate || new Date()}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholderText="Select date"
                />
              </div>
            </div>

            {/* Payment Modal */}
            {showPayment && (
              <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl max-w-md w-full p-6 animate-fade-in">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold">Complete Your Booking</h3>
                    <button 
                      onClick={() => setShowPayment(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FiX />
                    </button>
                  </div>
                  
                  <div className="mb-6 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-3">
                      <img 
                        src={booking.image} 
                        alt={booking.name}
                        className="w-16 h-16 rounded-lg object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-medium">{booking.name}</h4>
                        <p className="text-sm text-gray-600">{booking.type}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dates:</span>
                        <span className="font-medium">
                          {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Daily Rate:</span>
                        <span className="font-medium">${booking.price}/day</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="text-gray-600">Total:</span>
                        <span className="font-bold text-green-600">${totalPrice}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2">Payment Method</label>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setPaymentMethod('credit')}
                        className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'credit' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                      >
                        <FiCreditCard className="inline mr-2" />
                        Credit Card
                      </button>
                      <button
                        onClick={() => setPaymentMethod('paypal')}
                        className={`px-4 py-2 rounded-lg border-2 ${paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                      >
                        PayPal
                      </button>
                    </div>
                  </div>

                  {paymentMethod === 'credit' && (
                    <div className="space-y-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium mb-1">Card Number</label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">CVV</label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <button
                      onClick={() => setShowPayment(false)}
                      className="flex-1 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100"
                    >
                      Back
                    </button>
                    <button
                      onClick={confirmPayment}
                      className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center justify-center"
                    >
                      <FiCheckCircle className="mr-2" />
                      Confirm Payment
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Book Now Button */}
            <button
              onClick={handleBooking}
              disabled={!startDate || !endDate}
              className={`w-full py-3 rounded-lg text-white font-semibold flex justify-center items-center gap-2 transition ${
                (!startDate || !endDate)
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              <FiCheckCircle />
              Book Now
            </button>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FiCheckCircle className="text-green-500 text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-6">
              Your booking for {booking.name} has been confirmed.
            </p>
            <div className="bg-gray-100 rounded-lg p-4 text-left">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Dates:</span>
                <span className="font-medium">
                  {startDate?.toLocaleDateString()} - {endDate?.toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Paid:</span>
                <span className="font-bold text-green-600">${totalPrice}</span>
              </div>
            </div>
            <button
              onClick={() => setBookingConfirmed(false)}
              className="mt-6 w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50"
            >
              Make Another Booking
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const BookList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [maxPrice, setMaxPrice] = useState(10000);
  const [showFilters, setShowFilters] = useState(false);
  const [showFeatures, setShowFeatures] = useState({});
  const { bookings, removeBooking } = useBooking();

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
      features: ['Private Elevator', 'Home Theater', 'Wine Cellar', 'Chef\'s Kitchen', 'Smart Lighting']
    },
  ];

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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
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
        {/* My Bookings Section */}
        {bookings.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">My Bookings ({bookings.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {bookings.map((booking) => (
                <BookingCard 
                  key={booking.id} 
                  booking={booking} 
                  isInBookingsList={true}
                  onRemove={removeBooking}
                />
              ))}
            </div>
          </div>
        )}

        {/* Available Listings Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredListings.length} Available {filteredListings.length === 1 ? 'Listing' : 'Listings'}
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

          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((item) => (
                <BookingCard 
                  key={item.id} 
                  booking={item} 
                  isInBookingsList={false}
                />
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
      </div>
      <Footer />
    </div>
  );
};

export default BookList;