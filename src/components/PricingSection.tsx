import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, Lock, ArrowRight, Zap } from 'lucide-react'

const itens = [
  '🎯 Sistema completo de metas',
  '🧠 IA que cria seu plano',
  '📅 Agenda inteligente integrada',
  '🎮 Gamificação com níveis',
  '📊 Painel de evolução completo',
  '⚖️ Equilíbrio pessoal e emocional',
  '⏱️ Cálculo de esforço necessário',
  '🚨 Sistema anti-sabotagem',
  '🏆 Recompensas contínuas',
  '💧 Controle de hidratação',
]

export default function PricingSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section
      id="preco"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#0a0a0a', width: '100%' }}
    >
      <div className="absolute inset-0 grade-linhas opacity-20 pointer-events-none" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'min(600px, 80vw)',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
            style={{ background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.3)' }}
          >
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00ff88' }}>
              🏆 OFERTA ESPECIAL
            </span>
          </motion.div>

          <h2
            className="font-black mb-3"
            style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)', color: '#ffffff', lineHeight: 1.15 }}
          >
            Hora de jogar:{' '}
            <span style={{ color: '#00ff88' }}>por apenas</span>
          </h2>

          <div className="flex items-end justify-center gap-2 mb-2">
            <span className="text-xl font-bold" style={{ color: '#a0a0b0', marginBottom: '8px' }}>R$</span>
            <span
              className="font-black"
              style={{
                fontSize: 'clamp(4rem, 12vw, 7rem)',
                lineHeight: 1,
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              19,90
            </span>
            <span className="text-xl font-bold" style={{ color: '#a0a0b0', marginBottom: '8px' }}>/mês</span>
          </div>
        </motion.div>

        {/* Card principal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="borda-gradiente-animada"
        >
          <div className="rounded-2xl overflow-hidden" style={{ background: 'rgba(8,8,20,0.98)' }}>
            {/* Barra de título */}
            <div
              className="px-6 sm:px-8 py-4 flex items-center justify-between flex-wrap gap-3"
              style={{
                background: 'linear-gradient(90deg, rgba(0,255,136,0.08), rgba(0,212,255,0.08))',
                borderBottom: '1px solid rgba(0,255,136,0.15)',
              }}
            >
              <div className="flex items-center gap-2">
                <Zap size={16} color="#00ff88" />
                <span className="font-black text-sm tracking-widest" style={{ color: '#00ff88' }}>
                  PLANO ELITE COMPLETO
                </span>
              </div>
              <div
                className="px-3 py-1 rounded-full text-xs font-mono font-black"
                style={{ background: 'rgba(0,255,136,0.15)', color: '#00ff88', border: '1px solid rgba(0,255,136,0.3)' }}
              >
                MAIS POPULAR
              </div>
            </div>

            <div className="p-5 sm:p-8">
              {/* Lista de itens */}
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {itens.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="flex items-center gap-3 py-2 px-3 rounded-xl"
                    style={{ background: 'rgba(0,255,136,0.03)', border: '1px solid rgba(0,255,136,0.08)' }}
                  >
                    <CheckCircle2 size={15} color="#00ff88" className="shrink-0" />
                    <span className="text-sm" style={{ color: '#e0e0e8' }}>{item}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="text-center">
                <motion.a
                  href="#"
                  className="botao-coracao inline-flex items-center gap-3 px-10 sm:px-14 py-5 rounded-2xl font-black text-lg mb-5"
                  style={{
                    background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                    color: '#050510',
                    boxShadow: '0 0 50px rgba(0,255,136,0.4)',
                    textDecoration: 'none',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Zap size={20} />
                  Comprar agora
                  <ArrowRight size={20} />
                </motion.a>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <Lock size={13} color="#a0a0b0" />
                  <span className="text-sm" style={{ color: '#a0a0b0' }}>
                    Pagamento seguro via protocolo criptografado
                  </span>
                </div>

                {/* Estatísticas */}
                <div
                  className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap py-4 px-6 rounded-2xl"
                  style={{ background: 'rgba(26,26,46,0.5)' }}
                >
                  {[
                    { label: 'Jogadores Ativos', val: '2.4K+' },
                    { label: 'Satisfação', val: '97%' },
                    { label: 'Metas Atingidas', val: '18K+' },
                  ].map((s, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl sm:text-2xl font-black" style={{ color: '#00ff88' }}>{s.val}</p>
                      <p className="text-xs" style={{ color: '#a0a0b0' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Frase de encerramento */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-10"
        >
          <p
            className="font-black"
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              background: 'linear-gradient(90deg, #a0a0b0, #ffffff, #a0a0b0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Quanto custa não ser sua melhor versão?
          </p>
        </motion.div>
      </div>
    </section>
  )
}
