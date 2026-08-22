import { useEffect, useState } from "react";
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
