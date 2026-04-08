import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-3 sm:px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading Block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 sm:mb-10"
        >
          <span className="text-[10px] sm:text-xs tracking-[0.25em] text-teal-700 font-semibold uppercase">
            About
          </span>

          <h2 className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 leading-snug">
            Senior Cardiologist with{" "}
            <span className="text-teal-800">14 years</span> of precision care.
          </h2>
        </motion.div>

        {/* Content Card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          className="relative bg-white/70 backdrop-blur-xl border border-gray-200 
          rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-10 
          shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden"
        >

          {/* subtle glow */}
          <div className="absolute -top-10 -right-10 w-28 sm:w-32 md:w-40 h-28 sm:h-32 md:h-40 bg-teal-200/30 blur-3xl rounded-full"></div>

          <div className="space-y-4 sm:space-y-6 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">

            <motion.p variants={fadeUp}>
              I'm{" "}
              <span className="font-semibold text-gray-900">
                Dr. Priya Sharma
              </span>
              , a Senior Cardiologist at
              <span className="text-teal-700 font-medium">
                {" "}Apollo Hospital, New Delhi
              </span>
              . I specialise in interventional cardiology, cardiac arrhythmias, and heart failure management.
            </motion.p>

            <motion.p variants={fadeUp}>
              Over the years, I've performed{" "}
              <span className="font-semibold text-gray-900">
                2000+ cardiac procedures
              </span>{" "}
              and have consistently been recognised among Delhi's top cardiologists.
            </motion.p>

            <motion.p variants={fadeUp}>
              My philosophy is simple — combining{" "}
              <span className="text-teal-800 font-medium">
                evidence-based medicine
              </span>{" "}
              with{" "}
              <span className="text-teal-800 font-medium">
                genuine empathy
              </span>
              . Every patient receives a personalised care plan, because no two hearts are the same.
            </motion.p>

          </div>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-5 sm:px-6 py-2 rounded-xl 
              bg-gradient-to-r from-teal-700 to-teal-900 
              text-white text-sm font-medium shadow-lg hover:shadow-xl transition"
            >
              Book Appointment
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full sm:w-auto px-5 sm:px-6 py-2 rounded-xl border border-gray-300 
              text-gray-700 text-sm hover:bg-gray-100 transition"
            >
              Learn More
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}