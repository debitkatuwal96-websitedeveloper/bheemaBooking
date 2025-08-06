import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiCalendar, FiInfo, FiMail, FiList, FiLogIn, FiMenu, FiX, FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const closeAll = () => {
    setIsOpen(false);
    setDropdownOpen(null);
  };

  const handleLogout = () => {
    logout();
    closeAll();
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-white/70 dark:bg-gray-900/70'} border-b border-gray-100 dark:border-gray-800`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center text-2xl font-bold tracking-tight"
            onClick={closeAll}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">BookCore</span>
            <span className="text-gray-900 dark:text-white">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink to="/" currentPath={location.pathname}>
              Home
            </NavLink>
            
            {isAuthenticated && (
              <>
                <NavLink to="/booking" currentPath={location.pathname}>
                  Booking
                </NavLink>
                <NavLink to="/list" currentPath={location.pathname}>
                  My Bookings
                </NavLink>
              </>
            )}
            
            <NavLink to="/about" currentPath={location.pathname}>
              About
            </NavLink>
            
            <NavLink to="/contact" currentPath={location.pathname}>
              Contact
            </NavLink>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>

            {isAuthenticated ? (
              <div className="relative group ml-4">
                <button 
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  onClick={() => toggleDropdown('user')}
                >
                  <FiUser className="w-5 h-5" />
                  <span className="font-medium">{user?.name || 'Account'}</span>
                </button>
                <div 
                  className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ${dropdownOpen === 'user' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                >
                  <div className="py-1">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                    >
                      <FiLogOut className="mr-2" />
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="ml-4 px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
              aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
            >
              {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none transition-colors"
              aria-label="Menu"
            >
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-6 py-8 h-full flex flex-col">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold"
              onClick={closeAll}
            >
              <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">BookCore</span>
              <span className="text-gray-900 dark:text-white">.</span>
            </Link>
            
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex flex-col space-y-4 mt-12">
            <MobileNavLink to="/" onClick={closeAll}>
              Home
            </MobileNavLink>
            
            {isAuthenticated && (
              <>
                <MobileNavLink to="/booking" onClick={closeAll}>
                  Booking
                </MobileNavLink>
                <MobileNavLink to="/list" onClick={closeAll}>
                  My Bookings
                </MobileNavLink>
              </>
            )}
            
            <MobileNavLink to="/about" onClick={closeAll}>
              About
            </MobileNavLink>
            
            <MobileNavLink to="/contact" onClick={closeAll}>
              Contact
            </MobileNavLink>
            
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              {isAuthenticated ? (
                <>
                  <div className="flex items-center px-4 py-3 mb-4 rounded-lg bg-gray-100 dark:bg-gray-700">
                    <FiUser className="w-5 h-5 mr-3" />
                    <span className="font-medium">{user?.name || 'Account'}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center px-6 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <FiLogOut className="mr-2" />
                    Logout
                  </button>
                </>
              ) : (
                <Link 
                  to="/login" 
                  onClick={closeAll}
                  className="w-full flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Desktop nav link component
const NavLink = ({ to, currentPath, children }) => (
  <Link
    to={to}
    className={`px-4 py-2 font-medium transition-colors duration-200 ${
      currentPath === to 
        ? 'text-indigo-600 dark:text-indigo-400' 
        : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
    }`}
  >
    {children}
  </Link>
);

// Mobile nav link component
const MobileNavLink = ({ to, onClick, children }) => (
  <Link
    to={to}
    onClick={onClick}
    className="py-3 text-lg font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
  >
    {children}
  </Link>
);



















































































































// import React, { useState, useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FiCalendar, FiInfo, FiMail, FiList, FiLogIn, FiMenu, FiX, FiChevronDown, FiUser, FiLogOut } from 'react-icons/fi';
// import { FaMoon, FaSun } from 'react-icons/fa';
// import { useAuth } from '../context/AuthContext';

// export default function Navbar() {
//   const { user, isAuthenticated, logout } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const location = useLocation();
//   const navigate = useNavigate();
  

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     // Check for dark mode preference
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setDarkMode(true);
//     }
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     // Apply dark mode class to document
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const toggleDropdown = (menu) => {
//     setDropdownOpen(dropdownOpen === menu ? null : menu);
//   };

//   const closeAll = () => {
//     setIsOpen(false);
//     setDropdownOpen(null);
//   };

//   const handleLogout = () => {
//     logout();
//     closeAll();
//     navigate('/');
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-white/70 dark:bg-gray-900/70'} border-b border-gray-100 dark:border-gray-800`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center text-2xl font-bold tracking-tight"
//             onClick={closeAll}
//           >
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">BookCore</span>
//             <span className="text-gray-900 dark:text-white">.</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             <NavLink to="/" currentPath={location.pathname}>
//               Home
//             </NavLink>
            
//             {isAuthenticated && (
//               <>
//                 <div className="relative group">
//                   <button 
//                     className={`flex items-center px-4 py-2 font-medium transition-colors duration-200 ${location.pathname.includes('/products') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}
//                     onClick={() => toggleDropdown('products')}
//                   >
//                     Booking
//                     <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen === 'products' ? 'rotate-180' : ''}`} />
//                   </button>
//                   <div 
//                     className={`absolute left-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ${dropdownOpen === 'products' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
//                   >
//                     <div className="py-1">
//                       <Link to="/list"
//                         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//                         onClick={closeAll}
//                       >
//                         Booking List
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
                
//                 <NavLink to="/booking" currentPath={location.pathname}>
//                   Booking
//                 </NavLink>
//               </>
//             )}
            
//             <NavLink to="/about" currentPath={location.pathname}>
//               About
//             </NavLink>
            
//             <NavLink to="/contact" currentPath={location.pathname}>
//               Contact
//             </NavLink>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="ml-4 p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//               aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
//             >
//               {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
//             </button>

//             {isAuthenticated ? (
//               <div className="relative group ml-4">
//                 <button 
//                   className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
//                   onClick={() => toggleDropdown('user')}
//                 >
//                   <FiUser className="w-5 h-5" />
//                   <span className="font-medium">{user?.name || 'Account'}</span>
//                 </button>
//                 <div 
//                   className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ${dropdownOpen === 'user' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
//                 >
//                   <div className="py-1">
//                     <button
//                       onClick={handleLogout}
//                       className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//                     >
//                       <FiLogOut className="mr-2" />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <Link 
//                 to="/login" 
//                 className="ml-4 px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
//               >
//                 Login
//               </Link>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden flex items-center space-x-4">
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//               aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
//             >
//               {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
//             </button>
            
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none transition-colors"
//               aria-label="Menu"
//             >
//               {isOpen ? (
//                 <FiX className="w-6 h-6" />
//               ) : (
//                 <FiMenu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="container mx-auto px-6 py-8 h-full flex flex-col">
//           <div className="flex justify-between items-center">
//             <Link 
//               to="/" 
//               className="text-2xl font-bold"
//               onClick={closeAll}
//             >
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">BookCore</span>
//               <span className="text-gray-900 dark:text-white">.</span>
//             </Link>
            
//             <button
//               onClick={() => setIsOpen(false)}
//               className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//             >
//               <FiX className="w-6 h-6" />
//             </button>
//           </div>
          
//           <div className="flex flex-col space-y-4 mt-12">
//             <MobileNavLink to="/" onClick={closeAll}>
//               Home
//             </MobileNavLink>
            
//             {isAuthenticated && (
//               <>
//                 <div className="flex flex-col">
//                   <button 
//                     className={`flex items-center justify-between py-3 text-lg font-medium ${location.pathname.includes('/products') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}
//                     onClick={() => toggleDropdown('mobile-products')}
//                   >
//                     Booking
//                     <FiChevronDown className={`ml-2 transition-transform duration-200 ${dropdownOpen === 'mobile-products' ? 'rotate-180' : ''}`} />
//                   </button>
//                   <div 
//                     className={`overflow-hidden transition-all duration-200 ${dropdownOpen === 'mobile-products' ? 'max-h-40' : 'max-h-0'}`}
//                   >
//                     <div className="pl-4 py-2 space-y-3">
//                       <Link
//                         to="/list"
//                         className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                         onClick={closeAll}
//                       >
//                         Booking List
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
                
//                 <MobileNavLink to="/booking" onClick={closeAll}>
//                   Booking
//                 </MobileNavLink>
//               </>
//             )}
            
//             <MobileNavLink to="/about" onClick={closeAll}>
//               About
//             </MobileNavLink>
            
//             <MobileNavLink to="/contact" onClick={closeAll}>
//               Contact
//             </MobileNavLink>
            
//             <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
//               {isAuthenticated ? (
//                 <>
//                   <div className="flex items-center px-4 py-3 mb-4 rounded-lg bg-gray-100 dark:bg-gray-700">
//                     <FiUser className="w-5 h-5 mr-3" />
//                     <span className="font-medium">{user?.name || 'Account'}</span>
//                   </div>
//                   <button
//                     onClick={handleLogout}
//                     className="w-full flex items-center justify-center px-6 py-3 rounded-md bg-red-600 text-white font-medium hover:bg-red-700 transition-all duration-300 shadow-sm hover:shadow-md"
//                   >
//                     <FiLogOut className="mr-2" />
//                     Logout
//                   </button>
//                 </>
//               ) : (
//                 <Link 
//                   to="/login" 
//                   onClick={closeAll}
//                   className="w-full flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
//                 >
//                   Login
//                 </Link>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Desktop nav link component
// const NavLink = ({ to, currentPath, children }) => (
//   <Link
//     to={to}
//     className={`px-4 py-2 font-medium transition-colors duration-200 ${
//       currentPath === to 
//         ? 'text-indigo-600 dark:text-indigo-400' 
//         : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
//     }`}
//   >
//     {children}
//   </Link>
// );

// // Mobile nav link component
// const MobileNavLink = ({ to, onClick, children }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="py-3 text-lg font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
//   >
//     {children}
//   </Link>
// );








































































// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FiCalendar, FiInfo, FiMail, FiList, FiLogIn, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
// import { FaMoon, FaSun } from 'react-icons/fa';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
    
//     // Check for dark mode preference
//     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//       setDarkMode(true);
//     }
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     // Apply dark mode class to document
//     if (darkMode) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [darkMode]);

//   const toggleDropdown = (menu) => {
//     setDropdownOpen(dropdownOpen === menu ? null : menu);
//   };

//   const closeAll = () => {
//     setIsOpen(false);
//     setDropdownOpen(null);
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' : 'bg-white/70 dark:bg-gray-900/70'} border-b border-gray-100 dark:border-gray-800`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="flex items-center text-2xl font-bold tracking-tight"
//             onClick={closeAll}
//           >
//             <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">BookCore</span>
//             <span className="text-gray-900 dark:text-white">.</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1">
//             <NavLink to="/" currentPath={location.pathname}>
//               Home
//             </NavLink>
            
//             <div className="relative group">
//               <button 
//                 className={`flex items-center px-4 py-2 font-medium transition-colors duration-200 ${location.pathname.includes('/products') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'}`}
//                 onClick={() => toggleDropdown('products')}
//               >
//                 Booking
//                 <FiChevronDown className={`ml-1 transition-transform duration-200 ${dropdownOpen === 'products' ? 'rotate-180' : ''}`} />
//               </button>
//               <div 
//                 className={`absolute left-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ${dropdownOpen === 'products' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
//               >
//                 <div className="py-1">
//                    <Link to="/list"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//                     onClick={closeAll}
//                   >
                   
//                    Booking List
//                   </Link>
//                    {/*
//                   <Link
//                     to="/products/mobile"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//                     onClick={closeAll}
//                   >
//                     Mobile App
//                   </Link>
//                   <Link
//                     to="/products/web3"
//                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//                     onClick={closeAll}
//                   >
//                     Web3 Solutions
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
            
//             <NavLink to="/booking" currentPath={location.pathname}>
//               Booking
//             </NavLink>
            
//             <NavLink to="/about" currentPath={location.pathname}>
//               About
//             </NavLink>
            
//             <NavLink to="/contact" currentPath={location.pathname}>
//               Contact
//             </NavLink>

//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="ml-4 p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//               aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
//             >
//               {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
//             </button>

//             <Link 
//               to="/login" 
//               className="ml-4 px-5 py-2 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
//             >
//               Get Started
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden flex items-center space-x-4">
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors"
//               aria-label={`Toggle ${darkMode ? 'light' : 'dark'} mode`}
//             >
//               {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
//             </button>
            
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none transition-colors"
//               aria-label="Menu"
//             >
//               {isOpen ? (
//                 <FiX className="w-6 h-6" />
//               ) : (
//                 <FiMenu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`lg:hidden fixed inset-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="container mx-auto px-6 py-8 h-full flex flex-col">
//           <div className="flex justify-between items-center">
//             <Link 
//               to="/" 
//               className="text-2xl font-bold"
//               onClick={closeAll}
//             >
//               <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">BookCore</span>
//               <span className="text-gray-900 dark:text-white">.</span>
//             </Link>
            
//             <button
//               onClick={() => setIsOpen(false)}
//               className="p-2 rounded-md text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//             >
//               <FiX className="w-6 h-6" />
//             </button>
//           </div>
          
//           <div className="flex flex-col space-y-4 mt-12">
//             <MobileNavLink to="/" onClick={closeAll}>
//               Home
//             </MobileNavLink>
            
//             <div className="flex flex-col">
//               <button 
//                 className={`flex items-center justify-between py-3 text-lg font-medium ${location.pathname.includes('/products') ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'}`}
//                 onClick={() => toggleDropdown('mobile-products')}
//               >
//                 Booking List
//                 <FiChevronDown className={`ml-2 transition-transform duration-200 ${dropdownOpen === 'mobile-products' ? 'rotate-180' : ''}`} />
//               </button>
//               <div 
//                 className={`overflow-hidden transition-all duration-200 ${dropdownOpen === 'mobile-products' ? 'max-h-40' : 'max-h-0'}`}
//               >
//                 <div className="pl-4 py-2 space-y-3">
//                   <Link
//                     to="/list"
//                     className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                     onClick={closeAll}
//                   >
//                    List
//                   </Link> 
//                   {/* <Link
//                     to="/products/mobile"
//                     className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                     onClick={closeAll}
//                   >
//                     Mobile App
//                   </Link>
//                   <Link
//                     to="/products/web3"
//                     className="block py-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
//                     onClick={closeAll}
//                   >
//                     Web3 Solutions
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
            
//             <MobileNavLink to="/booking" onClick={closeAll}>
//               Booking
//             </MobileNavLink>
            
//             <MobileNavLink to="/about" onClick={closeAll}>
//               About
//             </MobileNavLink>
            
//             <MobileNavLink to="/contact" onClick={closeAll}>
//               Contact
//             </MobileNavLink>
            
//             <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
//               <Link 
//                 to="/login" 
//                 onClick={closeAll}
//                 className="w-full flex items-center justify-center px-6 py-3 rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-sm hover:shadow-md"
//               >
//                 Get Started
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // Desktop nav link component
// const NavLink = ({ to, currentPath, children }) => (
//   <Link
//     to={to}
//     className={`px-4 py-2 font-medium transition-colors duration-200 ${
//       currentPath === to 
//         ? 'text-indigo-600 dark:text-indigo-400' 
//         : 'text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400'
//     }`}
//   >
//     {children}
//   </Link>
// );

// // Mobile nav link component
// const MobileNavLink = ({ to, onClick, children }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="py-3 text-lg font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400 transition-colors"
//   >
//     {children}
//   </Link>
// );

















































































































// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { FiCalendar, FiInfo, FiMail, FiList, FiLogIn, FiMenu, FiX } from 'react-icons/fi';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-opacity-90 backdrop-blur-sm' : 'bg-opacity-70'} bg-charcoal-900 shadow-lg`}>
//       <div className="max-w-8xl mx-auto px-6">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link 
//             to="/" 
//             className="text-3xl font-serif font-bold text-gold-500 tracking-tighter text-white hover:to-blue-600"
//           >
//             BookCore<span className="text-white">.</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center space-x-1 text-white">
//             <NavLink to="/booking" currentPath={location.pathname}>
//               <FiCalendar className="mr-2" />
//               Bookings
//             </NavLink>
            
//             <NavLink to="/about" currentPath={location.pathname}>
//               <FiInfo className="mr-2" />
//               About
//             </NavLink>
            
//             <NavLink to="/contact" currentPath={location.pathname}>
//               <FiMail className="mr-2" />
//               Contact
//             </NavLink>
            
//             <NavLink to="/list" currentPath={location.pathname}>
//               <FiList className="mr-2" />
//               Listings
//             </NavLink>

//             <Link 
//               to="/login" 
//               className="ml-6 px-6 py-2 rounded-md bg-gold-500 text-charcoal-900 font-medium hover:bg-gold-400 transition-colors duration-300 flex items-center"
//             >
//               <FiLogIn className="mr-2" />
//               Sign In
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="lg:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 text-gold-500 focus:outline-none"
//               aria-label="Menu"
//             >
//               {isOpen ? (
//                 <FiX className="w-6 h-6" />
//               ) : (
//                 <FiMenu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation  */}
//       <div className={`lg:hidden  overlay-150  w- text-black fixed inset-0 bg-charcoal-900 z-40 transition-all duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
//         <div className="container mx-auto px-6 py-8 h-full flex flex-col">
//           <div className="flex justify-end">
//             <button
//               onClick={() => setIsOpen(false)}
//               className="p-2 text-gold-500"
//             >
//               <FiX className="w-6 h-6" />
//             </button>
//           </div>
          
//           <div className="flex flex-col space-y-8 mt-12 ml-60 bg-white ">
//             <MobileNavLink to="/booking" onClick={() => setIsOpen(false)}>
//               <FiCalendar className="mr-4 text-black" />
//               Bookings
//             </MobileNavLink>
            
//             <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>
//               <FiInfo className="mr-4 text-black" />
//               About
//             </MobileNavLink>
            
//             <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
//               <FiMail className="mr-4" />
//               Contact
//             </MobileNavLink>
            
//             <MobileNavLink to="/list" onClick={() => setIsOpen(false)}>
//               <FiList className="mr-4" />
//               Listings
//             </MobileNavLink>
            
//             <div className="mt- pt-2 border-t border-charcoal-700">
//               <Link 
//                 to="/login" 
//                 onClick={() => setIsOpen(false)}
//                 className="w-full flex items-center justify-center px-6 py-3 rounded-md bg-gold-500 text-charcoal-900 font-medium hover:bg-gold-400 transition-colors duration-300 text-blue"
//               >
//                 <FiLogIn className="mr-2" />
//                 Sign In
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// // desktop nav link
// const NavLink = ({ to, currentPath, children }) => (
//   <Link
//     to={to}
//     className={`flex items-center px-4 py-2 font-medium transition-colors duration-300 ${
//       currentPath === to 
//         ? 'text-gold-500' 
//         : 'text-white hover:text-gold-400'
//     }`}
//   >
//     {children}
//   </Link>
// );

// // mobile nav link
// const MobileNavLink = ({ to, onClick, children }) => (
//   <Link
//     to={to}
//     onClick={onClick}
//     className="flex items-center text-2xl text-white hover:text-gold-400 transition-colors duration-300"
//   >
//     {children}
//   </Link>
// );