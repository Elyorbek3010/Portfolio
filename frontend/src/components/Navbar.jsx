import { useState, useEffect } from "react";
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
