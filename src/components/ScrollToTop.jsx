import { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const btn = document.getElementById('scroll-to-top')
      if (!btn) return
      if (window.scrollY > 400) {
        btn.classList.remove('-bottom-20', 'opacity-0', 'pointer-events-none')
        btn.classList.add('bottom-8', 'opacity-100', 'pointer-events-auto')
      } else {
        btn.classList.remove('bottom-8', 'opacity-100', 'pointer-events-auto')
        btn.classList.add('-bottom-20', 'opacity-0', 'pointer-events-none')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      id="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-8 -bottom-20 w-10 h-10 rounded-full bg-primary text-white shadow-lg transition-all duration-300 opacity-0 pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <ArrowUp size={20} />
    </button>
  )
}
