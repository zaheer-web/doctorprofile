import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ArticlesSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-3 sm:px-4">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="mb-8 sm:mb-10 md:mb-12 text-center"
        >
          <p className="text-[10px] sm:text-xs tracking-[0.3em] text-teal-700 font-semibold">
            HEALTH ARTICLES
          </p>

          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mt-2 sm:mt-3">
            From Dr. Priya's Desk
          </h2>

          <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
            Expert insights for better heart health
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">

          {[{
            tag: "CONDITION EXPLAINER",
            title: "Understanding Heart Arrhythmia",
            desc: "What causes irregular heartbeats, and when should you consult a specialist?"
          },
          {
            tag: "PREVENTION TIPS",
            title: "5 Signs You Should See a Cardiologist",
            desc: "Symptoms many people ignore but that could signal a serious heart condition."
          }].map((card, i) => (

            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl p-[1px] 
              bg-gradient-to-r from-teal-600/40 to-teal-900/40 
              transition"
            >
              {/* Inner Card */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 h-full shadow-md 
              group-hover:shadow-2xl transition duration-300">

                {/* Tag */}
                <p className="text-[9px] sm:text-[10px] tracking-[0.25em] text-teal-700 mb-2 font-semibold">
                  {card.tag}
                </p>

                {/* Title */}
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 
                group-hover:text-teal-800 transition">
                  {card.title}
                </h3>

                {/* Desc */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {card.desc}
                </p>

                {/* CTA */}
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="mt-4 sm:mt-5 inline-flex items-center gap-2 
                  text-xs sm:text-sm font-medium text-teal-700 cursor-pointer"
                >
                  Read More
                  <span className="transition group-hover:translate-x-1">→</span>
                </motion.div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}