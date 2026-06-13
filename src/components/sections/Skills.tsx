import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks'
import { SKILLS } from '../../data'

type Category = keyof typeof SKILLS

function SkillBar({ name, level, color, icon, delay }: any) {
  const { ref, inView } = useInView()
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none">{icon}</span>
          <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">{name}</span>
        </div>
        <span className="text-xs font-mono text-white/35">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay + 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}cc, ${color})` }}
        />
      </div>
    </motion.div>
  )
}

const CATEGORY_ICONS: Record<Category, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Database: '🗄️',
  Tools: '🛠️',
  AI: '🤖',
}

export default function Skills() {
  const [active, setActive] = useState<Category>('Frontend')
  const { ref, inView } = useInView()
  const cats = Object.keys(SKILLS) as Category[]

  return (
    <section id="skills" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-[3px]">Tech Stack</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Tools I<br /><span className="gradient-text">Master.</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mb-14">
            My full stack for building beautiful, scalable production apps from scratch.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {cats.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all
                ${active === cat
                  ? 'text-white shadow-lg shadow-violet-500/25'
                  : 'glass border border-white/8 text-white/50 hover:text-white/80 hover:border-white/16'}`}
            >
              {active === cat && (
                <motion.div
                  layoutId="skill-active"
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600"
                  transition={{ type: 'spring', bounce: 0.25 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {CATEGORY_ICONS[cat]} {cat}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="glass rounded-2xl border border-white/8 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="grid sm:grid-cols-2 gap-8"
            >
              {SKILLS[active].map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.08} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* All tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {Object.values(SKILLS).flat().map((s, i) => (
            <motion.span
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + i * 0.025 }}
              className="text-xs px-3 py-1.5 rounded-lg glass border border-white/8 text-white/40
                hover:border-violet-500/30 hover:text-white/70 transition-all cursor-default font-mono"
            >
              {s.icon} {s.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
