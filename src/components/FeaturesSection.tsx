import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const habilidades = [
  {
    icone: '🧠',
    titulo: 'IA Executora',
    desc: 'Digite sua meta → quebra em missões/tarefas realistas, distribui na agenda sem sobrecarga.',
    cor: '#00ff88',
    nivel: 'Nível Máximo',
    pts: '★★★★★',
  },
  {
    icone: '⚡',
    titulo: 'Gamificação Viciante',
    desc: 'Pontos por esforço, níveis de evolução, crescimento visível.',
    cor: '#00d4ff',
    nivel: 'Nível Máximo',
    pts: '★★★★★',
  },
  {
    icone: '💰',
    titulo: 'Controle Financeiro',
    desc: 'Tenha o controle das suas finanças por categorias.',
    cor: '#a78bfa',
    nivel: 'Habilidade Rara',
    pts: '★★★★☆',
  },
  {
    icone: '🛡️',
    titulo: 'Identidade em Construção',
    desc: 'Painel que reforça quem você está se tornando, com categorias equilibradas.',
    cor: '#f59e0b',
    nivel: 'Habilidade Épica',
    pts: '★★★★★',
  },
  {
    icone: '🏆',
    titulo: 'Recompensas Reais',
    desc: 'Ganhe pontos e níveis para se recompensar com jantares, cashback ou upgrades.',
    cor: '#00ff88',
    nivel: 'Habilidade Lendária',
    pts: '★★★★★',
  },
]

export default function FeaturesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section
      id="sistema"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#0a0a0a', width: '100%' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, transparent)' }}
      />
      <div className="absolute inset-0 grade-linhas opacity-25 pointer-events-none" />

      {/* Brilho verde direita */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'min(400px, 60vw)',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
            style={{
              background: 'rgba(0,255,136,0.08)',
              border: '1px solid rgba(0,255,136,0.3)',
              boxShadow: '0 0 20px rgba(0,255,136,0.1)',
            }}
          >
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00ff88' }}>
              ⚡ ARSENAL DE HABILIDADES
            </span>
          </motion.div>

          <h2
            className="font-black mb-5"
            style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)', color: '#ffffff', lineHeight: 1.15 }}
          >
            O Sistema que{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Transforma Tarefas
            </span>
            {' '}em um Jogo real
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: '#a0a0b0' }}>
            Imagine: em vez de apps genéricos que só listam tarefas, um sistema inteligente que:
          </p>
        </motion.div>

        {/* Grade de habilidades estilo árvore */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {habilidades.slice(0, 3).map((h, i) => (
            <HabilidadeCard key={i} h={h} i={i} inView={inView} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12">
          {habilidades.slice(3).map((h, i) => (
            <HabilidadeCard key={i} h={h} i={i + 3} inView={inView} />
          ))}
        </div>

        {/* Mecanismo exclusivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="borda-gradiente-animada max-w-2xl mx-auto"
        >
          <div
            className="rounded-2xl p-6 text-center"
            style={{ background: 'rgba(8,8,20,0.98)' }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-mono font-black mb-4"
              style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}
            >
              🔑 MECANISMO EXCLUSIVO
            </span>
            <div className="flex items-center justify-center gap-2 flex-wrap mb-3">
              {['Meta', 'Missão', 'Tarefa', 'Execução'].map((passo, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="font-black text-sm" style={{ color: i % 2 === 0 ? '#00ff88' : '#00d4ff' }}>
                    {passo}
                  </span>
                  {i < 3 && <span style={{ color: '#a0a0b0' }}>→</span>}
                </span>
              ))}
            </div>
            <p className="text-sm" style={{ color: '#a0a0b0' }}>
              Nenhum app faz isso. Queremos formar um jogador melhor para a vida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function HabilidadeCard({ h, i, inView }: { h: typeof habilidades[0]; i: number; inView: boolean }) {
  const rgb = h.cor === '#00ff88' ? '0,255,136'
    : h.cor === '#00d4ff' ? '0,212,255'
    : h.cor === '#a78bfa' ? '167,139,250'
    : '245,158,11'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className="relative rounded-2xl p-6 group cursor-default overflow-hidden"
      style={{ background: 'rgba(15,15,26,0.9)', border: '1px solid #1a1a2e' }}
      whileHover={{
        y: -8,
        borderColor: h.cor,
        boxShadow: `0 24px 60px rgba(${rgb},0.2)`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${h.cor}, transparent)` }}
      />
      <div
        className="absolute bottom-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
        style={{ background: `radial-gradient(circle at bottom right, rgba(${rgb},0.05), transparent)` }}
      />

      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{h.icone}</span>
        <div
          className="px-2 py-0.5 rounded text-xs font-mono font-bold"
          style={{ background: `rgba(${rgb},0.08)`, color: h.cor, letterSpacing: '0.05em' }}
        >
          {h.nivel}
        </div>
      </div>

      <h3 className="font-black text-base mb-2" style={{ color: '#ffffff' }}>{h.titulo}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: '#a0a0b0' }}>{h.desc}</p>

      <div className="flex items-center gap-1">
        <span className="text-xs" style={{ color: h.cor }}>{h.pts}</span>
      </div>
    </motion.div>
  )
}
