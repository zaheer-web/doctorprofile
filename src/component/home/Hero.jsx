import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex items-center min-h-screen px-4 md:px-14 py-16 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_40%,rgba(11,79,95,0.05)_0%,transparent_60%),radial-gradient(ellipse_40%_40%_at_10%_80%,rgba(30,107,74,0.04)_0%,transparent_50%)]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(11,79,95,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(11,79,95,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 max-w-xl">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 rounded-full px-4 py-1 text-xs font-semibold text-teal-700 mb-6">
          <div className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-pulse"></div>
          Built for India & UAE doctors · Launching May 2026
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
          Patients are <br />
          <span className="text-teal-600 italic">searching for you.</span>
          <br />
          Be findable.
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
          DoctorCard gives every doctor and specialist a premium digital identity —
          your profile, appointment booking, patient reviews, content, and analytics in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          <Link to="/signup">
            <button className="bg-teal-500 text-white px-6 py-3 rounded-md text-sm hover:bg-teal-600 transition">
              Claim Your DoctorCard →
            </button>
          </Link>

          <Link to="/profile">
            <button className="border border-gray-300 px-6 py-3 rounded-md text-sm hover:bg-gray-100 transition">
              See a Live Profile
            </button>
          </Link>
        </div>

        {/* Proof */}
        <div className="flex items-center gap-3 text-sm text-gray-500 flex-wrap">
          
          {/* Avatars */}
          <div className="flex -space-x-2">
            {["D", "P", "A", "R", "S"].map((l, i) => (
              <div
                key={i}
                className="w-7 h-7 flex items-center justify-center rounded-full text-white text-xs font-bold border-2 border-white"
                style={{
                  backgroundColor: ["#14b8a6", "#22c55e", "#7A4A8A", "#8A6A2A", "#2A6A8A"][i],
                }}
              >
                {l}
              </div>
            ))}
          </div>

          <span>1,800+ doctors already on DoctorCard</span>

          <span className="text-yellow-500">★★★★★</span>
          <span>4.9/5</span>
        </div>
      </div>

      {/* RIGHT CARD */}
      <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 w-[320px]">

        <div className="bg-white border rounded-xl shadow-lg overflow-hidden">

          {/* Top */}
          <div className="bg-teal-500 p-6 text-center text-white">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full border-2 border-white/40 flex items-center justify-center text-xl font-bold bg-white/20">
              D
            </div>
            <div className="font-semibold text-lg">Dr. Priya Sharma</div>
            <div className="text-xs opacity-80">
              Cardiologist · Apollo Hospital, Delhi
            </div>
          </div>

          {/* Body */}
          <div className="p-4 text-sm">
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Specialisation</span>
              <span className="font-semibold">Cardiology</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Experience</span>
              <span className="font-semibold">14 Years</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Consultation Fee</span>
              <span className="font-semibold">₹800</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span className="text-gray-500">Next Available</span>
              <span className="font-semibold text-green-600">Today 4PM</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Rating</span>
              <span className="font-semibold">⭐ 4.9 (312)</span>
            </div>

            <button className="w-full mt-4 bg-teal-500 text-white py-2 rounded-md hover:bg-teal-600 transition">
              Book an Appointment
            </button>

            <div className="text-center text-xs text-teal-600 mt-2">
              doctorcard.in/priya
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}