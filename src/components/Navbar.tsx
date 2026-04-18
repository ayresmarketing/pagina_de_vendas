import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap } from 'lucide-react'

const links = ['SISTEMA', 'ARSENAL', 'RANKING', 'SUPORTE']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(5,5,16,0.92)'
          : 'rgba(5,5,16,0.3)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled
          ? '1px solid rgba(0,255,136,0.15)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                boxShadow: '0 0 15px rgba(0,255,136,0.5)',
              }}
            >
              <Zap size={16} color="#050510" strokeWidth={3} />
            </div>
            <span
              className="font-black text-sm tracking-widest hidden sm:block"
              style={{ color: '#ffffff', letterSpacing: '0.15em' }}
            >
              MINHA VIDA É UM JOGO
            </span>
            <span
              className="font-black text-sm tracking-widest sm:hidden"
              style={{ color: '#ffffff', letterSpacing: '0.1em' }}
            >
              MVEJ
            </span>
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs font-semibold tracking-widest transition-colors duration-200"
                style={{ color: '#a0a0b0' }}
                whileHover={{ color: '#00ff88' }}
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#pricing"
              className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg font-bold text-sm tracking-wide"
              style={{
                background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                color: '#050510',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,136,0.6)' }}
              whileTap={{ scale: 0.97 }}
            >
              UPGRADE AGORA
            </motion.a>
            <button
              className="md:hidden text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(5,5,16,0.98)', borderBottom: '1px solid #1a1a2e' }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs font-semibold tracking-widest py-2"
                  style={{ color: '#a0a0b0' }}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#pricing"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  color: '#050510',
                }}
                onClick={() => setOpen(false)}
              >
                UPGRADE AGORA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
