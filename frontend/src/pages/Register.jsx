import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/api/auth/register', formData);
      console.log('register success:', response.data);
      alert('Registration successful. Please log in.');
      navigate('/login');
    } catch (error) {
      console.log('register error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f6f1e9] flex flex-col items-center justify-start pt-24 font-sans">
      <form onSubmit={handleSubmit} className="w-full max-w-sm px-6">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-1">Sign Up</h1>
          <p className="text-gray-600 text-sm">Create your account</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white text-gray-900 text-sm placeholder:text-gray-400 pl-12 pr-4 py-3 border-0 focus:ring-1 focus:ring-slate-300"
              required
            />
          </div>

          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-white text-gray-900 text-sm placeholder:text-gray-400 pl-12 pr-4 py-3 border-0 focus:ring-1 focus:ring-slate-300"
              required
            />
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="w-full bg-slate-200 text-slate-900 text-sm py-3 rounded-md hover:bg-slate-300 transition-colors duration-200"
          >
            Create Account
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-xs text-slate-500">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/login')}
              className="text-slate-900 cursor-pointer font-medium hover:underline"
            >
              Log In
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;