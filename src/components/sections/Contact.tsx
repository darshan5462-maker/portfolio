import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { PERSONAL } from '../../data'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check,
  GitBranch,
  Building,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react'
import { LinkedinIcon, InstagramIcon } from '../ui/Icons'

export default function Contact() {
  const { ref, inView } = useInView(0.12)
  const [copied, setCopied] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formState, setFormState] = useState<{
    status: 'idle' | 'success' | 'error'
    message: string
  }>({ status: 'idle', message: '' })

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PERSONAL.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      alert(`Contact email: ${PERSONAL.email}`)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormState({
        status: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).',
      })
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setFormState({
        status: 'error',
        message: 'Please enter a valid email address.',
      })
      return
    }

    setSubmitting(true)
    setFormState({ status: 'idle', message: '' })

    const subjectLine = encodeURIComponent(
      form.subject.trim() || `Portfolio Contact from ${form.name}`
    )
    const bodyContent = encodeURIComponent(
      `Hi Darshan,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}\n\n-- Sent via darshan.dev`
    )

    setTimeout(() => {
      setSubmitting(false)
      setFormState({
        status: 'success',
        message:
          'Preparing your message! Your email client will now open with this prefilled message for transmission.',
      })
      window.location.href = `mailto:${PERSONAL.email}?subject=${subjectLine}&body=${bodyContent}`
    }, 600)
  }

  const contactChannels = [
    {
      icon: Mail,
      label: 'Direct Email',
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
    },
    {
      icon: Phone,
      label: 'Phone / WhatsApp',
      value: PERSONAL.phone,
      href: `tel:${PERSONAL.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL.location,
      href: '#',
    },
    {
      icon: Building,
      label: 'Startup / Company',
      value: `${PERSONAL.company} · Co-founder`,
      href: PERSONAL.companyUrl,
    },
  ]

  return (
    <section id="contact" className="py-24 sm:py-32 relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-violet-500" />
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-[3px]">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-900 tracking-tight leading-tight">
            Let's Build Something <span className="gradient-text">Exceptional.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 dark:text-white/60 text-slate-600 font-light mt-2 max-w-xl">
            Open for software engineering internships, full-stack developer roles, AI project collaborations, and client engagements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl glass-card border border-white/8 dark:border-white/8 border-slate-200">
              <h3 className="font-bold text-base text-white dark:text-white text-slate-900 mb-4 flex items-center gap-2">
                <MessageSquare size={16} className="text-violet-400" />
                Direct Communication Channels
              </h3>

              <div className="space-y-3 mb-6">
                {contactChannels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/6 dark:border-white/6 border-slate-200 hover:border-violet-500/30 transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                        <Icon size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase text-white/40 dark:text-white/40 text-slate-400 block">
                          {label}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-white/90 dark:text-white/90 text-slate-800">
                          {value}
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Copy Email Fast Action */}
              <button
                onClick={handleCopyEmail}
                className="w-full py-2.5 rounded-xl glass border border-white/12 dark:border-white/12 border-slate-300 text-xs font-semibold text-white/80 dark:text-white/80 text-slate-700 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>

            {/* Social Network Cards */}
            <div className="p-5 rounded-2xl glass border border-white/8 dark:border-white/8 border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-white/50 dark:text-white/50 text-slate-500">
                Professional Networks:
              </span>
              <div className="flex gap-2">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-500/40 transition-colors"
                  title="GitHub"
                >
                  <GitBranch size={16} />
                </a>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-cyan-500/40 transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href={PERSONAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-pink-500/40 transition-colors"
                  title="Instagram: @darshan__5462"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/8 dark:border-white/8 border-slate-200">
              <h3 className="font-bold text-lg text-white dark:text-white text-slate-900 mb-2">
                Send a Project Inquiry or Message
              </h3>
              <p className="text-xs sm:text-sm text-white/60 dark:text-white/60 text-slate-500 font-light mb-6">
                Fill out the form below to initiate communication. Validated client-side and dispatches directly to Darshan.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 dark:text-white/50 text-slate-500 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-sm text-white dark:text-white text-slate-900 placeholder:text-white/30 dark:placeholder:text-white/30 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/50 dark:text-white/50 text-slate-500 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-sm text-white dark:text-white text-slate-900 placeholder:text-white/30 dark:placeholder:text-white/30 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 dark:text-white/50 text-slate-500 mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={e => setForm({ ...form, subject: e.target.value })}
                    placeholder="Full-Stack Opportunity / Project Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-sm text-white dark:text-white text-slate-900 placeholder:text-white/30 dark:placeholder:text-white/30 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-white/50 dark:text-white/50 text-slate-500 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your product requirements, team needs, or questions..."
                    className="w-full px-4 py-2.5 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-sm text-white dark:text-white text-slate-900 placeholder:text-white/30 dark:placeholder:text-white/30 placeholder:text-slate-400 focus:outline-none focus:border-violet-500 transition-all resize-none"
                  />
                </div>

                {formState.status === 'error' && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle size={14} className="flex-shrink-0" />
                    <span>{formState.message}</span>
                  </div>
                )}

                {formState.status === 'success' && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 size={14} className="flex-shrink-0" />
                    <span>{formState.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{submitting ? 'Preparing Transmission...' : 'Transmit Message to Darshan'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
