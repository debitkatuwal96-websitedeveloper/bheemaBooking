// import React, { useState } from 'react';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
// import { FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
// import Footer from '../components/Footer'


// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       setFormData({ name: '', email: '', message: '' });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => setSubmitSuccess(false), 5000);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
//       {/* Hero Section with Image */}
//       <div className="relative from-blue-800 to-indigo-900">
//         <div className="absolute inset-0">
//           <img
//             className="w-full h-full object-cover opacity-450"
//             src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
//             alt="Contact us background"
//           />
//           <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" aria-hidden="true"></div>
//         </div>
//         <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
//             Contact Us
//           </h1>
//           <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
//             We're here to help and answer any questions you might have. We look forward to hearing from you.
//           </p>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="py-12 px-4 sm:px-6 lg:px-8 -mt-12">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
//               <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//                 <FaPaperPlane className="text-blue-500 mr-3" />
//                 Send Us a Message
//               </h2>
              
//               {submitSuccess && (
//                 <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
//                   Thank you! Your message has been sent successfully. We'll get back to you soon.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                     placeholder="you@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
//                   <textarea
//                     rows="5"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
//                     placeholder="How can we help you?"
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center transition ${
//                     isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <FaPaperPlane className="mr-2" />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-6">
//               {/* Map */}
//               <div className="rounded-xl overflow-hidden shadow-xl h-72">
//                 <iframe
//                   title="Location Map"
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086869745747!2d-122.41941518468192!3d37.774929779759364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c254c75f%3A0x648efc8fdd6a4ba3!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1612312021545!5m2!1sen!2sus"
//                   width="100%"
//                   height="100%"
//                   allowFullScreen=""
//                   loading="lazy"
//                   className="border-0 w-full h-full"
//                 ></iframe>
//               </div>

//               {/* Contact Cards */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-blue-100 p-3 rounded-full mr-4">
//                       <FaMapMarkerAlt className="text-blue-600 text-xl" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
//                   </div>
//                   <p className="text-gray-600">123 Innovation Drive</p>
//                   <p className="text-gray-600">San Francisco, CA 94103</p>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-blue-100 p-3 rounded-full mr-4">
//                       <FaPhone className="text-blue-600 text-xl" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
//                   </div>
//                   <p className="text-gray-600">+1 (415) 555-0123</p>
//                   <p className="text-gray-600">contact@institute.org</p>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-blue-100 p-3 rounded-full mr-4">
//                       <FiClock className="text-blue-600 text-xl" />
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-800">Hours</h3>
//                   </div>
//                   <p className="text-gray-600">Monday - Friday</p>
//                   <p className="text-gray-600">9:00 AM - 6:00 PM</p>
//                 </div>

//                 <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
//                   <div className="flex items-center mb-4">
//                     <div className="bg-blue-100 p-3 rounded-full mr-4">
//                       <div className="text-blue-600 text-xl">#</div>
//                     </div>
//                     <h3 className="text-lg font-semibold text-gray-800">Social Media</h3>
//                   </div>
//                   <div className="flex space-x-4">
//                     <a href="#" className="text-gray-600 hover:text-blue-500 transition">
//                       <FiFacebook className="text-xl" />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-blue-500 transition">
//                       <FiTwitter className="text-xl" />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-blue-500 transition">
//                       <FiInstagram className="text-xl" />
//                     </a>
//                     <a href="#" className="text-gray-600 hover:text-blue-500 transition">
//                       <FiLinkedin className="text-xl" />
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//          <Footer />
//     </div>
//   );
// }






import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { FiClock, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import Footer from '../components/Footer';

// Initialize EmailJS with  Public Key
emailjs.init('3g3EIT1sd5VZqwZP-');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
  
    const serviceID = 'service_7vdkn4u';
    const templateID = 'template_3ed4r4g';
    const userID = '3g3EIT1sd5VZqwZP-'; 
    
    emailjs.send(serviceID, templateID, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }, userID)
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, (err) => {
      console.log('FAILED...', err);
      setIsSubmitting(false);
      setSubmitError(`Failed to send message: ${err.text || 'Please try again later'}`);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Image */}
      <div className="relative from-blue-800 to-indigo-900">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-450"
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Contact us background"
          />
          <div className="absolute inset-0 bg-gray-900 mix-blend-multiply" aria-hidden="true"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have. We look forward to hearing from you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FaPaperPlane className="text-blue-500 mr-3" />
                Send Us a Message
              </h2>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}
              
              {submitError && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white flex items-center justify-center transition ${
                    isSubmitting ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Map */}
              <div className="rounded-xl overflow-hidden shadow-xl h-72">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086869745747!2d-122.41941518468192!3d37.774929779759364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c254c75f%3A0x648efc8fdd6a4ba3!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1612312021545!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0 w-full h-full"
                ></iframe>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaMapMarkerAlt className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Our Location</h3>
                  </div>
                  <p className="text-gray-600">123 Innovation Drive</p>
                  <p className="text-gray-600">San Francisco, CA 94103</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FaPhone className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Contact</h3>
                  </div>
                  <p className="text-gray-600">+1 (415) 555-0123</p>
                  <p className="text-gray-600">contact@institute.org</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <FiClock className="text-blue-600 text-xl" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Hours</h3>
                  </div>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <div className="text-blue-600 text-xl">#</div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">Social Media</h3>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition">
                      <FiFacebook className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition">
                      <FiTwitter className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition">
                      <FiInstagram className="text-xl" />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition">
                      <FiLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}