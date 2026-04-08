import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function ReviewsSection() {
  return (
    <section className="bg-white py-10 sm:py-12 md:py-14 px-3 sm:px-4">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mb-8 sm:mb-10"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.25em] text-teal-700 font-semibold">
            PATIENT REVIEWS
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-3 sm:mt-4 gap-4 sm:gap-6">

            {/* LEFT RATING */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-teal-900 leading-none">
                4.9
              </h2>

              <div className="text-yellow-400 text-base sm:text-lg mt-1">
                ★★★★★
              </div>

              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                312 verified reviews
              </p>
            </div>

            {/* RIGHT BARS */}
            <div className="w-full md:w-1/2 space-y-2">

              {[
                ["5 stars", "88%"],
                ["4 stars", "9%"],
                ["3 stars", "2%"]
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                  
                  <span className="w-14 sm:w-16 text-gray-600">
                    {item[0]}
                  </span>

                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-teal-800"
                      style={{ width: item[1] }}
                    ></div>
                  </div>

                  <span className="w-8 sm:w-10 text-right text-gray-600">
                    {item[1]}
                  </span>

                </div>
              ))}
            </div>

          </div>
        </motion.div>

        {/* REVIEWS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">

          {/* REVIEW 1 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ y: -6 }}
            className="bg-gray-50 border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gray-200 flex items-center justify-center text-xs sm:text-sm font-semibold">
                V
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">
                  Vikram Nair
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  ★★★★★ • Mar 8, 2026
                </p>
              </div>

            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              "Dr. Sharma took the time to explain everything clearly. The booking
              process was seamless and she was punctual. Highly recommended."
            </p>

            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-3">
              Consultation • Verified
            </p>
          </motion.div>

          {/* REVIEW 2 */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ y: -6 }}
            className="bg-gray-50 border rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3">
              
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs sm:text-sm font-semibold">
                S
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 text-xs sm:text-sm">
                  Sunita Mehra
                </h4>
                <p className="text-[10px] sm:text-xs text-gray-500">
                  ★★★★★ • Mar 5, 2026
                </p>
              </div>

            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              "Best cardiologist I've visited in 10 years. Diagnosed my condition
              accurately when two others missed it."
            </p>

            <p className="text-[10px] sm:text-[11px] text-gray-400 mt-3">
              Second Opinion • Verified
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}