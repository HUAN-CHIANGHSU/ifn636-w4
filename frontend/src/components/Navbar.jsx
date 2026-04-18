import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const fontStyle = {
    fontFamily: 'Aptos, Segoe UI, sans-serif',
  };

  return (
    <nav className="bg-[#b7c7a3] h-14 px-6 flex justify-between items-center">
      <Link
        to="/"
        className="text-xl font-semibold text-black"
        style={fontStyle}
      >
        Invoice Management System
      </Link>

      <div className="flex items-center">
        {user ? (
          <>
            <Link
              to="/tasks"
              className="mr-4 text-black hover:underline"
              style={fontStyle}
            >
              Tasks
            </Link>

            <Link
              to="/profile"
              className="mr-4 text-black hover:underline"
              style={fontStyle}
            >
              Profile
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded text-white hover:bg-red-700"
              style={fontStyle}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="mr-4 text-black hover:underline"
              style={fontStyle}
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-green-500 px-4 py-2 rounded text-white hover:bg-green-700"
              style={fontStyle}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
