import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Sparkles, Bot, User } from 'lucide-react'
import { AI_KNOWLEDGE_QUESTIONS } from '../../data'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

function getAIResponse(q: string): string {
  const lower = q.toLowerCase()

  if (lower.includes('stack') || lower.includes('tech') || lower.includes('skill')) {
    return `**Darshan's Technical Stack:**\n\n• **Frontend:** React, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, Web Audio API, Canvas\n• **Backend:** Node.js, Express.js, RESTful API design, Java\n• **Databases:** Firebase (Auth & Realtime DB), MongoDB (MERN), MySQL\n• **AI & Audio:** Claude AI integration, Web Audio API spectrogram DSP, Voice Agent architectures\n• **DevOps & Cloud:** Git/GitHub, Vite, Vercel, Render`
  }

  if (lower.includes('project') || lower.includes('work') || lower.includes('built') || lower.includes('portfolio')) {
    return `Darshan has engineered and shipped **18 verified live web applications**! Key highlights include:\n\n1. **Audio Forensic Detector:** Digital audio notary analyzing synthetic deepfake voice tampering via real-time Web Audio API spectrograms.\n2. **Powerstar Platform:** On-demand workforce & trade services marketplace.\n3. **Fair Savings App:** Fintech weekly savings and loan ledger management system.\n4. **NutriTrack Diet Tracker:** Full-stack MERN patient nutrition & calorie tracking app.\n5. **DRIP D2C Storefront:** Modern street fashion e-commerce experience.\n6. **Karnataka Adi Jambava Sangha:** Multilingual Kannada community welfare portal.\n\nAll 18 projects are live and accessible in the Projects section!`
  }

  if (lower.includes('powerstar')) {
    return `**Powerstar Platform** is an on-demand services marketplace connecting regional clients with verified trade professionals (electricians, masons, plumbers) and transport vehicles with transparent pricing. Built with React, TypeScript, and Vite.`
  }

  if (lower.includes('audio') || lower.includes('forensic') || lower.includes('deepfake')) {
    return `**Audio Forensic Detector** is an in-browser audio notary tool. It inspects voice recordings for synthetic manipulation and splices using Web Audio API frequency spectrograms and trust audit heuristics. Deployed live at audio-forensic-detector.vercel.app!`
  }

  if (lower.includes('shadowquant') || lower.includes('company') || lower.includes('founder')) {
    return `Darshan is the **Co-founder & Software Developer** at **ShadowQuant Dynamics** (shadowquantdynamics.com). They build AI-assisted software systems, conversational voice intelligence tools, and scalable web solutions for clients.`
  }

  if (lower.includes('education') || lower.includes('college') || lower.includes('degree') || lower.includes('biet')) {
    return `Darshan is pursuing his **Bachelor of Engineering in Computer Science & Engineering** at **Bapuji Institute of Engineering & Technology (BIET)** in Davangere, Karnataka.`
  }

  if (lower.includes('hire') || lower.includes('available') || lower.includes('internship') || lower.includes('opportunity')) {
    return `Yes! Darshan is **actively available for 2026 opportunities**, including software engineering internships, full-stack developer roles, AI project collaborations, and client engagements.\n\nContact him directly at **darshan5462@gmail.com** or call **+91 9480765462**.`
  }

  if (lower.includes('resume') || lower.includes('cv')) {
    return `You can download Darshan's resume by clicking the **"Download Resume"** button in the hero section or navigation bar. You can also email him directly at **darshan5462@gmail.com** for a tailored copy!`
  }

  if (lower.includes('instagram') || lower.includes('insta')) {
    return `You can connect with Darshan on Instagram at **@darshan__5462**:\nhttps://www.instagram.com/darshan__5462/`
  }

  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach') || lower.includes('phone') || lower.includes('call') || lower.includes('number')) {
    return `**Direct Contact Details:**\n\n• **Email:** darshan5462@gmail.com\n• **Phone:** +91 9480765462\n• **Instagram:** https://www.instagram.com/darshan__5462/\n• **GitHub:** github.com/darshan5462-maker\n• **LinkedIn:** linkedin.com/in/darshan-mang-56110136a\n• **Location:** Karnataka, India`
  }

  return `Darshan is a **Software Developer & Product Builder** based in Karnataka, India. He has shipped 18 live web applications, co-founded ShadowQuant Dynamics, and studies Computer Science at BIET Davangere.\n\nFeel free to ask me about his tech stack, featured projects, or how to reach him!`
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: `Hello! I'm Darshan's portfolio AI assistant. Ask me anything about his 18 live projects, technical stack, or availability for roles!`,
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = (textToSend?: string) => {
    const text = textToSend || input
    if (!text.trim()) return

    setMessages(prev => [...prev, { role: 'user', text }])
    if (!textToSend) setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const reply = getAIResponse(text)
      setMessages(prev => [...prev, { role: 'assistant', text: reply }])
      setIsTyping(false)
    }, 450)
  }

  return (
    <>
      {/* Floating Assistant Trigger Pill */}
      <div className="fixed bottom-6 right-6 z-[190]">
        <button
          onClick={() => setOpen(v => !v)}
          aria-label="Open AI Assistant"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-2xl shadow-violet-600/40 hover:shadow-violet-600/60 hover:scale-105 active:scale-95 transition-all cursor-pointer font-bold text-xs"
        >
          <Sparkles size={16} />
          <span className="hidden sm:inline">Ask AI About Darshan</span>
          <span className="sm:hidden">AI</span>
        </button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-20 right-4 sm:right-6 z-[195] w-[92vw] sm:w-[420px] max-h-[560px] h-[520px] glass-card rounded-2xl border border-white/12 dark:border-white/12 border-slate-300 shadow-2xl flex flex-col overflow-hidden text-left"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/8 dark:border-white/8 border-slate-200 flex items-center justify-between bg-violet-950/20">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white text-xs shadow-md">
                  <Bot size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white dark:text-white text-slate-900 leading-tight">
                    Darshan's Portfolio AI
                  </h4>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online & Knowledge-Ready
                  </span>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-lg glass flex items-center justify-center text-white/50 hover:text-white"
              >
                <X size={16} />
              </button>
            </div>

            {/* Suggested Prompts */}
            <div className="px-4 py-2 border-b border-white/6 dark:border-white/6 border-slate-200 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5 bg-black/20">
              {AI_KNOWLEDGE_QUESTIONS.slice(0, 4).map(q => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/5 hover:bg-violet-600/20 text-white/70 hover:text-white border border-white/8 transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Messages View */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm">
              {messages.map((m, i) => {
                const isUser = m.role === 'user'
                return (
                  <div
                    key={i}
                    className={`flex items-start gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="w-6 h-6 rounded-md bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0 mt-0.5">
                        <Bot size={12} />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-xl max-w-[82%] leading-relaxed ${
                        isUser
                          ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-tr-none'
                          : 'glass border border-white/8 dark:border-white/8 border-slate-200 text-white/85 dark:text-white/85 text-slate-800 rounded-tl-none font-light whitespace-pre-wrap'
                      }`}
                    >
                      {m.text}
                    </div>
                    {isUser && (
                      <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-white/60 flex-shrink-0 mt-0.5">
                        <User size={12} />
                      </div>
                    )}
                  </div>
                )
              })}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-violet-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-violet-400 animate-bounce" />
                  <span>Synthesizing response...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={e => {
                e.preventDefault()
                handleSend()
              }}
              className="p-3 border-t border-white/8 dark:border-white/8 border-slate-200 flex items-center gap-2 bg-black/30"
            >
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ask about projects, stack, hire..."
                className="flex-1 px-3.5 py-2 rounded-xl glass border border-white/10 dark:border-white/10 border-slate-300 text-xs sm:text-sm text-white dark:text-white text-slate-900 placeholder:text-white/30 focus:outline-none focus:border-violet-500"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl bg-violet-600 hover:bg-violet-500 text-white flex items-center justify-center transition-colors disabled:opacity-40 cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
