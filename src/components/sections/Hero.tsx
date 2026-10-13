import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import {
  Download,
  Mail,
  GitBranch,
  Terminal,
  ArrowDown,
  Building,
  CheckCircle2,
  Code2,
} from 'lucide-react'
import { LinkedinIcon } from '../ui/Icons'
import { PERSONAL, STATS } from '../../data'

const PROFILE_IMAGE = '/profile.jpg'

interface HeroProps {
  onOpenResume: () => void
}

function MagneticButton({
  children,
  className,
  onClick,
  href,
  download,
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
  download?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 22 })
  const sy = useSpring(y, { stiffness: 220, damping: 22 })

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.22)
    y.set((e.clientY - cy) * 0.22)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const content = (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} download={download} className="inline-block">
        {content}
      </a>
    )
  }

  return content
}

export default function Hero({ onOpenResume }: HeroProps) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 sm:pb-24 overflow-hidden"
    >
      {/* Background Grid & Ambient Lighting */}
      <div className="absolute inset-0 grid-bg opacity-70 pointer-events-none" />
      <div className="absolute inset-0 subtle-noise opacity-30 pointer-events-none" />

      {/* Ambient Radial Lights */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20 dark:opacity-25"
        style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none opacity-15 dark:opacity-20"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Hero Content) */}
          <div className="lg:col-span-7 text-left">
            {/* Availability Indicator Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass mb-6 border border-white/10 dark:border-white/10 border-slate-300"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="text-[11px] font-semibold tracking-wider uppercase font-mono text-white/80 dark:text-white/80 text-slate-700">
                {PERSONAL.availabilityText}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-4 text-white dark:text-white text-slate-900">
                DARSHAN
                <span className="block text-2xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight gradient-text mt-1">
                  Software Developer & Product Builder
                </span>
              </h1>
            </motion.div>

            {/* Typewriter role subtext */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex items-center gap-2 text-xs sm:text-sm font-mono text-white/50 dark:text-white/50 text-slate-500 mb-6"
            >
              <Terminal size={14} className="text-violet-400" />
              <span className="text-violet-400">spec:</span>
              <TypeAnimation
                sequence={[
                  'Full-Stack Web Architectures',
                  2200,
                  'AI-Assisted Workflow Tools',
                  2000,
                  'Fintech & Marketplace Platforms',
                  2000,
                  'Co-founder @ ShadowQuant Dynamics',
                  2200,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
                className="text-white/90 dark:text-white/90 text-slate-800 font-semibold"
              />
            </motion.div>

            {/* Introduction paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-base sm:text-lg text-white/70 dark:text-white/70 text-slate-600 font-light leading-relaxed max-w-xl mb-8"
            >
              {PERSONAL.heroIntroduction}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap items-center gap-3.5 mb-10"
            >
              <MagneticButton
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-600/30 transition-all cursor-pointer"
              >
                <Code2 size={16} />
                Explore My Work
              </MagneticButton>

              <MagneticButton
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm glass border border-white/12 dark:border-white/12 border-slate-300 text-white/90 dark:text-white/90 text-slate-800 hover:border-violet-500/40 hover:text-white transition-all cursor-pointer"
              >
                <Download size={15} className="text-violet-400" />
                Download Resume
              </MagneticButton>

              <MagneticButton
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs sm:text-sm glass border border-white/12 dark:border-white/12 border-slate-300 text-white/80 dark:text-white/80 text-slate-700 hover:border-white/25 hover:text-white transition-all cursor-pointer"
              >
                <Mail size={15} />
                Contact Me
              </MagneticButton>
            </motion.div>

            {/* Verified Social Channels */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-3"
            >
              <span className="text-xs font-mono text-white/40 dark:text-white/40 text-slate-400 uppercase tracking-widest mr-1">
                Verified:
              </span>
              <a
                href={PERSONAL.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-500/40 transition-colors"
                title="GitHub: darshan5462-maker"
              >
                <GitBranch size={16} />
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-cyan-500/40 transition-colors"
                title="LinkedIn: Darshan Mang"
              >
                <LinkedinIcon size={16} />
              </a>
              <a
                href={`mailto:${PERSONAL.email}`}
                aria-label="Direct Email"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-emerald-500/40 transition-colors"
                title={`Email: ${PERSONAL.email}`}
              >
                <Mail size={16} />
              </a>
            </motion.div>
          </div>

          {/* Right Column (Profile & Developer Terminal Visual) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-md relative"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600/20 via-cyan-500/10 to-transparent blur-2xl pointer-events-none" />

              {/* Developer Terminal Card */}
              <div className="glass-card rounded-2xl border border-white/10 dark:border-white/10 border-slate-300 p-5 shadow-2xl relative overflow-hidden text-left">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/8 dark:border-white/8 border-slate-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-[11px] font-mono text-white/40 dark:text-white/40 text-slate-400 ml-2">
                      darshan@dev: ~
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-600/15 text-violet-300 border border-violet-500/30">
                    node v24.x
                  </span>
                </div>

                {/* Profile Snapshot Row */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden border border-cyan-500/40 dark:border-cyan-500/40 border-slate-300 flex-shrink-0 bg-violet-950/40 shadow-xl shadow-cyan-500/15">
                    <img
                      src={PROFILE_IMAGE}
                      alt="Darshan Mang"
                      className="w-full h-full object-cover object-center"
                      onError={e => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        target.nextElementSibling?.setAttribute('style', 'display:flex')
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center text-lg font-black text-white bg-gradient-to-br from-violet-600 to-cyan-600">
                      D
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-white dark:text-white text-slate-900 leading-snug">
                      Darshan Mang
                    </h3>
                    <p className="text-xs text-violet-400 font-mono">
                      Full-Stack · AI & Products
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Building size={11} className="text-white/40" />
                      <a
                        href={PERSONAL.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-white/60 dark:text-white/60 text-slate-500 hover:text-white transition-colors"
                      >
                        Co-founder @ ShadowQuant
                      </a>
                    </div>
                  </div>
                </div>

                {/* Technical telemetry snippets */}
                <div className="space-y-2 font-mono text-xs rounded-xl p-3 bg-black/40 dark:bg-black/40 bg-slate-900/5 text-white/70 dark:text-white/70 text-slate-700 border border-white/6 dark:border-white/6 border-slate-200">
                  <div className="flex justify-between">
                    <span className="text-white/40 dark:text-white/40 text-slate-400">education:</span>
                    <span className="text-right">B.E. Computer Science (BIET)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 dark:text-white/40 text-slate-400">deployed_apps:</span>
                    <span className="text-emerald-400 font-semibold">18 Live Verified Projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 dark:text-white/40 text-slate-400">specialization:</span>
                    <span>React · Node.js · AI Forensics</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/40 dark:text-white/40 text-slate-400">status:</span>
                    <span className="text-cyan-400">shipping_daily = true</span>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mt-4 pt-3 border-t border-white/6 dark:border-white/6 border-slate-200 flex items-center justify-between text-[11px] font-mono text-white/40 dark:text-white/40 text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 size={12} className="text-emerald-400" />
                    Karnataka, India
                  </span>
                  <span>ready_for_hire</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Minimal Metrics Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="mt-16 pt-8 border-t border-white/8 dark:border-white/8 border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left"
        >
          {STATS.map(stat => (
            <div key={stat.label} className="p-3">
              <div className="text-2xl sm:text-3xl font-black gradient-text tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white/80 dark:text-white/80 text-slate-800 uppercase tracking-wider font-mono mt-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-white/40 dark:text-white/40 text-slate-400 font-mono mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll down indicator */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => scrollTo('about')}
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-1.5 text-white/30 dark:text-white/30 text-slate-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Explore</span>
            <ArrowDown
              size={14}
              className="group-hover:translate-y-1 transition-transform animate-bounce"
            />
          </button>
        </div>
      </div>
    </section>
  )
}
