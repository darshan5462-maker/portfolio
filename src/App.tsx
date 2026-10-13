import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Cursor from './components/ui/Cursor'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import AIAssistant from './components/ui/AIAssistant'
import ResumeModal from './components/ui/ResumeModal'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import BuildingJourney from './components/sections/BuildingJourney'
import GitHubSection from './components/sections/GitHubSection'
import Contact from './components/sections/Contact'

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  return (
    <AnimatePresence>
      <div className="relative min-h-screen selection:bg-violet-500/30">
        {/* Desktop cursor enhancer */}
        <Cursor />

        {/* Global sticky navigation bar */}
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />

        {/* Main page content sections */}
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <About />
          <Projects />
          <Skills />
          <BuildingJourney />
          <GitHubSection />
          <Contact />
        </main>

        {/* Professional footer */}
        <Footer />

        {/* AI Knowledge Assistant widget */}
        <AIAssistant />

        {/* Resume Download / Request Modal */}
        <ResumeModal
          isOpen={isResumeOpen}
          onClose={() => setIsResumeOpen(false)}
        />
      </div>
    </AnimatePresence>
  )
}
