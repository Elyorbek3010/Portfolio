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
