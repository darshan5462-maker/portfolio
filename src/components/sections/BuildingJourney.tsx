import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { BUILDING_JOURNEY } from '../../data'
import {
  MapPin,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react'

export default function BuildingJourney() {
  const { ref, inView } = useInView(0.12)

  return (
    <section id="journey" className="py-24 sm:py-32 relative text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-violet-500" />
            <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-[3px]">
              Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-900 tracking-tight leading-tight">
            My Building <span className="gradient-text">Journey.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 dark:text-white/60 text-slate-600 font-light mt-2 max-w-xl">
            A documented overview of educational roots, venture initiatives, and real product shipping milestones.
          </p>
        </motion.div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-px bg-gradient-to-b from-violet-500 via-cyan-500/40 to-transparent pointer-events-none" />

          <div className="space-y-10">
            {BUILDING_JOURNEY.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-[9px] sm:left-[25px] top-6 w-3.5 h-3.5 rounded-full bg-violet-500 border-2 border-slate-900 dark:border-slate-900 border-white shadow-[0_0_12px_#8b5cf6] z-10" />

                  {/* Journey Milestone Card */}
                  <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/8 dark:border-white/8 border-slate-200/90 hover:border-violet-500/30 transition-all text-left">
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-violet-400 px-2.5 py-1 rounded-md bg-violet-600/10 border border-violet-500/20">
                          {item.period}
                        </span>
                        <span className="text-[11px] font-mono text-white/50 dark:text-white/50 text-slate-500">
                          {item.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-mono text-white/40 dark:text-white/40 text-slate-400">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Role & Organization Title */}
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white dark:text-white text-slate-900">
                          {item.role}
                        </h3>
                        <p className="text-sm font-semibold text-cyan-400 dark:text-cyan-400 text-cyan-600">
                          {item.entity}
                        </p>
                      </div>

                      {item.url && (
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:border-violet-500/40 transition-colors flex-shrink-0"
                          title={`Visit ${item.entity}`}
                        >
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>

                    {/* Summary Description */}
                    <p className="text-xs sm:text-sm text-white/70 dark:text-white/70 text-slate-600 font-light leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Verified Milestones List */}
                    <div className="space-y-1.5 mb-5">
                      {item.milestones.map((m, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs sm:text-sm text-white/60 dark:text-white/60 text-slate-500 font-light"
                        >
                          <CheckCircle2 size={13} className="text-emerald-400 mt-1 flex-shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/6 dark:border-white/6 border-slate-200">
                      {item.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 dark:bg-white/5 bg-slate-100 text-white/50 dark:text-white/50 text-slate-500"
                        >
                          {tag}
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
