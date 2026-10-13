import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText, Download, Mail, CheckCircle2, ArrowRight } from 'lucide-react'
import { PERSONAL } from '../../data'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const resumePath = '/resume.pdf'

  const handleEmailRequest = () => {
    const subject = encodeURIComponent('Resume Request — Darshan')
    const body = encodeURIComponent(
      `Hi Darshan,\n\nI reviewed your portfolio and would like to receive a copy of your latest resume for upcoming opportunities.\n\nBest regards,`
    )
    window.location.href = `mailto:${PERSONAL.email}?subject=${subject}&body=${body}`
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.4, bounce: 0.2 }}
            onClick={e => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg glass-card rounded-2xl p-6 sm:p-8 border border-white/10 dark:border-white/10 border-slate-200/80 shadow-2xl text-left"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
                  <FileText size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white dark:text-white text-slate-900">
                    Curriculum Vitae / Resume
                  </h3>
                  <p className="text-xs font-mono text-white/50 dark:text-white/50 text-slate-500">
                    Darshan · Software Developer
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="w-9 h-9 rounded-xl glass flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content summary */}
            <div className="space-y-3 mb-6 text-sm text-white/70 dark:text-white/70 text-slate-600">
              <p>
                My resume details verified experience in full-stack web engineering, production architectures,
                academic coursework at BIET Davangere, and co-founding ShadowQuant Dynamics.
              </p>
              <div className="rounded-xl p-3 bg-white/[0.03] dark:bg-white/[0.03] bg-slate-100 border border-white/10 dark:border-white/10 border-slate-200 text-xs font-mono space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 size={13} />
                  <span>18 Verified Live Projects</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400">
                  <CheckCircle2 size={13} />
                  <span>Full-Stack & Applied AI Expertise</span>
                </div>
                <div className="flex items-center gap-2 text-violet-400">
                  <CheckCircle2 size={13} />
                  <span>Open for Internships, Full-Time Roles & Consulting</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={resumePath}
                download="Darshan_Resume.pdf"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-600/30 transition-all"
              >
                <Download size={16} />
                Download PDF
              </a>

              <button
                onClick={handleEmailRequest}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold glass border border-white/15 hover:border-white/30 text-white/80 hover:text-white transition-all"
              >
                <Mail size={16} />
                Request by Email
                <ArrowRight size={14} className="opacity-60" />
              </button>
            </div>

            {/* Note */}
            <p className="mt-4 text-[11px] text-center text-white/40 dark:text-white/40 text-slate-400 font-mono">
              Direct email:{' '}
              <a href={`mailto:${PERSONAL.email}`} className="text-violet-400 hover:underline">
                {PERSONAL.email}
              </a>
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
