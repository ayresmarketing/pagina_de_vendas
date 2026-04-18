import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, Zap, BarChart3, Shield, Trophy } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'IA Executora',
    desc: 'Digite sua meta → quebra em missões/tarefas realistas, distribui na agenda sem sobrecarga.',
    color: '#00ff88',
    tag: 'NEURAL',
  },
  {
    icon: Zap,
    title: 'Gamificação Viciante',
    desc: 'Pontos por esforço, níveis de evolução, crescimento visível.',
    color: '#00d4ff',
    tag: 'CORE',
  },
  {
    icon: BarChart3,
    title: 'Análise Comportamental',
    desc: "Detecta falhas ('Você pula por falta de tempo? Ajuste automático aplicado').",
    color: '#a78bfa',
    tag: 'ANALYTICS',
  },
  {
    icon: Shield,
    title: 'Identidade em Construção',
    desc: "Dashboard reforça 'Você É Disciplinado/Focado' + categorias equilibradas.",
    color: '#f59e0b',
    tag: 'IDENTITY',
  },
  {
    icon: Trophy,
    title: 'Recompensas Reais',
    desc: 'Ganhe pontos e níveis para se recompensar com jantares, cashback ou upgrades.',
    color: '#00ff88',
    tag: 'REWARDS',
  },
]

function FeatureCard({ f, i, inView }: { f: typeof features[0], i: number, inView: boolean }) {
  const rgb = f.color === '#00ff88' ? '0,255,136'
    : f.color === '#00d4ff' ? '0,212,255'
    : f.color === '#a78bfa' ? '167,139,250'
    : f.color === '#f59e0b' ? '245,158,11'
    : '0,255,136'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      className="group relative rounded-2xl p-6 cursor-default"
      style={{
        background: 'rgba(15,15,26,0.9)',
        border: '1px solid #1a1a2e',
        backdropFilter: 'blur(20px)',
      }}
      whileHover={{
        y: -8,
        borderColor: f.color,
        boxShadow: `0 24px 60px rgba(${rgb},0.2)`,
      }}
    >
      {/* Glow top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, transparent, ${f.color}, transparent)` }}
      />

      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background: `rgba(${rgb},0.1)`,
            border: `1px solid rgba(${rgb},0.3)`,
          }}
        >
          <f.icon size={20} color={f.color} />
        </div>
        <span
          className="px-2 py-0.5 rounded text-xs font-mono font-bold"
          style={{
            background: `rgba(${rgb},0.08)`,
            color: f.color,
            letterSpacing: '0.08em',
          }}
        >
          {f.tag}
        </span>
      </div>

      <h3 className="font-bold text-base mb-2" style={{ color: '#ffffff' }}>{f.title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#a0a0b0' }}>{f.desc}</p>

      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-16 h-16 rounded-br-2xl pointer-events-none"
        style={{ background: `radial-gradient(circle at bottom right, rgba(${rgb},0.06), transparent)` }}
      />
    </motion.div>
  )
}

export default function FeaturesSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="sistema"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Animated gradient border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, #00ff88, transparent)',
          animation: 'gradientBorder 4s linear infinite',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Cyan glow */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-6"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6"
            style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88' }}
          >
            ⚡ FUNCIONALIDADES
          </div>
          <h2
            className="font-black mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#ffffff' }}
          >
            O Sistema que{' '}
            <span style={{
              background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Transforma Tarefas
            </span>
            <br />em um Jogo real
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#a0a0b0' }}>
            Imagine: Em vez de apps genéricos que só listam tarefas, um sistema inteligente que:
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {features.slice(0, 3).map((f, i) => (
            <FeatureCard key={i} f={f} i={i} inView={inView} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-2xl mx-auto mb-12">
          {features.slice(3).map((f, i) => (
            <FeatureCard key={i} f={f} i={i + 3} inView={inView} />
          ))}
        </div>

        {/* Mechanism badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="gradient-border-animated max-w-2xl mx-auto"
        >
          <div
            className="rounded-xl p-6 text-center"
            style={{ background: 'rgba(15,15,26,0.95)' }}
          >
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold mb-3"
              style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88' }}
            >
              Mecanismo Exclusivo
            </span>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {['Meta', 'Missão', 'Tarefa', 'Execução'].map((step, i) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="font-bold text-sm" style={{ color: i % 2 === 0 ? '#00ff88' : '#00d4ff' }}>
                    {step}
                  </span>
                  {i < 3 && <span style={{ color: '#a0a0b0' }}>→</span>}
                </span>
              ))}
            </div>
            <p className="mt-3 text-sm" style={{ color: '#a0a0b0' }}>
              Nenhum app faz isso. Queremos formar um jogador melhor para a vida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
