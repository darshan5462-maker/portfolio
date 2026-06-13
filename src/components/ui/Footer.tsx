import { motion } from 'framer-motion'
import { GitBranch, Globe, AtSign, Mail, ArrowUp } from 'lucide-react'
import { PERSONAL } from '../../data'

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const year = new Date().getFullYear()

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Work', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ]

  const socials = [
    { icon: GitBranch, href: PERSONAL.github },
    { icon: Globe, href: PERSONAL.linkedin },
    { icon: AtSign, href: PERSONAL.instagram },
    { icon: Mail, href: `mailto:${PERSONAL.email}` },
  ]

  return (
    <footer className="relative border-t border-white/8 bg-black/20">
      {/* Wave effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-violet-500/30">
                DM
              </div>
              <span className="font-bold text-white">Darshan Mang</span>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-[28ch]">
              Full Stack Developer & Co-founder of ShadowQuant Dynamics.
            </p>
            <p className="text-xs text-white/25 mt-2 font-mono">{PERSONAL.location}</p>
          </div>

          {/* Nav links */}
          <div>
            <div className="text-xs font-mono font-bold text-white/25 uppercase tracking-widest mb-4">Navigation</div>
            <div className="flex flex-col gap-2">
              {links.map(l => (
                <button
                  key={l.id}
                  onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-sm text-white/45 hover:text-white transition-colors text-left"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-mono font-bold text-white/25 uppercase tracking-widest mb-4">Contact</div>
            <div className="flex flex-col gap-2 mb-5">
              <a href={`mailto:${PERSONAL.email}`} className="text-sm text-white/45 hover:text-violet-400 transition-colors font-mono">
                {PERSONAL.email}
              </a>
              <a href={`tel:${PERSONAL.phone}`} className="text-sm text-white/45 hover:text-white transition-colors font-mono">
                {PERSONAL.phone}
              </a>
            </div>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  whileHover={{ y: -3 }}
                  className="w-9 h-9 rounded-xl glass border border-white/8 flex items-center justify-center text-white/35 hover:text-white hover:border-white/20 transition-all"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8 border-t border-white/8 gap-4 flex-wrap">
          <p className="text-xs text-white/25 font-mono">
            © {year} Darshan Mang — Built with React + Vite + Framer Motion + Three.js
          </p>
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL.companyUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/25 hover:text-violet-400 transition-colors font-mono"
            >
              Co-founder @ ShadowQuant Dynamics
            </a>
            <motion.button
              onClick={scrollTop}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all"
            >
              <ArrowUp size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
