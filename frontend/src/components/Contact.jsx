import { motion } from 'framer-motion';
import { useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch(`${API_BASE}/api/contact/`, {
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

  const handleEmailClick = () => {
    window.location.href = `mailto:adkhamove@gmail.com`;
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#111] text-gray-900 dark:text-white transition-colors duration-300">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, margin: "-100px" }} 
        transition={{ duration: 0.6 }} 
        className="max-w-4xl mx-auto px-6"
      >
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  placeholder="John Doe"
                  className="w-full p-3 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10
                             focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                             outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  placeholder="john@example.com"
                  className="w-full p-3 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10
                             focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                             outline-none transition text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea
                  name="message" rows="5" value={form.message} onChange={handleChange} required
                  placeholder="Your message..."
                  className="w-full p-3 rounded-lg bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10
                             focus:border-blue-500 focus:ring-1 focus:ring-blue-500
                             outline-none transition resize-none text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg text-sm font-semibold text-white
                           bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200
                           transition-colors shadow-sm"
              >
                Send Message
              </button>
            </form>
            {status && <p className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">{status}</p>}
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-6">Connect with me</h3>
            
            <div className="space-y-4">
              <a href="https://github.com/Elyorbek3010" target="_blank" rel="noreferrer" 
                 className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="text-xl">💻</span> GitHub
              </a>
              <a href="https://linkedin.com/in/elyorbek-adhamov-2891b3380" target="_blank" rel="noreferrer"
                 className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="text-xl">💼</span> LinkedIn
              </a>
              <button onClick={handleEmailClick} 
                 className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="text-xl">📧</span> Email (adkhamove@gmail.com)
              </button>
              <a href="https://t.me/Adhamov_3010" target="_blank" rel="noreferrer"
                 className="flex items-center gap-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <span className="text-xl">✈️</span> Telegram
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 text-sm text-gray-500">
              © {new Date().getFullYear()} Elyorbek Adhamov. All rights reserved.
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
