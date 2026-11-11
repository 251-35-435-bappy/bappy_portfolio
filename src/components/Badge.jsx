export default function Badge({ className = '', variant = 'default', children }) {
  const base = 'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border'

  const variants = {
    default: 'border-border text-text-secondary bg-transparent',
    success: 'border-green-500/30 text-green-400 bg-green-500/10',
    warning: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    info: 'border-primary/30 text-primary bg-primary/10',
    accent: 'border-accent/30 text-accent bg-accent/10',
  }

  return (
    <span className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
