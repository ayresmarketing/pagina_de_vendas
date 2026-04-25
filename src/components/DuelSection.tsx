import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Sword, Zap, Trophy, CheckCircle2, Circle, ArrowRight } from 'lucide-react'

const tarefas = [
  { label: 'Estudar 45 min', a: true, b: true },
  { label: 'Ir na academia', a: true, b: false },
  { label: 'Ler 20 páginas', a: true, b: true },
  { label: 'Meditação diária', a: false, b: false },
  { label: 'Revisão do dia', a: false, b: false },
]

const TOTAL = tarefas.length
const PCT_A = Math.round((tarefas.filter(t => t.a).length / TOTAL) * 100)
const PCT_B = Math.round((tarefas.filter(t => t.b).length / TOTAL) * 100)

const passos = [
  {
    icone: <Sword size={22} color="#00ff88" />,
    num: '01',
    titulo: 'Desafie',
    texto: 'Convide um amigo ou monte um grupo. Definam juntos as tarefas e o que o vencedor vai ganhar.',
    cor: '#00ff88',
    rgb: '0,255,136',
  },
  {
    icone: <Zap size={22} color="#ffd700" />,
    num: '02',
    titulo: 'Execute',
    texto: 'Cada um completa suas missões no prazo. O app acompanha o progresso de todos em tempo real.',
    cor: '#ffd700',
    rgb: '255,215,0',
  },
  {
    icone: <Trophy size={22} color="#ffd700" />,
    num: '03',
    titulo: 'Vença',
    texto: 'Quem executar mais leva a recompensa. Sem desculpa, sem enrolação — só resultado.',
    cor: '#ffd700',
    rgb: '255,215,0',
  },
]

function RaioSVG({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 40 120"
      style={{ position: 'absolute', width: '40px', opacity: 0.18, ...style }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        points="22,0 10,55 20,55 8,120"
        fill="none"
        stroke="#ffd700"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ParticulaEnergia({ style }: { style: React.CSSProperties }) {
  return (
    <motion.div
      animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5], y: [0, -30, -60] }}
      transition={{ duration: 2 + Math.random() * 1.5, repeat: Infinity, delay: Math.random() * 2 }}
      style={{
        position: 'absolute',
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: '#ffd700',
        boxShadow: '0 0 10px #ffd700, 0 0 20px rgba(255,215,0,0.6)',
        pointerEvents: 'none',
        ...style,
      }}
    />
  )
}

export default function DuelSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.07 })
  const [barA, setBarA] = useState(0)
  const [barB, setBarB] = useState(0)

  useEffect(() => {
    if (!inView) return
    const t = setTimeout(() => {
      setBarA(PCT_A)
      setBarB(PCT_B)
    }, 700)
    return () => clearTimeout(t)
  }, [inView])

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#0a0a0a', width: '100%' }}
    >
      {/* Grade de fundo */}
      <div className="absolute inset-0 grade-linhas opacity-20 pointer-events-none" />

      {/* Brilho verde esquerda */}
      <div
        className="absolute top-1/3 left-0 pointer-events-none"
        style={{
          width: 'min(400px, 50vw)',
          height: '500px',
          background: 'radial-gradient(ellipse at left, rgba(0,255,136,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Brilho dourado direita */}
      <div
        className="absolute top-1/3 right-0 pointer-events-none"
        style={{
          width: 'min(400px, 50vw)',
          height: '500px',
          background: 'radial-gradient(ellipse at right, rgba(255,215,0,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Linha topo animada */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00ff88, #ffd700, #00ff88, transparent)' }}
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Badge topo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ type: 'spring', bounce: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg"
            style={{
              background: 'rgba(0,255,136,0.06)',
              border: '1.5px solid rgba(0,255,136,0.5)',
              boxShadow: '0 0 24px rgba(0,255,136,0.15), inset 0 0 20px rgba(0,255,136,0.04)',
            }}
          >
            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <span style={{ fontSize: '16px' }}>⚔️</span>
            </motion.div>
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00ff88' }}>
              MODO DUELO ATIVADO
            </span>
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88', animation: 'piscar 1s ease-in-out infinite' }}
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-black text-center mb-5"
          style={{ fontSize: 'clamp(2rem, 5.5vw, 4rem)', color: '#ffffff', lineHeight: 1.1 }}
        >
          Desafie seus amigos.{' '}
          <br className="hidden sm:block" />
          O perdedor{' '}
          <span
            style={{
              color: '#00ff88',
              textShadow: '0 0 30px rgba(0,255,136,0.7), 0 0 60px rgba(0,255,136,0.3)',
            }}
          >
            paga o preço.
          </span>
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-6"
          style={{ color: '#b0b0c0' }}
        >
          Chega de apostar e não cumprir. Aqui as promessas viram missões, as missões viram duelos
          e os duelos têm consequências reais.
        </motion.p>

        {/* Texto explicativo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-center max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-14"
          style={{ color: '#a0a0b0' }}
        >
          Você cria o duelo, define as tarefas que todos precisam executar e escolhe a recompensa que está
          em jogo. Quem completar mais missões no prazo vence — e leva o que foi combinado. Simples, justo
          e{' '}
          <span
            style={{
              color: '#00ff88',
              fontWeight: 800,
              textShadow: '0 0 12px rgba(0,255,136,0.6)',
            }}
          >
            viciante.
          </span>
        </motion.p>

        {/* ─── MOCKUP CENTRAL ─── */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.2 }}
          className="relative max-w-2xl mx-auto mb-16"
        >
          {/* Brilho central irradiando */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.12) 0%, rgba(0,255,136,0.06) 40%, transparent 70%)',
              filter: 'blur(30px)',
              transform: 'scale(1.3)',
            }}
          />

          {/* Raios ao redor */}
          <RaioSVG style={{ top: '-30px', left: '8%', transform: 'rotate(-15deg)' }} />
          <RaioSVG style={{ top: '-20px', right: '12%', transform: 'rotate(10deg) scaleX(-1)' }} />
          <RaioSVG style={{ bottom: '10px', left: '2%', transform: 'rotate(-8deg) scaleY(-1)' }} />
          <RaioSVG style={{ bottom: '0px', right: '4%', transform: 'rotate(6deg) scaleX(-1) scaleY(-1)' }} />

          {/* Partículas de energia */}
          <ParticulaEnergia style={{ left: '5%', top: '30%' }} />
          <ParticulaEnergia style={{ left: '12%', top: '60%' }} />
          <ParticulaEnergia style={{ right: '7%', top: '25%' }} />
          <ParticulaEnergia style={{ right: '15%', top: '55%' }} />
          <ParticulaEnergia style={{ left: '48%', top: '-10px' }} />
          <ParticulaEnergia style={{ left: '35%', bottom: '-5px' }} />

          {/* App Window */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              background: '#0d0d1a',
              border: '1px solid rgba(255,215,0,0.25)',
              boxShadow: '0 0 60px rgba(255,215,0,0.12), 0 0 120px rgba(0,255,136,0.06), 0 40px 80px rgba(0,0,0,0.7)',
            }}
          >
            {/* Barra de título */}
            <div
              className="px-5 py-3 flex items-center justify-between"
              style={{
                background: 'rgba(5,5,16,0.95)',
                borderBottom: '1px solid rgba(255,215,0,0.15)',
              }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
              </div>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: '12px' }}>⚔️</span>
                <span className="text-xs font-black font-mono" style={{ color: '#ffd700' }}>DUELO ATIVO</span>
                <div
                  className="flex items-center gap-1 px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(255,60,80,0.15)', border: '1px solid rgba(255,60,80,0.3)' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#ff3c50', animation: 'piscar 1s ease-in-out infinite' }} />
                  <span className="text-xs font-mono font-bold" style={{ color: '#ff3c50' }}>2 dias</span>
                </div>
              </div>
              <span className="text-xs font-mono" style={{ color: '#555570' }}>duelo.svej.app</span>
            </div>

            <div className="p-5">
              {/* VS Header */}
              <div className="flex items-center gap-3 mb-5">
                {/* Jogador A */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                      style={{ background: 'linear-gradient(135deg, #00ff88, #00b860)', color: '#050510', boxShadow: '0 0 12px rgba(0,255,136,0.4)' }}
                    >
                      RK
                    </div>
                    <div>
                      <p className="text-xs font-black" style={{ color: '#ffffff' }}>Rafael K.</p>
                      <p className="text-xs font-mono" style={{ color: '#00ff88' }}>Nível 34</p>
                    </div>
                  </div>
                  {/* Barra de progresso A */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-mono" style={{ color: '#a0a0b0' }}>Progresso</span>
                      <span className="font-bold" style={{ color: '#00ff88' }}>{barA}%</span>
                    </div>
                    <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#1a1a2e' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #00ff88, #00b860)', boxShadow: '0 0 8px rgba(0,255,136,0.7)' }}
                        animate={{ width: `${barA}%` }}
                        transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
                        initial={{ width: '0%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* VS Badge central */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], boxShadow: ['0 0 20px rgba(255,215,0,0.4)', '0 0 40px rgba(255,215,0,0.8)', '0 0 20px rgba(255,215,0,0.4)'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm"
                    style={{
                      background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                      color: '#0a0a0a',
                      border: '2px solid rgba(255,215,0,0.5)',
                    }}
                  >
                    VS
                  </motion.div>
                </div>

                {/* Jogador B */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2 justify-end">
                    <div className="text-right">
                      <p className="text-xs font-black" style={{ color: '#ffffff' }}>Marcelo T.</p>
                      <p className="text-xs font-mono" style={{ color: '#ffd700' }}>Nível 29</p>
                    </div>
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm shrink-0"
                      style={{ background: 'linear-gradient(135deg, #ffd700, #ffaa00)', color: '#050510', boxShadow: '0 0 12px rgba(255,215,0,0.4)' }}
                    >
                      MT
                    </div>
                  </div>
                  {/* Barra de progresso B */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-bold" style={{ color: '#ffd700' }}>{barB}%</span>
                      <span className="font-mono" style={{ color: '#a0a0b0' }}>Progresso</span>
                    </div>
                    <div className="h-2.5 rounded-full overflow-hidden" style={{ background: '#1a1a2e' }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #ffaa00, #ffd700)', boxShadow: '0 0 8px rgba(255,215,0,0.7)' }}
                        animate={{ width: `${barB}%` }}
                        transition={{ duration: 1.2, delay: 1.0, ease: 'easeOut' }}
                        initial={{ width: '0%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lista de tarefas */}
              <div className="rounded-xl overflow-hidden mb-4" style={{ border: '1px solid #1a1a2e' }}>
                <div
                  className="px-4 py-2 flex items-center justify-between"
                  style={{ background: 'rgba(26,26,46,0.8)', borderBottom: '1px solid #1a1a2e' }}
                >
                  <span className="text-xs font-mono font-bold" style={{ color: '#a0a0b0', letterSpacing: '0.08em' }}>MISSÕES DO DUELO</span>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#00ff88' }} />
                      <span style={{ fontSize: '10px', color: '#00ff88', fontFamily: 'monospace' }}>Rafael</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#ffd700' }} />
                      <span style={{ fontSize: '10px', color: '#ffd700', fontFamily: 'monospace' }}>Marcelo</span>
                    </div>
                  </div>
                </div>
                <div className="divide-y" style={{ borderColor: '#1a1a2e' }}>
                  {tarefas.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + i * 0.07 }}
                      className="flex items-center justify-between px-4 py-2.5"
                      style={{ background: i % 2 === 0 ? 'rgba(10,10,20,0.5)' : 'transparent' }}
                    >
                      <span className="text-xs" style={{ color: t.a && t.b ? '#ffffff' : '#b0b0c0' }}>
                        {t.label}
                      </span>
                      <div className="flex items-center gap-4 shrink-0">
                        {t.a
                          ? <CheckCircle2 size={14} color="#00ff88" style={{ filter: 'drop-shadow(0 0 4px #00ff88)' }} />
                          : <Circle size={14} color="#2a2a4e" />
                        }
                        {t.b
                          ? <CheckCircle2 size={14} color="#ffd700" style={{ filter: 'drop-shadow(0 0 4px #ffd700)' }} />
                          : <Circle size={14} color="#2a2a4e" />
                        }
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Card de recompensa dourado */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.1)',
                    '0 0 40px rgba(255,215,0,0.6), 0 0 80px rgba(255,215,0,0.2)',
                    '0 0 20px rgba(255,215,0,0.3), 0 0 40px rgba(255,215,0,0.1)',
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="rounded-xl p-4 flex items-center gap-4 relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,170,0,0.05) 100%)',
                  border: '1.5px solid rgba(255,215,0,0.4)',
                }}
              >
                {/* Brilho interno */}
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(255,215,0,0.7), transparent)' }}
                />
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, #ffd700, #ffaa00)',
                    boxShadow: '0 0 20px rgba(255,215,0,0.5)',
                  }}
                >
                  <Trophy size={22} color="#0a0a0a" strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono font-bold mb-0.5" style={{ color: '#ffd700', letterSpacing: '0.1em' }}>
                    🏆 RECOMPENSA EM DISPUTA
                  </p>
                  <p className="text-sm font-black" style={{ color: '#ffffff' }}>
                    Jantar no restaurante + R$80
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#888898' }}>
                    Quem completar mais missões leva tudo
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-xs font-mono" style={{ color: '#ffd700' }}>LIDERANDO</p>
                  <p className="font-black text-sm" style={{ color: '#00ff88' }}>Rafael K.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ─── TRÊS CARDS DE PASSOS ─── */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {passos.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.12 }}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: '#111111',
                border: `1px solid rgba(${p.rgb},0.2)`,
              }}
              whileHover={{
                y: -6,
                borderColor: p.cor,
                boxShadow: `0 20px 50px rgba(${p.rgb},0.15)`,
              }}
            >
              {/* Linha topo colorida */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${p.cor}, transparent)` }}
              />
              {/* Número */}
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background: `rgba(${p.rgb},0.08)`,
                    border: `1px solid rgba(${p.rgb},0.25)`,
                  }}
                >
                  {p.icone}
                </div>
                <span
                  className="font-black font-mono"
                  style={{ fontSize: '2rem', lineHeight: 1, color: `rgba(${p.rgb},0.12)` }}
                >
                  {p.num}
                </span>
              </div>
              <h3 className="font-black text-base mb-2" style={{ color: '#ffffff' }}>
                <span style={{ color: p.cor }}>{p.num} — </span>{p.titulo}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#888898' }}>{p.texto}</p>
            </motion.div>
          ))}
        </div>

        {/* Frase de impacto */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center font-black mb-10"
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            color: '#ffffff',
            lineHeight: 1.4,
          }}
        >
          A motivação sozinha não basta.{' '}
          <span style={{ color: '#00ff88', textShadow: '0 0 20px rgba(0,255,136,0.5)' }}>
            Você precisa de alguém te observando.
          </span>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6, type: 'spring', bounce: 0.3 }}
          className="flex justify-center mb-5"
        >
          <motion.a
            href="#preco"
            className="botao-coracao inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-black text-lg"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00c870)',
              color: '#050510',
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(0,255,136,0.5), 0 0 80px rgba(0,255,136,0.2)',
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>⚔️</span>
            Quero entrar no duelo
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>

        {/* Frase de fechamento */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center text-sm italic"
          style={{ color: 'rgba(160,160,176,0.7)' }}
        >
          Seus amigos já estão sendo desafiados. E você?
        </motion.p>
      </div>
    </section>
  )
}
