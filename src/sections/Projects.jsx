import { motion } from 'framer-motion'
import { AlertCircle } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import Badge from '../components/Badge'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
            Featured Projects
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight">
            Academic work I&apos;m proud of
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Capstone and coursework projects built during my Software Engineering studies at DIU.
            Each project is a real academic deliverable — no fabricated results or live demos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: project.id * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
          {projects.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
              <AlertCircle size={48} className="mx-auto mb-4 text-text-muted" />
              <h3 className="text-lg font-semibold text-text-primary">No projects yet</h3>
              <p className="text-text-secondary mt-2">Projects will appear here as I complete them.</p>
            </div>
          )}
        </div>

        <div className="mt-16 flex justify-center gap-4 text-xs text-text-muted">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" /> Completed
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-amber-500" /> Ongoing
          </span>
        </div>
      </div>
    </section>
  )
}
