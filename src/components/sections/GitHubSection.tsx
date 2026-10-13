import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../../hooks'
import { PERSONAL, FEATURED_GITHUB_REPOS } from '../../data'
import {
  GitBranch,
  ExternalLink,
  FolderGit2,
  CheckCircle2,
  ArrowUpRight,
  Loader2,
} from 'lucide-react'

interface RepoItem {
  name: string
  url: string
  description: string
  language: string
  languageColor: string
}

export default function GitHubSection() {
  const { ref, inView } = useInView(0.12)
  const [repos, setRepos] = useState<RepoItem[]>(FEATURED_GITHUB_REPOS)
  const [loading, setLoading] = useState(false)

  // Gracefully fetch live repositories from GitHub API with instant fallback
  useEffect(() => {
    let isMounted = true
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://api.github.com/users/${PERSONAL.githubUsername}/repos?sort=updated&per_page=6`
        )
        if (!res.ok) throw new Error('GitHub API rate limit or error')
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0 && isMounted) {
          const mapped: RepoItem[] = data.map((r: any) => ({
            name: r.name,
            url: r.html_url,
            description: r.description || 'Production repository by ' + PERSONAL.name,
            language: r.language || 'TypeScript',
            languageColor: r.language === 'TypeScript' ? '#3178c6' : '#f7df1e',
          }))
          setRepos(mapped)
        }
      } catch {
        // Fallback to static verified repositories
        if (isMounted) setRepos(FEATURED_GITHUB_REPOS)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchGitHubRepos()
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="github" className="py-24 sm:py-32 relative text-left">
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
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-[3px]">
              Open Source & Code
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-900 tracking-tight leading-tight">
                GitHub <span className="gradient-text">Activity.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/60 dark:text-white/60 text-slate-600 font-light mt-2 max-w-xl">
                Explore verified repositories and codebases under{' '}
                <span className="font-mono text-violet-400 font-semibold">@{PERSONAL.githubUsername}</span>.
              </p>
            </div>

            <a
              href={PERSONAL.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-md transition-all self-start sm:self-auto"
            >
              <GitBranch size={15} />
              Visit GitHub Profile
              <ArrowUpRight size={13} />
            </a>
          </div>
        </motion.div>

        {/* GitHub Repos Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {loading && (
            <div className="absolute inset-0 bg-black/20 backdrop-blur-xs flex items-center justify-center rounded-2xl z-20">
              <Loader2 className="animate-spin text-violet-400" size={24} />
            </div>
          )}

          {repos.map((repo, idx) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              className="p-5 rounded-2xl glass-card border border-white/8 dark:border-white/8 border-slate-200/90 hover:border-violet-500/35 transition-all flex flex-col justify-between group shadow-sm hover:shadow-violet-500/10 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-violet-400">
                    <FolderGit2 size={16} />
                    <span className="font-mono text-[11px] text-white/40 dark:text-white/40 text-slate-400">
                      Public Repo
                    </span>
                  </div>
                  <ExternalLink
                    size={14}
                    className="text-white/30 dark:text-white/30 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                <h3 className="font-bold text-base text-white dark:text-white text-slate-900 group-hover:text-violet-400 transition-colors tracking-tight mb-2">
                  {repo.name}
                </h3>

                <p className="text-xs text-white/60 dark:text-white/60 text-slate-500 font-light leading-relaxed mb-6 line-clamp-3">
                  {repo.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/6 dark:border-white/6 border-slate-200 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span className="text-white/70 dark:text-white/70 text-slate-600">
                    {repo.language}
                  </span>
                </div>
                <span className="text-[11px] text-violet-400 font-semibold">Inspect Code ›</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Profile Card Summary Banner */}
        <div className="mt-10 p-6 rounded-2xl glass border border-white/8 dark:border-white/8 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-mono font-bold text-lg">
              GH
            </div>
            <div>
              <h4 className="font-bold text-sm text-white dark:text-white text-slate-900">
                github.com/{PERSONAL.githubUsername}
              </h4>
              <p className="text-xs text-white/50 dark:text-white/50 text-slate-500 font-mono">
                Continuous integration & deployment on Vercel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
            <CheckCircle2 size={14} />
            <span>All 18 Project Repos Active & Maintained</span>
          </div>
        </div>
      </div>
    </section>
  )
}
