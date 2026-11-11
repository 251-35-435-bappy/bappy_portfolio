import { forwardRef } from 'react'

const Button = forwardRef(({ className = '', variant = 'primary', size = 'md', children, ...props }, ref) => {
  const base =
    'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900'

  const variants = {
    primary:
      'bg-primary text-white hover:bg-primary-hover shadow-glow focus-visible:ring-primary active:scale-[0.98]',
    secondary:
      'bg-surface-hover border border-border text-text-primary hover:bg-surface-hover focus-visible:ring-border active:scale-[0.98]',
    outline:
      'border border-border text-text-primary hover:bg-surface-hover hover:border-primary focus-visible:ring-primary active:scale-[0.98]',
    ghost:
      'text-text-secondary hover:text-text-primary hover:bg-surface-hover focus-visible:ring-border active:scale-[0.98]',
    download:
      'bg-primary text-white hover:bg-primary-hover shadow-glow focus-visible:ring-primary active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  return (
    <button
      ref={ref}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
