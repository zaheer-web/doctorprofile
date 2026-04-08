import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ANIMATION */
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Third() {
  return (
    <div className="relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900"></div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.05),transparent_40%)]"></div>

      {/* HERO */}
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center px-6 md:px-16 py-20 text-white"
      >
        <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-semibold">
          Powerful Features for Modern Doctors
        </motion.h1>

        <motion.p variants={fadeUp} className="text-white/70 mt-4 max-w-2xl mx-auto">
          Everything you need to build your online presence and grow your practice.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link to="/signup">
            <button className="mt-6 bg-white text-teal-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow">
              Start Free Trial
            </button>
          </Link>
        </motion.div>
      </motion.section>

      {/* FEATURES GRID */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 px-6 md:px-20 pb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group 
            bg-white/10 backdrop-blur-md 
            p-6 rounded-2xl border border-white/20 
            shadow-lg hover:shadow-2xl transition-all duration-300"
          >

            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl 
            bg-white/10 text-white text-xl mb-4 
            group-hover:scale-110 transition">
              {item.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>

            {/* DESC */}
            <p className="text-white/70 text-sm mb-4">
              {item.desc}
            </p>

            {/* POINTS */}
            <ul className="space-y-1 text-sm">
              {item.points.map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-white/80">
                  <span className="text-green-400">✓</span> {p}
                </li>
              ))}
            </ul>

          </motion.div>
        ))}
      </motion.section>

      {/* CTA */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 text-center px-6 py-20 text-white"
      >
        <motion.h2 variants={fadeUp} className="text-3xl font-semibold">
          Start your online clinic today
        </motion.h2>

        <motion.p variants={fadeUp} className="text-white/70 mt-3">
          Join hundreds of doctors growing online.
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link to="/signup">
            <button className="mt-6 bg-white text-teal-800 px-6 py-3 rounded-lg hover:bg-gray-100 transition shadow">
              Get Started
            </button>
          </Link>
        </motion.div>
      </motion.section>

    </div>
  );
}

/* FEATURES DATA */
const features = [
  {
    icon: "🌐",
    title: "Doctor Website Builder",
    desc: "Create a professional medical website in minutes.",
    points: ["Profile page", "Clinic info", "Gallery"],
  },
  {
    icon: "📅",
    title: "Appointment Booking",
    desc: "Allow patients to book anytime.",
    points: ["24/7 booking", "Time slots", "Multiple services"],
  },
  {
    icon: "⭐",
    title: "Patient Reviews",
    desc: "Build trust with real feedback.",
    points: ["Ratings", "Testimonials", "Social proof"],
  },
  {
    icon: "📊",
    title: "Analytics Dashboard",
    desc: "Track your performance.",
    points: ["Visitors", "Appointments", "Insights"],
  },
  {
    icon: "✍️",
    title: "Health Blog",
    desc: "Share your knowledge.",
    points: ["Articles", "SEO", "Reach more patients"],
  },
  {
    icon: "🤖",
    title: "AI Assistant",
    desc: "Create content faster.",
    points: ["Auto blogs", "Smart suggestions", "Save time"],
  },
  {
    icon: "🏥",
    title: "Clinic Management",
    desc: "Manage multiple doctors.",
    points: ["Staff control", "Dashboard", "Multi-user"],
  },
  {
    icon: "🎨",
    title: "Custom Branding",
    desc: "Make it yours.",
    points: ["Custom domain", "Branding", "Professional look"],
  },
];