import { useState, useMemo } from 'react'
import {
  ExternalLink,
  GitBranch,
  Search,
  Sparkles,
  CheckCircle2,
  FileText,
  Layers,
} from 'lucide-react'
import {
  PROJECTS,
  PROJECT_CATEGORIES,
} from '../../data'
import type {
  ProjectCategory,
  ProjectItem,
} from '../../data'
import ProjectCaseStudyModal from '../ui/ProjectCaseStudyModal'

// Branded Project Thumbnail / Visual Cover Generator
function ProjectBrandedCover({ project }: { project: ProjectItem }) {
  // Extract 2-letter monogram
  const monogram = project.title
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()

  return (
    <div
      className="relative w-full h-44 rounded-xl overflow-hidden flex flex-col justify-between p-4 border border-white/6 dark:border-white/6 border-slate-200"
      style={{
        background: `radial-gradient(ellipse 90% 90% at 50% 20%, ${project.accentColor}25 0%, #0a0d18 100%)`,
      }}
    >
      {/* Background Watermark Monogram */}
      <div
        className="absolute right-3 bottom-0 text-7xl font-black select-none pointer-events-none opacity-[0.06] font-mono tracking-tighter"
        style={{ color: project.accentColor }}
      >
        {monogram}
      </div>

      {/* Top Bar: Number & Live Indicator */}
      <div className="flex items-center justify-between z-10">
        <span className="font-mono text-xs font-bold text-white/50 tracking-wider">
          #{project.num}
        </span>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] font-mono font-semibold text-emerald-400">
            LIVE
          </span>
        </div>
      </div>

      {/* Center Monogram Emblem */}
      <div className="flex items-center gap-3 z-10 my-auto">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-black text-lg text-white shadow-lg border border-white/15"
          style={{
            background: `linear-gradient(135deg, ${project.accentColor}, #0284c7)`,
          }}
        >
          {monogram}
        </div>
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
            {project.category}
          </span>
          <span className="text-sm font-bold text-white tracking-tight line-clamp-1">
            {project.title}
          </span>
        </div>
      </div>

      {/* Bottom Bar: Accent Line */}
      <div className="z-10 flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-white/40">
        <span>VERIFIED DEPLOYMENT</span>
        <span className="text-white/60">{project.technologies[0]}</span>
      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({
  project,
  onOpenCaseStudy,
}: {
  project: ProjectItem
  onOpenCaseStudy: (p: ProjectItem) => void
}) {
  return (
    <article className="group relative rounded-2xl glass-card border border-white/8 dark:border-white/8 border-slate-200/90 hover:border-violet-500/35 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-violet-500/10 hover:-translate-y-1 text-left">
      {/* Top Accent Strip */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, transparent)`,
        }}
      />

      <div className="p-5 flex-1 flex flex-col">
        {/* Cover Graphic */}
        <div className="mb-4">
          <ProjectBrandedCover project={project} />
        </div>

        {/* Title & Category */}
        <div className="mb-2">
          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 dark:bg-white/5 bg-slate-100 text-white/60 dark:text-white/60 text-slate-600">
            {project.category}
          </span>
          <h3 className="text-lg font-black text-white dark:text-white text-slate-900 tracking-tight mt-1.5 group-hover:text-violet-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-violet-400 dark:text-violet-400 text-violet-600 font-mono mt-0.5 line-clamp-1">
            {project.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/65 dark:text-white/65 text-slate-600 font-light leading-relaxed mb-4 flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 dark:bg-white/5 bg-slate-100 text-white/50 dark:text-white/50 text-slate-500 border border-white/5 dark:border-white/5 border-slate-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 text-white/30">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Card Actions Footer */}
        <div className="pt-3 border-t border-white/8 dark:border-white/8 border-slate-200 flex items-center justify-between gap-2 flex-wrap">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold glass border border-white/10 dark:border-white/10 border-slate-300 text-white/80 dark:text-white/80 text-slate-700 hover:text-white hover:border-violet-500/40 transition-all cursor-pointer"
          >
            <FileText size={12} className="text-violet-400" />
            Case Study
          </button>

          <div className="flex items-center gap-1.5 ml-auto">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View verified GitHub repository"
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all"
              >
                <GitBranch size={13} />
              </a>
            )}

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-sm transition-all"
            >
              <span>Live</span>
              <ExternalLink size={11} />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>('All Projects')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(
    null
  )

  // Featured Projects list
  const featuredProjects = useMemo(() => {
    return PROJECTS.filter(p => p.featured)
  }, [])

  // Filtered & Searched Projects list
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => {
      const matchesCategory =
        selectedCategory === 'All Projects' || p.category === selectedCategory

      const query = searchQuery.trim().toLowerCase()
      if (!query) return matchesCategory

      const matchesSearch =
        p.title.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.technologies.some(t => t.toLowerCase().includes(query)) ||
        p.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  return (
    <section id="projects" className="py-24 sm:py-32 relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-cyan-500" />
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-[3px]">
              Production Showcase
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-5xl font-black text-white dark:text-white text-slate-900 tracking-tight leading-tight">
                Featured Work & <span className="gradient-text">18 Web Applications.</span>
              </h2>
              <p className="text-sm sm:text-base text-white/60 dark:text-white/60 text-slate-600 font-light mt-2 max-w-xl">
                Every listed project is verified, deployed, and accessible live. Filter by domain or search by technology below.
              </p>
            </div>

            {/* Quick stats badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl glass border border-white/10 text-xs font-mono text-white/70">
              <CheckCircle2 size={14} className="text-emerald-400" />
              <span>18 of 18 Projects Live & Verified</span>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* FEATURED PROJECTS HIGHLIGHT SECTION                           */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={16} className="text-violet-400" />
            <h3 className="text-xs font-mono uppercase tracking-widest text-violet-400 font-bold">
              Key Featured Products & Deep Dives
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={setSelectedCaseStudy}
              />
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* ALL 18 PROJECTS EXPLORER: FILTERS & SEARCH                    */}
        {/* ------------------------------------------------------------- */}
        <div className="pt-10 border-t border-white/8 dark:border-white/8 border-slate-200">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40 dark:text-white/40 text-slate-400"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search projects by name, tech (React, AI, MERN)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-xs sm:text-sm text-white dark:text-white text-slate-900 placeholder:text-white/35 dark:placeholder:text-white/35 placeholder:text-slate-400 focus:outline-none focus:border-violet-500/50 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-white/40 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results Counter */}
            <div className="text-xs font-mono text-white/50 dark:text-white/50 text-slate-500 flex items-center gap-2">
              <Layers size={13} />
              <span>
                Showing {filteredProjects.length} of {PROJECTS.length} verified projects
              </span>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            {PROJECT_CATEGORIES.map(category => {
              const count =
                category === 'All Projects'
                  ? PROJECTS.length
                  : PROJECTS.filter(p => p.category === category).length

              const isSelected = selectedCategory === category

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-600/20'
                      : 'glass border border-white/8 dark:border-white/8 border-slate-200 text-white/60 dark:text-white/60 text-slate-600 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-white/5 dark:bg-white/5 bg-slate-200 text-white/50 dark:text-white/50 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* All Filtered Projects Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 rounded-2xl glass border border-white/8">
              <p className="text-sm text-white/50 dark:text-white/50 text-slate-500 mb-2 font-mono">
                No projects matched your search criteria.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All Projects')
                }}
                className="text-xs font-semibold text-violet-400 hover:underline cursor-pointer"
              >
                Reset filters to view all 18 projects
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenCaseStudy={setSelectedCaseStudy}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </section>
  )
}
