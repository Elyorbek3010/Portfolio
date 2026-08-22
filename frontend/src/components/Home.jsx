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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center pt-24 relative overflow-hidden"
    >
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 w-96 h-96 bg-blue-600/30 rounded-full filter blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full filter blur-[120px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <span className="text-sm md:text-base text-blue-400 font-mono bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)]">
              👋 Welcome to my universe
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 leading-tight tracking-tight">
            Hi, I'm <br/>
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
              Elyorbek
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl text-gray-300 mb-6 h-12 font-medium">
            {typedText}
            <motion.span 
              animate={{ opacity: [1, 0, 1] }} 
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="text-blue-400 ml-1"
            >|</motion.span>
          </motion.p>

          <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
            I craft highly interactive, full-stack digital experiences using{" "}
            <span className="text-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">React</span> for the frontend, combined with{" "}
            <span className="text-emerald-400 font-semibold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Django</span> &{" "}
            <span className="text-rose-400 font-semibold drop-shadow-[0_0_8px_rgba(251,113,133,0.5)]">Laravel</span> backends.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold
                         bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30
                         hover:shadow-blue-500/50 hover:from-blue-500 hover:to-indigo-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"/>
              <span className="relative z-10 flex items-center">
                Explore My Work
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-lg font-semibold
                         border-2 border-gray-700/50 bg-white/5 backdrop-blur-md text-gray-300
                         hover:border-blue-400/50 hover:text-white hover:bg-blue-400/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                         transition-all duration-300"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}