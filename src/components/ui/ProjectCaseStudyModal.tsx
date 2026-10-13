import { motion, AnimatePresence } from 'framer-motion'
import {
  X,
  ExternalLink,
  GitBranch,
  CheckCircle2,
  Cpu,
  Users,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  FileCode2,
} from 'lucide-react'
import type { ProjectItem } from '../../data'

interface ProjectCaseStudyModalProps {
  project: ProjectItem | null
  onClose: () => void
}

export default function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  if (!project) return null

  const cs = project.caseStudy

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[300] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.45, bounce: 0.15 }}
          onClick={e => e.stopPropagation()}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl sm:rounded-3xl border border-white/10 dark:border-white/10 border-slate-200 shadow-2xl text-left my-auto"
        >
          {/* Accent top stripe */}
          <div
            className="h-1.5 w-full sticky top-0 z-20"
            style={{
              background: `linear-gradient(90deg, ${project.accentColor}, #38bdf8, transparent)`,
            }}
          />

          <div className="p-6 sm:p-10">
            {/* Top Bar: Badges + Close */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2.5 flex-wrap mb-2">
                  <span className="font-mono text-xs font-bold text-white/40 dark:text-white/40 text-slate-400">
                    PROJECT {project.num}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 dark:bg-white/10 bg-slate-100 text-white/70 dark:text-white/70 text-slate-700 font-mono">
                    {project.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {project.status}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-black text-white dark:text-white text-slate-900 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-violet-400 dark:text-violet-400 text-violet-600 mt-1">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close case study"
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Quick Action CTA Header */}
            <div className="flex items-center gap-3 flex-wrap p-4 rounded-xl bg-white/[0.03] dark:bg-white/[0.03] bg-slate-50 border border-white/8 dark:border-white/8 border-slate-200 mb-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md shadow-violet-600/30 transition-all"
              >
                <ExternalLink size={14} />
                Open Live Application
                <ArrowUpRight size={13} />
              </a>

              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold glass border border-white/15 text-white/80 hover:text-white transition-all"
                >
                  <GitBranch size={14} />
                  Inspect GitHub Source
                </a>
              ) : (
                <span className="text-xs font-mono text-white/40 dark:text-white/40 text-slate-400 px-3 py-2">
                  Source repository private or client-managed
                </span>
              )}
            </div>

            {/* Main Case Study Sections */}
            <div className="space-y-8 text-sm leading-relaxed text-white/70 dark:text-white/70 text-slate-600">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-violet-400 mb-2 flex items-center gap-2">
                  <Sparkles size={14} />
                  Project Overview
                </h4>
                <p className="text-base text-white/90 dark:text-white/90 text-slate-800 font-light leading-relaxed">
                  {cs?.overview || project.description}
                </p>
              </div>

              {/* Problem & Users Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/8 dark:border-white/8 border-slate-200">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-rose-400 mb-2 flex items-center gap-2">
                    <AlertTriangle size={14} />
                    Problem Addressed
                  </h5>
                  <p className="text-xs sm:text-sm text-white/70 dark:text-white/70 text-slate-600">
                    {cs?.problem || 'Addressing real-world usability and accessibility friction in production.'}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/8 dark:border-white/8 border-slate-200">
                  <h5 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-2">
                    <Users size={14} />
                    Intended Users
                  </h5>
                  <p className="text-xs sm:text-sm text-white/70 dark:text-white/70 text-slate-600">
                    {cs?.intendedUsers || 'End users, prospective clients, and operational administrators.'}
                  </p>
                </div>
              </div>

              {/* Engineering Contribution */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
                  <ShieldCheck size={14} />
                  Darshan’s Engineering Contribution
                </h4>
                <p className="text-sm">
                  {cs?.contribution ||
                    'Architected frontend user flows, implemented state and data pipelines, and optimized production responsiveness.'}
                </p>
              </div>

              {/* Implemented Features */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/50 dark:text-white/50 text-slate-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Key Verified Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {(cs?.implementedFeatures || project.highlights).map((feat, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/6 dark:border-white/6 border-slate-200 text-xs sm:text-sm"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Architecture & Stack */}
              <div className="p-5 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/8 dark:border-white/8 border-slate-200">
                <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2 flex items-center gap-2">
                  <Cpu size={14} />
                  Technical Architecture
                </h4>
                <p className="text-xs sm:text-sm mb-4">
                  {cs?.architecture ||
                    'Single Page Application architecture with modular components, responsive state handling, and automated Vercel CI/CD builds.'}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/8 dark:border-white/8 border-slate-200">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-1 rounded-md bg-violet-600/10 border border-violet-500/20 text-violet-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engineering Decisions & Challenges */}
              {cs?.keyDecisions && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/6 dark:border-white/6 border-slate-200">
                    <h5 className="text-xs font-mono uppercase text-amber-400 mb-2 flex items-center gap-2">
                      <Lightbulb size={13} />
                      Key Engineering Decisions
                    </h5>
                    <ul className="text-xs space-y-1.5 list-disc list-inside">
                      {cs.keyDecisions.map((dec, i) => (
                        <li key={i}>{dec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-white/[0.02] dark:bg-white/[0.02] bg-slate-50 border border-white/6 dark:border-white/6 border-slate-200">
                    <h5 className="text-xs font-mono uppercase text-violet-400 mb-2 flex items-center gap-2">
                      <FileCode2 size={13} />
                      Challenges & Solutions
                    </h5>
                    <ul className="text-xs space-y-1.5 list-disc list-inside">
                      {cs.challengesAndSolutions.map((chal, i) => (
                        <li key={i}>{chal}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Verification Audit Note */}
              <div className="p-3.5 rounded-xl bg-violet-950/20 dark:bg-violet-950/20 bg-violet-50 border border-violet-500/20 text-xs font-mono flex items-center gap-2 text-violet-300 dark:text-violet-300 text-violet-700">
                <ShieldCheck size={16} className="text-violet-400 flex-shrink-0" />
                <span>
                  Verification Status: {cs?.verificationNote || 'Live website verified at ' + project.liveUrl}
                </span>
              </div>
            </div>

            {/* Bottom Footer Action */}
            <div className="mt-8 pt-6 border-t border-white/8 dark:border-white/8 border-slate-200 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs font-mono text-white/40 dark:text-white/40 text-slate-400">
                Live URL: {project.liveUrl}
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md transition-all ml-auto"
              >
                Visit Live Site
                <ExternalLink size={13} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
