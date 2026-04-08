import { useState } from "react";

export default function Appointments() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patientName: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      date: "2026-04-10",
      time: "10:30",
      status: "pending",
      message: "Doctor sahab mujhe chest pain ho raha hai",
    },
    {
      id: 2,
      patientName: "Priya Verma",
      email: "priya@gmail.com",
      phone: "9998887776",
      date: "2026-04-11",
      time: "14:00",
      status: "confirmed",
      message: "General checkup ke liye appointment chahiye",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");

  const [showMessage, setShowMessage] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  const updateStatus = (id, status) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status } : a))
    );
  };

  const openReschedule = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleReschedule = () => {
    setAppointments((prev) =>
      prev.map((a) =>
        a.id === selectedId ? { ...a, date: newDate, time: newTime } : a
      )
    );
    setShowModal(false);
  };

  const openMessage = (msg) => {
    setSelectedMessage(msg);
    setShowMessage(true);
  };

  return (
    <div className="p-4 md:p-6 text-white bg-[#0b1f1d] min-h-full">

      <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Appointments
      </h1>

      {/* ✅ DESKTOP TABLE */}
      <div className="hidden md:block bg-[#112f2c] border border-teal-500/20 rounded-xl overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-[#0d2d2a] text-teal-300">
            <tr>
              <th className="p-3 text-left">Patient</th>
              <th className="p-3 text-left">Contact</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Time</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border-t border-teal-500/10">

                <td className="p-3">
                  <p className="font-semibold">{appt.patientName}</p>
                  <p className="text-gray-400 text-xs">{appt.email}</p>
                </td>

                <td className="p-3">{appt.phone}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.time}</td>

                <td className="p-3 max-w-[200px]">
                  <p className="text-xs line-clamp-2">{appt.message}</p>
                  <button
                    onClick={() => openMessage(appt.message)}
                    className="text-teal-300 text-xs underline"
                  >
                    View
                  </button>
                </td>

                <td className="p-3">
                  <span className="text-xs px-2 py-1 rounded bg-teal-500/20 text-teal-300">
                    {appt.status}
                  </span>
                </td>

                <td className="p-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => updateStatus(appt.id, "confirmed")}
                    className="bg-teal-500 text-black px-2 py-1 rounded text-xs"
                  >
                    Accept
                  </button>

                  <button
                    onClick={() => updateStatus(appt.id, "cancelled")}
                    className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() => openReschedule(appt.id)}
                    className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs"
                  >
                    Reschedule
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ MOBILE CARD VIEW */}
      <div className="md:hidden space-y-4">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-[#112f2c] border border-teal-500/20 rounded-xl p-4"
          >

            <div className="mb-2">
              <h2 className="font-semibold">{appt.patientName}</h2>
              <p className="text-xs text-gray-400">{appt.email}</p>
            </div>

            <p className="text-sm">📞 {appt.phone}</p>
            <p className="text-sm">📅 {appt.date}</p>
            <p className="text-sm">⏰ {appt.time}</p>

            <p className="text-xs mt-2 text-gray-300">
              {appt.message}
            </p>

            <span className="inline-block mt-2 text-xs px-2 py-1 rounded bg-teal-500/20">
              {appt.status}
            </span>

            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => updateStatus(appt.id, "confirmed")}
                className="bg-teal-500 text-black px-3 py-1 rounded text-xs"
              >
                Accept
              </button>

              <button
                onClick={() => updateStatus(appt.id, "cancelled")}
                className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-xs"
              >
                Reject
              </button>

              <button
                onClick={() => openReschedule(appt.id)}
                className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded text-xs"
              >
                Reschedule
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* MODALS SAME RAHENGE (NO CHANGE) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

          <div className="bg-[#112f2c] p-6 rounded-xl w-80">

            <input
              type="date"
              className="w-full mb-3 p-2 bg-[#0d2d2a]"
              onChange={(e) => setNewDate(e.target.value)}
            />

            <input
              type="time"
              className="w-full mb-3 p-2 bg-[#0d2d2a]"
              onChange={(e) => setNewTime(e.target.value)}
            />

            <button
              onClick={handleReschedule}
              className="w-full bg-teal-500 text-black py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>
      )}

      {showMessage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

          <div className="bg-[#112f2c] p-6 rounded-xl w-80">
            <p className="mb-4">{selectedMessage}</p>
            <button
              onClick={() => setShowMessage(false)}
              className="w-full bg-teal-500 text-black py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}