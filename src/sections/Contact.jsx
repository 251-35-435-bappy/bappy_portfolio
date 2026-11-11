import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import SocialLinks from '../components/SocialLinks'
import { personalInfo } from '../data/personalInfo'

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
                Get in touch
              </div>
              <h2 className="mt-6 text-2xl md:text-3xl text-text-primary font-semibold tracking-tight">
                Let&apos;s build something together
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Open to internship opportunities and entry-level software development roles. Feel free to
                reach out with questions, project collaborations, or just to say hello.
              </p>
            </div>

            <div className="space-y-5">
              {contactItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="text-text-primary font-medium">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-primary hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-sm text-text-muted">{item.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold tracking-wide uppercase">
                Connect
              </div>
              <SocialLinks links={personalInfo.socialLinks} size="md" className="mt-3 flex-wrap gap-3" />
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl border border-border bg-surface p-2 lg:p-0 shadow-card"
          >
            <div className="lg:absolute lg:inset-0 rounded-2xl overflow-hidden">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iYSIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNNCAwSDB2NDBoNHYtNHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9wYXRoPjwvcGF0dGVybiA+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjYSIgLz48L3N2Zz4="
                alt=""
                className="w-full h-full object-cover opacity-30"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-900/40" />
            </div>
            <div className="relative z-10 p-8 lg:p-12 max-w-md lg:max-w-full">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Send me a message</h3>
              <p className="text-text-secondary text-sm mb-6">
                Complete the form to open your email app with the message ready to send.
              </p>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
