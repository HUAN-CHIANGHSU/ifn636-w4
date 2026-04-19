import axios from 'axios';

const axiosInstance = axios.create({
  
  baseURL: 'http://3.25.108.22:5001', 
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
