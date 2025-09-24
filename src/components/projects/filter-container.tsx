'use client'
import { useAtom } from "jotai";
import { selectedStore } from "./store";

const categories = [
  { id: 'all', name: 'All Projects', count: 3 },
  { id: 'web', name: 'Web Apps', count: 1 },
  { id: 'mobile', name: 'Mobile', count: 0 },
  { id: 'ui', name: 'UI/UX', count: 0 },
  { id: 'opensource', name: 'Open Source', count: 2 }
];

const projects = [
  {
    id: 1,
    title: 'Portofolio and personal blog',
    description: 'my other portofolio with personal blog features',
    category: 'web',
    technologies: ['AstroJs', 'TypeScript', 'Tailwind CSS', 'SolidJs'],
    demoUrl: 'https://portofolio-ikhwan.vercel.app',
    githubUrl: 'https://github.com/wanto-production/astro-portofolio',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Lenovo vantage for linux',
    description: 'Lenovo vantage for linux, build with tauri and svelte',
    category: 'opensource',
    technologies: ['Svelte', 'Tauri', 'Rust', 'Tailwind Css'],
    githubUrl: 'https://github.com/wanto-production/linux_vantage',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Telegram tiktok bot',
    description: 'Telegram bot who can install tiktok video without watermark',
    category: 'opensource',
    technologies: ['TypeScript', 'Bun', 'WebHook'],
    githubUrl: 'https://github.com/wanto-production/next_webhook',
    status: 'completed',
  },
];



export const ToggleFilter = () => {
  const [selectedCategory, setSelectedCategory] = useAtom(selectedStore)

  const switchCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => switchCategory(category.id)}
          className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${selectedCategory === category.id
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
        >
          {category.name}
          <span className="ml-2 px-2 py-0.5 bg-black/20 rounded-full text-xs">
            {category.count}
          </span>
        </button>
      ))}
    </div>

  )
}

export const ProjectGrid = () => {
  const [selectedCategory] = useAtom(selectedStore)

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);


  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'in-progress': return 'bg-yellow-500';
      case 'planning': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects.map((project) => (
        <div
          key={project.id}
          className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50 backdrop-blur-sm hover:border-gray-600/50 transition-all duration-500 hover:transform hover:-translate-y-2 flex flex-col"
        >
          {/* Project Image */}
          <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl opacity-30">
                {project.category === 'web' ? '🌐' :
                  project.category === 'mobile' ? '📱' :
                    project.category === 'ui' ? '🎨' : '🔧'}
              </div>
            </div>

            {/* Status */}
            <div className="absolute top-3 left-3">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(project.status)}`}></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col h-full">
            <div className="flex-1 space-y-4">
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            {/* Links - Always at bottom */}
            <div className="flex gap-2 mt-6">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg transition-colors duration-200"
                >
                  Demo
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-3 py-2 border border-gray-600 text-gray-300 hover:bg-gray-800 text-sm rounded-lg transition-all duration-200 ${project.demoUrl ? '' : 'flex-1 text-center'
                  }`}
              >
                Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
