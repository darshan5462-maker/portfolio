import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Sparkles, ChevronRight } from 'lucide-react'
import { AI_QUESTIONS } from '../../data'

interface Message {
  role: 'user' | 'assistant'
  text: string
}

function getAIResponse(q: string): string {
  const lower = q.toLowerCase()
  if (lower.includes('stack') || lower.includes('tech') || lower.includes('skill'))
    return `Darshan's stack: **HTML/CSS/JS** for frontend, **Node.js + Express** for backend, **Firebase + MySQL** for databases. He also builds with **Three.js/WebGL**, integrates **Claude AI**, and deploys on **Vercel + Render**. 🔥`
  if (lower.includes('project') || lower.includes('work') || lower.includes('built'))
    return `Darshan has shipped **10+ live projects** including:\n• 🔬 Audio Forensic Detector (AI/Claude)\n• 🎙️ SQ Voice Agent (AI Voice)\n• 🛒 WAA Kids Closet (Live E-Commerce)\n• 💧 PureDrop Water Delivery\n• 🏥 NutriTrack Diet Tracker\n\nAll deployed and live in production!`
  if (lower.includes('hire') || lower.includes('available') || lower.includes('freelance'))
    return `Yes! Darshan is **currently available** for freelance projects and full-time roles. 🟢\n\nHe's open to remote work worldwide. Reach him at **darshan5462@gmail.com** or call **+91 9164406348**.`
  if (lower.includes('shadowquant') || lower.includes('company') || lower.includes('co-founder'))
    return `Darshan is the **Co-founder & Developer** at **ShadowQuant Dynamics** 🚀\n\nThey build AI-powered web products, voice agents, delivery systems and backend services for real clients. Visit: shadowquantdynamics.com`
  if (lower.includes('contact') || lower.includes('email') || lower.includes('reach'))
    return `📧 **Email:** darshan5462@gmail.com\n📞 **Phone:** +91 9164406348\n📍 **Location:** Karnataka, India\n\nHe replies fast! You can also use the contact form on this page.`
  if (lower.includes('ai') || lower.includes('voice') || lower.includes('claude'))
    return `Darshan has built multiple **AI projects**:\n• 🔬 Audio Forensic Detector (deepfake detection with Claude AI)\n• 🎙️ SQ Voice Agent (conversational voice automation)\n• 🤖 Various Claude AI integrations\n\nHe specializes in prompt engineering and real-time AI workflows.`
  if (lower.includes('experience') || lower.includes('background') || lower.includes('years'))
    return `Darshan has **2+ years** of full-stack development experience.\n\nHe's a B.E. Computer Science student at **BIET Davangere**, Co-founder of **ShadowQuant Dynamics**, and has shipped **10+ live production apps** for real clients.`
  if (lower.includes('resume') || lower.includes('cv') || lower.includes('download'))
    return `You can view Darshan's full experience on this portfolio! 📄\n\nFor a resume copy, contact him directly at **darshan5462@gmail.com** with the subject "Resume Request".`
  return `Great question! Darshan is a **Full Stack Developer & Co-founder** from Karnataka, India. He builds premium web apps, AI tools, and voice agents. With 10+ live projects, he's ready to build your next product! 🚀\n\nAsk me about his tech stack, projects, or how to hire him.`
}

function TypingIndicator() {
  return (
    <div className="flex gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-violet-400/60"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === 'user'
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}
    >
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mr-2 flex-shrink-0 mt-0.5 shadow-lg shadow-violet-500/30">
          <Sparkles size={12} className="text-white" />
        </div>
      )}
      <div
        className={`max-w-[82%] px-4 py-3 rounded-2xl text-sm leading-relaxed
          ${isUser
            ? 'bg-gradient-to-br from-violet-600 to-violet-700 text-white rounded-tr-sm'
            : 'bg-white/[0.07] border border-white/10 text-white/85 rounded-tl-sm'
          }`}
      >
        {msg.text.split('\n').map((line, i) => (
          <div key={i}>
            {line.split(/\*\*(.*?)\*\*/g).map((part, j) =>
              j % 2 === 1
                ? <strong key={j} className="text-violet-300 font-semibold">{part}</strong>
                : <span key={j}>{part}</span>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function AIAssistant() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: `Hi! I'm Darshan's AI assistant. 👋\n\nAsk me anything about his **skills**, **projects**, **experience**, or how to **hire him**!` }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const send = (text: string) => {
    if (!text.trim()) return
    setMessages(m => [...m, { role: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(m => [...m, { role: 'assistant', text: getAIResponse(text) }])
    }, 900 + Math.random() * 600)
  }

  return (
    <>
      {/* Floating button */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[400] w-14 h-14 rounded-2xl
          bg-gradient-to-br from-violet-600 to-cyan-600
          shadow-2xl shadow-violet-500/40 flex items-center justify-center
          text-white transition-all hover:shadow-violet-500/60"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.div>
            : <motion.div key="chat" initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.7, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle size={22} /></motion.div>
          }
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-2xl border-2 border-violet-400/50 animate-ping" />
        )}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 20 }}
            transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
            className="fixed bottom-24 right-6 z-[399] w-[360px] max-h-[520px] flex flex-col
              glass rounded-3xl border border-white/12 shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-white/8 flex items-center gap-3 bg-gradient-to-r from-violet-600/10 to-cyan-600/10">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white">Darshan's AI</div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] text-emerald-400 font-mono">Online — Ask me anything</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-1 min-h-0 max-h-64">
              {messages.map((m, i) => <MessageBubble key={i} msg={m} />)}
              {typing && (
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mr-0">
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="bg-white/[0.07] border border-white/10 rounded-2xl rounded-tl-sm">
                    <TypingIndicator />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Suggested questions */}
            {messages.length < 3 && (
              <div className="px-4 pb-2 flex flex-col gap-1.5">
                <div className="text-[10px] text-white/25 font-mono mb-1">Suggested questions:</div>
                {AI_QUESTIONS.slice(0, 3).map(q => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-left text-xs px-3 py-2 rounded-xl bg-white/[0.04] border border-white/8
                      text-white/55 hover:text-white hover:bg-white/8 hover:border-white/16
                      transition-all flex items-center gap-2 group"
                  >
                    <ChevronRight size={10} className="text-violet-400 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/8">
              <form
                onSubmit={e => { e.preventDefault(); send(input) }}
                className="flex items-center gap-2 bg-white/[0.05] rounded-xl border border-white/8 px-3 py-2 focus-within:border-violet-500/40 transition-colors"
              >
                <input
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask anything about Darshan..."
                  className="flex-1 bg-transparent text-sm text-white placeholder-white/25 outline-none"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={!input.trim() || typing}
                  className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-600
                    flex items-center justify-center text-white disabled:opacity-30 transition-opacity"
                >
                  <Send size={12} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
