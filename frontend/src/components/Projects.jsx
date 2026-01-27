import { useEffect, useState } from "react";

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
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pt-24 pb-16 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-snug bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-lg">Some of my recent work</p>
        </div>

        {/* Loading */}
        {loading && <p className="text-gray-400">Loading projects...</p>}

        {/* Empty */}
        {!loading && projects.length === 0 && (
          <p className="text-gray-400">No projects yet.</p>
        )}

        {/* Projects */}
        <div className="grid gap-8 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() =>
                window.open(
                  project.live_link || project.github_link,
                  "_blank",
                  "noreferrer"
                )
              }
              className="group relative block cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/50 
                        rounded-2xl border border-gray-700/50 overflow-hidden
                        hover:border-gray-600 hover:shadow-2xl transition-all duration-500
                        hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
              }}
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 
                           group-hover:opacity-10 transition-opacity duration-500"
              ></div>

              <div className="relative z-10 p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 
                                  flex items-center justify-center text-2xl transform 
                                  group-hover:rotate-12 transition-transform duration-300">
                    📁
                  </div>
                  <span className="text-blue-400 opacity-0 group-hover:opacity-100 
                                  transform translate-x-2 group-hover:translate-x-0 
                                  transition-all duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 text-sm rounded-lg bg-blue-600 hover:bg-blue-700 transition"
                    >
                      Live Demo
                    </a>
                  )}

                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="px-4 py-2 text-sm rounded-lg border border-gray-600 hover:bg-gray-800 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
