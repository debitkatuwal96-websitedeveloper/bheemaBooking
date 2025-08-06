// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { AuthProvider } from './context/AuthContext';

// import Navbar from './components/Navbar';
// import Home from './pages/Home'; 
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import Booking from './pages/Booking';
// import List from './pages/BookLists/BookList';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import ProtectedRoute from './components/ProtectedRoute';

// function App() {
//   return (
//     <Router>
//       <AuthProvider>
//         <Navbar />
//         <Routes>
//           {/* Public Routes */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/sign" element={<Signup />} />
//           <Route path="/contact" element={<Contact />} />
          
//           {/* Protected Routes */}
//           <Route 
//             path="/booking" 
//             element={
//               <ProtectedRoute>
//                 <Booking />
//               </ProtectedRoute>
//             } 
//           />
//           <Route 
//             path="/list" 
//             element={
//               <ProtectedRoute>
//                 <List />
//               </ProtectedRoute>
//             } 
//           />
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;


// client/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';

import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Booking from './pages/Booking';
import List from './pages/BookLists/BookList';
import About from './pages/About';
import Contact from './pages/Contact';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign" element={<Signup />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Protected Routes */}
            <Route 
              path="/booking" 
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/list" 
              element={
                <ProtectedRoute>
                  <List />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;