import { useState } from "react";

export default function Profile() {
  const [tab, setTab] = useState("personal");
  const [profileImg, setProfileImg] = useState(null);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  // ✅ ALL DATA STATE
  const [formData, setFormData] = useState({
  name: "",
  phone: "",
  gender: "",
  dob: "",
  specialization: "",
  experience: "", // ✅ already used
  city: "",
  state: "",
  address: "",
  qualification: "",
  medicalReg: "", // ✅ ADD THIS
  clinicName: "",
  fee: "",
  zip: "",
  about: "",
  email: "karan@gmail.com",
});

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // ✅ IMAGE HANDLER
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 text-white bg-[#0b1f1d] min-h-full">

      {/* HEADER */}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">

        {/* LEFT SECTION */}
        <div className="lg:col-span-2 bg-[#112f2c] border border-teal-500/20 rounded-xl p-4 sm:p-5">

          {/* IMAGE + EMAIL */}
          <div className="mb-5">
            <label className="text-sm text-gray-400">Profile & Email</label>

            <div className="flex items-start justify-between gap-4 mt-2 flex-wrap">

              {/* IMAGE */}
              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-700 border border-teal-400/30">
                  {profileImg ? (
                    <img
                      src={profileImg}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-bold">
                      A
                    </div>
                  )}
                </div>

                <input
                  type="file"
                  accept="image/*"
                  id="profileUpload"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <label
                  htmlFor="profileUpload"
                  className="cursor-pointer px-4 py-2 rounded-lg 
                  bg-gradient-to-r from-teal-500 to-teal-700 
                  hover:from-teal-400 hover:to-teal-600
                  text-black text-sm font-medium shadow-md hover:shadow-lg transition"
                >
                  Change Profile
                </label>
              </div>

              {/* EMAIL RIGHT */}
              <div className="w-full sm:max-w-xs sm:ml-auto">
                <label className="text-sm text-gray-400">Email</label>

                <div className="flex gap-2 mt-1">
                  <input
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    disabled={!isEditingEmail}
                    className={`w-full p-2 sm:p-3 rounded-lg border outline-none
                    bg-[#0d2d2a] border-teal-500/20 
                    focus:border-teal-400
                    ${!isEditingEmail ? "opacity-60 cursor-not-allowed" : ""}`}
                  />

                  <button
                    onClick={() => setIsEditingEmail(!isEditingEmail)}
                    className="px-3 rounded-lg bg-teal-500 text-black text-xs font-medium hover:bg-teal-400"
                  >
                    {isEditingEmail ? "Save" : "Change"}
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* TABS */}
          <div className="flex gap-2 border-b border-teal-500/20 mb-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input label="Full Name" value={formData.name} onChange={(v)=>handleChange("name", v)} />
              <Input label="Phone" value={formData.phone} onChange={(v)=>handleChange("phone", v)} />
              <Input label="Gender" value={formData.gender} onChange={(v)=>handleChange("gender", v)} />
              <Input label="Date of Birth" value={formData.dob} onChange={(v)=>handleChange("dob", v)} />
              <Input label="Specialization" value={formData.specialization} onChange={(v)=>handleChange("specialization", v)} />
              <Input label="Experience" value={formData.experience} onChange={(v)=>handleChange("experience", v)} />
              <Input label="City" value={formData.city} onChange={(v)=>handleChange("city", v)} />
              <Input label="State" value={formData.state} onChange={(v)=>handleChange("state", v)} />

              <div className="sm:col-span-2">
                <Input label="Clinic Address" value={formData.address} onChange={(v)=>handleChange("address", v)} />
              </div>
            </div>
          )}

          {/* PROFESSIONAL */}
         {tab === "professional" && (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

    <Input 
      label="Qualification" 
      value={formData.qualification} 
      onChange={(v)=>handleChange("qualification", v)} 
    />

    <Input 
      label="Experience" 
      value={formData.experience} 
      onChange={(v)=>handleChange("experience", v)} 
    />

    <Input 
      label="Medical Reg No." 
      value={formData.medicalReg} 
      onChange={(v)=>handleChange("medicalReg", v)} 
    />

    <Input 
      label="Clinic Name" 
      value={formData.clinicName} 
      onChange={(v)=>handleChange("clinicName", v)} 
    />

    <Input 
      label="Consultation Fee ₹" 
      value={formData.fee} 
      onChange={(v)=>handleChange("fee", v)} 
    />

    <Input 
      label="Zip Code" 
      value={formData.zip} 
      onChange={(v)=>handleChange("zip", v)} 
    />

  </div>
)}

          {/* ABOUT */}
          {tab === "about" && (
            <textarea
              value={formData.about}
              onChange={(e)=>handleChange("about", e.target.value)}
              className="w-full p-3 bg-[#0d2d2a] rounded"
              rows="5"
              placeholder="About You"
            />
          )}

        </div>

        {/* PREVIEW */}
        <div className="bg-[#112f2c] border border-teal-500/20 rounded-xl p-4">

          <h2 className="mb-4 font-semibold">Profile Preview</h2>

          <div className="bg-gradient-to-br from-teal-600 to-teal-900 p-4 rounded-xl">

            {/* TOP */}
            <div className="flex gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-white overflow-hidden">
                {profileImg ? <img src={profileImg} /> : "A"}
              </div>

              <div>
                <h3 className="font-semibold">
                  {formData.name || "Your Name"}
                </h3>
                <p className="text-xs">
                  {formData.specialization || "Specialization"} • {formData.experience || "0"} yrs
                </p>
                <p className="text-xs">{formData.email}</p>
              </div>
            </div>

            {/* DETAILS */}
            <div className="text-xs space-y-1">
              <p>📞 {formData.phone || "N/A"}</p>
              <p>📍 {formData.city || "City"}, {formData.state || "State"}</p>
              <p>🏥 {formData.clinicName || "Clinic"}</p>
              <p>💰 ₹{formData.fee || "0"}</p>
              <p>📝 {formData.about || "No description"}</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}


// INPUT COMPONENT
function Input({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm text-gray-400">{label}</label>
      <input
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        placeholder={`Enter ${label}`}
        className="w-full mt-1 p-2 sm:p-3 rounded-lg bg-[#0d2d2a] border border-teal-500/20 focus:border-teal-400 outline-none"
      />
    </div>
  );
}