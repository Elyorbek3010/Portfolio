import os

base_dir = r"c:\portfolio\frontend"

# 1. Update index.css for Inter Font
index_css = os.path.join(base_dir, "src", "index.css")
with open(index_css, "w", encoding="utf-8") as f:
    f.write("""@import "tailwindcss";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

@variant dark (&:where(.dark, .dark *));

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  @apply bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-gray-100 transition-colors duration-300;
  -webkit-font-smoothing: antialiased;
}
""")

# 2. Update Navbar.jsx
navbar_jsx = os.path.join(base_dir, "src", "components", "Navbar.jsx")
with open(navbar_jsx, "w", encoding="utf-8") as f:
    f.write("""import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    
    if (document.documentElement.classList.contains('dark') || 
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-gray-900 dark:text-white">
        
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-gray-400 font-normal">&lt;</span>
          Elyorbek 
          <span className="text-blue-600 dark:text-blue-500"> /</span>
          <span className="text-gray-400 font-normal">&gt;</span>
        </h1>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button 
            onClick={toggleTheme} 
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <button
            className="md:hidden text-gray-500"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10">
          <div className="flex flex-col px-6 py-4 space-y-4">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
""")

# 3. Update Home.jsx
home_jsx = os.path.join(base_dir, "src", "components", "Home.jsx")
with open(home_jsx, "w", encoding="utf-8") as f:
    f.write("""import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full-Stack Developer';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-white dark:bg-[#0a0a0a] flex items-center pt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-6 inline-block">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wide uppercase">
              Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 text-gray-900 dark:text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-blue-600 dark:text-blue-500">
              Elyorbek.
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 h-10 font-medium tracking-tight">
            I am a {typedText}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-blue-600 dark:text-blue-500 ml-1"
            >|</motion.span>
          </p>

          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
            I engineer scalable, high-performance web applications using modern technologies like React, Django, and Laravel. Focused on clean code and robust architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold
                         bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors shadow-sm"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md text-sm font-semibold
                         bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 
                         dark:bg-[#0a0a0a] dark:text-white dark:border-white/10 dark:hover:bg-white/5 transition-colors shadow-sm"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
""")

# 4. Update Skills.jsx
skills_jsx = os.path.join(base_dir, "src", "components", "Skills.jsx")
with open(skills_jsx, "w", encoding="utf-8") as f:
    f.write("""import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "JavaScript", icon: "💛", category: "Frontend" },
    { name: "Tailwind", icon: "🎨", category: "Frontend" },
    { name: "Django", icon: "🐍", category: "Backend" },
    { name: "DRF", icon: "📡", category: "Backend" },
    { name: "FastAPI", icon: "⚡", category: "Backend" },
    { name: "Laravel", icon: "🔥", category: "Backend" },
    { name: "PostgreSQL", icon: "🐘", category: "Database" },
    { name: "MySQL", icon: "🗄️", category: "Database" },
    { name: "Redis", icon: "⚡", category: "Infra" },
    { name: "Celery", icon: "⏳", category: "Infra" },
    { name: "Docker", icon: "🐳", category: "Tools" },
    { name: "Git", icon: "📦", category: "Tools" },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-[#111] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Technical Arsenal
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            A curated list of frameworks, databases, and tools I use to build production-ready applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/5 
                         rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-default"
            >
              <span className="text-xl">{skill.icon}</span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">{skill.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 dark:text-gray-500 font-medium">{skill.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
""")

# 5. Update Projects.jsx
projects_jsx = os.path.join(base_dir, "src", "components", "Projects.jsx")
with open(projects_jsx, "w", encoding="utf-8") as f:
    f.write("""import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/api/projects/`)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.results ?? data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white tracking-tight">
            Selected Work
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">A showcase of full-stack applications and projects I've built.</p>
        </motion.div>

        {loading && <p className="text-gray-500 text-sm">Loading projects...</p>}
        {!loading && projects.length === 0 && <p className="text-gray-500 text-sm">No projects available.</p>}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => window.open(project.live_link || project.github_link, "_blank", "noreferrer")}
              className="group flex flex-col cursor-pointer bg-white dark:bg-[#111] rounded-xl border border-gray-200 dark:border-white/10 overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              {project.image_url ? (
                <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-[#1a1a1a]">
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-100 dark:bg-[#1a1a1a] flex items-center justify-center text-4xl border-b border-gray-100 dark:border-white/5">
                   <div className="text-gray-400 dark:text-gray-600 transition-colors group-hover:text-blue-500">
                     📁
                   </div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-auto">
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-3 py-1.5 text-xs font-semibold rounded bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-3 py-1.5 text-xs font-semibold rounded bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-white/20 transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
""")

# 6. Update Contact.jsx
contact_jsx = os.path.join(base_dir, "src", "components", "Contact.jsx")
with open(contact_jsx, "w", encoding="utf-8") as f:
    f.write("""import { motion } from 'framer-motion';
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
""")

print("Applied Minimalist Premium UI Design System.")
