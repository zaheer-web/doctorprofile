import { useState } from "react";

export default function AppointmentForm() {

  const [form, setForm] = useState({
    patientName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔥 Validation
    if (!form.patientName || !form.email || !form.date || !form.time) {
      alert("Please fill all required fields");
      return;
    }

    // 🔥 Get old data
    const existing = JSON.parse(localStorage.getItem("appointments")) || [];

    // 🔥 New appointment
    const newAppointment = {
      id: Date.now(),
      ...form,
      status: "pending",
      reason: "",
    };

    // 🔥 Save
    const updated = [...existing, newAppointment];
    localStorage.setItem("appointments", JSON.stringify(updated));

    alert("Appointment Booked Successfully ✅");

    // 🔥 Reset form
    setForm({
      patientName: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#0b1f1d] flex items-center justify-center p-4">

      <form
        onSubmit={handleSubmit}
        className="bg-[#112f2c] p-6 rounded-xl w-full max-w-md border border-teal-500/20"
      >

        <h2 className="text-xl font-semibold text-white mb-4">
          Book Appointment
        </h2>

        {/* NAME */}
        <input
          type="text"
          name="patientName"
          placeholder="Full Name"
          value={form.patientName}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-[#0d2d2a] text-white rounded"
        />

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-[#0d2d2a] text-white rounded"
        />

        {/* PHONE */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-[#0d2d2a] text-white rounded"
        />

        {/* DATE */}
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-[#0d2d2a] text-white rounded"
        />

        {/* TIME */}
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          className="w-full mb-3 p-2 bg-[#0d2d2a] text-white rounded"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Describe your problem..."
          value={form.message}
          onChange={handleChange}
          className="w-full mb-4 p-2 bg-[#0d2d2a] text-white rounded"
        />

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-teal-500 text-black py-2 rounded font-semibold hover:bg-teal-400 transition"
        >
          Book Appointment
        </button>

      </form>
    </div>
  );
}