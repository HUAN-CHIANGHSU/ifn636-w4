import axios from 'axios';

const axiosInstance = axios.create({
  //baseURL: 'http://13.211.0.100:5001', // local
  baseURL: 'http://13.238.195.71:5001', 
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
