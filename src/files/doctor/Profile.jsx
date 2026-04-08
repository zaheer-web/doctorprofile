import { useState } from "react";

export default function Profile() {
  const [tab, setTab] = useState("personal");

  return (
    <div className="p-3 sm:p-4 md:p-6 text-white bg-[#0b1f1d] min-h-full">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">My Profile</h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Apni profile update karo — clients yahi dekhenge
          </p>
        </div>

        <button className="w-full sm:w-auto bg-teal-500 text-black px-4 py-2 rounded-lg hover:bg-teal-400">
          Save Changes
        </button>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* LEFT FORM */}
        <div className="lg:col-span-2 bg-[#112f2c] border border-teal-500/20 rounded-xl p-4 sm:p-5">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-teal-500/20 mb-4">
            {["personal", "professional", "about"].map((item) => (
              <button
                key={item}
                onClick={() => setTab(item)}
                className={`px-3 py-2 text-sm capitalize ${
                  tab === item
                    ? "border-b-2 border-teal-400 text-teal-300"
                    : "text-gray-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* PERSONAL */}
          {tab === "personal" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

              <Input label="Full Name" />
              <Input label="Email" value="karan@gmail.com" disabled />
              <Input label="Phone" disabled />
              <Input label="Gender" />
              <Input label="Date of Birth" />
              <Input label="Specialization" />
              <Input label="Experience" />
              <Input label="City" />
              <Input label="State" />

              <div className="sm:col-span-2">
                <Input label="Clinic Address" />
              </div>

            </div>
          )}

          {/* PROFESSIONAL */}
          {tab === "professional" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <Input label="Qualification" />
              <Input label="Experience" />
              <Input label="Medical Reg No." />
              <Input label="Clinic Name" />
              <Input label="Consultation Fee ₹" />
              <Input label="Zip Code" />
            </div>
          )}

          {/* ABOUT */}
          {tab === "about" && (
            <div>
              <label className="text-sm text-gray-400">About You</label>
              <textarea
                className="w-full mt-1 bg-[#0d2d2a] border border-teal-500/20 rounded-lg p-3 outline-none focus:border-teal-400"
                rows="5"
              />
            </div>
          )}

        </div>

        {/* RIGHT PREVIEW */}
        <div className="bg-[#112f2c] border border-teal-500/20 rounded-xl p-4 sm:p-5">

          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Profile Preview
          </h2>

          <div className="bg-gradient-to-br from-teal-600 to-teal-900 p-4 rounded-xl">

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold">
                A
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Your Name
                </h3>
                <p className="text-xs text-gray-200">
                  Doctor • Experience
                </p>
              </div>
            </div>

            <div className="bg-black/30 p-2 rounded flex justify-between text-xs">
              <span className="truncate">
                doctorcard.in/yourname
              </span>
              <button className="bg-teal-400 px-2 rounded text-black">
                Copy
              </button>
            </div>

            <div className="mt-3">
              <p className="text-xs mb-1">Profile Completeness</p>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="w-[10%] h-2 bg-teal-300 rounded"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


// INPUT
function Input({ label, value = "", disabled }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <input
        defaultValue={value}
        disabled={disabled}
        placeholder={`Enter ${label}`}
        className={`w-full mt-1 p-2 sm:p-3 rounded-lg border outline-none
        bg-[#0d2d2a] border-teal-500/20 
        focus:border-teal-400
        ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      />
    </div>
  );
}