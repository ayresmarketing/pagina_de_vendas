import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, Moon, Clock, Sun } from 'lucide-react'

const timeBlocks = [
  { label: 'Sono', hours: 8, color: '#a78bfa', icon: Moon, pct: 33 },
  { label: 'Ocupado', hours: 9, color: '#f59e0b', icon: Clock, pct: 38 },
  { label: 'Livre', hours: 7, color: '#00ff88', icon: Sun, pct: 29 },
]

export default function AgendaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      id="arsenal"
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050510 100%)' }}
    >
      {/* Left glow */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - visual calendar mockup */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(15,15,26,0.9)',
                border: '1px solid rgba(0,255,136,0.15)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
              }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid #1a1a2e' }}
              >
                <div className="flex items-center gap-2">
                  <Calendar size={16} color="#00ff88" />
                  <span className="font-mono text-sm font-bold" style={{ color: '#ffffff' }}>Agenda Inteligente</span>
                </div>
                <span className="text-xs font-mono" style={{ color: '#a0a0b0' }}>Abril 2026</span>
              </div>

              {/* Time allocation */}
              <div className="p-5">
                <p className="text-xs font-mono mb-4" style={{ color: '#a0a0b0', letterSpacing: '0.08em' }}>
                  DISTRIBUIÇÃO DO DIA — 24H
                </p>

                {/* Visual bar */}
                <div className="flex h-8 rounded-lg overflow-hidden mb-5 gap-0.5">
                  {timeBlocks.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ flex: 0 }}
                      animate={inView ? { flex: b.pct } : {}}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                      className="rounded-sm flex items-center justify-center"
                      style={{ background: b.color, opacity: 0.85 }}
                    >
                      <span className="text-xs font-bold text-black">{b.hours}h</span>
                    </motion.div>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-3 mb-5">
                  {timeBlocks.map((b, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-3"
                      style={{
                        background: `rgba(${b.color === '#a78bfa' ? '167,139,250' : b.color === '#f59e0b' ? '245,158,11' : '0,255,136'},0.06)`,
                        border: `1px solid rgba(${b.color === '#a78bfa' ? '167,139,250' : b.color === '#f59e0b' ? '245,158,11' : '0,255,136'},0.2)`,
                      }}
                    >
                      <b.icon size={14} color={b.color} className="mb-1" />
                      <p className="text-lg font-black" style={{ color: b.color }}>{b.hours}h</p>
                      <p className="text-xs" style={{ color: '#a0a0b0' }}>{b.label}</p>
                    </div>
                  ))}
                </div>

                {/* Sample schedule */}
                <div className="space-y-2">
                  {[
                    { time: '07:00', task: 'Sincronização Diária', color: '#00ff88' },
                    { time: '09:00', task: 'Reunião com a empresa', color: '#f59e0b' },
                    { time: '12:00', task: 'Estudar 30 minutos', color: '#00d4ff' },
                    { time: '18:00', task: 'Ir na academia', color: '#a78bfa' },
                    { time: '21:00', task: 'Revisão do dia', color: '#00ff88' },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.08 }}
                      className="flex items-center gap-3 py-2 px-3 rounded-lg"
                      style={{ background: 'rgba(26,26,46,0.5)' }}
                    >
                      <span className="text-xs font-mono w-12 shrink-0" style={{ color: '#a0a0b0' }}>
                        {item.time}
                      </span>
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: item.color, boxShadow: `0 0 6px ${item.color}` }}
                      />
                      <span className="text-xs" style={{ color: '#e0e0e8' }}>{item.task}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6"
              style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)', color: '#00ff88' }}
            >
              📅 AGENDA INTELIGENTE
            </div>
            <h2
              className="font-black mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#ffffff' }}
            >
              Controle seu tempo,{' '}
              <span style={{ color: '#00ff88' }}>controle seu jogo</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#a0a0b0' }}>
              Tenha acesso total a sua agenda, encaixe automaticamente suas tarefas nos seus horários disponíveis,
              veja de forma clara seu tempo de sono, tempo ocupado, tempo livre,{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>nunca mais deixe de executar.</span>
            </p>

            <div className="space-y-4">
              {[
                'Encaixe automático de tarefas nos horários disponíveis',
                'Visualização clara de sono, ocupado e tempo livre',
                'Sincronização em tempo real com seus compromissos',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,255,136,0.15)', border: '1px solid rgba(0,255,136,0.4)' }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: '#00ff88' }} />
                  </div>
                  <span style={{ color: '#a0a0b0' }}>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
