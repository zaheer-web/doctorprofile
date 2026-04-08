export default function DoctorHome() {
  return (
    <div className="p-4 sm:p-6 text-white bg-gradient-to-br from-[#0b1f1d] to-[#0d2d2a] min-h-full">

      {/* Header */}
      <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
        Dashboard <span className="text-teal-300">Namaste, Karan Ji 🙏</span>
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

        {[ 
          { title: "PROFILE VIEWS", value: "120", sub: "Total views" },
          { title: "TOTAL ENQUIRIES", value: "25", sub: "5 new" },
          { title: "CONTACTED", value: "18", sub: "Replied" },
          { title: "PENDING", value: "7", sub: "Reply soon" },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-[#112f2c] border border-teal-500/20 rounded-xl p-4 shadow-md hover:border-teal-400 transition"
          >
            <p className="text-gray-400 text-xs sm:text-sm">{card.title}</p>
            <h2 className="text-lg sm:text-xl mt-2">{card.value}</h2>
            <p className="text-teal-300 text-xs sm:text-sm">{card.sub}</p>
          </div>
        ))}

      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Left */}
        <div className="lg:col-span-2 bg-[#112f2c] border border-teal-500/20 rounded-xl p-4 sm:p-5">

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
            <h2 className="text-base sm:text-lg font-semibold">
              Recent Enquiries
            </h2>
            <span className="text-teal-300 text-sm cursor-pointer hover:underline">
              See all →
            </span>
          </div>

          <p className="text-gray-400 text-center mt-6 sm:mt-10 text-sm">
            Koi enquiry nahi aayi abhi
          </p>

        </div>

        {/* Right */}
        <div className="bg-[#112f2c] border border-teal-500/20 rounded-xl p-4 sm:p-5">

          <h2 className="text-base sm:text-lg font-semibold mb-4">
            Profile Preview
          </h2>

          <div className="bg-gradient-to-br from-teal-600 to-teal-900 p-4 rounded-xl shadow-inner">

            <h3 className="font-semibold text-sm sm:text-base">
              Dr. Karan Desai
            </h3>
            <p className="text-xs sm:text-sm text-gray-200">
              Doctor • 2 yrs exp.
            </p>

            <div className="mt-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 bg-black/30 p-2 rounded">
              <span className="text-xs break-all">
                doctorcard.in/karan
              </span>
              <button className="text-xs bg-teal-500 px-2 py-1 rounded hover:bg-teal-400">
                Copy
              </button>
            </div>

            <div className="mt-3">
              <p className="text-xs mb-1">Profile Completeness</p>
              <div className="w-full h-2 bg-gray-700 rounded">
                <div className="w-[20%] h-2 bg-teal-300 rounded"></div>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}