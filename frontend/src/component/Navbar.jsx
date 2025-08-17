import React from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/action/auth-action";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  if (!isAuthenticated) return null;

  return (
    <nav className="bg-gradient-to-r from-sky-900 to-cyan-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 text-transparent bg-clip-text">
                SecureFlow
              </span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-6">
              <Link
                to="/"
                className="text-sky-100 hover:text-white border-b-2 border-transparent hover:border-cyan-400 px-1 pt-1 inline-flex items-center text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-sky-200 hover:text-white border-b-2 border-transparent hover:border-cyan-400 px-1 pt-1 inline-flex items-center text-sm font-medium transition-colors"
              >
                About
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="bg-gradient-to-r from-cyan-500 to-sky-500 text-white hover:from-cyan-600 hover:to-sky-600 px-4 py-2 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-sky-900"
            >
              Sign out
            </motion.button>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-sky-200 hover:text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-sky-900"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1">
          <Link
            to="/"
            className="bg-sky-800 text-white block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-cyan-400"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sky-100 hover:bg-sky-800 hover:text-white block pl-3 pr-4 py-2 text-base font-medium border-l-4 border-transparent hover:border-cyan-400 transition-colors"
          >
            About
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left text-sky-100 hover:bg-sky-800 hover:text-white pl-3 pr-4 py-2 text-base font-medium border-l-4 border-transparent hover:border-cyan-400 transition-colors"
          >
            Sign out
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
