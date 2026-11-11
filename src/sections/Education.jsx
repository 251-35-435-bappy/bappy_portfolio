import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Badge from '../components/Badge'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
            Education
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight">
            Academic background
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          {/* Timeline connector line */}
          <div className="absolute left-[28px] top-8 bottom-8 w-0.5 bg-border" />

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative mb-16 pl-12"
            >
              <div className="absolute left-0 top-2 w-6 h-6 rounded-full border-4 border-primary bg-dark-800 z-10" />
              <div className="absolute left-24 top-2.5 w-1 h-1 bg-primary rounded-full" />

              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-shrink-0 w-40 text-right md:text-left">
                  <div className="text-primary font-semibold">{item.status}</div>
                  <div className="text-text-muted text-sm">{item.graduation}</div>
                </div>
                <div className="flex-1 border border-border rounded-2xl p-6 bg-surface hover:bg-surface-hover transition-colors">
                  <div className="flex items-start gap-3 mb-3">
                    <GraduationCap size={20} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">{item.institution}</h3>
                      <div className="text-text-secondary text-sm">{item.institutionShort}</div>
                    </div>
                  </div>
                  <h4 className="text-base font-medium text-text-primary mb-1">{item.degree}</h4>
                  <p className="text-sm text-text-secondary mb-3">{item.department}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="info">{item.department}</Badge>
                    <Badge variant="default">{item.location}</Badge>
                    {item.result && <Badge variant="default">{item.result}</Badge>}
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
