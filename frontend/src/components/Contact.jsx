import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.type === "textarea" ? "message" : e.target.type === "email" ? "email" : "name"]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white pt-24 pb-16 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>

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
            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe"
                required
                className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm text-white 
                           border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           transition-all duration-300 outline-none text-sm md:text-base"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="john@example.com"
                required
                className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm text-white 
                           border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           transition-all duration-300 outline-none text-sm md:text-base"
              />
            </div>

            <div className="group">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Your Message
              </label>
              <textarea
                rows="6"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                required
                className="w-full p-4 rounded-xl bg-gray-900/50 backdrop-blur-sm text-white 
                           border border-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                           transition-all duration-300 outline-none resize-none text-sm md:text-base"
              />
            </div>

            <button
              type="submit"
              className="group relative w-full sm:w-auto px-8 py-4 rounded-xl text-base font-medium
                         bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                         transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50
                         flex items-center justify-center gap-2"
            >
              <span>Send Message</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>

          {status && (
            <p className="mt-4 text-sm text-gray-400">{status}</p>
          )}

          <div className="mt-12 pt-12 border-t border-gray-800">
            <p className="text-gray-400 mb-6">Or connect with me on:</p>
            <div className="flex gap-4">
              {[
                { name: "GitHub", icon: "💻", link: "#" },
                { name: "LinkedIn", icon: "💼", link: "#" },
                { name: "Twitter", icon: "🐦", link: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900/50 border border-gray-800
                             hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300
                             text-sm font-medium"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
