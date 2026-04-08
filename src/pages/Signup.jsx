import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const inputStyle =
    "w-full border border-gray-300 rounded-xl px-4 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600";

  const handleSubmit = () => {
    navigate("/verify-otp", { state: { email } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4 py-6">

      {/* 🔥 WIDE CARD */}
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-3xl p-8">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Doctor Signup
        </h2>

        {/* STEP BAR */}
        <div className="flex items-center mb-8">
          {[1, 2, 3].map((num, i) => (
            <div key={num} className="flex items-center w-full">
              <div className={`w-9 h-9 flex items-center justify-center rounded-full font-bold
              ${step >= num ? "bg-teal-700 text-white" : "bg-gray-300"}`}>
                {num}
              </div>

              {i < 2 && (
                <div className="flex-1 h-[4px] mx-2 bg-gray-300">
                  <div
                    className="h-full bg-teal-700 transition-all"
                    style={{ width: step > num ? "100%" : "0%" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <AnimatePresence mode="wait">

          {/* ================= STEP 1 ================= */}
          {step === 1 && (
            <motion.div key="1" className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input name="fullName" placeholder="Full Name" className={inputStyle} />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className={inputStyle}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone" className={inputStyle} />
                <input name="password" type="password" placeholder="Password" className={inputStyle} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <select name="gender" className={inputStyle}>
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>

                <input type="date" name="dob" className={inputStyle} />
              </div>

              <input name="specialization" placeholder="Specialization" className={inputStyle} />

              <button
                onClick={() => setStep(2)}
                className="w-full bg-teal-700 text-white py-3 rounded-xl"
              >
                Next →
              </button>
            </motion.div>
          )}

          {/* ================= STEP 2 ================= */}
          {step === 2 && (
            <motion.div key="2" className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input name="qualification" placeholder="Qualification" className={inputStyle} />
                <input name="experience" placeholder="Experience (years)" className={inputStyle} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input name="medicalRegNumber" placeholder="Medical Reg No." className={inputStyle} />
                <input name="clinicName" placeholder="Clinic Name" className={inputStyle} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input name="consultationFee" type="number" placeholder="Consultation Fee ₹" className={inputStyle} />
                <input name="city" placeholder="City" className={inputStyle} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input name="state" placeholder="State" className={inputStyle} />
                <input name="zipCode" placeholder="Zip Code" className={inputStyle} />
              </div>

              <input name="clinicAddress" placeholder="Clinic Address" className={inputStyle} />
              <textarea name="bio" placeholder="Doctor Bio" className={inputStyle} />

              <div className="flex gap-4">
                <button onClick={() => setStep(1)} className="w-1/2 border py-3 rounded-xl">
                  Back
                </button>
                <button onClick={() => setStep(3)} className="w-1/2 bg-teal-700 text-white py-3 rounded-xl">
                  Next →
                </button>
              </div>
            </motion.div>
          )}

          {/* ================= STEP 3 ================= */}
          {step === 3 && (
            <motion.div key="3" className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input name="availableDays" placeholder="Available Days" className={inputStyle} />
                <select name="onlineConsultation" className={inputStyle}>
                  <option value="">Online Consultation?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input type="time" name="startTime" className={inputStyle} />
                <input type="time" name="endTime" className={inputStyle} />
              </div>

              <input type="file" name="profilePhoto" className={inputStyle} />

              <div className="flex gap-4">
                <button onClick={() => setStep(2)} className="w-1/2 border py-3 rounded-xl">
                  Back
                </button>
                <button
                  onClick={handleSubmit}
                  className="w-1/2 bg-teal-700 text-white py-3 rounded-xl"
                >
                  Submit
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>

        <p className="text-center mt-6 text-sm">
          Already have account?{" "}
          <Link to="/login" className="text-teal-700 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}