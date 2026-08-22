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
