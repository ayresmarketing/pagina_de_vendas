import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Zap, Shield, RefreshCw, Unlock } from 'lucide-react'

const beneficios = [
  {
    icone: <Unlock size={22} color="#00ff88" />,
    titulo: 'Acesso completo',
    desc: 'Todas as funcionalidades do plano Elite desbloqueadas desde o primeiro dia.',
    cor: '#00ff88',
  },
  {
    icone: <Shield size={22} color="#00d4ff" />,
    titulo: 'Sem risco nenhum',
    desc: 'Sem cobrança durante 30 dias. Só paga se decidir continuar.',
    cor: '#00d4ff',
  },
  {
    icone: <RefreshCw size={22} color="#a78bfa" />,
    titulo: 'Cancele quando quiser',
    desc: 'Sem fidelidade, sem burocracia. Um clique e está cancelado.',
    cor: '#a78bfa',
  },
  {
    icone: <Zap size={22} color="#f59e0b" />,
    titulo: 'Resultado em dias',
    desc: 'Jogadores relatam mais foco e consistência já na primeira semana.',
    cor: '#f59e0b',
  },
]

export default function TrialSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: '#050510', width: '100%' }}
    >
      <div className="absolute inset-0 grade-linhas opacity-10 pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(800px, 90vw)',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabeçalho */}
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
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)' }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: '#00d4ff', boxShadow: '0 0 8px #00d4ff', animation: 'piscar 1s ease-in-out infinite' }}
            />
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00d4ff' }}>
              TRIAL EXCLUSIVO
            </span>
          </motion.div>

          <h2
            className="font-black mb-4"
            style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', color: '#ffffff', lineHeight: 1.15 }}
          >
            30 dias para provar que{' '}
            <span style={{ color: '#00d4ff' }}>sua vida pode ser um jogo</span>
          </h2>

          <p
            className="mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: '#a0a0b0', maxWidth: '560px' }}
          >
            Teste o sistema completo sem gastar nada. Se não transformar sua rotina em 30 dias, você não paga. Simples assim.
          </p>
        </motion.div>

        {/* Cards de benefícios */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {beneficios.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex gap-4 p-5 rounded-2xl"
              style={{
                background: 'rgba(15,15,26,0.8)',
                border: `1px solid rgba(${b.cor === '#00ff88' ? '0,255,136' : b.cor === '#00d4ff' ? '0,212,255' : b.cor === '#a78bfa' ? '167,139,250' : '245,158,11'},0.15)`,
              }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: `rgba(${b.cor === '#00ff88' ? '0,255,136' : b.cor === '#00d4ff' ? '0,212,255' : b.cor === '#a78bfa' ? '167,139,250' : '245,158,11'},0.1)`,
                }}
              >
                {b.icone}
              </div>
              <div>
                <p className="font-black text-sm mb-1" style={{ color: b.cor }}>{b.titulo}</p>
                <p className="text-sm leading-relaxed" style={{ color: '#a0a0b0' }}>{b.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner de destaque */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="rounded-2xl p-6 sm:p-8 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.06), rgba(0,255,136,0.06))',
            border: '1px solid rgba(0,212,255,0.2)',
          }}
        >
          <p
            className="font-black mb-2"
            style={{ fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', color: '#ffffff' }}
          >
            🎮 Mais de 2.400 jogadores já estão no jogo
          </p>
          <p className="text-sm" style={{ color: '#a0a0b0' }}>
            Comece hoje. Os primeiros 30 dias são por nossa conta.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
