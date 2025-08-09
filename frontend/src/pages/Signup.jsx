/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as motion from "motion/react-client";
import { User, Mail, KeyRound, Loader } from "lucide-react";
import Input from "../component/input";
import PasswordStrengthChecker from "../component/passwordStrengthChecker";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../store/action/auth-action";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await dispatch(signup(formData, setIsLoading));
      navigate("/verify-email");
      toast.success("User registered successfully");
      setError(null);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <motion.div
      className="max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
			overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-sky-400 to-cyan-500 text-transparent bg-clip-text">
          Create Account
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            icon={User}
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            icon={KeyRound}
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {error && <p className="text-red-500 ">{error}</p>}
          <PasswordStrengthChecker password={formData.password} />
          <motion.button
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white 
						font-bold rounded-lg shadow-lg hover:from-blue-700
						hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
						 focus:ring-offset-slate-900 transition-all duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className=" animate-spin mx-auto" size={24} />
            ) : (
              "Sign Up"
            )}
          </motion.button>
        </form>
      </div>
      <div className="px-2 py-2 bg-black bg-opacity-30 flex justify-center">
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export default Signup;
