import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { PERSONAL, EXPERIENCE, ACHIEVEMENTS } from '../../data'
import { ExternalLink, MapPin, Rocket } from 'lucide-react'

function SectionHeader({ label, title, sub }: { label: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-px w-8 bg-violet-500" />
        <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-[3px]">{label}</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">{title}</h2>
      {sub && <p className="text-white/45 text-base max-w-xl">{sub}</p>}
    </div>
  )
}

function StatCard({ value, label, desc, icon, delay }: any) {
  const { ref, inView } = useInView()
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="glass rounded-2xl p-6 border border-white/8 hover:border-white/16 transition-all group"
    >
      <div className="text-3xl mb-2">{icon}</div>
      <div className="text-3xl font-black gradient-text leading-none mb-1">{value}</div>
      <div className="text-sm font-semibold text-white/70 mb-1">{label}</div>
      <div className="text-xs text-white/35">{desc}</div>
    </motion.div>
  )
}

function TimelineItem({ item, index }: { item: typeof EXPERIENCE[0]; index: number }) {
  const { ref, inView } = useInView()
  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-6 pl-6"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 to-transparent" />
      {/* Dot */}
      <div className={`absolute left-[-4.5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 
        ${item.current ? 'bg-violet-500 border-violet-400 shadow-lg shadow-violet-500/50' : 'bg-white/20 border-white/30'}`} />

      <div className="pb-10 flex-1">
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="text-[11px] font-mono text-violet-400 font-bold">{item.year}</span>
          {item.current && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold">
              Current
            </span>
          )}
        </div>
        <div className="glass rounded-xl p-5 border border-white/8 hover:border-white/16 transition-all">
          <h4 className="font-bold text-white mb-1">{item.title}</h4>
          <p className="text-sm text-violet-400 mb-3 font-medium">{item.company}</p>
          <p className="text-sm text-white/50 leading-relaxed mb-3">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map(t => (
              <span key={t} className="text-[11px] px-2 py-0.5 rounded-md bg-white/6 border border-white/8 text-white/50 font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionHeader
            label="About Me"
            title={<>Full Stack Dev.<br /><span className="gradient-text">Co-founder.</span> Builder.</>}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <p className="text-white/60 text-base leading-relaxed mb-4 font-light">{PERSONAL.bio}</p>
              <p className="text-white/45 text-sm leading-relaxed mb-8 font-light">{PERSONAL.bio2}</p>

              <div className="flex items-center gap-3 mb-8">
                <MapPin size={14} className="text-violet-400" />
                <span className="text-sm text-white/50">Karnataka, India — Open to remote worldwide</span>
              </div>

              <a
                href={PERSONAL.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10
                  hover:border-violet-500/40 hover:bg-violet-500/5 transition-all text-sm font-semibold text-white/70 hover:text-white"
              >
                <Rocket size={14} className="text-violet-400" />
                Co-founder @ ShadowQuant Dynamics
                <ExternalLink size={12} className="text-white/30" />
              </a>

              <div className="flex flex-wrap gap-2 mt-8">
                {['Node.js', 'Firebase', 'MySQL', 'Three.js', 'AI/Claude', 'WebGL', 'React', 'Full Stack'].map(s => (
                  <span key={s} className="text-xs px-3 py-1.5 rounded-lg glass border border-white/8 text-white/50 hover:border-violet-500/30 hover:text-white/80 transition-all cursor-default font-mono">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — experience timeline */}
          <div>
            {EXPERIENCE.map((item, i) => <TimelineItem key={i} item={item} index={i} />)}
          </div>
        </div>

        {/* Achievement stats */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ACHIEVEMENTS.map((a, i) => (
            <StatCard key={a.label} {...a} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
