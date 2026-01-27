import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error.");
    }
  };

  // ✅ SIMPLE & RELIABLE EMAIL LINK
  const emailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=cm&to=adkhamove@gmail.com";

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white pt-24 pb-16 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg">
            Let's build something amazing together
          </p>
        </div>

        <div className="max-w-2xl">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-800
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           outline-none transition text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-800
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           outline-none transition text-sm md:text-base"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                name="message"
                rows="6"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Type your message here..."
                className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-800
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           outline-none transition resize-none text-sm md:text-base"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-medium
                         bg-gradient-to-r from-blue-500 to-purple-600
                         hover:from-blue-600 hover:to-purple-700
                         transition transform hover:scale-105
                         flex items-center justify-center gap-2"
            >
              Send Message →
            </button>
          </form>

          {status && (
            <p className="mt-4 text-sm text-gray-400">{status}</p>
          )}

          {/* SOCIAL LINKS */}
          <div className="mt-12 pt-12 border-t border-gray-800">
            <p className="text-gray-400 mb-2">Or connect with me on:</p>
            <p className="text-gray-500 text-sm mb-6">
              Preferred contact: <span className="text-white">Telegram</span> or{" "}
              <span className="text-white">Email</span>
            </p>

            <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap">
              <a
                href="https://github.com/Elyorbek3010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                           bg-gray-900/50 border border-gray-800 hover:border-blue-500
                           hover:bg-blue-500/10 transition text-sm font-medium"
              >
                💻 GitHub
              </a>

              <a
                href="https://linkedin.com/in/elyorbek-adhamov-2891b3380"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                           bg-gray-900/50 border border-gray-800 hover:border-blue-500
                           hover:bg-blue-500/10 transition text-sm font-medium"
              >
                💼 LinkedIn
              </a>

              {/* ✅ EMAIL */}
              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                           bg-gray-900/50 border border-gray-800 hover:border-blue-500
                           hover:bg-blue-500/10 transition text-sm font-medium"
              >
                📧 Email
              </a>

              <a
                href="https://t.me/Adhamov_3010"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                           bg-gray-900/50 border border-gray-800 hover:border-blue-500
                           hover:bg-blue-500/10 transition text-sm font-medium"
              >
                ✈️ Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
