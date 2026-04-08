import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function AppointmentSection() {
  const [selected, setSelected] = useState(0);

  const options = [
    {
      title: "New Consultation",
      time: "30 min • In-person or Online",
      price: "₹800"
    },
    {
      title: "Follow-up",
      time: "15 min • Online",
      price: "₹400"
    },
    {
      title: "Second Opinion",
      time: "45 min • Online",
      price: "₹1,200"
    }
  ];

  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 px-3 sm:px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mb-8 sm:mb-10"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.25em] text-teal-700 font-semibold">
            SCHEDULE
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Book an Appointment
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
            Choose consultation type. Instant confirmation. Free reschedule.
          </p>
        </motion.div>

        {/* Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="rounded-2xl sm:rounded-3xl border shadow-lg overflow-hidden bg-white"
        >

          {/* Top Bar */}
          <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white px-4 sm:px-6 py-4 sm:py-5">
            <h3 className="font-semibold text-base sm:text-lg">
              Book with Dr. Priya Sharma
            </h3>
            <p className="text-[10px] sm:text-xs text-white/80 mt-1">
              Next available: Today at 4:00 PM
            </p>
          </div>

          {/* Options */}
          <div className="p-4 sm:p-5 space-y-3 sm:space-y-4">

            {options.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelected(i)}
                className={`relative flex items-center justify-between 
                gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl cursor-pointer transition border
                ${
                  selected === i
                    ? "border-teal-700 bg-teal-50 shadow-md"
                    : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                }`}
              >

                {/* LEFT ACCENT LINE */}
                {selected === i && (
                  <div className="absolute left-0 top-0 h-full w-1 bg-teal-700 rounded-l-xl"></div>
                )}

                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                    {item.time}
                  </p>
                </div>

                <span className="font-bold text-teal-800 text-xs sm:text-sm whitespace-nowrap">
                  {item.price}
                </span>
              </motion.div>
            ))}

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="mt-4 sm:mt-5 w-full py-2.5 sm:py-3 rounded-xl 
              bg-gradient-to-r from-teal-700 to-teal-900 
              text-white text-sm font-medium shadow-lg hover:shadow-xl transition"
            >
              Choose a Time Slot →
            </motion.button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}