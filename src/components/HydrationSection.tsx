import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Droplets } from 'lucide-react'

export default function HydrationSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const pct = 65

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Blue glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6"
              style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.25)', color: '#00d4ff' }}
            >
              💧 HIDRATAÇÃO
            </div>
            <h2
              className="font-black mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#ffffff' }}
            >
              Disciplina começa nas{' '}
              <span style={{ color: '#00d4ff' }}>pequenas coisas</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#a0a0b0' }}>
              Defina sua meta diária de hidratação e acompanhe cada passo do seu progresso.
              Porque consistência não se constrói em grandes decisões, mas em{' '}
              <span style={{ color: '#ffffff', fontWeight: 600 }}>hábitos diários.</span>
            </p>

            {/* Daily log */}
            <div className="space-y-3">
              {[
                { time: '07:00', ml: 250, done: true },
                { time: '09:30', ml: 300, done: true },
                { time: '12:00', ml: 400, done: true },
                { time: '15:00', ml: 300, done: false },
                { time: '18:00', ml: 350, done: false },
              ].map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-4"
                >
                  <span className="text-xs font-mono w-12" style={{ color: '#a0a0b0' }}>{log.time}</span>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: '#1a1a2e' }}>
                    {log.done && (
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: '100%',
                          background: 'linear-gradient(90deg, #00d4ff, #00ff88)',
                          boxShadow: '0 0 6px rgba(0,212,255,0.5)',
                        }}
                      />
                    )}
                  </div>
                  <span className="text-xs font-mono w-14 text-right" style={{ color: log.done ? '#00d4ff' : '#1a1a2e' }}>
                    {log.ml}ml
                  </span>
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center"
                    style={{
                      background: log.done ? 'rgba(0,212,255,0.2)' : 'rgba(26,26,46,0.8)',
                      border: `1px solid ${log.done ? '#00d4ff' : '#1a1a2e'}`,
                    }}
                  >
                    {log.done && <div className="w-2 h-2 rounded-full" style={{ background: '#00d4ff' }} />}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Circular progress */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="flex justify-center"
          >
            <div className="relative w-72 h-72">
              {/* Outer ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 200 200">
                {/* Track */}
                <circle cx="100" cy="100" r="85" fill="none" stroke="#1a1a2e" strokeWidth="10" />
                {/* Progress */}
                <motion.circle
                  cx="100" cy="100" r="85"
                  fill="none"
                  stroke="url(#hydGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 85}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 85 }}
                  animate={inView ? {
                    strokeDashoffset: 2 * Math.PI * 85 * (1 - pct / 100)
                  } : {}}
                  transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.8))' }}
                />
                <defs>
                  <linearGradient id="hydGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00d4ff" />
                    <stop offset="100%" stopColor="#00ff88" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Inner content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Droplets size={28} color="#00d4ff" className="mb-2" />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1 }}
                  className="text-5xl font-black"
                  style={{ color: '#00d4ff' }}
                >
                  {pct}%
                </motion.div>
                <p className="text-xs font-mono mt-1" style={{ color: '#a0a0b0' }}>1.300 / 2.000 ml</p>
                <div
                  className="mt-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(0,212,255,0.1)', color: '#00d4ff', border: '1px solid rgba(0,212,255,0.3)' }}
                >
                  EM PROGRESSO
                </div>
              </div>

              {/* Decorative droplets */}
              {[45, 135, 270].map((angle, i) => {
                const rad = (angle * Math.PI) / 180
                const x = 50 + 46 * Math.cos(rad)
                const y = 50 + 46 * Math.sin(rad)
                return (
                  <motion.div
                    key={i}
                    className="absolute w-5 h-5 rounded-full"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      background: angle < 180 ? 'rgba(0,212,255,0.3)' : 'rgba(26,26,46,0.8)',
                      border: '1px solid rgba(0,212,255,0.4)',
                      boxShadow: angle < 180 ? '0 0 10px rgba(0,212,255,0.4)' : 'none',
                    }}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  />
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
