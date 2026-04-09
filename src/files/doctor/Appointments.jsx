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
      reason: "",
    },
    {
      id: 2,
      patientName: "Ayan Sharma",
      email: "ayan@gmail.com",
      phone: "9875543210",
      date: "2026-04-10",
      time: "10:30",
      status: "pending",
      message: "Doctor sahab mujhe dard hai",
      reason: "",
    },
    {
      id: 3,
      patientName: "shivam Sharma",
      email: "zaheer@gmail.com",
      phone: "9875543210",
      date: "2026-04-10",
      time: "10:30",
      status: "pending",
      message: "Doctor sahab mujhe dard hai",
      reason: "",
    }
  ]);

  // 🔍 SEARCH
  const [search, setSearch] = useState("");

  // 🔥 FILTER
  const [filter, setFilter] = useState("all");

  // 🔥 MODALS
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [newDate, setNewDate] = useState("");
  const [newTime, setNewTime] = useState("");
  const [reason, setReason] = useState("");
  const [actionType, setActionType] = useState("");

  const [showMessage, setShowMessage] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState("");

  const [showReasonModal, setShowReasonModal] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");

  // 🔍 FILTER + SEARCH
  const filteredAppointments = appointments.filter(a => {
    const name = a.patientName.toLowerCase();
    const email = a.email.toLowerCase();
    const phone = a.phone;

    const matchSearch =
      name.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      phone.includes(search);

    if (filter === "accepted") return a.status === "confirmed" && matchSearch;
    if (filter === "rejected") return a.status === "cancelled" && matchSearch;
    if (filter === "rescheduled") return a.status === "rescheduled" && matchSearch;

    return matchSearch;
  });

  // 🔥 STATS
  const total = appointments.length;
  const accepted = appointments.filter(a => a.status === "confirmed").length;
  const rejected = appointments.filter(a => a.status === "cancelled").length;
  const rescheduled = appointments.filter(a => a.status === "rescheduled").length;

  // 🔥 ACTIONS
  const handleAccept = (id) => {
    setAppointments(prev =>
      prev.map(a =>
        a.id === id
          ? { ...a, status: "confirmed", reason: "" }
          : a
      )
    );
  };

  const openReject = (id) => {
    setSelectedId(id);
    setActionType("reject");
    setShowModal(true);
  };

  const openReschedule = (id) => {
    setSelectedId(id);
    setActionType("reschedule");
    setShowModal(true);
  };

  const handleSubmit = () => {
    setAppointments(prev =>
      prev.map(a => {
        if (a.id !== selectedId) return a;

        if (actionType === "reject") {
          return { ...a, status: "cancelled", reason };
        }

        if (actionType === "reschedule") {
          return {
            ...a,
            status: "rescheduled",
            date: newDate,
            time: newTime,
            reason,
          };
        }

        return a;
      })
    );

    setShowModal(false);
    setReason("");
    setNewDate("");
    setNewTime("");
  };

  const openMessage = (msg) => {
    setSelectedMessage(msg);
    setShowMessage(true);
  };

  const openReason = (r) => {
    setSelectedReason(r);
    setShowReasonModal(true);
  };

  return (
    <div className="p-4 md:p-6 text-white bg-[#0b1f1d] min-h-screen">

      <h1 className="text-xl md:text-2xl font-semibold mb-4">
        Appointments
      </h1>

      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 rounded bg-[#112f2c] w-full md:w-80"
      />

      {/* 🔥 FILTER */}
      <div className="flex flex-wrap gap-3 mb-6">
        <button onClick={() => setFilter("all")} className="px-3 py-1 bg-gray-700 rounded">
          All ({total})
        </button>
        <button onClick={() => setFilter("accepted")} className="px-3 py-1 bg-teal-500 text-black rounded">
          Accepted ({accepted})
        </button>
        <button onClick={() => setFilter("rejected")} className="px-3 py-1 bg-red-500 rounded">
          Rejected ({rejected})
        </button>
        <button onClick={() => setFilter("rescheduled")} className="px-3 py-1 bg-blue-500 rounded">
          Rescheduled ({rescheduled})
        </button>
      </div>

      {/* 🔥 TABLE */}
      <div className="bg-[#112f2c] border border-teal-500/20 rounded-xl overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-[#0d2d2a] text-teal-300">
            <tr>
              <th className="p-3">S.No</th>
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
            {filteredAppointments.map((appt, index) => (
              <tr key={appt.id} className="border-t border-teal-500/10">

                <td className="p-3">{index + 1}</td>

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
                    View All
                  </button>
                </td>

                <td className="p-3">
                  <span className="text-xs px-2 py-1 rounded bg-teal-500/20">
                    {appt.status}
                  </span>

                  {appt.reason && (
                    <div className="mt-1 max-w-[180px]">
                      <p className="text-xs text-red-300 line-clamp-2 break-words">
                        {appt.reason}
                      </p>

                      <button
                        onClick={() => openReason(appt.reason)}
                        className="text-teal-300 text-xs underline"
                      >
                        View More
                      </button>
                    </div>
                  )}
                </td>

                <td className="p-3 flex gap-2 flex-wrap">
                  <button onClick={() => handleAccept(appt.id)} className="bg-teal-500 text-black px-2 py-1 rounded text-xs">
                    Accept
                  </button>

                  <button onClick={() => openReject(appt.id)} className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">
                    Reject
                  </button>

                  <button onClick={() => openReschedule(appt.id)} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                    Reschedule
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔥 MESSAGE MODAL */}
      {showMessage && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-[#112f2c] p-6 rounded-xl w-[90%] max-w-lg">
            <p className="mb-4 whitespace-pre-wrap break-words">
              {selectedMessage}
            </p>
            <button onClick={() => setShowMessage(false)} className="w-full bg-teal-500 py-2 rounded text-black">
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🔥 REASON MODAL */}
      {showReasonModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-[#112f2c] p-6 rounded-xl w-[90%] max-w-lg">
            <p className="mb-4 whitespace-pre-wrap break-words">
              {selectedReason}
            </p>
            <button onClick={() => setShowReasonModal(false)} className="w-full bg-teal-500 py-2 rounded text-black">
              Close
            </button>
          </div>
        </div>
      )}

      {/* 🔥 ACTION MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-[#112f2c] p-6 rounded-xl w-80">

            {actionType === "reschedule" && (
              <>
                <input type="date" className="w-full mb-3 p-2 bg-[#0d2d2a]" onChange={(e) => setNewDate(e.target.value)} />
                <input type="time" className="w-full mb-3 p-2 bg-[#0d2d2a]" onChange={(e) => setNewTime(e.target.value)} />
              </>
            )}

            <textarea
              placeholder="Enter reason..."
              className="w-full mb-3 p-2 bg-[#0d2d2a]"
              onChange={(e) => setReason(e.target.value)}
            />

            <button onClick={handleSubmit} className="w-full bg-teal-500 py-2 rounded text-black">
              Submit
            </button>

          </div>
        </div>
      )}

    </div>
  );
}