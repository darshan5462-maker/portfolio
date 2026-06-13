import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../../hooks'
import { PROJECTS } from '../../data'
import { ExternalLink, GitBranch, X, ArrowUpRight } from 'lucide-react'

const FILTERS = ['All', 'AI', 'E-Commerce', 'Delivery', 'Community', 'Education']

function ProjectCard({ project, index, onClick }: any) {
  const { ref, inView } = useInView(0.1)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.article
      ref={ref as any}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => onClick(project)}
      className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/8 hover:border-white/20
        transition-all duration-300 bg-white/[0.02]"
      style={{ perspective: 1000 }}
      whileHover={{ y: -6, rotateX: 3, rotateY: -2 }}
    >
      {/* Project number */}
      <div className="absolute top-5 left-5 z-20 font-mono text-xs text-white/25 font-bold">
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Color accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />

      {/* Live badge */}
      <div className="absolute top-4 right-5 z-20">
        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/25">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-semibold text-emerald-400 font-mono">LIVE</span>
        </div>
      </div>

      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10 p-6 pt-14">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.slice(0, 3).map((t: string) => (
            <span key={t} className="text-[10px] px-2 py-0.5 rounded-md border border-white/10 bg-white/5 text-white/45 font-mono">
              {t}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-black text-lg leading-tight mb-3 group-hover:text-white transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-white/45 leading-relaxed mb-6 line-clamp-2">
          {project.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-white/25 uppercase tracking-wider">{project.type}</span>
          <div className="flex gap-2" onClick={e => e.stopPropagation()}>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold
                bg-white/8 border border-white/10 text-white/60 hover:text-white hover:bg-white/14 transition-all"
            >
              <ExternalLink size={11} />
              Live
            </a>
          </div>
        </div>
      </div>

      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          boxShadow: hovered ? `0 0 40px ${project.color}25, 0 0 80px ${project.color}10` : 'none',
          transition: 'box-shadow 0.4s ease',
        }}
      />
    </motion.article>
  )
}

function ProjectModal({ project, onClose }: any) {
  if (!project) return null
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ type: 'spring', bounce: 0.2 }}
        className="relative z-10 w-full max-w-2xl glass rounded-3xl border border-white/15 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="h-1" style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="text-xs font-mono text-white/35 mb-2">{project.subtitle}</div>
              <h3 className="text-2xl font-black">{project.title}</h3>
            </div>
            <button onClick={onClose} className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/50 hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">{project.longDesc}</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((t: string) => (
              <span key={t} className="text-xs px-3 py-1 rounded-lg bg-white/6 border border-white/8 text-white/50 font-mono">{t}</span>
            ))}
          </div>
          <div className="flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white
                bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 transition-all"
            >
              <ExternalLink size={14} />
              View Live
              <ArrowUpRight size={14} />
            </a>
            <a
              href={project.github}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold glass border border-white/12 text-white/70 hover:text-white transition-all"
            >
              <GitBranch size={14} />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const [modal, setModal] = useState<any>(null)
  const { ref, inView } = useInView()

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())) || p.type.toLowerCase().includes(filter.toLowerCase()) || p.subtitle.toLowerCase().includes(filter.toLowerCase()))

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-violet-500" />
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-[3px]">Work</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-3">
                10+ Projects.<br /><span className="gradient-text">All Live.</span>
              </h2>
              <p className="text-white/40 text-base">Real apps used by real people — deployed and production-ready.</p>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {FILTERS.map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all font-mono
                    ${filter === f
                      ? 'bg-violet-600 text-white shadow-lg shadow-violet-500/30'
                      : 'glass border border-white/8 text-white/40 hover:text-white/70 hover:border-white/16'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onClick={setModal} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Featured — full-width card for top project */}
        {filter === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-5 glass rounded-2xl border border-violet-500/20 overflow-hidden hover:border-violet-500/40 transition-all cursor-pointer group"
            onClick={() => setModal(PROJECTS[0])}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="text-[10px] font-mono text-violet-400 uppercase tracking-widest mb-4">★ Featured Project</div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {PROJECTS[0].tags.map(t => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-violet-500/15 border border-violet-500/25 text-violet-300 font-mono">{t}</span>
                  ))}
                </div>
                <h3 className="text-2xl font-black mb-3 group-hover:gradient-text transition-all">{PROJECTS[0].title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{PROJECTS[0].longDesc}</p>
                <a
                  href={PROJECTS[0].live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-white transition-colors"
                >
                  View Live <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="p-8 flex items-center justify-center bg-gradient-to-br from-violet-600/10 to-cyan-500/10 border-l border-white/8 min-h-[200px]">
                <div className="text-center">
                  <div className="text-7xl mb-4">🔬</div>
                  <div className="text-white/60 text-sm font-semibold">Forensic Audio Analysis</div>
                  <div className="text-white/30 text-xs mt-1">Powered by Claude AI</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {modal && <ProjectModal project={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  )
}
