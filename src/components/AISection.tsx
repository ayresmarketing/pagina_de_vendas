import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Brain, ArrowRight, Cpu, Zap, Target } from 'lucide-react'

const steps = [
  { n: '01', label: 'Você define a meta', desc: 'Simples e direto — o que você quer alcançar?', color: '#00ff88' },
  { n: '02', label: 'IA analisa com neurociência', desc: 'Identifica padrões, tempo e energia necessários', color: '#00d4ff' },
  { n: '03', label: 'Cria missões práticas', desc: 'Divide em tarefas realistas e executáveis', color: '#a78bfa' },
  { n: '04', label: 'Encaixa na agenda', desc: 'Distribui nos seus horários disponíveis', color: '#f59e0b' },
]

export default function AISection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050510 100%)' }}
    >
      {/* Central neural glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Animated rings */}
      {[1, 2, 3].map(i => (
        <div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none"
          style={{
            width: `${i * 200}px`,
            height: `${i * 200}px`,
            borderColor: 'rgba(0,212,255,0.04)',
            animation: `spin ${i * 8}s linear infinite`,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6"
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', color: '#00d4ff' }}
          >
            <Brain size={12} />
            IA NEURAL EXCLUSIVA
          </div>
          <h2
            className="font-black mb-6"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#ffffff' }}
          >
            Você tem uma Meta, mas não sabe{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              como chegar nela.
            </span>
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#a0a0b0' }}>
            Não se preocupe, nossa IA exclusiva usa neurociência para entender a sua meta e quebrar em missões simples e práticas,
            coloca isso na sua agenda, e facilita para que você execute.{' '}
            <span style={{ color: '#ffffff', fontWeight: 600 }}>Nunca foi tão fácil tirar suas metas do papel.</span>
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl p-6 group"
              style={{
                background: 'rgba(15,15,26,0.9)',
                border: '1px solid #1a1a2e',
              }}
              whileHover={{ y: -6, borderColor: s.color }}
            >
              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div
                  className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
                  style={{ color: '#1a1a2e' }}
                >
                  <ArrowRight size={20} />
                </div>
              )}

              <div
                className="text-3xl font-black font-mono mb-4"
                style={{ color: s.color, opacity: 0.3 }}
              >
                {s.n}
              </div>
              <h3 className="font-bold text-base mb-2" style={{ color: '#ffffff' }}>{s.label}</h3>
              <p className="text-sm" style={{ color: '#a0a0b0' }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Neural badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl mx-auto rounded-2xl p-6 text-center mb-10"
          style={{
            background: 'rgba(0,212,255,0.04)',
            border: '1px solid rgba(0,212,255,0.2)',
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Cpu size={16} color="#00d4ff" />
            <span className="text-xs font-mono font-bold" style={{ color: '#00d4ff' }}>
              Protocolo Neural Ativado
            </span>
          </div>
          <p className="text-sm" style={{ color: '#a0a0b0' }}>
            Otimizando caminhos neurais para máxima execução e redução de fricção cognitiva.
          </p>
          {/* Fake processing bar */}
          <div className="mt-4 h-1 rounded-full overflow-hidden" style={{ background: '#1a1a2e' }}>
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'linear-gradient(90deg, #00d4ff, #a78bfa)' }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#pricing"
            className="heartbeat-btn inline-flex items-center gap-3 px-10 py-4 rounded-xl font-bold text-base"
            style={{
              background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
              color: '#050510',
              boxShadow: '0 0 40px rgba(0,255,136,0.3)',
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
          >
            <Zap size={18} />
            Quero começar agora
            <ArrowRight size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
