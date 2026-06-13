import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { EXPERIENCE } from '../../data'
import { ExternalLink } from 'lucide-react'

export default function Experience() {
  const { ref, inView } = useInView()

  return (
    <section id="experience" className="py-28 relative">
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-violet-500" />
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-[3px]">Experience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-4">
            Career<br /><span className="gradient-text">Journey.</span>
          </h2>
          <p className="text-white/40 text-base">The path that shaped me into the developer I am today.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/30 to-transparent" />

          <div className="space-y-2">
            {EXPERIENCE.map((item, i) => {
              const { ref: itemRef, inView: itemVisible } = useInView(0.2)
              return (
                <motion.div
                  key={i}
                  ref={itemRef as any}
                  initial={{ opacity: 0, x: -30 }}
                  animate={itemVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16"
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-[19px] top-6 w-[14px] h-[14px] rounded-full border-2 z-10
                    ${item.current
                      ? 'bg-violet-500 border-violet-300 shadow-lg shadow-violet-500/60'
                      : 'bg-slate-800 border-violet-500/50'
                    }`}
                  />
                  {/* Year pill */}
                  <div className="absolute left-[-14px] top-[18px] text-[10px] font-mono font-bold text-violet-400/80 -translate-x-full pr-3 hidden sm:block whitespace-nowrap">
                    {item.year}
                  </div>

                  {/* Card */}
                  <div className="glass rounded-2xl border border-white/8 hover:border-violet-500/25 transition-all duration-300 p-6 mb-4 group">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-3 gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-sm font-mono text-violet-400 sm:hidden">{item.year}</span>
                          {item.current && (
                            <span className="text-[10px] px-2.5 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30 font-semibold">
                              Current
                            </span>
                          )}
                        </div>
                        <h3 className="font-black text-lg text-white group-hover:gradient-text transition-all">{item.title}</h3>
                        <p className="text-sm text-violet-400/80 font-medium mt-1">{item.company}</p>
                      </div>
                      {item.current && (
                        <a
                          href="https://shadowquantdynamics.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="flex-shrink-0 w-9 h-9 rounded-xl glass border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>

                    <p className="text-sm text-white/50 leading-relaxed mb-4">{item.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map(t => (
                        <span
                          key={t}
                          className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-white/45 font-mono hover:border-violet-500/30 hover:text-violet-300 transition-all cursor-default"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
