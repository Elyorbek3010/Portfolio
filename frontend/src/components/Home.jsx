import { useState, useEffect } from "react";
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
