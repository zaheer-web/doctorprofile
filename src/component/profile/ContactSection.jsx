import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4 py-10 sm:py-14">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-500 text-sm sm:text-base mt-2">
            We’re here to help you. Reach out anytime.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* LEFT - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-br from-teal-700 to-teal-900 
            text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
          >

            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Let’s Talk 
              </h2>

              <p className="text-sm sm:text-base text-white/90 mb-6">
                Have questions about appointments, doctors, or your account? 
                Our team is ready to assist you anytime.
              </p>

              {/* INFO */}
              <div className="space-y-4 text-sm">

                <div>
                  <p className="font-medium"> Email</p>
                  <p className="text-white/80">support@doctorcard.com</p>
                </div>

                <div>
                  <p className="font-medium"> Phone</p>
                  <p className="text-white/80">+91 98765 43210</p>
                </div>

                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-white/80">Mumbai, India</p>
                </div>

              </div>
            </div>

            {/* FOOT */}
            <p className="text-xs text-white/70 mt-8">
              We usually respond within 24 hours
            </p>

          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-xl border border-gray-200 
            rounded-3xl p-6 sm:p-8 shadow-xl"
          >

            <h2 className="text-lg sm:text-xl font-semibold mb-5 text-gray-900">
              Send a Message
            </h2>

            <form className="space-y-4">

              {/* NAME */}
              <div>
                <label className="text-xs text-gray-500">NAME</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 
                  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 
                  transition text-sm"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs text-gray-500">EMAIL</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 
                  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 
                  transition text-sm"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs text-gray-500">MESSAGE</label>
                <textarea
                  rows="4"
                  placeholder="Type your message..."
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 
                  focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 
                  transition text-sm resize-none"
                ></textarea>
              </div>

              {/* BUTTON */}
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                type="submit"
                className="w-full bg-gradient-to-r from-teal-700 to-teal-900 
                text-white py-2.5 rounded-lg shadow-lg 
                hover:shadow-xl transition text-sm"
              >
                Send Message →
              </motion.button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}