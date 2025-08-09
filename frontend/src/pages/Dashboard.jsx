import React from "react";
import * as motion from "motion/react-client";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/action/auth-action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      navigate("/login");
    } catch (error) {
      console.error("Logout error in component:", error);
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <motion.button whileHover={{ scale: 1.1 }} onClick={handleLogout}>
        Logout
      </motion.button>
    </div>
  );
};

export default Dashboard;
