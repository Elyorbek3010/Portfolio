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
