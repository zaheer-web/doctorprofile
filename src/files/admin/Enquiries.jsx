

import { useState } from "react";

export default function Enquiries() {

  // 🔥 Dummy Data (baad me API se aayega)
  const [enquiries, setEnquiries] = useState([
    {
      name: "Dr. Rahul Sharma",
      email: "rahul@gmail.com",
      message: "Mujhe profile update me issue aa raha hai",
      status: "pending",
      date: "2026-04-08",
    },
    {
      name: "Dr. Priya Singh",
      email: "priya@gmail.com",
      message: "Payment complete ho gaya hai but reflect nahi ho raha",
      status: "resolved",
      date: "2026-04-07",
    },
  ]);

  const markResolved = (index) => {
    const updated = [...enquiries];
    updated[index].status = "resolved";
    setEnquiries(updated);
  };

  return (
    <div className="text-white">

      {/* 🔥 HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold">
            Enquiries
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm">
            Doctors ke issues aur queries manage karo
          </p>
        </div>
      </div>

      {/* 🔥 ENQUIRIES LIST */}
      <div className="space-y-4">

        {enquiries.map((item, i) => (
          <div
            key={i}
            className="bg-[#112f2c] border border-teal-500/20 rounded-xl p-4 sm:p-5 flex flex-col gap-4"
          >

            {/* TOP */}
            <div className="flex flex-col sm:flex-row justify-between gap-2">

              <div>
                <h2 className="font-semibold text-sm sm:text-base">
                  {item.name}
                </h2>
                <p className="text-xs text-gray-400">
                  {item.email}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="text-gray-400">
                  {item.date}
                </span>

                {item.status === "pending" ? (
                  <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                    Pending
                  </span>
                ) : (
                  <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">
                    Resolved
                  </span>
                )}
              </div>

            </div>

            {/* MESSAGE */}
            <p className="text-sm text-gray-200 bg-black/20 p-3 rounded">
              {item.message}
            </p>

            {/* ACTION */}
            <div className="flex flex-col sm:flex-row gap-2 sm:justify-end">

              {item.status === "pending" && (
                <button
                  onClick={() => markResolved(i)}
                  className="bg-teal-500 text-black px-4 py-2 rounded hover:bg-teal-400 text-sm"
                >
                  Mark as Resolved
                </button>
              )}

              <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 text-sm">
                Reply
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}