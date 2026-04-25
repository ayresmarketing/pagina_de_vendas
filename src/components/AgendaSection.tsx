import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const tarefasDia = [
  { horario: '07:00', tarefa: 'Sincronização Diária', tipo: 'Diário', cor: '#00ff88', icone: '🔄', feito: true },
  { horario: '09:00', tarefa: 'Reunião com a empresa', tipo: 'Evento', cor: '#f59e0b', icone: '🏢', feito: true },
  { horario: '12:00', tarefa: 'Estudar 30 minutos', tipo: 'Missão', cor: '#00d4ff', icone: '📚', feito: true },
  { horario: '15:30', tarefa: 'Mandar mensagem pro Miguel', tipo: 'Social', cor: '#a78bfa', icone: '💬', feito: false },
  { horario: '18:00', tarefa: 'Ir na academia', tipo: 'Desafio', cor: '#00ff88', icone: '💪', feito: false },
  { horario: '21:00', tarefa: 'Revisão do dia', tipo: 'Diário', cor: '#00d4ff', icone: '📋', feito: false },
]

const blocos = [
  { label: 'Sono', horas: 8, cor: '#a78bfa', pct: 33, icone: '🌙' },
  { label: 'Ocupado', horas: 9, cor: '#f59e0b', pct: 38, icone: '⏰' },
  { label: 'Livre', horas: 7, cor: '#00ff88', pct: 29, icone: '☀️' },
]

export default function AgendaSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section
      id="arsenal"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050510 100%)', width: '100%' }}
    >
      <div className="absolute inset-0 grade-pontos opacity-30 pointer-events-none" />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'min(400px, 60vw)',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mockup da Agenda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(8,8,20,0.97)',
                border: '1px solid rgba(0,255,136,0.2)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,255,136,0.06)',
              }}
            >
              {/* Barra do app */}
              <div
                className="px-4 py-3 flex items-center gap-3"
                style={{ background: 'rgba(5,5,16,0.9)', borderBottom: '1px solid #1a1a2e' }}
              >
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                </div>
                <span className="text-xs font-mono flex-1 text-center" style={{ color: '#a0a0b0' }}>
                  📅 Agenda Inteligente
                </span>
              </div>

              <div className="p-4">
                {/* Distribuição do dia */}
                <p className="text-xs font-mono mb-2" style={{ color: '#a0a0b0', letterSpacing: '0.08em' }}>
                  DISTRIBUIÇÃO DO SEU DIA — 24H
                </p>
                <div className="flex h-7 rounded-lg overflow-hidden gap-0.5 mb-3">
                  {blocos.map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ flex: 0 }}
                      animate={inView ? { flex: b.pct } : {}}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      className="flex items-center justify-center text-xs font-bold"
                      style={{ background: b.cor, color: '#050510', minWidth: 0 }}
                    >
                      {b.horas}h
                    </motion.div>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {blocos.map((b, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-2.5 text-center"
                      style={{
                        background: `rgba(${b.cor === '#a78bfa' ? '167,139,250' : b.cor === '#f59e0b' ? '245,158,11' : '0,255,136'},0.07)`,
                        border: `1px solid rgba(${b.cor === '#a78bfa' ? '167,139,250' : b.cor === '#f59e0b' ? '245,158,11' : '0,255,136'},0.2)`,
                      }}
                    >
                      <p className="text-base">{b.icone}</p>
                      <p className="font-black text-base" style={{ color: b.cor }}>{b.horas}h</p>
                      <p className="text-xs" style={{ color: '#a0a0b0' }}>{b.label}</p>
                    </div>
                  ))}
                </div>

                {/* Lista de tarefas do dia */}
                <p className="text-xs font-mono mb-2" style={{ color: '#a0a0b0', letterSpacing: '0.08em' }}>
                  TAREFAS DE HOJE
                </p>
                <div className="space-y-1.5">
                  {tarefasDia.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.07 }}
                      className="flex items-center gap-2.5 py-2 px-3 rounded-lg"
                      style={{
                        background: t.feito ? 'rgba(0,255,136,0.05)' : 'rgba(26,26,46,0.5)',
                        border: `1px solid ${t.feito ? 'rgba(0,255,136,0.15)' : 'rgba(26,26,46,0.5)'}`,
                      }}
                    >
                      <span className="text-xs font-mono w-11 shrink-0" style={{ color: '#a0a0b0' }}>{t.horario}</span>
                      <span className="text-sm">{t.icone}</span>
                      <span className="text-xs flex-1" style={{ color: t.feito ? '#a0a0b0' : '#e0e0e8', textDecoration: t.feito ? 'line-through' : undefined }}>
                        {t.tarefa}
                      </span>
                      {t.feito
                        ? <span style={{ color: '#00ff88', fontSize: '14px' }}>✓</span>
                        : (
                          <div
                            className="w-4 h-4 rounded border"
                            style={{ borderColor: t.cor, background: 'transparent' }}
                          />
                        )
                      }
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', bounce: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
              style={{
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.3)',
              }}
            >
              <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00ff88' }}>
                📅 AGENDA INTELIGENTE
              </span>
            </motion.div>

            <h2
              className="font-black mb-5"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', color: '#ffffff', lineHeight: 1.15 }}
            >
              Controle seu tempo,{' '}
              <span style={{ color: '#00ff88' }}>controle seu jogo</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#a0a0b0' }}>
              Tenha acesso total à sua agenda, encaixe automaticamente suas tarefas nos seus horários disponíveis,
              veja de forma clara seu tempo de sono, tempo ocupado e tempo livre.{' '}
              <span style={{ color: '#ffffff', fontWeight: 700 }}>Nunca mais deixe de executar.</span>
            </p>

            <div className="space-y-4">
              {[
                { icone: '🎯', texto: 'Encaixe automático de tarefas nos horários disponíveis' },
                { icone: '👁️', texto: 'Visualização clara de sono, ocupado e tempo livre' },
                { icone: '🔄', texto: 'Sincronização em tempo real com seus compromissos' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-xl shrink-0">{item.icone}</span>
                  <span style={{ color: '#a0a0b0' }}>{item.texto}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
