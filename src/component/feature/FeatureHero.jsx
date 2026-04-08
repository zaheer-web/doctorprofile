import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FeatureHero() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">

      {/* BACKGROUND (Same teal gradient) */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900"></div>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_40%)]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold"
        >
          Build Your Doctor Website in Minutes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-white/70 max-w-xl mx-auto"
        >
          Create your professional medical website, manage appointments, and grow your clinic online.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex justify-center gap-4 flex-col sm:flex-row"
        >
          <Link to="/signup">
            <button className="px-6 py-3 rounded-lg bg-white text-teal-800 font-medium hover:bg-gray-100 transition shadow">
              Start Free
            </button>
          </Link>

          <Link to="/features">
            <button className="px-6 py-3 rounded-lg border border-white/30 text-white hover:bg-white/10 transition">
              Explore Features
            </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}