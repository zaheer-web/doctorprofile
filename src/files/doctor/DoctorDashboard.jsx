import { Outlet } from "react-router-dom";

export default function DoctorDashboard() {
  return (
    <div>
     

      {/* 👇 yaha child pages render honge */}
      <Outlet />
    </div>
  );
}