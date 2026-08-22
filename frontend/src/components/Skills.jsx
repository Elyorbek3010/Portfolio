import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    // Frameworks
    { name: "React", icon: "⚛️", color: "from-blue-400 to-cyan-400", category: "Frameworks" },
    { name: "Django", icon: "🐍", color: "from-green-400 to-emerald-500", category: "Frameworks" },
    { name: "DRF", icon: "📡", color: "from-green-500 to-teal-500", category: "Frameworks" },
    { name: "FastAPI", icon: "⚡", color: "from-emerald-400 to-green-600", category: "Frameworks" },
    { name: "Laravel", icon: "🔥", color: "from-red-500 to-orange-500", category: "Frameworks" },

    // Styling
    { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-400 to-blue-500", category: "Styling" },

    // Databases
    { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-indigo-500", category: "Databases" },
    { name: "MySQL", icon: "🗄️", color: "from-orange-400 to-yellow-500", category: "Databases" },

    // Infrastructure
    { name: "Redis", icon: "⚡", color: "from-red-400 to-red-600", category: "Infrastructure" },
    { name: "Celery", icon: "⏳", color: "from-green-400 to-green-600", category: "Infrastructure" },
    { name: "Kafka", icon: "📊", color: "from-gray-400 to-gray-600", category: "Infrastructure" },

    // Tools
    { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600", category: "Tools" },
    { name: "Git", icon: "📦", color: "from-orange-400 to-red-500", category: "Tools" },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and frameworks I work with
          </p>
        </motion.div>

        {/* Infinite Scroll Marquee */}
        <div className="relative w-full flex overflow-hidden mask-image-linear group py-4">
          <div className="flex animate-marquee space-x-6 shrink-0 group-hover:[animation-play-state:paused]">
            {[...skills, ...skills, ...skills].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="w-48 h-48 bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700/50 
                           p-6 flex flex-col items-center justify-center transition-all duration-300
                           hover:bg-gray-800/60 hover:scale-105 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="text-5xl mb-4 transform transition-transform group-hover:scale-110 group-hover:-rotate-6">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors">{skill.name}</h3>
                <span className="text-xs text-gray-500 mt-2">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .mask-image-linear {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
