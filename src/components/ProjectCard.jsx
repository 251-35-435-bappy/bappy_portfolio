import { motion } from 'framer-motion'
import { Link, Play } from 'lucide-react'
import Badge from '../components/Badge'

export default function ProjectCard({ project }) {
  const hasGithub = Boolean(project.github)
  const hasLive = Boolean(project.liveDemo)

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface hover:bg-surface-hover transition-all duration-300"
    >
      {/* Decorative accent top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-accent to-cyan opacity-80 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-6 h-6 rounded bg-primary text-[10px] text-white flex items-center justify-center font-bold">
            {project.number}
          </span>
          <Badge variant={project.statusColor === 'success' ? 'success' : 'warning'}>
            {project.status}
          </Badge>
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-2 leading-tight">{project.title}</h3>
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>

        {project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default">{tech}</Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="text-text-muted text-xs uppercase tracking-wider font-medium">
            {project.category}
          </span>
          <div className="flex items-center gap-3">
            {hasGithub && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors"
              >
                <Link size={14} /> GitHub
              </a>
            )}
            {hasLive && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="flex items-center gap-1.5 text-text-secondary hover:text-accent transition-colors"
              >
                <Play size={14} /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
