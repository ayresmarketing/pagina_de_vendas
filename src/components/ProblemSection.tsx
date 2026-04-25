import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const problemas = [
  {
    icone: '🧭',
    titulo: 'Falta direcionamento',
    desc: 'Energia desperdiçada em qualquer coisa, menos nos seus objetivos reais.',
    cor: '#ff3c50',
    tag: 'ERRO 001',
  },
  {
    icone: '⚠️',
    titulo: 'Sem controle real',
    desc: 'Tarefas acumulam, esquece de fazer, metas evaporam, e o ciclo de culpa bate toda noite.',
    cor: '#f59e0b',
    tag: 'ERRO 002',
  },
  {
    icone: '🔒',
    titulo: 'Você vira refém',
    desc: 'Atividades que não constroem hábitos, identidade ou resultados tangíveis.',
    cor: '#a78bfa',
    tag: 'ERRO 003',
  },
]

type Fase = 'ligada' | 'desligando' | 'apagada'

function TVDesligando({ inView }: { inView: boolean }) {
  const [fase, setFase] = useState<Fase>('ligada')

  useEffect(() => {
    if (!inView) return
    let t1: ReturnType<typeof setTimeout>
    let t2: ReturnType<typeof setTimeout>
    let t3: ReturnType<typeof setTimeout>

    const ciclo = () => {
      setFase('ligada')
      t1 = setTimeout(() => setFase('desligando'), 3000)
      t2 = setTimeout(() => setFase('apagada'), 3800)
      t3 = setTimeout(ciclo, 7500)
    }
    ciclo()
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [inView])

  return (
    <div className="flex flex-col items-center select-none">
      {/* Corpo da TV */}
      <div
        style={{
          background: 'linear-gradient(145deg, #2a2a40, #1a1a2e)',
          borderRadius: '18px',
          padding: '12px 12px 8px',
          border: '2px solid #3a3a5e',
          boxShadow: '0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
          width: '220px',
          position: 'relative',
        }}
      >
        {/* Antena */}
        <div
          style={{
            position: 'absolute',
            top: '-22px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '20px',
          }}
        >
          <div style={{ width: '3px', height: '22px', background: '#3a3a5e', borderRadius: '2px', transform: 'rotate(-12deg)', transformOrigin: 'bottom center' }} />
          <div style={{ width: '3px', height: '22px', background: '#3a3a5e', borderRadius: '2px', transform: 'rotate(12deg)', transformOrigin: 'bottom center' }} />
        </div>

        {/* Tela */}
        <div
          style={{
            background: '#000',
            borderRadius: '10px',
            height: '140px',
            overflow: 'hidden',
            position: 'relative',
            border: '3px solid #0a0a1a',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.9)',
          }}
        >
          {/* FASE: ligada — conteúdo de jogo */}
          <AnimatePresence>
            {fase === 'ligada' && (
              <motion.div
                key="on"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 p-3"
                style={{ background: 'linear-gradient(135deg, #0a0a20 0%, #050515 100%)' }}
              >
                {/* HUD jogo */}
                <div className="flex justify-between items-center mb-1">
                  <span style={{ fontFamily: 'monospace', color: '#00ff88', fontSize: '9px', fontWeight: 900 }}>LVL 47</span>
                  <span style={{ fontFamily: 'monospace', color: '#f59e0b', fontSize: '9px' }}>★★★★★</span>
                </div>
                {/* Personagem */}
                <div style={{ textAlign: 'center', fontSize: '28px', margin: '4px 0' }}>🕹️</div>
                <div style={{ textAlign: 'center', fontFamily: 'monospace', color: '#00d4ff', fontSize: '8px', marginBottom: '4px' }}>
                  MISSÃO CONCLUÍDA!
                </div>
                {/* Barra XP */}
                <div style={{ height: '5px', background: '#1a1a2e', borderRadius: '3px', overflow: 'hidden', marginBottom: '4px' }}>
                  <div style={{ height: '100%', width: '72%', background: 'linear-gradient(90deg, #00ff88, #00d4ff)', borderRadius: '3px' }} />
                </div>
                {/* Score */}
                <div style={{ textAlign: 'center', fontFamily: 'monospace', color: '#a78bfa', fontSize: '8px' }}>
                  PONTOS: 48.320
                </div>
                {/* Scanlines */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 3px)',
                  }}
                />
                {/* Glow da tela */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 40px rgba(0,212,255,0.08)' }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* FASE: desligando — efeito CRT */}
          <AnimatePresence>
            {fase === 'desligando' && (
              <motion.div
                key="off-anim"
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: '#000' }}
              >
                {/* Linha branca colapsando */}
                <motion.div
                  initial={{ scaleY: 1, opacity: 1 }}
                  animate={{ scaleY: 0.015, opacity: [1, 1, 0.8, 0] }}
                  transition={{ duration: 0.75, ease: 'easeIn' }}
                  style={{
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.3) 20%, #ffffff 50%, rgba(0,212,255,0.3) 80%, transparent 100%)',
                    boxShadow: '0 0 30px #fff, 0 0 60px rgba(0,212,255,0.9)',
                    transformOrigin: 'center',
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* FASE: apagada — reflexo do personagem triste */}
          <AnimatePresence>
            {fase === 'apagada' && (
              <motion.div
                key="dark"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
                style={{ background: 'radial-gradient(ellipse at center, #050510 0%, #000 100%)' }}
              >
                {/* Reflexo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  style={{ textAlign: 'center', filter: 'brightness(0.35) saturate(0.5)', transform: 'scaleY(-0.55) scaleX(0.85) translateY(-10px)', opacity: 0.6 }}
                >
                  <div style={{ fontSize: '22px' }}>😞</div>
                  <div style={{ fontSize: '16px', marginTop: '-2px' }}>🎮</div>
                </motion.div>
                {/* Personagem triste acima do reflexo */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  style={{ textAlign: 'center', marginTop: '-10px' }}
                >
                  <div style={{ fontSize: '22px' }}>😞</div>
                  <div style={{ fontSize: '16px', marginTop: '-2px' }}>🎮</div>
                  {/* Linha de separação reflexo */}
                  <div style={{ width: '60px', height: '1px', background: 'rgba(255,255,255,0.08)', margin: '2px auto' }} />
                </motion.div>
                {/* Brilho da tela apagada */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 38% 35%, rgba(255,255,255,0.025) 0%, transparent 60%)' }}
                />
                {/* Texto mensagem */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  style={{ fontFamily: 'monospace', color: 'rgba(160,160,176,0.4)', fontSize: '7px', marginTop: '6px', textAlign: 'center', letterSpacing: '0.05em' }}
                >
                  NÃO TEM NADA...
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Painel inferior da TV */}
        <div className="flex items-center justify-between mt-2 px-1">
          {/* Botão power */}
          <div
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: fase === 'apagada' ? '#2a2a3e' : '#ff3c50',
              boxShadow: fase === 'apagada' ? 'none' : '0 0 6px #ff3c50',
              transition: 'all 0.5s',
            }}
          />
          {/* Furos do alto-falante */}
          <div className="flex gap-1">
            {[0,1,2,3,4].map(i => (
              <div key={i} style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#3a3a5e' }} />
            ))}
          </div>
        </div>
      </div>

      {/* Pé da TV */}
      <div style={{ display: 'flex', gap: '60px' }}>
        <div style={{ width: '22px', height: '10px', background: '#2a2a3e', borderRadius: '0 0 5px 5px' }} />
        <div style={{ width: '22px', height: '10px', background: '#2a2a3e', borderRadius: '0 0 5px 5px' }} />
      </div>
      <div style={{ width: '90px', height: '6px', background: '#2a2a3e', borderRadius: '4px' }} />
    </div>
  )
}

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.12 })

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #060010 100%)', width: '100%' }}
    >
      <div className="absolute inset-0 grade-pontos opacity-40 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(500px, 80vw)',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(255,60,80,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #ff3c50, #f59e0b, transparent)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
            style={{
              background: 'rgba(255,60,80,0.1)',
              border: '2px solid rgba(255,60,80,0.4)',
              boxShadow: '0 0 20px rgba(255,60,80,0.15)',
            }}
          >
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#ff3c50' }}>
              ⚠ PROBLEMA DETECTADO
            </span>
          </motion.div>

          <h2
            className="font-black mb-5"
            style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)', color: '#ffffff', lineHeight: 1.15 }}
          >
            Subiu de nível?{' '}
            <span style={{ color: '#ff3c50' }}>
              Mas quando a tela desliga
            </span>
            <br />não tem nada.
          </h2>

          {/* TV desligando */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2, type: 'spring' }}
            className="flex justify-center mb-8 mt-8"
          >
            <TVDesligando inView={inView} />
          </motion.div>

          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#a0a0b0' }}>
            Ninguém é contra a diversão. O problema é quando ela vira escape da realidade.
            Você gasta horas em jogos, redes ou distrações vazias porque:
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {problemas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative rounded-2xl p-6 group cursor-default"
              style={{
                background: 'rgba(15,5,5,0.9)',
                border: '1px solid rgba(255,60,80,0.15)',
                backdropFilter: 'blur(20px)',
              }}
              whileHover={{
                y: -6,
                borderColor: p.cor,
                boxShadow: `0 20px 50px rgba(${p.cor === '#ff3c50' ? '255,60,80' : p.cor === '#f59e0b' ? '245,158,11' : '167,139,250'},0.15)`,
              }}
            >
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${p.cor}, transparent)` }}
              />
              <div
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono font-black mb-4"
                style={{
                  background: `rgba(${p.cor === '#ff3c50' ? '255,60,80' : p.cor === '#f59e0b' ? '245,158,11' : '167,139,250'},0.1)`,
                  color: p.cor,
                  letterSpacing: '0.08em',
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.cor }} />
                {p.tag}
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{p.icone}</span>
                <h3 className="font-black text-base" style={{ color: '#ffffff' }}>{p.titulo}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#a0a0b0' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative rounded-2xl p-7 sm:p-8 text-center overflow-hidden"
          style={{
            background: 'rgba(0,255,136,0.03)',
            border: '1px solid rgba(0,255,136,0.18)',
          }}
        >
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 ${pos}`}
              style={{
                borderTop: i < 2 ? '2px solid #00ff88' : undefined,
                borderBottom: i >= 2 ? '2px solid #00ff88' : undefined,
                borderLeft: i % 2 === 0 ? '2px solid #00ff88' : undefined,
                borderRight: i % 2 === 1 ? '2px solid #00ff88' : undefined,
                opacity: 0.5,
              }}
            />
          ))}
          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            <span style={{ color: '#ff3c50', fontWeight: 900 }}>Resultado?</span>{' '}
            Vida estagnada, sonhos adiados, sua melhor versão travada.{' '}
            <br className="hidden sm:block" />
            E se, em vez de fugir, você{' '}
            <span style={{ color: '#00ff88', fontWeight: 900 }}>transformasse sua realidade em um jogo?</span>{' '}
            Direcione essa força para conquistas reais, com pontos, níveis e recompensas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
