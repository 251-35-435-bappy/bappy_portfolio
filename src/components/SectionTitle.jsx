import { motion } from 'framer-motion'

export default function SectionTitle({ title, subTitle, className = '' }) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
      >
        {title}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight"
      >
        {subTitle}
      </motion.h2>
    </div>
  )
}
