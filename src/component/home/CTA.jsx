import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-gray-200 py-24 px-4 flex items-center justify-center text-center">
      
      <div className="max-w-2xl">

        {/* Top small text */}
        <p className="text-[11px] tracking-[4px] uppercase text-teal-600 mb-6 font-mono">
          Start Today
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
          Your patients are <br />
          searching for you. <br />
          Be where they look.
        </h2>

        {/* Subtext */}
        <p className="text-gray-600 text-sm md:text-base mb-10 leading-relaxed">
          1,800+ doctors across India and UAE already on DoctorCard. 
          Claim your profile before someone in your specialisation does.
        </p>

        {/* CTA Button */}
        <Link to="/signup">
          <button className="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl text-sm md:text-base font-semibold shadow-md transition-all duration-300 hover:scale-105">
            Claim Your Free Profile →
          </button>
        </Link>

      </div>

    </section>
  );
}