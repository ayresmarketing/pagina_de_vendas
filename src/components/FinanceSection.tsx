import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const transacoes = [
  { label: 'Academia', valor: '-R$ 89,90', categoria: 'Saúde', cor: '#00ff88', icone: '💪' },
  { label: 'Almoço', valor: '-R$ 32,50', categoria: 'Alimentação', cor: '#f59e0b', icone: '🍽️' },
  { label: 'Curso Online', valor: '-R$ 197,00', categoria: 'Educação', cor: '#00d4ff', icone: '📚' },
  { label: 'Salário', valor: '+R$ 5.400', categoria: 'Renda', cor: '#00ff88', icone: '💰' },
]

const categorias = [
  { nome: 'Alimentação', pct: 35, cor: '#f59e0b' },
  { nome: 'Educação', pct: 25, cor: '#00d4ff' },
  { nome: 'Saúde', pct: 20, cor: '#00ff88' },
  { nome: 'Lazer', pct: 20, cor: '#a78bfa' },
]

export default function FinanceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: '#0a0a0a', width: '100%' }}
    >
      <div className="absolute inset-0 grade-linhas opacity-20 pointer-events-none" />
      <div
        className="absolute bottom-0 right-0 pointer-events-none"
        style={{
          width: 'min(400px, 60vw)',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Texto */}
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
              style={{
                background: 'rgba(245,158,11,0.08)',
                border: '1px solid rgba(245,158,11,0.3)',
              }}
            >
              <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#f59e0b' }}>
                💰 CONTROLE FINANCEIRO
              </span>
            </motion.div>

            <h2
              className="font-black mb-5"
              style={{ fontSize: 'clamp(1.7rem, 4vw, 2.8rem)', color: '#ffffff', lineHeight: 1.15 }}
            >
              Com moedas{' '}
              <span style={{ color: '#f59e0b' }}>não se brinca</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: '#a0a0b0' }}>
              Agora você consegue ter seu controle financeiro na palma da mão, registre seus gastos e tenha controle
              de tudo, registrando direto pelo{' '}
              <span style={{ color: '#00ff88', fontWeight: 700 }}>WhatsApp</span>{' '}
              ou na plataforma.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icone: '💬', titulo: 'Via WhatsApp', desc: 'Registre sem sair do app' },
                { icone: '📊', titulo: 'Relatórios', desc: 'Visualize categorias' },
                { icone: '📉', titulo: 'Gastos', desc: 'Controle em tempo real' },
                { icone: '🎯', titulo: 'Metas', desc: 'Economize com propósito' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-xl p-4"
                  style={{ background: 'rgba(15,15,26,0.9)', border: '1px solid #1a1a2e' }}
                  whileHover={{ borderColor: '#f59e0b', y: -4 }}
                >
                  <p className="text-2xl mb-2">{item.icone}</p>
                  <p className="font-bold text-sm mb-0.5" style={{ color: '#ffffff' }}>{item.titulo}</p>
                  <p className="text-xs" style={{ color: '#a0a0b0' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mockup Financeiro */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(8,8,20,0.97)',
                border: '1px solid rgba(245,158,11,0.2)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.06)',
              }}
            >
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
                  💰 Carteira Digital
                </span>
              </div>

              <div className="p-4">
                {/* Saldo */}
                <div className="text-center mb-5 py-4 rounded-xl" style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.15)' }}>
                  <p className="text-xs font-mono mb-1" style={{ color: '#a0a0b0' }}>SALDO DISPONÍVEL</p>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="text-3xl font-black"
                    style={{ color: '#00ff88' }}
                  >
                    R$ 3.247,60
                  </motion.p>
                  <p className="text-xs mt-1">
                    <span style={{ color: '#00ff88' }}>▲ 12,4%</span>
                    <span style={{ color: '#a0a0b0' }}> vs. mês passado</span>
                  </p>
                </div>

                {/* Barras por categoria */}
                <p className="text-xs font-mono mb-3" style={{ color: '#a0a0b0' }}>GASTOS POR CATEGORIA</p>
                {categorias.map((cat, i) => (
                  <div key={i} className="mb-2.5">
                    <div className="flex justify-between text-xs mb-1">
                      <span style={{ color: '#a0a0b0' }}>{cat.nome}</span>
                      <span style={{ color: cat.cor, fontWeight: 700 }}>{cat.pct}%</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: '#1a1a2e' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${cat.pct}%` } : {}}
                        transition={{ duration: 0.9, delay: 0.5 + i * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: cat.cor }}
                      />
                    </div>
                  </div>
                ))}

                {/* Transações */}
                <p className="text-xs font-mono mb-2 mt-4" style={{ color: '#a0a0b0' }}>ÚLTIMAS TRANSAÇÕES</p>
                <div className="space-y-1.5">
                  {transacoes.map((tx, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.07 }}
                      className="flex items-center justify-between py-2 px-3 rounded-lg"
                      style={{ background: 'rgba(26,26,46,0.5)' }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{tx.icone}</span>
                        <div>
                          <p className="text-xs font-medium" style={{ color: '#e0e0e8' }}>{tx.label}</p>
                          <p className="text-xs" style={{ color: '#a0a0b0' }}>{tx.categoria}</p>
                        </div>
                      </div>
                      <span
                        className="text-sm font-black font-mono"
                        style={{ color: tx.valor.startsWith('+') ? '#00ff88' : '#ff3c50' }}
                      >
                        {tx.valor}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
