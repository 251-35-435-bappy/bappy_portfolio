import { Github, Linkedin, Mail } from 'lucide-react'

const iconMap = {
  Github,
  Linkedin,
  Mail,
}

export default function SocialLinks({ links, size = 'md', className = '' }) {
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <div className={`flex flex-wrap gap-3 ${className}`} role="navigation" aria-label="Social links">
      {links.map((link, index) => {
        const Icon = iconMap[link.icon] || Mail

        return (
          <a
            key={index}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.name}
            className={`flex items-center justify-center rounded-xl bg-surface-hover border border-border text-text-primary hover:bg-primary hover:text-white hover:shadow-glow transition-all duration-200 ${sizeMap[size]}`}
            title={link.name}
          >
            <Icon />
            {size === 'lg' && <span className="ml-1.5 text-xs font-medium">{link.name}</span>}
          </a>
        )
      })}
    </div>
  )
}
