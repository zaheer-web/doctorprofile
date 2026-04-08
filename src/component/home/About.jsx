export default function About() {
  const features = [
    {
      icon: "🌐",
      title: "Doctor Profile Page",
      desc: "A professional, SEO-optimised profile at doctorcard.in/yourname. Rank on Google when patients search your name or specialisation.",
    },
    {
      icon: "📅",
      title: "Appointment Scheduler",
      desc: "Let patients book consultations, follow-ups, and second opinions directly. Syncs with Google Calendar. Automated reminders reduce no-shows by 40%.",
    },
    {
      icon: "⭐",
      title: "Patient Reviews",
      desc: "Collect and showcase verified patient reviews. Build social proof that converts visitors into patients.",
    },
    {
      icon: "✍️",
      title: "Health Content Studio",
      desc: "Publish health tips, condition explainers, and medical insights. AI helps you write accurate content fast.",
    },
    {
      icon: "📬",
      title: "Patient Newsletter",
      desc: "Build and own your patient audience. Send updates, reminders, and health tips without relying on social media.",
    },
    {
      icon: "📊",
      title: "Practice Analytics",
      desc: "Track profile visits, patient behaviour, and conversions with powerful analytics.",
    },
  ];

  return (
    <section className="bg-teal-600 px-4 md:px-14 py-16 text-white">

      {/* Heading */}
      <div className="max-w-2xl">
        <div className="text-[10px] tracking-[2px] uppercase text-white/50 mb-3 font-mono">
          Everything You Need
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
          One platform. <br /> Your entire practice online.
        </h2>

        <p className="text-white/70 text-sm md:text-base mb-10">
          Stop using 5 different tools. DoctorCard replaces your booking page,
          website, review system, newsletter, and analytics — in one place.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-2xl mb-4">{item.icon}</div>

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-white/70 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}