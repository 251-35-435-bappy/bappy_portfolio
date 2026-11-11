import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
            Experience &amp; Activities
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight">{experience.heading}</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">{experience.subheading}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {experience.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-6 hover:bg-surface-hover transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <Briefcase size={20} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">{item.role}</h3>
                <p className="text-text-secondary text-sm mb-3">{item.organization}</p>
                <div className="text-xs text-text-muted mb-4">{item.period}</div>
                <ul className="space-y-1 text-sm text-text-secondary">
                  {item.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {r}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
