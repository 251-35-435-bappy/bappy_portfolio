import { Mail } from 'lucide-react'
import { personalInfo } from '../data/personalInfo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-dark-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-primary font-bold text-xl tracking-tighter">
                {personalInfo.shortName}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-6">{personalInfo.bio}</p>
            <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 text-sm text-text-primary hover:text-primary transition-colors">
              <Mail size={16} /> {personalInfo.email}
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <h4 className="text-text-primary font-semibold mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  Email
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">Call</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-sm">
            © {currentYear} Md Tanvir Rahman Bappy. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Built with React, Vite & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
