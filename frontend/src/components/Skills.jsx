import { motion } from 'framer-motion';

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
    <section id="skills" className="py-24 bg-white dark:bg-black transition-colors duration-300 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400 bg-blue-500/10 px-4 py-1 rounded-2xl">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            A comprehensive list of technologies I use everyday
          </p>
        </motion.div>

        {/* Animated Grid */}
        <div className="flex flex-wrap justify-center gap-5 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, 
                type: "spring", 
                stiffness: 100 
              }}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: (index % 5) * 0.5 // staggered floating effect
                }}
                whileHover={{ scale: 1.1, y: -15, transition: { duration: 0.2 } }}
                className="group flex flex-col items-center gap-3 px-8 py-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md 
                           border border-gray-200 dark:border-gray-800 rounded-3xl shadow-lg 
                           hover:shadow-xl hover:shadow-blue-500/20 hover:border-blue-400/50 
                           transition-colors cursor-default min-w-[140px]"
              >
                <div className="text-4xl group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="text-center mt-2">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100 tracking-wide">{skill.name}</h3>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium uppercase tracking-wider">{skill.category}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
