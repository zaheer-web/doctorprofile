import React, { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    sub: "Free forever",
    features: [
      "Doctor profile page",
      "1 appointment type",
      "Basic SEO",
      "Contact form",
    ],
    disabled: ["Patient reviews", "Newsletter system", "Analytics"],
    btn: "Get Started Free",
  },
  {
    name: "Pro",
    price: "₹1,499",
    sub: "/mo",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Everything in Starter",
      "Unlimited appointment types",
      "Patient review management",
      "Health content publishing",
      "Newsletter + subscribers",
      "Full analytics",
      "AI content assistant",
    ],
    btn: "Start 14-Day Trial",
  },
  {
    name: "Clinic",
    price: "₹4,999",
    sub: "/mo",
    features: [
      "Everything in Pro × 5 doctors",
      "Clinic landing page",
      "Centralised admin",
      "Staff management",
      "Priority support",
      "Custom domain",
      "API access",
    ],
    btn: "Contact Us",
  },
];

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel your subscription anytime without any hidden charges.",
    },
    {
      q: "Do you offer a free trial?",
      a: "Yes, our Pro plan includes a 14-day free trial with full features.",
    },
    {
      q: "Is my data secure?",
      a: "We use industry-standard encryption and security practices to protect your data.",
    },
    {
      q: "Can I upgrade later?",
      a: "Yes, you can upgrade or downgrade your plan anytime.",
    },
  ];

  return (
<section className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

  <div className="max-w-7xl mx-auto">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12 sm:mb-16"
    >
      <p className="text-xs tracking-widest text-teal-700 font-semibold">
        PRICING
      </p>

      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 leading-tight">
        Simple, transparent pricing.
      </h1>

      <p className="text-gray-500 mt-3 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
        No commissions. No per-appointment fees.
      </p>
    </motion.div>

    {/* PRICING CARDS */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">

      {plans.map((plan, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ y: -10 }}
          className={`relative flex flex-col justify-between rounded-3xl p-5 sm:p-6 lg:p-7 shadow-md border transition-all
          ${
            plan.highlight
              ? "border-teal-700 bg-white scale-[1.02] sm:scale-105 shadow-xl"
              : "bg-white/90 border-gray-200 hover:shadow-xl"
          }`}
        >

          {/* BADGE */}
          {plan.badge && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-700 text-white text-[10px] sm:text-xs px-3 py-1 rounded-full shadow">
              {plan.badge}
            </div>
          )}

          {/* TOP CONTENT */}
          <div>
            <h3 className="text-xs sm:text-sm text-gray-500 mb-2">
              {plan.name.toUpperCase()}
            </h3>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              {plan.price}
              <span className="text-xs sm:text-sm text-gray-500 ml-1">
                {plan.sub}
              </span>
            </h2>

            {/* FEATURES */}
            <div className="mt-5 space-y-2 sm:space-y-3 text-xs sm:text-sm">
              {plan.features.map((f, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-teal-600">✔</span>
                  <span>{f}</span>
                </div>
              ))}

              {plan.disabled?.map((f, idx) => (
                <div key={idx} className="flex gap-2 text-gray-400">
                  — {f}
                </div>
              ))}
            </div>
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`w-full mt-6 sm:mt-8 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium
            ${
              plan.highlight
                ? "bg-gradient-to-r from-teal-700 to-teal-900 text-white shadow-lg hover:shadow-xl"
                : "border border-gray-300 hover:bg-gray-50"
            }`}
          >
            {plan.btn}
          </motion.button>

        </motion.div>
      ))}
    </div>

    {/* FAQ */}
    <div className="mt-16 sm:mt-20 lg:mt-24 max-w-3xl mx-auto px-1 sm:px-0">

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center mb-8 sm:mb-10 text-gray-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3 sm:space-y-4">

        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-xl sm:rounded-2xl border backdrop-blur-xl overflow-hidden transition-all
              ${
                isOpen
                  ? "bg-white border-teal-600 shadow-md"
                  : "bg-white/80 border-gray-200 hover:border-teal-400 hover:shadow-md"
              }`}
            >

              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className={`w-full flex justify-between items-center p-3 sm:p-4 text-left transition
                ${
                  isOpen
                    ? "bg-gradient-to-r from-teal-700 to-teal-900 text-white"
                    : "hover:bg-teal-50"
                }`}
              >
                <span className="font-medium text-xs sm:text-sm md:text-base pr-3">
                  {faq.q}
                </span>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  className={`text-base sm:text-lg flex-shrink-0 ${
                    isOpen ? "text-white" : "text-teal-700"
                  }`}
                >
                  ⌄
                </motion.span>
              </button>

              {/* ANSWER */}
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="p-3 sm:p-4 text-xs sm:text-sm text-gray-600 bg-white leading-relaxed">
                  {faq.a}
                </div>
              </motion.div>

            </motion.div>
          );
        })}

      </div>
    </div>

  </div>
</section>
  );
}