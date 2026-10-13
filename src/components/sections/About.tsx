import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { PERSONAL } from '../../data'
import {
  Code2,
  Sparkles,
  Rocket,
  GraduationCap,
  MapPin,
  ExternalLink,
  Layers,
  ArrowRight,
} from 'lucide-react'

export default function About() {
  const { ref, inView } = useInView(0.12)

  const principles = [
    {
      icon: Code2,
      title: 'Production-First Architecture',
      desc: 'Writing clean, maintainable TypeScript and component structures that are easy to reason about and scale.',
    },
    {
      icon: Sparkles,
      title: 'Human-Centered Design',
      desc: 'Prioritizing clear typography, responsive interactions, and fast page loads over unnecessary visual noise.',
    },
    {
      icon: Layers,
      title: 'Real-World Product Focus',
      desc: 'Building software designed to solve specific operational friction — from local commerce to forensic audio tooling.',
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-32 relative text-left">
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
              About Me
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-900 tracking-tight leading-tight">
            Turning Ideas Into <span className="gradient-text">Practical Products.</span>
          </h2>
        </motion.div>

        {/* 2-Column Overview */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative & Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 space-y-5 text-white/75 dark:text-white/75 text-slate-600 font-light text-base leading-relaxed"
          >
            <p className="text-lg text-white/90 dark:text-white/90 text-slate-800 font-normal leading-relaxed">
              I’m a software developer focused on turning ideas into useful digital experiences. I enjoy building
              responsive web applications, exploring AI-powered tools, and engineering practical products for real-world
              use cases.
            </p>

            <p>
              Rather than building speculative projects that never leave a local environment, my development journey has
              been centered around shipping. Over the past two years, I have conceptualized, coded, and deployed{' '}
              <strong className="text-white dark:text-white text-slate-900 font-semibold">18 operational web applications</strong>{' '}
              across fintech tracking, healthcare dietary logs, digital forensic detection, and local e-commerce.
            </p>

            <p>
              I believe great software lives at the intersection of dependable backend logic and thoughtful, restrained
              user interfaces. Whether optimizing canvas-rendered audio spectrograms or building zero-drift financial
              ledger calculators, I take pride in understanding both the technical details and the user’s everyday workflow.
            </p>

            {/* Verified Credentials Pills */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-xs font-mono text-white/80 dark:text-white/80 text-slate-700">
                <MapPin size={13} className="text-violet-400" />
                <span>{PERSONAL.location}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-xs font-mono text-white/80 dark:text-white/80 text-slate-700">
                <GraduationCap size={14} className="text-cyan-400" />
                <span>B.E. Computer Science · BIET Davangere</span>
              </div>

              <a
                href={PERSONAL.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-xs font-mono text-white/80 dark:text-white/80 text-slate-700 hover:border-violet-500/40 hover:text-white transition-all"
              >
                <Rocket size={13} className="text-emerald-400" />
                <span>Co-founder @ ShadowQuant Dynamics</span>
                <ExternalLink size={11} className="text-white/40" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Engineering Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="lg:col-span-5 space-y-4"
          >
            {principles.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl glass-card border border-white/8 dark:border-white/8 border-slate-200 hover:border-violet-500/25 transition-all group"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-white dark:text-white text-slate-900">
                    {title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/60 dark:text-white/60 text-slate-500 leading-relaxed font-light">
                  {desc}
                </p>
              </div>
            ))}

            {/* Quick Link to Projects */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-violet-600/10 to-cyan-600/10 border border-white/8 dark:border-white/8 border-slate-200 flex items-center justify-between">
              <span className="text-xs font-mono text-white/70 dark:text-white/70 text-slate-700">
                Want to see the code in action?
              </span>
              <a
                href="#projects"
                className="text-xs font-bold text-violet-400 hover:text-violet-300 flex items-center gap-1 group"
              >
                Explore Projects
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
