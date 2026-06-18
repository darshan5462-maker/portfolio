import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, GitBranch, Globe, AtSign, Mail, ExternalLink } from 'lucide-react'
import { PERSONAL, STATS } from '../../data'

const PROFILE_URL = '/profile..jpg'

function MagneticButton({ children, className, onClick }: any) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })

  const handleMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.4)
    y.set((e.clientY - cy) * 0.4)
  }
  const handleLeave = () => { x.set(0); y.set(0) }

  return (
    <motion.button
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  )
}

function GradientOrb({ className }: { className: string }) {
  return <div className={`absolute rounded-full blur-[100px] pointer-events-none ${className}`} />
}

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Gradient orbs */}
      <GradientOrb className="w-[600px] h-[600px] bg-violet-600/20 top-[-200px] left-[-200px] animate-[float_12s_ease-in-out_infinite]" />
      <GradientOrb className="w-[500px] h-[500px] bg-cyan-500/15 bottom-[-150px] right-[-150px] animate-[float_15s_ease-in-out_infinite_2s]" />
      <GradientOrb className="w-[400px] h-[400px] bg-pink-600/10 top-[40%] left-[40%] animate-[float_18s_ease-in-out_infinite_4s]" />

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-100" />

      {/* Gradient mesh overlay */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 70% at 50% -20%, rgba(124,58,237,0.15) 0%, transparent 60%)' }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8 border border-white/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/80 animate-[glow-pulse_2s_ease-in-out_infinite]" />
              <span className="text-xs font-semibold text-white/70 tracking-widest uppercase font-mono">
                Available for projects · 2026
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-black leading-[0.92] tracking-tight mb-4"
                style={{ fontSize: 'clamp(3.4rem, 8vw, 7rem)' }}>
                <span className="block text-white">DARSHAN</span>
                <span className="block gradient-text">MANG.</span>
              </h1>
            </motion.div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-white/50 font-mono text-sm mb-6 tracking-wider"
            >
              <span className="text-violet-400">›_</span>{' '}
              <TypeAnimation
                sequence={[
                  'Full Stack Developer', 2200,
                  'Co-founder @ ShadowQuant', 2200,
                  'AI Builder', 1800,
                  'WebGL Engineer', 1800,
                  'Product Shipper', 1800,
                ]}
                wrapper="span"
                speed={60}
                repeat={Infinity}
                className="text-white/80"
              />
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-white/50 text-base leading-relaxed max-w-[50ch] mb-10 font-light"
            >
              {PERSONAL.bio}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-3 flex-wrap mb-10"
            >
              <MagneticButton
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white
                  bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500
                  shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-shadow"
                onClick={() => scrollTo('projects')}
              >
                <ExternalLink size={15} />
                View My Work
              </MagneticButton>
              <MagneticButton
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white/80
                  glass border border-white/12 hover:bg-white/08 hover:border-white/20 transition-all"
                onClick={() => scrollTo('contact')}
              >
                <Mail size={15} />
                Contact Me
              </MagneticButton>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75 }}
              className="flex items-center gap-3"
            >
              {[
                { icon: GitBranch, href: PERSONAL.github, label: 'GitHub' },
                { icon: Globe, href: PERSONAL.linkedin, label: 'LinkedIn' },
                { icon: AtSign, href: PERSONAL.instagram, label: 'Instagram' },
                { icon: Mail, href: `mailto:${PERSONAL.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  title={label}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right column — profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Profile image with glow */}
            <div className="relative">
              {/* Outer glow rings */}
              <div className="absolute inset-[-24px] rounded-full border border-violet-500/20 animate-[float_8s_ease-in-out_infinite]" />
              <div className="absolute inset-[-48px] rounded-full border border-cyan-500/10 animate-[float_12s_ease-in-out_infinite_1s]" />

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl blur-3xl bg-gradient-to-br from-violet-600/40 to-cyan-500/30 scale-110" />

              {/* Photo */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden
                  border border-white/15 shadow-2xl shadow-violet-500/20"
              >
                <img
                  src={PROFILE_URL}
                  alt="Darshan Mang"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.style.display = 'none'
                    t.nextElementSibling?.setAttribute('style', 'display:flex')
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-violet-900/80 to-cyan-900/60 text-6xl font-black text-white">
                  D
                </div>
                {/* Holographic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
              </motion.div>

              {/* Floating stat badges */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-6 top-8 glass rounded-xl px-4 py-3 border border-white/10 shadow-xl"
              >
                <div className="text-2xl font-black text-white leading-none">10+</div>
                <div className="text-[10px] text-white/50 mt-0.5 uppercase tracking-wider font-mono">Live Projects</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.95 }}
                className="absolute -left-6 bottom-16 glass rounded-xl px-4 py-3 border border-white/10 shadow-xl"
              >
                <div className="text-2xl font-black gradient-text leading-none">AI</div>
                <div className="text-[10px] text-white/50 mt-0.5 uppercase tracking-wider font-mono">Voice Agents</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.05 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2.5 border border-white/10 whitespace-nowrap shadow-xl"
              >
                <div className="text-xs text-white/60 font-mono flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Co-founder @ ShadowQuant Dynamics
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
          className="mt-24 pt-10 border-t border-white/8 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="text-center sm:text-left"
            >
              <div className="text-3xl font-black gradient-text leading-none mb-1">{s.value}</div>
              <div className="text-xs text-white/40 uppercase tracking-widest font-mono">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => scrollTo('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  )
}
