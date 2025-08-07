import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',

  baseURL: import.meta.env.VITE_API_URL || 'https://bookingserver-vdea.onrender.com',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;