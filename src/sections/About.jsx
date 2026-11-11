import { motion } from 'framer-motion'
import { GraduationCap, Code, Users } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTEwIDBMMTAgMkgxMloiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXRoPjwvcGF0dGVybiA+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSIgLz48L3N2Zz4=')" }} />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <div className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
            About Me
          </div>
          <h2 className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight">
            Getting to know me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative mx-auto w-full max-w-[500px]">
            <div className="rounded-3xl bg-gradient-to-br from-primary/60 via-border to-accent/50 p-px shadow-card">
              <div className="overflow-hidden rounded-3xl bg-slate-200 p-2 sm:p-3">
                <img
                  src={personalInfo.profileImage}
                  alt="Md Tanvir Rahman Bappy"
                  className="mx-auto block h-auto max-h-[620px] w-full rounded-2xl object-contain object-center"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-border bg-surface p-4 shadow-soft flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><GraduationCap size={22} /></div>
              <div>
                <div className="text-text-primary font-semibold">Daffodil International University</div>
                <div className="text-text-muted text-xs">Software Engineering</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-text-secondary text-lg leading-relaxed">
              I am studying for a <span className="text-text-primary font-medium">{personalInfo.degree}</span>
              {' '}at <span className="text-text-primary font-medium">{personalInfo.university}</span>,
              with graduation expected in {personalInfo.graduationYear}.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Alongside my coursework, I serve as a Senior Executive in the DIU Software Engineering Club
              and participate in the university&apos;s Data Science, Research, and Volunteer Service clubs.
            </p>

            <h3 className="text-lg font-semibold text-text-primary">What drives me</h3>
            <ul className="space-y-4">
              {[
                { label: 'Building practical software', text: 'Applying programming fundamentals to academic projects and real use cases.' },
                { label: 'Working with people', text: 'Coordinating with club members and event participants.' },
                { label: 'Growing as an engineer', text: 'Strengthening my skills through study, project work, and continuous practice.' },
                { label: 'Career goal', text: 'Seeking a software engineering internship or junior developer opportunity.' },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
                >
                  <div className="mt-1 flex shrink-0 items-center justify-center w-5 h-5 rounded-full bg-primary text-[10px] text-white">
                    {i + 1}
                  </div>
                  <div>
                    <span className="text-text-primary font-medium">{item.label}</span>{' — '}
                    {item.text}
                  </div>
                </motion.li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {[
                { icon: Users, label: 'Student clubs', value: '3' },
                { icon: Code, label: 'Capstone projects', value: '2' },
                { icon: GraduationCap, label: 'Club events', value: '10+' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-4 rounded-xl border border-border bg-surface"
                >
                  <div className={stat.icon === Code ? 'w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary mb-2' : 'w-8 h-8 rounded bg-accent/10 flex items-center justify-center text-accent mb-2'}>
                    <stat.icon size={18} />
                  </div>
                  <div className="text-text-primary font-semibold">{stat.value}</div>
                  <div className="text-[11px] text-text-muted uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
