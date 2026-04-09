import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetailPage() {
  const { id } = useParams()
  const project = projects[Number(id)]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-cyan-400">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Project Not Found</h1>
          <Link to="/" className="text-cyan-300 underline hover:text-cyan-100">
            Return to Cockpit
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail min-h-screen p-8 max-w-3xl mx-auto">
      <Link
        to="/"
        className="inline-block mb-8 px-4 py-2 border border-cyan-800 text-cyan-400 hover:bg-cyan-900/30 hover:text-cyan-200 transition-colors rounded"
      >
        &larr; Return to Cockpit
      </Link>

      <div className="border border-cyan-900/60 bg-cyan-950/20 rounded-lg p-8">
        <h1 className="text-3xl text-cyan-300 mb-2 tracking-wider">{project.title}</h1>
        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs border border-cyan-800 text-cyan-400 rounded-full bg-cyan-950/30"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-cyan-700 text-cyan-300 rounded hover:bg-cyan-900/30 transition-colors"
          >
            Repository
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-cyan-700 text-cyan-300 rounded hover:bg-cyan-900/30 transition-colors"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
