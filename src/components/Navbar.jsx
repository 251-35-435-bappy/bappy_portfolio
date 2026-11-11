import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Download } from 'lucide-react'
import SocialLinks from './SocialLinks'
import { personalInfo } from '../data/personalInfo'

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        aria-label="Main navigation"
      >
        <div
          className={`relative z-20 mx-auto max-w-7xl px-6 h-16 ${scrolled ? 'bg-dark-900/80 backdrop-blur-md border-b border-border' : 'bg-transparent'}`}
        >
          <div className="flex items-center justify-between h-full">
            <button
              onClick={() => scrollTo('#hero')}
              className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-primary font-bold text-xl tracking-tighter hover:bg-primary/10 transition-colors"
              aria-label="Go to home"
            >
              <span className="text-primary">{personalInfo.shortName}</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`text-sm font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
              {personalInfo.resumeUrl && (
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-medium text-text-primary hover:bg-surface-hover hover:border-primary transition-all"
                  aria-label="Download resume"
                >
                  <Download size={14} /> Resume
                </a>
              )}
            </div>

            <div className="flex items-center gap-3">
              <SocialLinks links={personalInfo.socialLinks} size="sm" />
              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-hover transition-colors"
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-dark-900/95 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
          )}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed inset-0 z-50 flex flex-col ${isOpen ? '' : 'hidden'}`}
          >
            <div className="absolute top-0 right-0 p-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-surface-hover transition-colors"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>
            <div className="mx-auto mt-12 flex flex-col gap-6 text-center">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <button
                    key={link.name}
                    onClick={() => scrollTo(link.href)}
                    className={`text-lg font-medium transition-colors ${
                      isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </button>
                )
              })}
              <div className="mt-8 flex flex-col gap-3">
                <SocialLinks links={personalInfo.socialLinks} size="lg" />
                {personalInfo.resumeUrl && (
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-auto inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3 text-sm font-medium text-text-primary hover:bg-surface-hover hover:border-primary transition-all"
                    aria-label="Download resume"
                  >
                    <Download size={16} /> Download Resume
                  </a>
                )}
              </div>
            </div>
          </motion.nav>
        </AnimatePresence>
      </nav>
    </>
  )
}
