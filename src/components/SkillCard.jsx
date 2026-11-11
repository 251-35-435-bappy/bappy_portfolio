import { motion } from 'framer-motion'
import { Code, Monitor, Server, Database, Settings, Laptop } from 'lucide-react'

const iconMap = {
  Code,
  Monitor,
  Server,
  Database,
  Settings,
  Laptop,
}

export default function SkillCard({ skill }) {
  const Icon = iconMap[skill.icon] || Code

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="h-full rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-soft"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold text-text-primary mb-3">{skill.category}</h3>
      <ul className="flex flex-wrap gap-2">
        {skill.items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-border bg-dark-800 px-3 py-1.5 text-sm text-text-secondary"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
