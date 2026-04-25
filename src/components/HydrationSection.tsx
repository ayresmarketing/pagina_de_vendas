import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const registros = [
  { horario: '07:00', ml: 250, feito: true },
  { horario: '09:30', ml: 300, feito: true },
  { horario: '12:00', ml: 400, feito: true },
  { horario: '15:00', ml: 300, feito: false },
  { horario: '18:00', ml: 350, feito: false },
  { horario: '21:00', ml: 200, feito: false },
]

const PCT = 65

export default function HydrationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const totalBebido = registros.filter(r => r.feito).reduce((acc, r) => acc + r.ml, 0)

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#0a0a0a', width: '100%' }}
    >
      <div className="absolute inset-0 grade-pontos opacity-30 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'min(500px, 80vw)',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto + log */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', bounce: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)' }}
            >
              <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00d4ff' }}>
                💧 CONTROLE DE HIDRATAÇÃO
              </span>
            </motion.div>

            <h2
              className="font-black mb-5"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', color: '#ffffff', lineHeight: 1.15 }}
            >
              Disciplina começa nas{' '}
              <span style={{ color: '#00d4ff' }}>pequenas coisas</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#a0a0b0' }}>
              Defina sua meta diária de hidratação e acompanhe cada passo do seu progresso.
              Porque consistência não se constrói em grandes decisões, mas em{' '}
              <span style={{ color: '#ffffff', fontWeight: 700 }}>hábitos diários.</span>
            </p>

            {/* Log de hidratação */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: 'rgba(8,8,20,0.97)', border: '1px solid rgba(0,212,255,0.15)' }}
            >
              <div
                className="px-4 py-3 flex items-center justify-between"
                style={{ borderBottom: '1px solid #1a1a2e' }}
              >
                <span className="text-xs font-mono font-bold" style={{ color: '#00d4ff' }}>REGISTROS DE HOJE</span>
                <span className="text-xs font-mono" style={{ color: '#a0a0b0' }}>{totalBebido}ml / 2.000ml</span>
              </div>
              <div className="p-3 space-y-2">
                {registros.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-xs font-mono w-12 shrink-0" style={{ color: '#a0a0b0' }}>{r.horario}</span>
                    <div className="flex-1 h-2 rounded-full overflow-hidden" style={{ background: '#1a1a2e' }}>
                      {r.feito && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: '100%' } : {}}
                          transition={{ duration: 0.6, delay: 0.5 + i * 0.07 }}
                          className="h-full rounded-full"
                          style={{
                            background: 'linear-gradient(90deg, #00d4ff, #00ff88)',
                            boxShadow: '0 0 6px rgba(0,212,255,0.5)',
                          }}
                        />
                      )}
                    </div>
                    <span className="text-xs font-mono w-14 text-right" style={{ color: r.feito ? '#00d4ff' : '#1a1a2e' }}>
                      {r.ml}ml
                    </span>
                    <span className="text-sm">{r.feito ? '💧' : '○'}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Progresso circular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="flex flex-col items-center"
          >
            <div className="relative" style={{ width: '280px', height: '280px' }}>
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 200 200"
                style={{ transform: 'rotate(-90deg)' }}
              >
                {/* Trilha */}
                <circle cx="100" cy="100" r="85" fill="none" stroke="#1a1a2e" strokeWidth="12" />
                {/* Progresso */}
                <motion.circle
                  cx="100" cy="100" r="85"
                  fill="none"
                  stroke="url(#gradHid)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 85}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 85 }}
                  animate={inView ? { strokeDashoffset: 2 * Math.PI * 85 * (1 - PCT / 100) } : {}}
                  transition={{ duration: 2.5, delay: 0.4, ease: 'easeOut' }}
                  style={{ filter: 'drop-shadow(0 0 10px rgba(0,212,255,0.8))' }}
                />
                <defs>
                  <linearGradient id="gradHid" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#00ff88" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Conteúdo interno */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl mb-1">💧</span>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                  className="font-black"
                  style={{ fontSize: '3.5rem', color: '#00d4ff', lineHeight: 1 }}
                >
                  {PCT}%
                </motion.p>
                <p className="text-xs font-mono text-center mt-1" style={{ color: '#a0a0b0' }}>
                  {totalBebido}ml / 2.000ml
                </p>
              </div>
            </div>

            {/* Stats abaixo */}
            <div className="flex gap-6 mt-6">
              {[
                { label: 'Bebido', val: `${totalBebido}ml`, cor: '#00d4ff' },
                { label: 'Restante', val: `${2000 - totalBebido}ml`, cor: '#a0a0b0' },
                { label: 'Meta', val: '2.000ml', cor: '#00ff88' },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <p className="font-black text-base" style={{ color: s.cor }}>{s.val}</p>
                  <p className="text-xs font-mono" style={{ color: '#a0a0b0' }}>{s.label}</p>
                </div>
              ))}
            </div>

            <div
              className="mt-5 px-4 py-2 rounded-full"
              style={{ background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.3)' }}
            >
              <p className="text-xs font-black font-mono" style={{ color: '#00d4ff' }}>
                💧 +150 XP por meta diária cumprida
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
