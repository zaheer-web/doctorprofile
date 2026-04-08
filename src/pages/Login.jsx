import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Login() {

  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔥 TEMP LOGIN LOGIC
    let userData;

    if (email === "admin@gmail.com") {
      userData = {
        name: "Admin",
        role: "admin"
      };
    } else {
      userData = {
        name: "Doctor",
        role: "doctor"
      };
    }

    setUser(userData);

    // 🔥 redirect
    if (userData.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/doctor");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4">

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl 
        p-6 md:p-8 w-full max-w-xs md:max-w-sm border border-gray-200"
      >

        {/* Logo */}
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-gradient-to-br from-teal-700 to-teal-900 
          text-white w-10 h-10 flex items-center justify-center 
          rounded-xl font-bold shadow-md">
            D
          </div>
          <h1 className="text-lg font-semibold tracking-wide">
            DoctorCard
          </h1>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold mb-1">
          Welcome back 
        </h2>
        <p className="text-gray-500 mb-5 text-sm">
          Sign in to continue your dashboard
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleLogin}>

          {/* Email */}
          <div>
            <label className="text-xs text-gray-500">EMAIL</label>
            <input
              type="email"
              placeholder="doctor@hospital.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 
              focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 
              transition text-sm shadow-sm"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-xs text-gray-500">PASSWORD</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 
              focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 
              transition text-sm shadow-sm"
            />
          </div>

          {/* Options */}
          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" /> Remember me
            </label>

            <Link
              to="/forgot-password"
              className="text-teal-700 font-medium hover:underline"
            >
              Forgot?
            </Link>
          </div>

          {/* Button */}
          <motion.button
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.02 }}
            type="submit"
            className="w-full bg-gradient-to-r from-teal-700 to-teal-900 
            text-white py-2 rounded-lg shadow-lg 
            hover:shadow-xl transition text-sm"
          >
            Sign In →
          </motion.button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-5">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-teal-700 font-semibold hover:underline"
          >
            Create free account
          </Link>
        </p>

      </motion.div>
    </div>
  );
}