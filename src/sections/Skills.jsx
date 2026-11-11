import { motion } from 'framer-motion'
import SkillCard from '../components/SkillCard'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
            Technical Skills
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight">
            My technical toolkit
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Programming languages, frontend and backend development, databases, and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
