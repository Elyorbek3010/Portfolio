import os

base_dir = r"c:\portfolio\frontend"

# 1. Update index.css
index_css = os.path.join(base_dir, "src", "index.css")
with open(index_css, "w", encoding="utf-8") as f:
    f.write("""@import "tailwindcss";
@variant dark (&:where(.dark, .dark *));

html {
  scroll-behavior: smooth;
}

body {
  @apply bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300;
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Check initial theme
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
          ? "bg-white/90 dark:bg-black/90 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 shadow-sm dark:shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center text-gray-900 dark:text-white">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          My Portfolio
        </h1>

        <div className="flex items-center gap-6">
          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group py-2"
              >
                <span className="relative z-10 transition-colors group-hover:text-blue-500 dark:group-hover:text-blue-400">
                  {item}
                </span>
              </a>
            ))}
          </div>

          {/* THEME TOGGLE */}
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors text-xl"
            aria-label="Toggle theme"
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-2xl transition-transform hover:scale-110"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10">
          <div className="flex flex-col px-6 py-6 space-y-4 text-gray-900 dark:text-white">
            {["Home", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="text-base font-medium hover:text-blue-500 dark:hover:text-blue-400 transition-colors py-2 border-b border-gray-100 dark:border-white/5 last:border-0"
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
      className="min-h-screen bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 flex items-center pt-24 relative overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6 w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="flex-1"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4 inline-block">
            <span className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-mono bg-blue-100 dark:bg-blue-500/10 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-500/20">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            Hi, I'm <br/>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Elyorbek
            </span>
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6 h-10 font-medium">
            {typedText}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-blue-500 ml-1"
            >|</motion.span>
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-xl leading-relaxed">
            Specializing in full-stack web development using{" "}
            <span className="font-semibold text-gray-900 dark:text-white">React</span>,{" "}
            <span className="font-semibold text-gray-900 dark:text-white">Django</span> &{" "}
            <span className="font-semibold text-gray-900 dark:text-white">Laravel</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-medium
                         bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-lg font-medium
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700
                         hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Right side decoration / image placeholder */}
        <motion.div 
          className="flex-1 hidden md:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-20 dark:opacity-40 animate-pulse"></div>
            <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-full border-4 border-gray-100 dark:border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
               <span className="text-9xl">👨‍💻</span>
            </div>
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
    <section id="skills" className="py-24 bg-white dark:bg-black transition-colors duration-300 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A comprehensive list of technologies I use
          </p>
        </motion.div>

        {/* Clean Dense Grid instead of Marquee */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-3 px-6 py-4 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 
                         rounded-xl shadow-sm hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500/50 
                         transition-all cursor-default"
            >
              <span className="text-2xl">{skill.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-tight">{skill.name}</h3>
                <span className="text-xs text-gray-500 dark:text-gray-400">{skill.category}</span>
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
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        {loading && <p className="text-gray-500">Loading projects...</p>}
        {!loading && projects.length === 0 && <p className="text-gray-500">No projects yet.</p>}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => window.open(project.live_link || project.github_link, "_blank", "noreferrer")}
              className="flex flex-col cursor-pointer bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {project.image_url ? (
                <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-5xl">
                   📁
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                <div className="flex gap-3 mt-auto">
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 text-xs font-semibold rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
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

# 6. Update Contact.jsx (Ensure it respects light/dark)
contact_jsx = os.path.join(base_dir, "src", "components", "Contact.jsx")
if os.path.exists(contact_jsx):
    with open(contact_jsx, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Simple replacement to support dark mode colors in Contact
    content = content.replace("bg-gradient-to-b from-gray-900 to-black", "bg-white dark:bg-black transition-colors duration-300")
    content = content.replace("bg-gradient-to-br from-gray-800 to-gray-900", "bg-gray-50 dark:bg-gray-900")
    content = content.replace("text-white", "text-gray-900 dark:text-white")
    content = content.replace("text-gray-400", "text-gray-600 dark:text-gray-400")
    content = content.replace("text-gray-300", "text-gray-700 dark:text-gray-300")
    content = content.replace("bg-gray-900", "bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700")
    content = content.replace("bg-black/50", "bg-white dark:bg-black border border-gray-300 dark:border-gray-700")
    
    with open(contact_jsx, "w", encoding="utf-8") as f:
        f.write(content)

print("UI successfully updated for Dark Mode, new Skills grid, and refined Home page.")
