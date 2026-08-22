import os

base_dir = r"c:\portfolio\frontend"

# 1. Update Projects.jsx to include dynamic icons based on description/title
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

  const getProjectIcon = (project) => {
    const text = (project.title + " " + project.description).toLowerCase();
    if (text.includes("react")) return "⚛️";
    if (text.includes("laravel")) return "🔥";
    if (text.includes("django") || text.includes("python")) return "🐍";
    if (text.includes("vue")) return "🟩";
    if (text.includes("node")) return "🟢";
    return "📁";
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        {loading && <p className="text-gray-500 text-center">Loading projects...</p>}
        {!loading && projects.length === 0 && <p className="text-gray-500 text-center">No projects yet.</p>}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              onClick={() => window.open(project.live_link || project.github_link, "_blank", "noreferrer")}
              className="group flex flex-col cursor-pointer bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-md hover:shadow-2xl transition-all"
            >
              {project.image_url ? (
                <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-900 relative">
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-xl shadow-lg border border-white/20">
                    {getProjectIcon(project)}
                  </div>
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-6xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors"></div>
                   <motion.div 
                     whileHover={{ rotate: 12, scale: 1.1 }} 
                     transition={{ type: "spring" }}
                   >
                     {getProjectIcon(project)}
                   </motion.div>
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
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

# 2. Update Skills.jsx to be animated (floating badges)
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
""")

# 3. Update Contact.jsx to have page scroll animation
contact_jsx = os.path.join(base_dir, "src", "components", "Contact.jsx")
with open(contact_jsx, "r", encoding="utf-8") as f:
    contact_content = f.read()

if "import { motion } from" not in contact_content:
    contact_content = "import { motion } from 'framer-motion';\n" + contact_content
    # Simple replace to wrap section content in motion.div
    contact_content = contact_content.replace(
        '<div className="max-w-6xl mx-auto px-6 relative z-10">',
        '<motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6 }} className="max-w-6xl mx-auto px-6 relative z-10">'
    )
    contact_content = contact_content.replace(
        '</form>\n          </div>\n        </div>\n      </div>',
        '</form>\n          </div>\n        </div>\n      </motion.div>'
    )
    with open(contact_jsx, "w", encoding="utf-8") as f:
        f.write(contact_content)

print("Updated animations and dynamic icons")
