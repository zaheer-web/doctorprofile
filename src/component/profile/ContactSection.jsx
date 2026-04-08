import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Video } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-10 sm:py-14 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mb-8 sm:mb-12 text-center md:text-left"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-teal-700 font-semibold">
            CONTACT
          </p>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mt-2 leading-tight">
            Get in touch
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-2 max-w-md md:max-w-none mx-auto md:mx-0">
            Sign in to connect with the doctor
          </p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

          {/* LEFT FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl 
            p-5 sm:p-7 md:p-8 shadow-xl border border-gray-200"
          >
            <form className="space-y-4 sm:space-y-5">

              {/* Email */}
              <div>
                <label className="text-[10px] sm:text-xs tracking-wider text-gray-500">
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="doctor@hospital.com"
                  className="w-full mt-1 px-3 sm:px-4 py-2.5 rounded-xl 
                  bg-gray-100/80 border border-gray-200 text-xs sm:text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-700
                  focus:bg-white transition-all"
                />
              </div>

              {/* Password */}
              <div>
                <label className="text-[10px] sm:text-xs tracking-wider text-gray-500">
                  PASSWORD
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full mt-1 px-3 sm:px-4 py-2.5 rounded-xl 
                  bg-gray-100/80 border border-gray-200 text-xs sm:text-sm
                  focus:outline-none focus:ring-2 focus:ring-teal-700
                  focus:bg-white transition-all"
                />
              </div>

              {/* Remember + Forgot */}
              <div className="flex justify-between items-center text-[10px] sm:text-xs">
                <label className="flex items-center gap-2 text-gray-500">
                  <input type="checkbox" className="accent-teal-700" />
                  Remember me
                </label>

                <a
                  href="/forgot-password"
                  className="text-teal-700 font-medium hover:underline"
                >
                  Forgot?
                </a>
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="w-full py-2.5 sm:py-3 rounded-xl 
                bg-gradient-to-r from-teal-700 to-teal-900 
                text-white text-xs sm:text-sm font-medium shadow-lg
                hover:shadow-xl transition"
              >
                Sign In →
              </motion.button>
            </form>
          </motion.div>

          {/* RIGHT INFO */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="space-y-4 sm:space-y-5"
          >

            {[
              {
                icon: <MapPin size={18} />,
                title: "Apollo Hospital, New Delhi",
                desc: "Mathura Road, Sarita Vihar, 110076"
              },
              {
                icon: <Clock size={18} />,
                title: "Mon–Fri 9AM–6PM IST",
                desc: "Response time within 24 hours"
              },
              {
                icon: <Video size={18} />,
                title: "Online consultations available",
                desc: "Google Meet / Zoom"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="flex items-start gap-3 sm:gap-4 bg-white/80 backdrop-blur-md 
                p-4 sm:p-5 rounded-2xl border border-gray-200 shadow-sm 
                hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center 
                rounded-xl bg-teal-100 text-teal-700 shrink-0">
                  {item.icon}
                </div>

                <div>
                  <p className="font-semibold text-xs sm:text-sm text-gray-900">
                    {item.title}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </motion.div>

        </div>
      </div>
    </section>
  );
}