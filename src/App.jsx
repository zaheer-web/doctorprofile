import './App.css';

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Footer from './pages/Footer';
import Features from './pages/Features';
import SeeProfile from './pages/SeeProfile';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Clinics from './pages/Clinics';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import VerifyOtp from './pages/VerifyOtp';

// 🔥 DASHBOARDS
import DoctorDashboard from './files/doctor/DoctorDashboard';
import AdminDashboard from './files/admin/AdminDashboard';

// 🔥 DOCTOR PAGES
import DoctorHome from './files/doctor/DoctorHome';
import Appointments from './files/doctor/Appointments';
import Profile from './files/doctor/Profile';
import DoctorEnquiries from './files/doctor/DoctorEnquiries';
import ChangeEmail from './files/doctor/ChangeEmail';


// 🔥 ADMIN PAGES
import AdminHome from './files/admin/AdminHome';
import Doctors from './files/admin/Doctors';
import Enquiries from './files/admin/Enquiries';

// 🔥 LAYOUT
import Layout from './dashboard/Layout';

// 🔥 AUTH
import { AuthProvider } from "./context/AuthContext";
import AdminRoute from "./routes/AdminRoute";
import DoctorRoute from "./routes/DoctorRoute";

import AppointmentForm from './component/profile/AppointmentForm';



// ✅ 🔥 FIXED SCROLL COMPONENT (NO SEPARATE FILE NEEDED)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // normal pages
    window.scrollTo(0, 0);

    // dashboard scroll container
    const main = document.getElementById("main-content");
    if (main) {
      main.scrollTo(0, 0);
    }

  }, [pathname]);

  return null;
}


// 👇 MAIN LOGIC
function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/doctor");

  return (
    <>
      {/* 🔥 SCROLL FIX */}
      <ScrollToTop />

      {!hideNavbar && <Navbar />}

      <Routes>

        {/* ✅ PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/see-profile" element={<SeeProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/clinics" element={<Clinics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/book" element={<AppointmentForm />} />

        {/* 🔥 DOCTOR ROUTES */}
        <Route
  path="/doctor"
  element={
    <DoctorRoute>
      <Layout role="doctor" />
    </DoctorRoute>
  }
>
  <Route index element={<DoctorHome />} />
  <Route path="appointments" element={<Appointments />} />
  <Route path="profile" element={<Profile />} />

  {/* ✅ NEW ROUTE */}
  <Route path="enquiries" element={<DoctorEnquiries/>} />
   <Route path="change-email" element={<ChangeEmail/>} />
  

</Route>

        {/* 🔥 ADMIN ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Layout role="admin" />
            </AdminRoute>
          }
        >
          <Route element={<AdminDashboard />}>
            <Route index element={<AdminHome />} />
            <Route path="doctors" element={<Doctors />} />
            <Route path="enquiries" element={<Enquiries />} />
          </Route>
        </Route>

      </Routes>

      {!hideNavbar && <Footer />}
    </>
  );
}


// 👇 MAIN APP
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;