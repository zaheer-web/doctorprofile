import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function SeeHero() {
  return (
    <div className="py-8 sm:py-10 md:py-12">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-6"
      >

        {/* LEFT CARD */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          className="lg:col-span-3 
          bg-gradient-to-r from-teal-700 to-teal-900
          text-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg"
        >

          {/* Header */}
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full 
            bg-white/10 border border-white/30 
            flex items-center justify-center text-base sm:text-lg font-semibold">
              P
            </div>

            <div>
              <h1 className="text-lg sm:text-xl md:text-3xl font-semibold">
                Dr. Priya Sharma
              </h1>
              <p className="text-white/70 text-xs sm:text-sm">
                Senior Cardiologist
              </p>
            </div>
          </div>

          {/* Info */}
          <p className="text-white/80 text-xs sm:text-sm md:text-base mb-4 sm:mb-5">
            Apollo Hospital, New Delhi • 14+ Years Experience
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
            {["MBBS", "MD Cardiology", "DM Interventional", "MCI Registered"].map((tag, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.08 }}
                className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full 
                bg-white/10 border border-white/20"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            <span className="text-base sm:text-lg font-semibold">4.9</span>
            <span className="text-yellow-400 text-xs sm:text-sm">★★★★★</span>
            <span className="text-white/60 text-[10px] sm:text-xs">
              312 reviews
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <Link to="/book">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 sm:px-5 py-2 rounded-lg 
              bg-white text-teal-800 font-medium text-sm
              hover:bg-gray-100 transition"
            >
              Book Appointment
            </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-4 sm:px-5 py-2 rounded-lg 
              border border-white/30 text-sm
              hover:bg-white/10 transition"
            >
              Subscribe
            </motion.button>
          </div>

        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          variants={fadeUp}
          whileHover={{ y: -5 }}
          className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border"
        >
          <h3 className="font-semibold text-sm sm:text-base mb-3">
            Quick Info
          </h3>

          <div className="space-y-2 text-xs sm:text-sm">
            {[
              ["Specialisation", "Cardiology"],
              ["Hospital", "Apollo, Delhi"],
              ["Experience", "14 Years"],
              ["Consult Fee", "₹800"],
              ["Languages", "EN / HI / PB"],
              ["Next Slot", "Today 4:00 PM"]
            ].map((item, i) => (
              <div key={i} className="flex justify-between">
                <span className="text-gray-500">{item[0]}</span>
                <span className={`font-medium ${
                  item[0] === "Next Slot"
                    ? "text-green-600"
                    : "text-gray-900"
                }`}>
                  {item[1]}
                </span>
              </div>
            ))}
          </div>

         <Link to="/book">
  <motion.button
    whileHover={{ scale: 1.05 }}
    className="mt-4 w-full py-2 rounded-lg 
    bg-gradient-to-r from-teal-700 to-teal-900 
    text-white text-xs sm:text-sm shadow"
  >
    Book Appointment →
  </motion.button>
</Link>
        </motion.div>

      </motion.div>
    </div>
  );
}