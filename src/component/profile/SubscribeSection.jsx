import React from "react";
import { motion } from "framer-motion";

export default function SubscribeSection() {
  return (
    <section className="py-8 sm:py-10 px-3 sm:px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-gradient-to-r from-teal-800 to-teal-900 
        rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 
        text-center text-white shadow-lg">

          {/* Heading */}
          <h2 className="text-base sm:text-lg md:text-2xl font-semibold leading-snug">
            Get Dr. Priya's Monthly Health Dispatch
          </h2>

          {/* Subtext */}
          <p className="text-white/70 text-[11px] sm:text-xs md:text-sm mt-2 max-w-2xl mx-auto leading-relaxed">
            Heart health tips, important news, and updates from my practice. 
            Trusted by 284 patients. No spam.
          </p>

          {/* Input + Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full sm:flex-1 px-3 sm:px-4 py-2.5 rounded-lg 
              bg-white/10 border border-white/20 
              text-white placeholder-white/60 text-xs sm:text-sm
              focus:outline-none focus:ring-2 focus:ring-white/40"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-lg 
              bg-white text-teal-800 font-medium text-xs sm:text-sm
              hover:bg-gray-100 transition"
            >
              Subscribe Free
            </motion.button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}