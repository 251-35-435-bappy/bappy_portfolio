import { motion } from 'framer-motion'
import { Code, Terminal, Layers, Mail, Phone, ArrowRight } from 'lucide-react'
import Button from '../components/Button'
import { personalInfo } from '../data/personalInfo'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="relative z-10 w-full px-6 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wide uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for internship opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-display text-text-primary font-bold tracking-tight leading-[1.05]"
            >
              Md Tanvir Rahman{' '}
              <span className="text-primary">Bappy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-jumbo text-text-primary font-semibold sm:text-3xl md:text-4xl leading-tight"
            >
              <span className="block text-text-primary">{personalInfo.title}</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-text-secondary text-sm md:text-base leading-relaxed max-w-[480px]"
            >
              {personalInfo.bio}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Projects <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs text-text-muted"
            >
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} /> {personalInfo.phone}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative h-[320px] lg:h-[420px] flex items-center justify-center"
          >
            <div className="relative w-full max-w-[340px] rounded-2xl border border-border bg-surface/60 backdrop-blur shadow-card p-4">
              <div className="flex items-center gap-2 mb-3 px-3">
                {[`#ff5f56`, `#ffbd2e`, `#27c93f`].map((c, i) => (
                  <div key={i} className="w-3 h-3 rounded-full" style={{ backgroundColor: c }} />
                ))}
                <div className="ml-auto text-[10px] text-text-muted">bash — dev session</div>
              </div>
              <div className="font-mono text-xs text-text-secondary space-y-2">
                <div className="text-text-primary">$ whoami</div>
                <div>Software Engineering student</div>
                <div className="mt-3 text-text-primary">$ focus</div>
                <div className="text-primary">Java · SQL · JavaScript</div>
                <div className="mt-3 text-text-primary">$ currently_building</div>
                <div>AI-based energy forecasting capstone</div>
                <div className="mt-3 text-text-primary">$ location</div>
                <div>{personalInfo.location}</div>
              </div>
            </div>

            <div className="absolute -top-6 -left-4 w-20 h-10 rounded-lg border border-border bg-surface p-2 flex items-center justify-between text-[10px] text-text-muted">
              <Code size={14} />
              <span>app.jsx</span>
            </div>
            <div className="absolute top-1/4 right-1/4 w-24 h-12 rounded-lg border border-border bg-surface p-2 flex items-center justify-between text-[10px] text-text-muted">
              <Terminal size={14} />
              <span>terminal</span>
            </div>
            <div className="absolute bottom-1/3 left-1/3 w-20 h-10 rounded-lg border border-border bg-surface p-2 flex items-center justify-between text-[10px] text-text-muted">
              <Layers size={14} />
              <span>schema</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <button
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-10 h-10 rounded-full border border-border bg-surface flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-colors shadow-lg"
          aria-label="Scroll down"
        >
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
      </motion.div>
    </section>
  )
}
