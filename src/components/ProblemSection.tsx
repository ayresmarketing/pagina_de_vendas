import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Compass, AlertTriangle, Lock } from 'lucide-react'

const pains = [
  {
    icon: Compass,
    title: 'Falta direcionamento',
    desc: 'Energia desperdiçada em qualquer coisa, menos nos seus objetivos reais.',
    color: '#00ff88',
  },
  {
    icon: AlertTriangle,
    title: 'Sem controle real',
    desc: 'Tarefas acumulam, esquece de fazer, metas evaporam, e o ciclo de culpa bate toda noite.',
    color: '#00d4ff',
  },
  {
    icon: Lock,
    title: 'Você vira refém',
    desc: 'Atividades que não constroem hábitos, identidade ou resultados tangíveis.',
    color: '#a78bfa',
  },
]

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050510 100%)' }}
    >
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Red glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,60,80,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6"
            style={{ background: 'rgba(255,60,80,0.08)', border: '1px solid rgba(255,60,80,0.2)', color: '#ff3c50' }}
          >
            ⚠ PROBLEMA IDENTIFICADO
          </div>
          <h2
            className="font-black mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#ffffff' }}
          >
            Subiu de nível?{' '}
            <span style={{ color: '#ff3c50' }}>Mas quando a tela desliga</span>
            <br />não tem nada.
          </h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#a0a0b0' }}>
            Ninguém é contra a diversão. O problema é quando ela vira escape da realidade.
            Você gasta horas em jogos, redes ou distrações vazias porque:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative rounded-2xl p-7 cursor-default"
              style={{
                background: 'rgba(15,15,26,0.8)',
                border: '1px solid #1a1a2e',
                backdropFilter: 'blur(20px)',
              }}
              whileHover={{
                y: -8,
                borderColor: pain.color,
                boxShadow: `0 20px 60px rgba(${pain.color === '#00ff88' ? '0,255,136' : pain.color === '#00d4ff' ? '0,212,255' : '167,139,250'},0.15)`,
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${pain.color}, transparent)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `rgba(${pain.color === '#00ff88' ? '0,255,136' : pain.color === '#00d4ff' ? '0,212,255' : '167,139,250'},0.1)`,
                  border: `1px solid rgba(${pain.color === '#00ff88' ? '0,255,136' : pain.color === '#00d4ff' ? '0,212,255' : '167,139,250'},0.3)`,
                }}
              >
                <pain.icon size={22} color={pain.color} />
              </div>
              <h3 className="font-bold text-lg mb-3" style={{ color: '#ffffff' }}>{pain.title}</h3>
              <p className="leading-relaxed" style={{ color: '#a0a0b0' }}>{pain.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Closing punch */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="relative rounded-2xl p-8 text-center"
          style={{
            background: 'rgba(0,255,136,0.04)',
            border: '1px solid rgba(0,255,136,0.15)',
          }}
        >
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: 'linear-gradient(135deg, rgba(0,255,136,0.03), transparent, rgba(0,212,255,0.03))',
            }}
          />
          <p className="text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            <span style={{ color: '#ff3c50', fontWeight: 700 }}>Resultado?</span>{' '}
            Vida estagnada, sonhos adiados, sua melhor versão travada. E se, em vez de fugir, você{' '}
            <span className="font-bold" style={{ color: '#00ff88' }}>transformasse sua realidade em um jogo?</span>{' '}
            Direcione essa força para conquistas reais, com pontos, níveis e recompensas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
