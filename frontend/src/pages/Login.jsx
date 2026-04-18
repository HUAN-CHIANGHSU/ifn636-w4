import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/api/auth/login', formData);
      login(response.data);
      navigate('/tasks');
    } catch (error) {
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-[#f3ede3] flex items-start justify-center pt-20 px-4">
      
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        
        <h1 className="text-4xl font-bold mb-2">LogIn</h1>
        <p className="text-sm text-gray-500 mb-6">Welcome Back!</p>

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full h-11 px-4 mb-4 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#b7c88a]"
        />

        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="w-full h-11 px-4 mb-2 bg-white border border-gray-200 rounded-md outline-none focus:ring-2 focus:ring-[#b7c88a]"
        />

        <p className="text-xs text-gray-500 mb-4 cursor-pointer hover:underline">
          Forgot Password?
        </p>

        <button
          type="submit"
          className="w-full h-11 bg-white border border-gray-200 text-black font-semibold rounded-md hover:bg-gray-50 transition"
        >
          Sign In
        </button>

      </form>
    </div>
  );
};

export default Login;
