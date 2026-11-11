import { useState } from 'react'
import { Mail, User, Send } from 'lucide-react'
import Button from './Button'
import { personalInfo } from '../data/personalInfo'

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)
  const [touched, setTouched] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) newErrors.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: '' }))
    if (status) setStatus(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    setTouched({ name: true, email: true, subject: true, message: true })
    if (!isValid) return
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
    setStatus('ready')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="contact-name" className="block text-sm font-medium text-text-secondary">
            Full Name <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="John Doe"
              className={`block w-full pl-10 pr-4 py-3 rounded-xl border bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                touched.name && errors.name ? 'border-red-500' : ''
              }`}
            />
          </div>
          {touched.name && errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-email" className="block text-sm font-medium text-text-secondary">
            Email Address <span className="text-red-400">*</span>
          </label>
          <div className="relative">
            <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="you@example.com"
              className={`block w-full pl-10 pr-4 py-3 rounded-xl border bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                touched.email && errors.email ? 'border-red-500' : ''
              }`}
            />
          </div>
          {touched.email && errors.email && <p className="text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-subject" className="block text-sm font-medium text-text-secondary">
          Subject <span className="text-red-400">*</span>
        </label>
        <div className="relative">
          <Send size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
            placeholder="Internship opportunity"
            className={`block w-full pl-10 pr-4 py-3 rounded-xl border bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
              touched.subject && errors.subject ? 'border-red-500' : ''
            }`}
          />
        </div>
        {touched.subject && errors.subject && <p className="text-xs text-red-400">{errors.subject}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="contact-message" className="block text-sm font-medium text-text-secondary">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          name="message"
          id="contact-message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows="5"
          placeholder="Tell me about your project or opportunity..."
          className={`block w-full rounded-xl border bg-surface text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all min-h-[120px] ${
            touched.message && errors.message ? 'border-red-500' : ''
          }`}
        />
        {touched.message && errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg">
        Open Email App
      </Button>

      {status === 'ready' && (
        <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 text-text-secondary text-sm">
          Your email app should open with this message ready to send. If it does not, email{' '}
          <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">{personalInfo.email}</a>.
        </div>
      )}
    </form>
  )
}
