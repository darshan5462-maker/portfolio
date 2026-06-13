import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme, useActiveSection } from '../../hooks'

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggle } = useTheme()
  const active = useActiveSection()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-[200] transition-all duration-300 rounded-2xl
          ${scrolled ? 'glass shadow-2xl shadow-black/30' : 'bg-transparent'}
          px-5 py-3 flex items-center gap-6`}
        style={{ width: 'min(780px, 94vw)' }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="font-bold text-sm tracking-tight flex items-center gap-2 shrink-0 mr-2"
        >
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs font-black shadow-lg shadow-violet-500/30">
            DM
          </span>
          <span className="text-white/80 hidden sm:block">darshan.dev</span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-colors duration-200
                ${active === l.id ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
            >
              {active === l.id && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-lg bg-white/10"
                  transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{l.label}</span>
            </button>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={toggle}
            className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <motion.button
            onClick={() => scrollTo('contact')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-semibold
              bg-gradient-to-r from-violet-600 to-cyan-600 text-white
              shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-shadow"
          >
            Hire Me
          </motion.button>
          <button
            className="md:hidden w-8 h-8 rounded-lg glass flex items-center justify-center text-white/70"
            onClick={() => setMobileOpen(v => !v)}
          >
            {mobileOpen ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-[199] glass rounded-2xl p-4 shadow-2xl shadow-black/40"
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => scrollTo(l.id)}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${active === l.id ? 'bg-white/10 text-white' : 'text-white/60 hover:text-white hover:bg-white/05'}`}
              >
                {l.label}
              </motion.button>
            ))}
            <button
              onClick={() => { scrollTo('contact'); setMobileOpen(false) }}
              className="w-full mt-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-sm font-semibold"
            >
              Hire Me
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
