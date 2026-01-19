import { useState, useEffect } from "react";

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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center pt-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="max-w-3xl">
          
          <div className="mb-4 inline-block">
            <span className="text-sm md:text-base text-blue-400 font-mono bg-blue-400/10 px-3 py-1 rounded-full border border-blue-400/20">
              👋 Welcome to my portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Elyorbek
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-3 h-10">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
          
          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-xl">
            Specializing in building beautiful, responsive web applications with{" "}
            <span className="text-blue-400 font-semibold">React</span> and{" "}
            <span className="text-green-400 font-semibold">Django</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-medium
                         bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                         transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10">View Projects</span>
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg text-base font-medium
                         border-2 border-gray-700 hover:border-blue-400 hover:text-blue-400 hover:bg-blue-400/5
                         transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}