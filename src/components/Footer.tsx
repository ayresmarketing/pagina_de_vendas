import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="relative py-12 overflow-hidden"
      style={{ background: '#050510', borderTop: '1px solid #1a1a2e', width: '100%' }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00ff88, #00d4ff, transparent)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.03 }}>
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #00ff88, #00d4ff)', boxShadow: '0 0 20px rgba(0,255,136,0.4)' }}
            >
              <Zap size={18} color="#050510" strokeWidth={3} />
            </div>
            <span className="font-black tracking-widest text-sm" style={{ color: '#ffffff', letterSpacing: '0.15em' }}>
              SUA VIDA É UM JOGO
            </span>
          </motion.div>

          <p className="text-sm max-w-md" style={{ color: '#a0a0b0' }}>
            Transformando realidade em conquista.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {['SISTEMA', 'ARSENAL', 'RANKING', 'SUPORTE'].map(link => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-semibold tracking-widest transition-colors duration-200"
                style={{ color: '#a0a0b0', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#00ff88')}
                onMouseLeave={e => (e.currentTarget.style.color = '#a0a0b0')}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="w-full h-px" style={{ background: '#1a1a2e' }} />

          <div className="flex flex-wrap items-center justify-between w-full gap-4">
            <p className="text-xs" style={{ color: '#a0a0b0' }}>
              © 2026 Sua Vida É Um Jogo. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ background: '#00ff88', boxShadow: '0 0 6px #00ff88', animation: 'piscar 1.5s ease-in-out infinite' }}
              />
              <span className="text-xs font-mono" style={{ color: '#00ff88' }}>SISTEMA ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
