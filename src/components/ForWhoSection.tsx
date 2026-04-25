import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const perfis = [
  {
    icone: '🎯',
    titulo: 'Sabe o que precisa fazer, mas não consegue manter consistência',
    desc: 'Você tem metas, mas sempre para no meio do caminho',
    tag: 'Padrão Detectado',
    cor: '#00ff88',
  },
  {
    icone: '⚡',
    titulo: 'Se sente travado e sem progresso',
    desc: 'Está sempre ocupado, mas sua vida não avança como deveria',
    tag: 'Estagnação Detectada',
    cor: '#00d4ff',
  },
  {
    icone: '🔄',
    titulo: 'Tentou métodos e apps de produtividade sem sucesso',
    desc: 'Você já se organizou antes, mas nunca conseguiu sustentar a execução',
    tag: 'Reinicialização Necessária',
    cor: '#a78bfa',
  },
  {
    icone: '🛡️',
    titulo: 'Quer parar de se sabotar e criar disciplina de verdade',
    desc: 'Chega de prometer e não cumprir',
    tag: 'Quebrando Ciclos',
    cor: '#f59e0b',
  },
  {
    icone: '🏆',
    titulo: 'Quer evoluir de forma completa',
    desc: 'Crescer no pessoal, profissional e emocional ao mesmo tempo',
    tag: 'Nível Máximo — Capacidade Total',
    cor: '#00ff88',
  },
]

export default function ForWhoSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section
      id="ranking"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #050510 0%, #0a0a0a 100%)', width: '100%' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, #a78bfa, transparent)',
          animation: 'bordaAnimada 5s linear infinite',
          backgroundSize: '200% 100%',
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'min(700px, 90vw)',
          height: '500px',
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.3)' }}
          >
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00ff88' }}>
              🎮 SELEÇÃO DE PERSONAGEM
            </span>
          </motion.div>

          <h2
            className="font-black"
            style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)', color: '#ffffff', lineHeight: 1.15 }}
          >
            Esse jogo é para{' '}
            <span style={{ color: '#00ff88' }}>quem:</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {perfis.slice(0, 3).map((p, i) => <PerfilCard key={i} p={p} i={i} inView={inView} />)}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto mt-5">
          {perfis.slice(3).map((p, i) => <PerfilCard key={i} p={p} i={i + 3} inView={inView} />)}
        </div>
      </div>
    </section>
  )
}

function PerfilCard({ p, i, inView }: { p: typeof perfis[0]; i: number; inView: boolean }) {
  const rgb = p.cor === '#00ff88' ? '0,255,136'
    : p.cor === '#00d4ff' ? '0,212,255'
    : p.cor === '#a78bfa' ? '167,139,250'
    : '245,158,11'

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: i * 0.1 }}
      className="relative rounded-2xl p-6 overflow-hidden cursor-default"
      style={{ background: 'rgba(15,15,26,0.9)', border: '1px solid #1a1a2e' }}
      whileHover={{
        y: -8,
        borderColor: p.cor,
        boxShadow: `0 24px 60px rgba(${rgb},0.15)`,
      }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${p.cor}, transparent)` }}
      />
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top right, rgba(${rgb},0.06), transparent)` }}
      />

      <div
        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-black mb-4"
        style={{
          background: `rgba(${rgb},0.08)`,
          border: `1px solid rgba(${rgb},0.25)`,
          color: p.cor,
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: p.cor, boxShadow: `0 0 6px ${p.cor}`, animation: 'piscar 1.5s ease-in-out infinite' }}
        />
        {p.tag}
      </div>

      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{p.icone}</span>
        <h3 className="font-black text-sm leading-snug" style={{ color: '#ffffff' }}>{p.titulo}</h3>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: '#a0a0b0' }}>{p.desc}</p>
    </motion.div>
  )
}
