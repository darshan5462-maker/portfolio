import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { SKILL_CATEGORIES } from '../../data'
import {
  Code2,
  Server,
  Database,
  Cpu,
  Wrench,
  CheckCircle2,
  Layers,
} from 'lucide-react'

const CATEGORY_ICONS: Record<string, any> = {
  'Frontend Development': Code2,
  'Backend Development': Server,
  'Databases & State': Database,
  'AI & Intelligent Systems': Cpu,
  'Developer Tools & Cloud': Wrench,
}

export default function Skills() {
  const { ref, inView } = useInView(0.12)
  const [activeTab, setActiveTab] = useState(SKILL_CATEGORIES[0].category)

  const activeCategoryData = SKILL_CATEGORIES.find(c => c.category === activeTab)

  return (
    <section id="skills" className="py-24 sm:py-32 relative text-left">
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
              Technical Stack
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-900 tracking-tight leading-tight">
            Verified Skills & <span className="gradient-text">Core Technologies.</span>
          </h2>
          <p className="text-sm sm:text-base text-white/60 dark:text-white/60 text-slate-600 font-light mt-2 max-w-xl">
            Only technologies actively used in my 18 production applications and academic coursework are listed.
            No arbitrary percentages — just verified hands-on capability.
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SKILL_CATEGORIES.map(cat => {
            const Icon = CATEGORY_ICONS[cat.category] || Layers
            const isSelected = activeTab === cat.category

            return (
              <button
                key={cat.category}
                onClick={() => setActiveTab(cat.category)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/20'
                    : 'glass border border-white/8 dark:border-white/8 border-slate-200 text-white/60 dark:text-white/60 text-slate-600 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon size={14} />
                <span>{cat.category}</span>
              </button>
            )
          })}
        </div>

        {/* Active Skills Display Box */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/8 dark:border-white/8 border-slate-200 mb-12">
          {activeCategoryData && (
            <div>
              <div className="mb-6 pb-4 border-b border-white/8 dark:border-white/8 border-slate-200 flex items-center justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-lg font-bold text-white dark:text-white text-slate-900">
                    {activeCategoryData.category}
                  </h3>
                  <p className="text-xs text-white/50 dark:text-white/50 text-slate-500 font-light mt-0.5">
                    {activeCategoryData.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-violet-400">
                  {activeCategoryData.skills.length} verified technologies
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {activeCategoryData.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/6 dark:border-white/6 border-slate-200/90 hover:border-violet-500/30 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h4 className="font-bold text-sm text-white dark:text-white text-slate-900 group-hover:text-violet-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-violet-600/10 text-violet-300 dark:text-violet-300 text-violet-700 border border-violet-500/20">
                        {skill.tag}
                      </span>
                    </div>
                    <p className="text-xs text-white/60 dark:text-white/60 text-slate-500 font-light leading-relaxed">
                      {skill.context}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Comprehensive Tech Summary Grid */}
        <div className="p-6 rounded-2xl glass border border-white/8 dark:border-white/8 border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 size={15} className="text-emerald-400" />
            <h4 className="text-xs font-mono uppercase tracking-widest text-white/70 dark:text-white/70 text-slate-700 font-bold">
              Summary of Verified Development Arsenal
            </h4>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              'React',
              'TypeScript',
              'JavaScript (ES6+)',
              'Node.js',
              'Express.js',
              'RESTful APIs',
              'HTML5 Semantic',
              'Tailwind CSS',
              'Firebase Auth & Realtime DB',
              'MongoDB (MERN)',
              'MySQL',
              'Web Audio API',
              'HTML5 Canvas',
              'Claude AI Prompting',
              'Git & GitHub',
              'Vite',
              'Vercel Deployment',
              'Render Hosting',
            ].map(item => (
              <span
                key={item}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-white/5 dark:bg-white/5 bg-slate-100 border border-white/8 dark:border-white/8 border-slate-200 text-white/70 dark:text-white/70 text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
