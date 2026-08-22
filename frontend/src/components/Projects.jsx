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

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">Some of my recent work</p>
        </motion.div>

        {loading && <p className="text-gray-500">Loading projects...</p>}
        {!loading && projects.length === 0 && <p className="text-gray-500">No projects yet.</p>}

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => window.open(project.live_link || project.github_link, "_blank", "noreferrer")}
              className="flex flex-col cursor-pointer bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
            >
              {project.image_url ? (
                <div className="w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-900">
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-48 bg-gray-100 dark:bg-gray-900 flex items-center justify-center text-5xl">
                   📁
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
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
