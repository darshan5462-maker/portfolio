import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { PERSONAL } from '../../data'
import { Mail, Phone, MapPin, Rocket, Send, Copy, Check, GitBranch, Globe, AtSign } from 'lucide-react'

export default function Contact() {
  const { ref, inView } = useInView()
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    await navigator.clipboard.writeText(PERSONAL.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    const sub = encodeURIComponent('Portfolio Contact — Project Inquiry')
    const body = encodeURIComponent(`Hello Darshan,\n\nName: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    setTimeout(() => {
      window.location.href = `mailto:${PERSONAL.email}?subject=${sub}&body=${body}`
      setSending(false)
      setSent(true)
      setTimeout(() => setSent(false), 3000)
    }, 800)
  }

  const contacts = [
    { icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { icon: Phone, label: 'Phone', value: PERSONAL.phone, href: `tel:${PERSONAL.phone}` },
    { icon: MapPin, label: 'Location', value: PERSONAL.location, href: '#' },
    { icon: Rocket, label: 'Company', value: `${PERSONAL.company} — Co-founder`, href: PERSONAL.companyUrl },
  ]
  const socials = [
    { icon: GitBranch, href: PERSONAL.github, label: 'GitHub' },
    { icon: Globe, href: PERSONAL.linkedin, label: 'LinkedIn' },
    { icon: AtSign, href: PERSONAL.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
  ]

  return (
    <section id="contact" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-[3px]">Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Let's build something<br /><span className="gradient-text">great together.</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mb-16">
            Have a project, idea or just want to connect? I reply fast.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <div className="space-y-3 mb-8">
              {contacts.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl glass border border-white/8
                    hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/6 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-violet-400 transition-colors flex-shrink-0">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-white/30 uppercase tracking-wider">{label}</div>
                    <div className="text-sm font-semibold text-white/75 group-hover:text-white transition-colors">{value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={copyEmail}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.65 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/12
                text-sm font-semibold text-white/60 hover:text-white hover:border-violet-500/40 transition-all mb-6"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy Email'}
            </motion.button>

            {/* Socials */}
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl glass border border-white/8 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <div className="glass rounded-2xl border border-white/10 p-8 relative overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Send size={16} className="text-violet-400" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-white/35 uppercase tracking-wider mb-2 block">Name</label>
                    <input
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8
                        text-white placeholder-white/25 text-sm outline-none focus:border-violet-500/50
                        focus:bg-violet-500/5 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-white/35 uppercase tracking-wider mb-2 block">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8
                        text-white placeholder-white/25 text-sm outline-none focus:border-violet-500/50
                        focus:bg-violet-500/5 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-mono text-white/35 uppercase tracking-wider mb-2 block">Message</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/8
                      text-white placeholder-white/25 text-sm outline-none focus:border-violet-500/50
                      focus:bg-violet-500/5 transition-all resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending || sent}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white
                    bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500
                    shadow-lg shadow-violet-500/25 transition-all disabled:opacity-60"
                >
                  {sent ? (
                    <><Check size={15} /> Message Sent!</>
                  ) : sending ? (
                    <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </motion.button>
                <p className="text-[11px] text-white/25 text-center font-mono">
                  * Opens your mail app with a prefilled message
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
