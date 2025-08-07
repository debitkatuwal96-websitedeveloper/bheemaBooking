import axios from 'axios';

// axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'https://bookingserver-vdea.onrender.com';
axios.defaults.withCredentials = true;

export default axios;