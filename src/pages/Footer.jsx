import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t px-4 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

      {/* Left Logo */}
      <div className="flex items-center gap-2 font-serif text-lg font-bold text-gray-900">
        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-black text-sm">
          D
        </div>
        DoctorCard
      </div>

      {/* Center Links */}
      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
        <Link to="/privacy" className="hover:text-gray-900 transition">
          Privacy Policy
        </Link>
        <Link to="/terms" className="hover:text-gray-900 transition">
          Terms
        </Link>
        <Link to="/contact" className="hover:text-gray-900 transition">
          Contact
        </Link>
        <Link to="/clinics" className="hover:text-gray-900 transition">
          For Clinics
        </Link>
      </div>

      {/* Right Text */}
      <div className="text-xs text-gray-500 text-center md:text-right">
        © 2026 DoctorCard · India & UAE
      </div>

    </footer>
  );
}