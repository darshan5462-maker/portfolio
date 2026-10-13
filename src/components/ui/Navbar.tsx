import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react'
import { useTheme, useActiveSection } from '../../hooks'

interface NavbarProps {
  onOpenResume: () => void
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'journey', label: 'Journey' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const active = useActiveSection()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[200] px-4 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto max-w-6xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between gap-4 ${
            scrolled
              ? 'glass shadow-2xl shadow-black/25 dark:shadow-black/50 border border-white/10 dark:border-white/10 border-slate-200/90'
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('home')}
            aria-label="Darshan homepage"
            className="flex items-center gap-2.5 font-bold tracking-tight text-white dark:text-white text-slate-900 group"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-violet-500/25 group-hover:scale-105 transition-transform">
              D
            </span>
            <span className="text-base sm:text-lg font-black tracking-tight">
              DARSHAN<span className="text-violet-400">.dev</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => {
              const isActive = active === link.id
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold tracking-wide uppercase transition-colors ${
                    isActive
                      ? 'text-white dark:text-white text-slate-900'
                      : 'text-white/60 dark:text-white/60 text-slate-600 hover:text-white dark:hover:text-white hover:text-slate-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-lg bg-white/10 dark:bg-white/10 bg-slate-200"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              )
            })}
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle light and dark theme"
              className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/70 dark:text-white/70 text-slate-700 hover:text-white transition-colors border border-white/10 dark:border-white/10 border-slate-300"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold glass border border-white/12 dark:border-white/12 border-slate-300 text-white/80 dark:text-white/80 text-slate-800 hover:border-violet-500/40 hover:text-white transition-all"
            >
              <FileText size={13} className="text-violet-400" />
              Resume
            </button>

            {/* Hire Me / Contact CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Contact</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle mobile menu"
              className="lg:hidden w-9 h-9 rounded-xl glass flex items-center justify-center text-white/80 dark:text-white/80 text-slate-800 border border-white/10 dark:border-white/10 border-slate-300"
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-[199] glass-card rounded-2xl p-4 shadow-2xl border border-white/12 dark:border-white/12 border-slate-300 lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(link => {
                const isActive = active === link.id
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-violet-600/20 text-violet-300 border border-violet-500/30'
                        : 'text-white/70 dark:text-white/70 text-slate-700 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}

              <div className="pt-3 mt-2 border-t border-white/8 dark:border-white/8 border-slate-200 flex flex-col gap-2">
                <button
                  onClick={() => {
                    onOpenResume()
                    setMobileOpen(false)
                  }}
                  className="w-full py-2.5 rounded-xl glass border border-white/10 text-white dark:text-white text-slate-800 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <FileText size={14} className="text-violet-400" />
                  Download / View Resume
                </button>
                <button
                  onClick={() => scrollTo('contact')}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-bold text-center"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
