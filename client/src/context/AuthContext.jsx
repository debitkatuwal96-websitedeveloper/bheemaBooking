// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem('token'));
//   const navigate = useNavigate();


//   useEffect(() => {
//   const loadUser = async () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         setAuthToken(token);
//         const response = await axios.get('/api/v1/auth/me', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setUser(response.data.user);
//       } catch (error) {
//         console.error('Failed to load user', error);
//         localStorage.removeItem('token');
//         setUser(null);
//       }
//     }
//   };
//   loadUser();
// }, []);

//   // Set auth token
//   const setAuthToken = (token) => {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       localStorage.setItem('token', token);
//     } else {
//       delete axios.defaults.headers.common['Authorization'];
//       localStorage.removeItem('token');
//     }
//   };

//   // Login user
// const login = async (email, password) => {
//   try {
//     const response = await axios.post('/api/v1/auth/login', { 
//       email, 
//       password 
//     }, {
//       withCredentials: true
//     });
    
//     const { token, user } = response.data;
//     setToken(token);
//     setAuthToken(token);
//     setUser(user);
//     navigate('/');
    
//     return { success: true };
//   } catch (error) {
//     console.error('Login error:', error.response);
//     return { 
//       success: false, 
//       message: error.response?.data?.message || 'Login failed. Please check credentials.' 
//     };
//   }
// };


//   // Register user
//  const register = async (userData) => {
//   try {
//  const response = await axios.post('/api/v1/auth/register', userData, {
//       withCredentials: true });
//     const { token, user } = response.data;
    
//     setToken(token);
//     setAuthToken(token);
//     setUser(user);
    
//     return { success: true, user };
//   } catch (error) {
//     return { 
//       success: false, 
//       message: error.response?.data?.message || error.message 
//     };
//   }
// };

//   // Logout user
//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     setAuthToken(null);
//   };

//   // Initialize auth
//   useEffect(() => {
//     if (token) {
//       setAuthToken(token);
//       // Optionally: Fetch user data if not in token
//     }
//   }, [token]);

//   return (
//     <AuthContext.Provider value={{ 
//       user,
//       isAuthenticated: !!user,
//       token,
//       login,
//       register,
//       logout
//     }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);




// import { createContext, useContext, useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from '../lib/axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(() => {
//     const storedUser = localStorage.getItem('user');
//     return storedUser ? JSON.parse(storedUser) : null;
//   });
//   const [token, setToken] = useState(localStorage.getItem('token'));

//   const setAuthToken = (token) => {
//     if (token) {
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       localStorage.setItem('token', token);
//     } else {
//       delete axios.defaults.headers.common['Authorization'];
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//     }
//   };

//   // ✅ Moved logout ABOVE useEffect to fix ReferenceError
//   const logout = () => {
//     setToken(null);
//     setUser(null);
//     setAuthToken(null);
//     navigate('/login');
//   };

//   const login = async (email, password) => {
//     try {
//       const response = await axios.post('/api/v1/auth/login', { email, password });
//       const { token, user } = response.data;

//       setToken(token);
//       setAuthToken(token);
//       setUser(user);
//       localStorage.setItem('user', JSON.stringify(user));

//       navigate('/');
//       return { success: true };
//     } catch (error) {
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Login failed',
//       };
//     }
//   };

//   const register = async (userData) => {
//     try {
//       const response = await axios.post('/api/v1/auth/register', userData);
//       const { token, user } = response.data;

//       setToken(token);
//       setAuthToken(token);
//       setUser(user);
//       localStorage.setItem('user', JSON.stringify(user));

//       return { success: true };
//     } catch (error) {
//       return {
//         success: false,
//         message: error.response?.data?.message || 'Registration failed',
//       };
//     }
//   };

//   useEffect(() => {
//     const initializeAuth = async () => {
//       if (token) {
//         try {
//           const response = await axios.get('/api/v1/auth/me', {
//             headers: { Authorization: `Bearer ${token}` },
//           });
//           setUser(response.data.user || response.data.data);
//           localStorage.setItem('user', JSON.stringify(response.data.user || response.data.data));
//         } catch (error) {
//           console.error('Auth check failed:', error);
//           logout(); // ✅ Now works fine — defined above
//         }
//       }
//     };
//     initializeAuth();
//   }, [token]);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isAuthenticated: !!user,
//         token,
//         login,
//         register,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);








import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../lib/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  // Centralized token management
  const setAuthToken = (token) => {
    setToken(token);
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    navigate('/login');
  };

  const login = async (email, password) => {
    try {
      const { data } = await axios.post('/api/v1/auth/login', { email, password });
      setAuthToken(data.token);
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Login failed',
      };
    }
  };

  const register = async (userData) => {
    try {
      const { data } = await axios.post('/api/v1/auth/register', userData);
      setAuthToken(data.token);
      setUser(data.user);
      localStorage.setItem('user', JSON.stringify(data.user));
      return { success: true, data };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Registration failed',
      };
    }
  };

  // Initialize auth state
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        if (token) {
          const { data } = await axios.get('/api/v1/auth/me');
          const userData = data.user || data.data;
          setUser(userData);
          localStorage.setItem('user', JSON.stringify(userData));
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [token]);

  if (loading) {
    return <div>Loading authentication...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        setAuthToken
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);