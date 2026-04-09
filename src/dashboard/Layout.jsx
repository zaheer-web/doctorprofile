import Sidebar from "./Sidebar";
import DoctorHeader from "../files/doctor/DoctorHeader";
import { Outlet } from "react-router-dom";

export default function Layout({ role }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">

      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Right Side */}
      <div className="flex-1 flex flex-col bg-[#0b1f1d] min-w-0">

        {/* Header */}
        {role === "doctor" && <DoctorHeader />}

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6">
          <div className="w-full max-w-full">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}