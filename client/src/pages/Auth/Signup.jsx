// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaLock, FaCheck, FaTimes } from 'react-icons/fa';
// // import Footer from '../../components/Footer'


// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     if (name === 'password') evaluatePassword(value);
//   };

//   const evaluatePassword = (password) => {
//     if (password.length === 0) {
//       setPasswordStrength('');
//     } else if (password.length < 6) {
//       setPasswordStrength('Weak');
//     } else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/) && password.length >= 8) {
//       setPasswordStrength('Strong');
//     } else {
//       setPasswordStrength('Moderate');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     // Simulate submission
//     setTimeout(() => {
//       setSubmitted(true);
//       setIsLoading(false);
//       setTimeout(() => setSubmitted(false), 3000);
//     }, 1500);
//   };

//   const passwordRequirements = [
//     { text: 'At least 8 characters', valid: formData.password.length >= 8 },
//     { text: 'At least 1 uppercase letter', valid: /[A-Z]/.test(formData.password) },
//     { text: 'At least 1 number', valid: /[0-9]/.test(formData.password) },
//     { text: 'At least 1 special character', valid: /[^A-Za-z0-9]/.test(formData.password) },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-indigo-700 h-64">
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             className="w-full h-full object-cover opacity-20"
//             src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//             alt="Background"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 pt-15">
//           <div className="text-center w-full mt-15 mb-10">
//             <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Join Our Community
//             </h1>
//             <p className="mt-3 text-xl text-indigo-100 max-w-3xl mx-auto">
//               Create your account to get started
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto">
//           <div className="p-8 sm:p-10">
//             {submitted && (
//               <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <FaCheck className="h-5 w-5 text-green-500" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm text-green-700">
//                       Registration successful! Welcome to our platform.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-extrabold text-gray-900">Create Your Account</h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Sign in
//                 </a>
//               </p>
//             </div>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="John Doe"
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="••••••••"
//                   />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                     >
//                       {showPassword ? (
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       ) : (
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Password Strength Indicator */}
//                 {formData.password && (
//                   <div className="mt-2">
//                     <div className="flex justify-between mb-1">
//                       <span className="text-xs font-medium text-gray-500">Password strength:</span>
//                       <span className={`text-xs font-medium ${
//                         passwordStrength === 'Strong' ? 'text-green-600' :
//                         passwordStrength === 'Moderate' ? 'text-yellow-500' : 'text-red-600'
//                       }`}>
//                         {passwordStrength}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-1.5">
//                       <div 
//                         className={`h-1.5 rounded-full ${
//                           passwordStrength === 'Strong' ? 'bg-green-600 w-full' :
//                           passwordStrength === 'Moderate' ? 'bg-yellow-500 w-2/3' : 'bg-red-600 w-1/3'
//                         }`}
//                       ></div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Password Requirements */}
//                 <div className="mt-3 space-y-2">
//                   {passwordRequirements.map((req, index) => (
//                     <div key={index} className="flex items-center">
//                       {req.valid ? (
//                         <FaCheck className="h-4 w-4 text-green-500 mr-2" />
//                       ) : (
//                         <FaTimes className="h-4 w-4 text-gray-400 mr-2" />
//                       )}
//                       <span className={`text-xs ${req.valid ? 'text-gray-500' : 'text-gray-400'}`}>
//                         {req.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Role Selection */}
//               <div>
//                 <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
//                   Account Type
//                 </label>
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
//                 >
//                   <option value="user">Standard User</option>
//                   <option value="admin">Administrator</option>
//                 </select>
//               </div>

//               {/* Terms and Conditions */}
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     name="terms"
//                     type="checkbox"
//                     required
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-medium text-gray-700">
//                     I agree to the{' '}
//                     <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                       Terms and Conditions
//                     </a>
//                   </label>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ${
//                     isLoading ? 'opacity-75 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Creating Account...
//                     </>
//                   ) : (
//                     'Create Account'
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//        {/* <Footer /> */}
//     </div>
//   );
// }

















// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaLock, FaCheck, FaTimes } from 'react-icons/fa';
// import { useAuth } from '../../context/AuthContext';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//   });

//   const [passwordStrength, setPasswordStrength] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const { register, isLoading, error, setError } = useAuth();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     if (name === 'password') evaluatePassword(value);
//   };

//   const evaluatePassword = (password) => {
//     if (password.length === 0) {
//       setPasswordStrength('');
//     } else if (password.length < 6) {
//       setPasswordStrength('Weak');
//     } else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/) && password.length >= 8) {
//       setPasswordStrength('Strong');
//     } else {
//       setPasswordStrength('Moderate');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Clear previous errors
    
//     try {
//       const result = await register(formData.name, formData.email, formData.password, formData.role);
//       if (!result.success) {
//         // Error is already set by AuthContext
//       }
//     } catch (err) {
//       setError('An unexpected error occurred. Please try again.');
//     }
//   };

//   const passwordRequirements = [
//     { text: 'At least 8 characters', valid: formData.password.length >= 8 },
//     { text: 'At least 1 uppercase letter', valid: /[A-Z]/.test(formData.password) },
//     { text: 'At least 1 number', valid: /[0-9]/.test(formData.password) },
//     { text: 'At least 1 special character', valid: /[^A-Za-z0-9]/.test(formData.password) },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-indigo-700 h-64">
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             className="w-full h-full object-cover opacity-20"
//             src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//             alt="Background"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 pt-15">
//           <div className="text-center w-full mt-15 mb-10">
//             <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Join Our Community
//             </h1>
//             <p className="mt-3 text-xl text-indigo-100 max-w-3xl mx-auto">
//               Create your account to get started
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto">
//           <div className="p-8 sm:p-10">
//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <FaTimes className="h-5 w-5 text-red-500" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm text-red-700">
//                       {error}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-extrabold text-gray-900">Create Your Account</h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Sign in
//                 </Link>
//               </p>
//             </div>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="John Doe"
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="••••••••"
//                   />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                     >
//                       {showPassword ? (
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       ) : (
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Password Strength Indicator */}
//                 {formData.password && (
//                   <div className="mt-2">
//                     <div className="flex justify-between mb-1">
//                       <span className="text-xs font-medium text-gray-500">Password strength:</span>
//                       <span className={`text-xs font-medium ${
//                         passwordStrength === 'Strong' ? 'text-green-600' :
//                         passwordStrength === 'Moderate' ? 'text-yellow-500' : 'text-red-600'
//                       }`}>
//                         {passwordStrength}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-1.5">
//                       <div 
//                         className={`h-1.5 rounded-full ${
//                           passwordStrength === 'Strong' ? 'bg-green-600 w-full' :
//                           passwordStrength === 'Moderate' ? 'bg-yellow-500 w-2/3' : 'bg-red-600 w-1/3'
//                         }`}
//                       ></div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Password Requirements */}
//                 <div className="mt-3 space-y-2">
//                   {passwordRequirements.map((req, index) => (
//                     <div key={index} className="flex items-center">
//                       {req.valid ? (
//                         <FaCheck className="h-4 w-4 text-green-500 mr-2" />
//                       ) : (
//                         <FaTimes className="h-4 w-4 text-gray-400 mr-2" />
//                       )}
//                       <span className={`text-xs ${req.valid ? 'text-gray-500' : 'text-gray-400'}`}>
//                         {req.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Role Selection */}
//               <div>
//                 <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
//                   Account Type
//                 </label>
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
//                 >
//                   <option value="user">Standard User</option>
//                   <option value="admin">Administrator</option>
//                 </select>
//               </div>

//               {/* Terms and Conditions */}
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     name="terms"
//                     type="checkbox"
//                     required
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-medium text-gray-700">
//                     I agree to the{' '}
//                     <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                       Terms and Conditions
//                     </a>
//                   </label>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ${
//                     isLoading ? 'opacity-75 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Creating Account...
//                     </>
//                   ) : (
//                     'Create Account'
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
































// import React, { useState } from 'react';
// import { FaUser, FaEnvelope, FaLock, FaCheck, FaTimes } from 'react-icons/fa';
// import { useAuth } from '../../context/AuthContext';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Signup() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     role: 'user',
//   });

//   const [submitted, setSubmitted] = useState(false);
//   const [passwordStrength, setPasswordStrength] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const { register } = useAuth();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));

//     if (name === 'password') evaluatePassword(value);
//   };

//   const evaluatePassword = (password) => {
//     if (password.length === 0) {
//       setPasswordStrength('');
//     } else if (password.length < 6) {
//       setPasswordStrength('Weak');
//     } else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/) && password.length >= 8) {
//       setPasswordStrength('Strong');
//     } else {
//       setPasswordStrength('Moderate');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const result = await register(
//         formData.name,
//         formData.email,
//         formData.password,
//         formData.role
//       );

//       if (result.success) {
//         setSubmitted(true);
//         setTimeout(() => navigate('/booking'), 2000);
//       } else {
//         setError(result.message || 'Registration failed. Please try again.');
//       }
//     } catch (err) {
//       setError('An error occurred during registration. Please try again.');
//       console.error('Registration error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const passwordRequirements = [
//     { text: 'At least 8 characters', valid: formData.password.length >= 8 },
//     { text: 'At least 1 uppercase letter', valid: /[A-Z]/.test(formData.password) },
//     { text: 'At least 1 number', valid: /[0-9]/.test(formData.password) },
//     { text: 'At least 1 special character', valid: /[^A-Za-z0-9]/.test(formData.password) },
//   ];

//   if (submitted) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
//           <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
//             <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//             </svg>
//           </div>
//           <h2 className="mt-3 text-2xl font-bold text-gray-900">Registration Successful!</h2>
//           <p className="mt-2 text-gray-600">
//             Your account has been created successfully. You'll be redirected shortly.
//           </p>
//           <div className="mt-6">
//             <div className="w-full bg-gray-200 rounded-full h-1.5">
//               <div className="bg-indigo-600 h-1.5 rounded-full animate-progress"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-indigo-700 h-64">
//         <div className="absolute inset-0 overflow-hidden">
//           <img
//             className="w-full h-full object-cover opacity-20"
//             src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
//             alt="Background"
//           />
//         </div>
//         <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 pt-15">
//           <div className="text-center w-full mt-15 mb-10">
//             <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
//               Join Our Community
//             </h1>
//             <p className="mt-3 text-xl text-indigo-100 max-w-3xl mx-auto">
//               Create your account to get started
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
//         <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto">
//           <div className="p-8 sm:p-10">
//             {error && (
//               <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
//                 <div className="flex items-center">
//                   <div className="flex-shrink-0">
//                     <FaTimes className="h-5 w-5 text-red-500" />
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm text-red-700">
//                       {error}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             )}

//             <div className="text-center mb-8">
//               <h2 className="text-3xl font-extrabold text-gray-900">Create Your Account</h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Already have an account?{' '}
//                 <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
//                   Sign in
//                 </Link>
//               </p>
//             </div>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Name Field */}
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                   Full Name
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaUser className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="John Doe"
//                   />
//                 </div>
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                   Email Address
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaEnvelope className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="you@example.com"
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div>
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//                   Password
//                 </label>
//                 <div className="relative rounded-md shadow-sm">
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <FaLock className="h-5 w-5 text-gray-400" />
//                   </div>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     required
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg transition"
//                     placeholder="••••••••"
//                   />
//                   <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="text-gray-400 hover:text-gray-500 focus:outline-none"
//                     >
//                       {showPassword ? (
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                         </svg>
//                       ) : (
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                         </svg>
//                       )}
//                     </button>
//                   </div>
//                 </div>

//                 {/* Password Strength Indicator */}
//                 {formData.password && (
//                   <div className="mt-2">
//                     <div className="flex justify-between mb-1">
//                       <span className="text-xs font-medium text-gray-500">Password strength:</span>
//                       <span className={`text-xs font-medium ${
//                         passwordStrength === 'Strong' ? 'text-green-600' :
//                         passwordStrength === 'Moderate' ? 'text-yellow-500' : 'text-red-600'
//                       }`}>
//                         {passwordStrength}
//                       </span>
//                     </div>
//                     <div className="w-full bg-gray-200 rounded-full h-1.5">
//                       <div 
//                         className={`h-1.5 rounded-full ${
//                           passwordStrength === 'Strong' ? 'bg-green-600 w-full' :
//                           passwordStrength === 'Moderate' ? 'bg-yellow-500 w-2/3' : 'bg-red-600 w-1/3'
//                         }`}
//                       ></div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Password Requirements */}
//                 <div className="mt-3 space-y-2">
//                   {passwordRequirements.map((req, index) => (
//                     <div key={index} className="flex items-center">
//                       {req.valid ? (
//                         <FaCheck className="h-4 w-4 text-green-500 mr-2" />
//                       ) : (
//                         <FaTimes className="h-4 w-4 text-gray-400 mr-2" />
//                       )}
//                       <span className={`text-xs ${req.valid ? 'text-gray-500' : 'text-gray-400'}`}>
//                         {req.text}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Role Selection */}
//               <div>
//                 <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
//                   Account Type
//                 </label>
//                 <select
//                   name="role"
//                   value={formData.role}
//                   onChange={handleChange}
//                   className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
//                 >
//                   <option value="user">Standard User</option>
//                   <option value="admin">Administrator</option>
//                 </select>
//               </div>

//               {/* Terms and Conditions */}
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input
//                     id="terms"
//                     name="terms"
//                     type="checkbox"
//                     required
//                     className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                   />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-medium text-gray-700">
//                     I agree to the{' '}
//                     <a href="#" className="text-indigo-600 hover:text-indigo-500">
//                       Terms and Conditions
//                     </a>
//                   </label>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ${
//                     isLoading ? 'opacity-75 cursor-not-allowed' : ''
//                   }`}
//                 >
//                   {isLoading ? (
//                     <>
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Creating Account...
//                     </>
//                   ) : (
//                     'Create Account'
//                   )}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
























































import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock, FaCheck, FaTimes } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user',
  });

  const [submitted, setSubmitted] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();
  // const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'password') evaluatePassword(value);
  };

  const evaluatePassword = (password) => {
    if (password.length === 0) {
      setPasswordStrength('');
    } else if (password.length < 6) {
      setPasswordStrength('Weak');
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[^A-Za-z0-9]/) && password.length >= 8) {
      setPasswordStrength('Strong');
    } else {
      setPasswordStrength('Moderate');
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  setError('');

  try {
    const result = await register({
      username: formData.username,
      email: formData.email,
      password: formData.password
    });

    if (result.success) {
      setSubmitted(true);
      setTimeout(() => navigate('/', { replace: true }), 2000);
    } else {
      setError(result.message);
    }
  } catch (err) {
    setError(err.message);
  } finally {
    setIsLoading(false);
  }
};

  const passwordRequirements = [
    { text: 'At least 8 characters', valid: formData.password.length >= 8 },
    { text: 'At least 1 uppercase letter', valid: /[A-Z]/.test(formData.password) },
    { text: 'At least 1 number', valid: /[0-9]/.test(formData.password) },
    { text: 'At least 1 special character', valid: /[^A-Za-z0-9]/.test(formData.password) },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">Registration Successful!</h2>
          <p className="mt-2 text-gray-600">
            Your account has been created successfully. You'll be redirected shortly.
          </p>
          <div className="mt-6">
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-indigo-600 h-1.5 rounded-full animate-progress"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-indigo-700 h-64">
        <div className="absolute inset-0 overflow-hidden">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Background"
          />
        </div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8 pt-15">
          <div className="text-center w-full mt-15 mb-10">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Join Our Community
            </h1>
            <p className="mt-3 text-xl text-indigo-100 max-w-3xl mx-auto">
              Create your account to get started
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden max-w-2xl mx-auto">
          <div className="p-8 sm:p-10">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <FaTimes className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">
                      {error}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-gray-900">Create Your Account</h2>
              <p className="mt-2 text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign in
                </Link>
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="username"
                    required
                    value={formData.username}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
                    placeholder="johndoe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg transition"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg transition"
                    placeholder="••••••••"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="text-gray-400 hover:text-gray-500 focus:outline-none"
                    >
                      {showPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex justify-between mb-1">
                      <span className="text-xs font-medium text-gray-500">Password strength:</span>
                      <span className={`text-xs font-medium ${
                        passwordStrength === 'Strong' ? 'text-green-600' :
                        passwordStrength === 'Moderate' ? 'text-yellow-500' : 'text-red-600'
                      }`}>
                        {passwordStrength}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${
                          passwordStrength === 'Strong' ? 'bg-green-600 w-full' :
                          passwordStrength === 'Moderate' ? 'bg-yellow-500 w-2/3' : 'bg-red-600 w-1/3'
                        }`}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Password Requirements */}
                <div className="mt-3 space-y-2">
                  {passwordRequirements.map((req, index) => (
                    <div key={index} className="flex items-center">
                      {req.valid ? (
                        <FaCheck className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <FaTimes className="h-4 w-4 text-gray-400 mr-2" />
                      )}
                      <span className={`text-xs ${req.valid ? 'text-gray-500' : 'text-gray-400'}`}>
                        {req.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Role Selection */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Account Type
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-3 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-lg"
                >
                  <option value="user">Standard User</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-medium text-gray-700">
                    I agree to the{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ${
                    isLoading ? 'opacity-75 cursor-not-allowed' : ''
                  }`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </>
                  ) : (
                    'Create Account'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}