import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, ArrowRight, Star, Shield, ChevronDown } from 'lucide-react'

const TEXTO_COMPLETO = 'Sua recompensa não precisa ser no videogame, pode ser real.'

const missoes = [
  { tipo: 'Missão', label: 'Estudar 30 minutos', cor: '#00ff88', icone: '📚', xp: '+50 XP' },
  { tipo: 'Desafio', label: 'Ir na academia', cor: '#00d4ff', icone: '💪', xp: '+120 XP' },
  { tipo: 'Social', label: 'Mandar mensagem para o Miguel', cor: '#a78bfa', icone: '💬', xp: '+30 XP' },
  { tipo: 'Evento', label: 'Reunião com a empresa', cor: '#f59e0b', icone: '🏢', xp: '+80 XP' },
  { tipo: 'Diário', label: 'Sincronização Diária', cor: '#00ff88', icone: '🔄', xp: '+200 XP' },
]

function TextoDigitando() {
  const [exibido, setExibido] = useState('')
  const [pronto, setPronto] = useState(false)
  const idx = useRef(0)

  useEffect(() => {
    const t = setInterval(() => {
      if (idx.current < TEXTO_COMPLETO.length) {
        setExibido(TEXTO_COMPLETO.slice(0, idx.current + 1))
        idx.current++
      } else {
        setPronto(true)
        clearInterval(t)
      }
    }, 38)
    return () => clearInterval(t)
  }, [])

  return (
    <span>
      {exibido}
      {!pronto && (
        <span
          className="inline-block w-0.5 h-8 md:h-14 ml-1 align-middle"
          style={{ background: '#00ff88', animation: 'piscar 0.8s step-end infinite' }}
        />
      )}
    </span>
  )
}

function XPFlutuante({ texto, cor }: { texto: string; cor: string }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 0, y: -50, scale: 1.4 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute font-black text-sm pointer-events-none"
      style={{ color: cor, fontFamily: 'monospace', zIndex: 20 }}
    >
      {texto}
    </motion.div>
  )
}

export default function HeroSection() {
  const [missaoAtiva, setMissaoAtiva] = useState(0)
  const [xpNotifs, setXpNotifs] = useState<{ id: number; texto: string; cor: string; x: string; y: string }[]>([])
  const [nivel, setNivel] = useState(47)
  const [xpAtual, setXpAtual] = useState(7800)
  const idRef = useRef(0)

  useEffect(() => {
    const t = setInterval(() => {
      setMissaoAtiva(p => (p + 1) % missoes.length)
    }, 2800)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => {
      const m = missoes[Math.floor(Math.random() * missoes.length)]
      const id = idRef.current++
      setXpNotifs(p => [...p, {
        id,
        texto: m.xp,
        cor: m.cor,
        x: `${20 + Math.random() * 60}%`,
        y: `${20 + Math.random() * 50}%`,
      }])
      setXpAtual(p => Math.min(p + parseInt(m.xp), 12000))
      setTimeout(() => setXpNotifs(p => p.filter(n => n.id !== id)), 1400)
    }, 2200)
    return () => clearInterval(t)
  }, [])

  const xpPct = Math.round((xpAtual / 12000) * 100)

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden scanlines"
      style={{
        background: 'linear-gradient(180deg, #020208 0%, #050510 40%, #0a0a0a 100%)',
        width: '100%',
      }}
    >
      {/* Grade animada de fundo */}
      <div className="absolute inset-0 grade-linhas opacity-40 pointer-events-none" />

      {/* Brilho radial central */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'min(700px, 90vw)',
          height: 'min(500px, 60vw)',
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Linhas de scan */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,255,136,0.4), transparent)',
          animation: 'scanline 6s linear infinite',
          top: 0,
        }}
      />

      {/* HUD Nível - Topo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-0 right-0 px-4 flex items-center justify-between"
        style={{ maxWidth: '100%' }}
      >
        {/* Logo esquerda */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #00ff88, #00d4ff)', boxShadow: '0 0 15px rgba(0,255,136,0.5)' }}
          >
            <Zap size={16} color="#050510" strokeWidth={3} />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-black tracking-widest" style={{ color: '#00ff88', letterSpacing: '0.12em', lineHeight: 1.1 }}>
              MINHA VIDA
            </p>
            <p className="text-xs font-black tracking-widest" style={{ color: '#00d4ff', letterSpacing: '0.12em', lineHeight: 1.1 }}>
              É UM JOGO
            </p>
          </div>
        </div>

        {/* HUD direita - nível + XP */}
        <div
          className="flex items-center gap-3 px-4 py-2 rounded-xl"
          style={{ background: 'rgba(15,15,26,0.9)', border: '1px solid rgba(0,255,136,0.2)' }}
        >
          <div className="text-right">
            <p className="text-xs font-mono" style={{ color: '#a0a0b0' }}>NÍVEL</p>
            <p className="font-black text-lg leading-none" style={{ color: '#00ff88' }}>{nivel}</p>
          </div>
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-mono" style={{ color: '#a0a0b0' }}>XP</span>
              <span className="font-mono" style={{ color: '#00ff88' }}>{xpPct}%</span>
            </div>
            <div className="w-24 sm:w-36 h-2 rounded-full" style={{ background: '#1a1a2e' }}>
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #00ff88, #00d4ff)', boxShadow: '0 0 6px rgba(0,255,136,0.7)' }}
                animate={{ width: `${xpPct}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Esquerda — Texto */}
          <div>
            {/* Badge protocolo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-7"
              style={{
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.35)',
                boxShadow: '0 0 20px rgba(0,255,136,0.1)',
              }}
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88', animation: 'piscar 1s ease-in-out infinite' }}
              />
              <span className="text-xs font-black tracking-widest" style={{ color: '#00ff88' }}>
                ⚡ PROTOCOLO DE ELITE ATIVADO
              </span>
            </motion.div>

            {/* H1 com digitação */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-black leading-tight mb-6"
              style={{ fontSize: 'clamp(1.9rem, 5vw, 3.8rem)', color: '#ffffff' }}
            >
              <TextoDigitando />
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{ color: '#a0a0b0', maxWidth: '520px' }}
            >
              Transforme suas tarefas em um jogo, aumente sua produtividade, consistência,
              e conquiste seus sonhos no mundo real.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 items-center mb-10"
            >
              <motion.a
                href="#preco"
                className="botao-coracao flex items-center gap-3 px-7 py-4 rounded-xl font-black text-base"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  color: '#050510',
                  boxShadow: '0 0 30px rgba(0,255,136,0.4)',
                  textDecoration: 'none',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Zap size={18} />
                Começar meu jogo
                <ArrowRight size={18} />
              </motion.a>
              <div className="flex items-center gap-2">
                <Shield size={14} style={{ color: '#00ff88' }} />
                <span className="text-sm" style={{ color: '#a0a0b0' }}>Sem compromisso</span>
              </div>
            </motion.div>

            {/* Prova social */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-5 flex-wrap"
            >
              <div className="flex -space-x-2">
                {['A','B','C','D'].map((l, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-black"
                    style={{
                      borderColor: '#0a0a0a',
                      background: ['#00ff88','#00d4ff','#a78bfa','#f59e0b'][i],
                      color: '#050510',
                    }}
                  >
                    {l}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="#f59e0b" color="#f59e0b" />)}
                </div>
                <span className="text-xs" style={{ color: '#a0a0b0' }}>+2.400 jogadores ativos</span>
              </div>
            </motion.div>
          </div>

          {/* Direita — Mockup do App */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Notificações XP flutuantes */}
            <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 20 }}>
              <AnimatePresence>
                {xpNotifs.map(n => (
                  <div key={n.id} className="absolute" style={{ left: n.x, top: n.y }}>
                    <XPFlutuante texto={n.texto} cor={n.cor} />
                  </div>
                ))}
              </AnimatePresence>
            </div>

            {/* Mockup do App */}
            <div
              className="flutuar relative rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(8,8,20,0.97)',
                border: '1px solid rgba(0,255,136,0.25)',
                boxShadow: '0 0 60px rgba(0,255,136,0.12), 0 40px 80px rgba(0,0,0,0.6)',
              }}
            >
              {/* Barra de status do app */}
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ background: 'rgba(5,5,16,0.9)', borderBottom: '1px solid #1a1a2e' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <span className="text-xs font-mono" style={{ color: '#a0a0b0' }}>dashboard.mvej.app</span>
                <div
                  className="flex items-center gap-1.5 px-2 py-0.5 rounded-md"
                  style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#00ff88', animation: 'piscar 1s ease-in-out infinite' }} />
                  <span className="text-xs font-mono font-bold" style={{ color: '#00ff88' }}>AO VIVO</span>
                </div>
              </div>

              <div className="p-4">
                {/* Cabeçalho do painel */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs font-mono mb-0.5" style={{ color: '#a0a0b0' }}>BEM-VINDO DE VOLTA</p>
                    <p className="font-black text-sm" style={{ color: '#ffffff' }}>Jogador Elite 🏆</p>
                  </div>
                  <div
                    className="px-3 py-1.5 rounded-xl text-center"
                    style={{ background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)' }}
                  >
                    <p className="text-xs font-mono" style={{ color: '#a0a0b0' }}>NÍVEL</p>
                    <p className="text-2xl font-black leading-none" style={{ color: '#00ff88' }}>{nivel}</p>
                  </div>
                </div>

                {/* Barra XP */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-mono" style={{ color: '#a0a0b0' }}>Experiência para nível {nivel + 1}</span>
                    <span className="font-bold" style={{ color: '#00ff88' }}>{xpAtual.toLocaleString('pt-BR')} / 12.000</span>
                  </div>
                  <div className="h-3 rounded-full relative overflow-hidden" style={{ background: '#0f0f1a', border: '1px solid #1a1a2e' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(90deg, #00ff88, #00d4ff)', boxShadow: '0 0 10px rgba(0,255,136,0.7)' }}
                      animate={{ width: `${xpPct}%` }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Brilho animado */}
                    <div
                      className="absolute top-0 bottom-0 w-8 pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        animation: 'brilhar 2s linear infinite',
                        left: 0,
                      }}
                    />
                  </div>
                </div>

                {/* Missões ativas */}
                <p className="text-xs font-mono font-bold mb-2" style={{ color: '#a0a0b0', letterSpacing: '0.1em' }}>
                  🎯 MISSÕES ATIVAS
                </p>
                <div className="space-y-2">
                  {missoes.map((m, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        background: missaoAtiva === i
                          ? `rgba(${m.cor === '#00ff88' ? '0,255,136' : m.cor === '#00d4ff' ? '0,212,255' : m.cor === '#a78bfa' ? '167,139,250' : m.cor === '#f59e0b' ? '245,158,11' : '0,255,136'},0.1)`
                          : 'rgba(26,26,46,0.4)',
                        borderColor: missaoAtiva === i ? m.cor : 'rgba(26,26,46,0.6)',
                        scale: missaoAtiva === i ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between px-3 py-2.5 rounded-xl border"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-base">{m.icone}</span>
                        <div>
                          <span
                            className="text-xs font-bold px-1.5 py-0.5 rounded mr-2"
                            style={{
                              background: `rgba(${m.cor === '#00ff88' ? '0,255,136' : m.cor === '#00d4ff' ? '0,212,255' : m.cor === '#a78bfa' ? '167,139,250' : '245,158,11'},0.12)`,
                              color: m.cor,
                              fontSize: '9px',
                              letterSpacing: '0.05em',
                            }}
                          >
                            {m.tipo.toUpperCase()}
                          </span>
                          <span className="text-xs" style={{ color: '#e0e0e8' }}>{m.label}</span>
                        </div>
                      </div>
                      <span className="text-xs font-black font-mono shrink-0" style={{ color: m.cor }}>
                        {m.xp}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Badge flutuante — conquista */}
            <motion.div
              className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 px-3 sm:px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(15,15,26,0.97)',
                border: '1px solid rgba(0,255,136,0.4)',
                boxShadow: '0 0 20px rgba(0,255,136,0.2)',
                zIndex: 10,
              }}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2">
                <span>🏆</span>
                <span className="text-xs font-black" style={{ color: '#00ff88' }}>Conquista desbloqueada!</span>
              </div>
            </motion.div>

            {/* Badge flutuante — streak */}
            <motion.div
              className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 px-3 sm:px-4 py-2 rounded-xl"
              style={{
                background: 'rgba(15,15,26,0.97)',
                border: '1px solid rgba(0,212,255,0.4)',
                boxShadow: '0 0 20px rgba(0,212,255,0.2)',
                zIndex: 10,
              }}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <span>🔥</span>
                <span className="text-xs font-black" style={{ color: '#00d4ff' }}>Sequência: 21 dias</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Seta scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs font-mono tracking-widest" style={{ color: '#a0a0b0' }}>ROLAR</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}>
          <ChevronDown size={18} color="#00ff88" />
        </motion.div>
      </motion.div>
    </section>
  )
}
