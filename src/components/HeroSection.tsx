import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Shield, Star, CheckCircle2, Clock, Target } from 'lucide-react'

const FULL_TEXT = 'Sua recompensa não precisa ser no videogame, pode ser real.'
const missions = [
  { type: 'Missão', label: 'Estudar 30 minutos', color: '#00ff88', xp: '+50 XP' },
  { type: 'Desafio', label: 'Ir na academia', color: '#00d4ff', xp: '+120 XP' },
  { type: 'Tarefa', label: 'Mandar mensagem para o Miguel', color: '#a78bfa', xp: '+30 XP' },
  { type: 'Evento', label: 'Reunião com a empresa', color: '#f59e0b', xp: '+80 XP' },
  { type: 'Daily', label: 'Sincronização Diária', color: '#00ff88', xp: '+200 XP' },
]

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const idx = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (idx.current < text.length) {
        setDisplayed(text.slice(0, idx.current + 1))
        idx.current++
      } else {
        setDone(true)
        clearInterval(timer)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [text])

  return (
    <span>
      {displayed}
      {!done && (
        <span
          className="inline-block w-0.5 h-8 md:h-12 ml-1 align-middle"
          style={{
            background: '#00ff88',
            animation: 'blink 0.8s step-end infinite',
          }}
        />
      )}
    </span>
  )
}

export default function HeroSection() {
  const [activeMission, setActiveMission] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setActiveMission(p => (p + 1) % missions.length), 2500)
    return () => clearInterval(t)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center pt-16 noise-overlay overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #0a0a0a 100%)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.3)',
              }}
            >
              <Sparkles size={14} color="#00ff88" />
              <span className="text-xs font-bold tracking-widest" style={{ color: '#00ff88' }}>
                Protocolo de Elite Ativado
              </span>
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: '#00ff88',
                  animation: 'heartbeat 2s ease-in-out infinite',
                  boxShadow: '0 0 8px #00ff88',
                }}
              />
            </motion.div>

            {/* H1 with typewriter */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#ffffff' }}
            >
              <TypewriterText text={FULL_TEXT} />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg leading-relaxed mb-10"
              style={{ color: '#a0a0b0', maxWidth: '520px' }}
            >
              Transforme suas tarefas em um jogo, aumente sua produtividade, consistência, e conquiste seus sonhos no mundo real.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 items-center mb-12"
            >
              <motion.a
                href="#pricing"
                className="heartbeat-btn flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-base"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  color: '#050510',
                  boxShadow: '0 0 30px rgba(0,255,136,0.4)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                Começar meu jogo
                <ArrowRight size={18} />
              </motion.a>
              <div className="flex items-center gap-2" style={{ color: '#a0a0b0' }}>
                <Shield size={14} style={{ color: '#00ff88' }} />
                <span className="text-sm">Sem compromisso</span>
              </div>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex -space-x-2">
                {[0,1,2,3].map(i => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold"
                    style={{
                      borderColor: '#0a0a0a',
                      background: ['#00ff88','#00d4ff','#a78bfa','#f59e0b'][i],
                      color: '#050510',
                    }}
                  >
                    {['A','B','C','D'][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="#00ff88" color="#00ff88" />)}
                </div>
                <span className="text-xs" style={{ color: '#a0a0b0' }}>+2.400 jogadores ativos</span>
              </div>
            </motion.div>
          </div>

          {/* Right — floating UI mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block float-element"
          >
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(15,15,26,0.9)',
                border: '1px solid rgba(0,255,136,0.2)',
                boxShadow: '0 0 60px rgba(0,255,136,0.1), 0 40px 80px rgba(0,0,0,0.5)',
              }}
            >
              {/* Window chrome */}
              <div
                className="flex items-center justify-between px-4 py-3"
                style={{ borderBottom: '1px solid #1a1a2e' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <span className="text-xs font-mono" style={{ color: '#a0a0b0' }}>dashboard.mvej</span>
                <div
                  className="px-2 py-0.5 rounded text-xs font-mono font-bold"
                  style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88' }}
                >
                  LIVE
                </div>
              </div>

              {/* Header stats */}
              <div className="px-5 pt-4 pb-3">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: '#a0a0b0' }}>NÍVEL ATUAL</p>
                    <p className="text-2xl font-black" style={{ color: '#00ff88' }}>Lv. 47</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono mb-0.5" style={{ color: '#a0a0b0' }}>XP TOTAL</p>
                    <p className="text-2xl font-black" style={{ color: '#00d4ff' }}>12.840</p>
                  </div>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: 'rgba(0,255,136,0.1)',
                      border: '1px solid rgba(0,255,136,0.3)',
                    }}
                  >
                    <Target size={22} color="#00ff88" />
                  </div>
                </div>

                {/* XP Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1" style={{ color: '#a0a0b0' }}>
                    <span className="font-mono">XP para nível 48</span>
                    <span style={{ color: '#00ff88' }}>78%</span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: '#1a1a2e' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '78%' }}
                      transition={{ duration: 1.5, delay: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
                        boxShadow: '0 0 8px rgba(0,255,136,0.6)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Missions list */}
              <div className="px-5 pb-5 space-y-2">
                <p className="text-xs font-mono font-bold mb-3" style={{ color: '#a0a0b0', letterSpacing: '0.1em' }}>
                  MISSÕES ATIVAS
                </p>
                {missions.map((m, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      background: activeMission === i
                        ? `rgba(${m.color === '#00ff88' ? '0,255,136' : m.color === '#00d4ff' ? '0,212,255' : m.color === '#a78bfa' ? '167,139,250' : '245,158,11'},0.08)`
                        : 'rgba(26,26,46,0.5)',
                      borderColor: activeMission === i ? m.color : 'rgba(26,26,46,0.8)',
                    }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all duration-300"
                    style={{ borderWidth: '1px' }}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className="px-1.5 py-0.5 rounded text-xs font-mono font-bold"
                        style={{
                          background: `rgba(${m.color === '#00ff88' ? '0,255,136' : m.color === '#00d4ff' ? '0,212,255' : m.color === '#a78bfa' ? '167,139,250' : '245,158,11'},0.15)`,
                          color: m.color,
                          fontSize: '9px',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {m.type.toUpperCase()}
                      </div>
                      <span className="text-xs font-medium" style={{ color: '#e0e0e8' }}>
                        {m.label}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold" style={{ color: m.color }}>
                      {m.xp}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none rounded-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,255,136,0.03) 0%, transparent 50%, rgba(0,212,255,0.03) 100%)',
                }}
              />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(15,15,26,0.95)',
                border: '1px solid rgba(0,255,136,0.4)',
                boxShadow: '0 0 20px rgba(0,255,136,0.2)',
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 size={14} color="#00ff88" />
                <span className="text-xs font-bold" style={{ color: '#00ff88' }}>+50 XP ganhos!</span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(15,15,26,0.95)',
                border: '1px solid rgba(0,212,255,0.4)',
                boxShadow: '0 0 20px rgba(0,212,255,0.2)',
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Clock size={14} color="#00d4ff" />
                <span className="text-xs font-bold" style={{ color: '#00d4ff' }}>Streak: 21 dias</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs font-mono tracking-widest" style={{ color: '#a0a0b0' }}>SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{ color: '#00ff88' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function ChevronDown({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}
