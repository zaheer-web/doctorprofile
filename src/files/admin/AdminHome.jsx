import { useState } from "react";

export default function AdminHome() {

  // 🔥 JSON DATA DIRECT YAHI
  const initialDoctors = [
    {
      name: "Dr. Rahul Sharma",
      email: "rahul@gmail.com",
      profileUrl: "doctorcard.in/rahul",
      isPaid: true,
      amount: 499,
    },
    {
      name: "Dr. Priya Singh",
      email: "priya@gmail.com",
      profileUrl: null,
      isPaid: false,
      amount: 0,
    },
    {
      name: "Dr. Aman Verma",
      email: "aman@gmail.com",
      profileUrl: "doctorcard.in/aman",
      isPaid: true,
      amount: 499,
    },
  ];

  const [doctors, setDoctors] = useState(
    initialDoctors.map(doc => ({ ...doc, isBlocked: false }))
  );

  // 🔥 STATS
  const totalDoctors = doctors.length;
  const paidDoctors = doctors.filter(d => d.isPaid).length;
  const urlsGenerated = doctors.filter(d => d.profileUrl).length;
  const revenue = doctors.reduce((sum, d) => sum + d.amount, 0);

  // 🔥 BLOCK / UNBLOCK
  const toggleBlock = (index) => {
    const updated = [...doctors];
    updated[index].isBlocked = !updated[index].isBlocked;
    setDoctors(updated);
  };

  return (
    <div className="text-white">

      <h1 className="text-xl sm:text-2xl font-semibold mb-6">
        Admin Dashboard
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <Card title="Total Doctors" value={totalDoctors} />
        <Card title="URLs Generated" value={urlsGenerated} />
        <Card title="Paid Doctors" value={paidDoctors} />
        <Card title="Revenue ₹" value={revenue} />
      </div>

      {/* TABLE */}
      <div className="bg-[#112f2c] border border-teal-500/20 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-xs sm:text-sm">

            <thead className="text-gray-400 bg-black/20">
              <tr>
                <th className="p-3 text-left">Doctor</th>
                <th className="p-3 text-left">URL</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Payment</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doc, i) => (
                <tr key={i} className="border-t border-teal-500/10 hover:bg-white/5">

                  <td className="p-3">{doc.name}</td>

                  <td className="p-3">
                    {doc.profileUrl ? (
                      <a
                        href={`https://${doc.profileUrl}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`underline text-xs sm:text-sm ${
                          doc.isBlocked
                            ? "text-gray-500 line-through"
                            : "text-teal-400"
                        }`}
                      >
                        {doc.profileUrl}
                      </a>
                    ) : (
                      <span className="text-gray-500">Not Generated</span>
                    )}
                  </td>

                  <td className="p-3">
                    {doc.isBlocked ? (
                      <span className="text-red-400 text-xs">Blocked</span>
                    ) : (
                      <span className="text-green-400 text-xs">Active</span>
                    )}
                  </td>

                  <td className="p-3">
                    {doc.isPaid ? (
                      <span className="text-green-400 text-xs">Paid</span>
                    ) : (
                      <span className="text-red-400 text-xs">Unpaid</span>
                    )}
                  </td>

                  <td className="p-3">
                    {doc.profileUrl && (
                      <button
                        onClick={() => toggleBlock(i)}
                        className={`px-3 py-1 rounded text-xs ${
                          doc.isBlocked
                            ? "bg-green-500 text-black"
                            : "bg-red-500 text-white"
                        }`}
                      >
                        {doc.isBlocked ? "Unblock" : "Block"}
                      </button>
                    )}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}


// CARD
function Card({ title, value }) {
  return (
    <div className="bg-gradient-to-br from-[#112f2c] to-[#0d2d2a] border border-teal-500/20 p-4 rounded-xl">
      <p className="text-gray-400 text-xs sm:text-sm">{title}</p>
      <h2 className="text-lg sm:text-xl font-bold">{value}</h2>
    </div>
  );
}