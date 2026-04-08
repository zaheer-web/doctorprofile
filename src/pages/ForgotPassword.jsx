import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function ForgotPassword() {
  const location = useLocation();

  const [step, setStep] = useState(1);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [inputValue, setInputValue] = useState(
    location.state?.email || ""
  );

  const [timer, setTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false);

  const inputStyle =
    "w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition text-sm shadow-sm";

  // 🔥 SEND OTP
  const sendOtp = async () => {
    try {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 1000));
    } finally {
      setLoading(false);
    }
  };

  // ⏱ Timer
  useEffect(() => {
    let interval;

    if (step === 2 && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }

    if (timer === 0) setCanResend(true);

    return () => clearInterval(interval);
  }, [step, timer]);

  // 🔢 OTP input
  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const stepAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
    transition: { duration: 0.35 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200 px-4">

      <motion.div
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl 
        p-6 md:p-8 w-full max-w-xs md:max-w-sm border border-gray-200"
      >

        {/* Logo */}
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-gradient-to-br from-teal-700 to-teal-900 
          text-white w-10 h-10 flex items-center justify-center 
          rounded-xl font-bold shadow-md">
            D
          </div>
          <h1 className="text-lg font-semibold tracking-wide">
            DoctorCard
          </h1>
        </div>

        <AnimatePresence mode="wait">

          {/* STEP 1 */}
          {step === 1 && (
            <motion.div key="step1" {...stepAnimation} className="space-y-4">

              <h2 className="text-xl font-bold">
                Forgot Password 
              </h2>
              <p className="text-gray-500 text-sm">
                Enter your email or phone to get OTP
              </p>

              <div>
                <label className="text-xs text-gray-500">
                  EMAIL / PHONE
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="doctor@hospital.com"
                  className={inputStyle}
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                disabled={loading}
                onClick={async () => {
                  await sendOtp();
                  setStep(2);
                  setTimer(30);
                  setCanResend(false);
                }}
                className="w-full bg-gradient-to-r from-teal-700 to-teal-900 
                text-white py-2 rounded-lg shadow-lg disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send OTP →"}
              </motion.button>

            </motion.div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <motion.div key="step2" {...stepAnimation} className="space-y-5">

              <h2 className="text-xl font-bold text-center">
                Verify OTP
              </h2>

              <p className="text-center text-sm text-gray-500">
                Enter 4 digit code
              </p>

              {/* OTP BOX */}
              <div className="flex justify-center gap-3">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    maxLength="1"
                    value={digit}
                    onChange={(e) =>
                      handleChange(e.target.value, index)
                    }
                    className="w-12 h-12 text-center border border-gray-300 
                    rounded-xl text-lg shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                ))}
              </div>

              <div className="text-center text-sm h-6 flex items-center justify-center">

  <AnimatePresence mode="wait">
    {canResend ? (
      <motion.button
        key="resend"
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.05 }}
        onClick={async () => {
          await sendOtp();
          setTimer(30);
          setCanResend(false);
          setOtp(["", "", "", ""]);
        }}
        className="px-3 py-1 rounded-md bg-gradient-to-r 
        from-teal-700 to-teal-900 text-white text-xs shadow-md"
      >
         Resend OTP
      </motion.button>
    ) : (
      <motion.span
        key="timer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-gray-500"
      >
        Resend in <span className="text-teal-700 font-semibold">{timer}s</span>
      </motion.span>
    )}
  </AnimatePresence>

</div>
              {/* BUTTONS */}
              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="w-1/2 border py-2 rounded-lg text-sm hover:bg-gray-100"
                >
                  ← Back
                </button>

                <motion.button
                  whileTap={{ scale: 0.96 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setStep(3)}
                  className="w-1/2 bg-gradient-to-r from-teal-700 to-teal-900 
                  text-white py-2 rounded-lg shadow-lg"
                >
                  Verify
                </motion.button>
              </div>

            </motion.div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <motion.div key="step3" {...stepAnimation} className="space-y-4">

              <h2 className="text-xl font-bold text-center">
                Reset Password
              </h2>

              <div>
                <label className="text-xs text-gray-500">
                  NEW PASSWORD
                </label>
                <input
                  type="password"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500">
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  className={inputStyle}
                />
              </div>

              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.02 }}
                className="w-full bg-gradient-to-r from-teal-700 to-teal-900 
                text-white py-2 rounded-lg shadow-lg"
              >
                Reset Password
              </motion.button>

            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>
    </div>
  );
}