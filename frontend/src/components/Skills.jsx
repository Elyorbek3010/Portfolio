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
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 text-lg">
            Tools and frameworks I work with
          </p>
        </div>

        {/* ONE unified grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl
                         border border-gray-700/50 hover:border-gray-600
                         backdrop-blur-sm transition-all duration-300
                         hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              style={{ animation: `fadeInUp 0.5s ease-out ${index * 0.08}s both` }}
            >
              {/* Category badge */}
              <div className="absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full 
                              bg-white/10 text-gray-300 backdrop-blur">
                {skill.category}
              </div>

              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 
                            group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-3 transform transition-transform 
                                group-hover:scale-110 group-hover:rotate-6">
                  {skill.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white 
                               group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
