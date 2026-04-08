export default function Problems() {
  const data = [
    {
      num: "78%",
      title: "Patients Research Online First",
      desc: "Before calling your clinic, they Google you. If you're not on page 1, or your profile is incomplete, they book someone else.",
    },
    {
      num: "4+",
      title: "Tools Doctors Currently Use",
      desc: "Practo, Calendly, WordPress, Mailchimp — none talk to each other. Your time is too valuable for this.",
    },
    {
      num: "0",
      title: "Platforms Built for Doctors",
      desc: "Most platforms are marketplaces or directories. DoctorCard gives YOU your own identity and brand.",
    },
  ];

  return (
    <section className="bg-amber-50 px-4 md:px-14 py-20">

      {/* Heading */}
      <div className="mb-12 max-w-xl">
        <p className="text-[10px] tracking-[2px] uppercase text-teal-600 mb-3 font-mono">
          The Problem We're Solving
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight text-gray-900">
          Most doctors are <br /> invisible online.
        </h2>

        <p className="text-gray-600 text-sm md:text-base">
          78% of patients research their doctor online before booking. The tools doctors use today weren’t built for them.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-amber-100 rounded-xl border overflow-hidden">

        {data.map((item, index) => (
          <div
            key={index}
            className="relative bg-amber-50 p-8 hover:bg-amber-100 transition duration-300 group"
          >
            {/* Bottom line animation */}
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-teal-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

            {/* Number */}
            <span className="block text-5xl font-extrabold text-teal-600 mb-3">
              {item.num}
            </span>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}