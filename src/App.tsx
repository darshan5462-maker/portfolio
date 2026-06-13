import { AnimatePresence } from 'framer-motion'
import Cursor from './components/ui/Cursor'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import AIAssistant from './components/ui/AIAssistant'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <AnimatePresence>
      <div className="noise relative min-h-screen">
        <Cursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
        <AIAssistant />
      </div>
    </AnimatePresence>
  )
}
