import { Link } from "react-router-dom";

export default function Price() {
  const plans = [
    {
      name: "Starter",
      price: "₹0",
      period: "Free forever",
      features: [
        { text: "Doctor profile page", available: true },
        { text: "1 appointment type", available: true },
        { text: "Basic SEO", available: true },
        { text: "Contact form", available: true },
        { text: "Patient reviews", available: false },
        { text: "Newsletter system", available: false },
        { text: "Analytics", available: false },
      ],
      button: "Get Started Free",
      link: "/signup",
      featured: false,
    },
    {
      name: "Pro",
      price: "₹1,499",
      period: "~AED 65/month",
      features: [
        { text: "Everything in Starter", available: true },
        { text: "Unlimited appointment types", available: true },
        { text: "Patient review management", available: true },
        { text: "Health content publishing", available: true },
        { text: "Newsletter + subscribers", available: true },
        { text: "Full analytics", available: true },
        { text: "AI content assistant", available: true },
      ],
      button: "Start 14-Day Trial",
      link: "/signup",
      featured: true,
    },
    {
      name: "Clinic",
      price: "₹4,999",
      period: "Up to 5 doctors · ~AED 215/month",
      features: [
        { text: "Everything in Pro × 5 doctors", available: true },
        { text: "Clinic landing page", available: true },
        { text: "Centralised admin", available: true },
        { text: "Staff management", available: true },
        { text: "Priority support", available: true },
        { text: "Custom domain", available: true },
        { text: "API access", available: true },
      ],
      button: "Contact Us",
      link: "/contact",
      featured: false,
    },
  ];

  return (
    <section className="bg-amber-100 px-4 md:px-14 py-20">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-[10px] tracking-[2px] uppercase text-teal-600 mb-3 font-mono">
          Pricing
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Simple, transparent pricing.
        </h2>

        <p className="text-gray-600 mt-2 text-sm md:text-base">
          No commissions. No per-appointment fees. Flat monthly subscription.
        </p>
      </div>

      {/* Plans */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl border p-6 shadow-sm ${
              plan.featured
                ? "border-teal-500 shadow-lg"
                : "border-gray-200"
            }`}
          >

            {/* Popular Tag */}
            {plan.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-teal-500 text-white text-[10px] px-3 py-1 rounded-full font-mono tracking-wider">
                MOST POPULAR
              </div>
            )}

            {/* Name */}
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-3 font-semibold">
              {plan.name}
            </div>

            {/* Price */}
            <div className="text-4xl font-extrabold text-gray-900 mb-1">
              {plan.price}
            </div>

            {/* Period */}
            <div className="text-sm text-gray-500 mb-5">
              {plan.period}
            </div>

            {/* Features */}
            <ul className="mb-6 space-y-2">
              {plan.features.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-center gap-2 text-sm ${
                    item.available
                      ? "text-gray-700"
                      : "text-gray-400"
                  }`}
                >
                  <span className={`font-bold ${
                    item.available ? "text-green-500" : "text-gray-400"
                  }`}>
                    {item.available ? "✓" : "–"}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link to={plan.link}>
              <button
                className={`w-full py-2 rounded-md text-sm transition ${
                  plan.featured
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "border border-gray-300 hover:bg-gray-100"
                }`}
              >
                {plan.button}
              </button>
            </Link>

          </div>
        ))}

      </div>
    </section>
  );
}