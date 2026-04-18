import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coins, TrendingDown, MessageCircle, PieChart } from 'lucide-react'

const transactions = [
  { label: 'Academia', amount: '-R$ 89,90', cat: 'Saúde', color: '#00ff88', icon: '💪' },
  { label: 'Almoço', amount: '-R$ 32,50', cat: 'Alimentação', color: '#f59e0b', icon: '🍽️' },
  { label: 'Curso Online', amount: '-R$ 197,00', cat: 'Educação', color: '#00d4ff', icon: '📚' },
  { label: 'Salário', amount: '+R$ 5.400', cat: 'Renda', color: '#00ff88', icon: '💰' },
]

export default function FinanceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section
      ref={ref}
      className="relative py-28 overflow-hidden"
      style={{ background: '#0a0a0a' }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-lines opacity-20 pointer-events-none" />

      {/* Glow */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(245,158,11,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6"
              style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.25)', color: '#f59e0b' }}
            >
              💰 CONTROLE FINANCEIRO
            </div>
            <h2
              className="font-black mb-6"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: '#ffffff' }}
            >
              Com moedas{' '}
              <span style={{ color: '#f59e0b' }}>não se brinca</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: '#a0a0b0' }}>
              Agora você consegue ter seu controle financeiro na palma da mão, registre seus gastos e tenha controle
              de tudo, registrando direto pelo{' '}
              <span style={{ color: '#00ff88', fontWeight: 600 }}>WhatsApp</span>{' '}
              ou na plataforma.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MessageCircle, label: 'Via WhatsApp', desc: 'Registre sem sair do app', color: '#00ff88' },
                { icon: PieChart, label: 'Relatórios', desc: 'Visualize categorias', color: '#00d4ff' },
                { icon: TrendingDown, label: 'Gastos', desc: 'Controle em tempo real', color: '#f59e0b' },
                { icon: Coins, label: 'Metas', desc: 'Economize com propósito', color: '#a78bfa' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="rounded-xl p-4"
                  style={{
                    background: 'rgba(15,15,26,0.8)',
                    border: '1px solid #1a1a2e',
                  }}
                  whileHover={{ borderColor: item.color, y: -4 }}
                >
                  <item.icon size={18} color={item.color} className="mb-2" />
                  <p className="font-bold text-sm mb-0.5" style={{ color: '#ffffff' }}>{item.label}</p>
                  <p className="text-xs" style={{ color: '#a0a0b0' }}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Finance mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(15,15,26,0.9)',
                border: '1px solid rgba(245,158,11,0.2)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.4), 0 0 40px rgba(245,158,11,0.06)',
              }}
            >
              {/* Header */}
              <div
                className="px-5 py-4 flex items-center justify-between"
                style={{ borderBottom: '1px solid #1a1a2e' }}
              >
                <div className="flex items-center gap-2">
                  <Coins size={16} color="#f59e0b" />
                  <span className="font-mono text-sm font-bold" style={{ color: '#ffffff' }}>Carteira Digital</span>
                </div>
                <div
                  className="px-2 py-0.5 rounded text-xs font-mono"
                  style={{ background: 'rgba(0,255,136,0.1)', color: '#00ff88' }}
                >
                  LIVE
                </div>
              </div>

              <div className="p-5">
                {/* Balance */}
                <div className="text-center mb-6">
                  <p className="text-xs font-mono mb-1" style={{ color: '#a0a0b0' }}>SALDO DISPONÍVEL</p>
                  <motion.p
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4, type: 'spring' }}
                    className="text-4xl font-black"
                    style={{ color: '#00ff88' }}
                  >
                    R$ 3.247,60
                  </motion.p>
                  <p className="text-xs mt-1" style={{ color: '#a0a0b0' }}>
                    <span style={{ color: '#00ff88' }}>▲ 12.4%</span> vs. mês passado
                  </p>
                </div>

                {/* Mini bar chart */}
                <div className="mb-5">
                  <p className="text-xs font-mono mb-3" style={{ color: '#a0a0b0' }}>GASTOS POR CATEGORIA</p>
                  {[
                    { cat: 'Alimentação', pct: 35, color: '#f59e0b' },
                    { cat: 'Educação', pct: 25, color: '#00d4ff' },
                    { cat: 'Saúde', pct: 20, color: '#00ff88' },
                    { cat: 'Lazer', pct: 20, color: '#a78bfa' },
                  ].map((item, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex justify-between text-xs mb-1">
                        <span style={{ color: '#a0a0b0' }}>{item.cat}</span>
                        <span style={{ color: item.color }}>{item.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: '#1a1a2e' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.pct}%` } : {}}
                          transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                          className="h-full rounded-full"
                          style={{ background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Transactions */}
                <p className="text-xs font-mono mb-2" style={{ color: '#a0a0b0' }}>TRANSAÇÕES RECENTES</p>
                <div className="space-y-2">
                  {transactions.map((tx, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + i * 0.08 }}
                      className="flex items-center justify-between py-2 px-3 rounded-lg"
                      style={{ background: 'rgba(26,26,46,0.5)' }}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-lg">{tx.icon}</span>
                        <div>
                          <p className="text-xs font-medium" style={{ color: '#e0e0e8' }}>{tx.label}</p>
                          <p className="text-xs" style={{ color: '#a0a0b0' }}>{tx.cat}</p>
                        </div>
                      </div>
                      <span
                        className="text-sm font-bold font-mono"
                        style={{ color: tx.amount.startsWith('+') ? '#00ff88' : '#ff3c50' }}
                      >
                        {tx.amount}
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
