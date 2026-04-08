import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sectionsData = [
  {
    title: "1. Information We Collect",
    content:
      "We collect personal details such as name, email, phone number, and optional health-related data when required. We also store appointment history, consultation details, and technical device information to improve our services."
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your data helps us connect you with doctors, manage appointments, personalize healthcare experiences, and send important updates like reminders and notifications."
  },
  {
    title: "3. Sharing of Information",
    content:
      "We never sell your data. Your information is only shared with verified healthcare professionals or trusted partners when necessary to provide our services."
  },
  {
    title: "4. Data Security",
    content:
      "We use encryption, secure servers, and industry-standard practices to protect your data from unauthorized access, loss, or misuse."
  },
  {
    title: "5. Your Rights",
    content:
      "You can access, update, or delete your personal data anytime. You can also withdraw your consent or request complete removal of your data."
  },
  {
    title: "6. Cookies & Tracking",
    content:
      "We use cookies to improve your browsing experience, analyze traffic, and personalize content. You can disable cookies anytime in your browser settings."
  },
  {
    title: "7. Third-Party Services",
    content:
      "We may use third-party services like payment gateways or video consultations. These services have their own privacy policies."
  },
  {
    title: "8. Data Retention",
    content:
      "We retain your information only as long as necessary to provide services or comply with legal obligations."
  }
];

export default function Privacy() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen  px-4 py-12">

      <div className="max-w-5xl mx-auto">

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/90 backdrop-blur-xl border border-gray-200 
          rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 space-y-8 "
        >

          {/* HEADER */}
          <div className="flex flex-col sm:flex-row justify-between gap-5 border-b pb-6">

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 flex items-center justify-center 
              rounded-xl bg-gradient-to-br from-teal-700 to-teal-900 
              text-white font-bold shadow-md">
                D
              </div>
              <h1 className="text-lg font-semibold text-gray-900">
                DoctorCard
              </h1>
            </div>

            <div className="text-left sm:text-right">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Privacy Policy
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Secure • Transparent • Trusted
              </p>
            </div>

          </div>

          {/* INTRO */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            At <span className="font-semibold text-gray-900">DoctorCard</span>, 
            we are committed to protecting your personal and medical data. 
            This policy explains how we handle your information responsibly.
          </p>

          {/* ACCORDION */}
          <div className="space-y-4">

            {sectionsData.map((section, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >

                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center 
                  px-4 sm:px-5 py-3 text-left bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {section.title}
                  </span>

                  <span className="text-teal-700 text-lg">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>

                {/* CONTENT */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 sm:px-5 pb-4 text-gray-600 text-sm"
                    >
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}

          </div>

          {/* HIGHLIGHT */}
          <div className="bg-gradient-to-r from-teal-700 to-teal-900 
          text-white rounded-2xl p-6 shadow-lg">
            <h3 className="font-semibold text-base mb-2">
              Your Trust Matters ❤️
            </h3>
            <p className="text-sm text-white/90">
              We continuously improve our security systems to ensure your 
              healthcare data remains safe and confidential at all times.
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">
              Contact Us
            </h3>
            <p className="text-sm text-gray-600">
              support@doctorcard.com
            </p>
          </div>

          {/* FOOTER */}
          <div className="border-t pt-4 text-center text-xs text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </div>

        </motion.div>

      </div>
    </section>
  );
}