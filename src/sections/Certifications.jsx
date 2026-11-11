import { motion } from 'framer-motion'
import { Award, FileText, Calendar } from 'lucide-react'
import { certifications } from '../data/certifications'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
            Certifications &amp; Achievements
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight">{certifications.heading}</h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">{certifications.subheading}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-surface p-6 hover:bg-surface-hover transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Award size={24} />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-1">{item.title}</h3>
                <p className="text-text-secondary text-sm mb-3">{item.organization}</p>
                <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
                  <Calendar size={14} /> {item.date}
                </div>
                {item.description && <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>}
                {item.image && (
                  <div className="h-24 rounded-xl border border-border bg-surface-hover mb-4 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                {item.verificationUrl && (
                  <a
                    href={item.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-primary hover:underline font-medium"
                  >
                    Verify <FileText size={14} />
                  </a>
                )}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}
