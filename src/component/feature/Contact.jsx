export default function Contact() {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden bg-gradient-to-br from-white via-sky-50 to-blue-100">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.12),transparent_40%)]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>

        <p className="text-gray-700 mt-2">
          Have questions? We’re here to help.
        </p>

        {/* Form */}
        <div className="mt-6 max-w-md mx-auto bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/40">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-3 p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-3 p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <textarea
            placeholder="Message"
            rows="4"
            className="w-full mb-3 p-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button className="w-full bg-sky-500 text-white py-3 rounded-lg hover:bg-sky-600 transition shadow-md">
            Send Message
          </button>
        </div>
      </div>

    </section>
  );
}