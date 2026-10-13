import { GitBranch, Mail, ArrowUp } from 'lucide-react'
import { LinkedinIcon } from './Icons'
import { PERSONAL } from '../../data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerNav = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/8 dark:border-white/8 border-slate-200 bg-black/40 dark:bg-black/40 bg-slate-100/60 pt-16 pb-12 text-left relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-md shadow-violet-500/25">
                D
              </span>
              <span className="text-lg font-black tracking-tight text-white dark:text-white text-slate-900">
                DARSHAN
              </span>
            </div>
            <p className="text-xs sm:text-sm text-white/60 dark:text-white/60 text-slate-500 font-light max-w-sm leading-relaxed">
              Software Developer & Product Builder. Engineering full-stack web applications, AI tools, and fintech platforms that ship to production.
            </p>
            <div className="pt-2 text-xs font-mono text-white/40 dark:text-white/40 text-slate-400">
              Karnataka, India · Co-founder @ ShadowQuant Dynamics
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold mb-3">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {footerNav.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-left text-white/60 dark:text-white/60 text-slate-600 hover:text-white dark:hover:text-white hover:text-slate-900 transition-colors py-1 cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Socials & Direct Connect */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-3">
              Connect
            </h4>
            <div className="flex items-center gap-2.5">
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-500/40 transition-colors"
                title="GitHub"
              >
                <GitBranch size={16} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                aria-label="Email Darshan"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-emerald-500/40 transition-colors"
                title="Email"
              >
                <Mail size={16} />
              </a>
            </div>

            <p className="text-[11px] font-mono text-white/40 dark:text-white/40 text-slate-400 pt-2">
              Inquiries:{' '}
              <a href={`mailto:${PERSONAL.email}`} className="text-violet-400 hover:underline">
                {PERSONAL.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 border-t border-white/8 dark:border-white/8 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/40 dark:text-white/40 text-slate-500">
          <div>
            © {currentYear} {PERSONAL.fullName}. Built with React, TypeScript, Tailwind & Vite.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
