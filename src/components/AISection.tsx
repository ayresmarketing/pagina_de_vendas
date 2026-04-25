import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const passos = [
  { n: '01', icone: '🎯', label: 'Você define a meta', desc: 'Simples e direto — o que você quer alcançar?', cor: '#00ff88' },
  { n: '02', icone: '🧠', label: 'IA analisa com neurociência', desc: 'Identifica padrões, tempo e energia necessários', cor: '#00d4ff' },
  { n: '03', icone: '📋', label: 'Cria missões práticas', desc: 'Divide em tarefas realistas e executáveis', cor: '#a78bfa' },
  { n: '04', icone: '📅', label: 'Encaixa na agenda', desc: 'Distribui nos seus horários disponíveis', cor: '#f59e0b' },
]

const chatMensagens = [
  { lado: 'usuario', texto: 'Quero emagrecer 10kg em 3 meses', tempo: '10:23' },
  { lado: 'ia', texto: 'Analisando sua meta... 🧠\n\nBaseado no seu histórico e disponibilidade, criei um plano personalizado:', tempo: '10:23' },
  { lado: 'ia', texto: '✅ Missão criada: "Caminhada 30min" — 5x por semana\n✅ Tarefa diária: Registrar alimentação\n✅ Meta semanal: -0,8kg\n\nAdicionado à sua agenda!', tempo: '10:24' },
]

export default function AISection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050510 100%)', width: '100%' }}
    >
      {/* Anéis orbitais */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ zIndex: 0 }}>
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${i * 180}px`,
              height: `${i * 180}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              borderColor: 'rgba(0,212,255,0.05)',
              animation: `girar ${i * 10}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Brilho ciano central */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          width: 'min(600px, 80vw)',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(0,212,255,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          zIndex: 0,
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
            style={{ background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.3)' }}
          >
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#00d4ff' }}>
              🧠 INTELIGÊNCIA ARTIFICIAL EXCLUSIVA
            </span>
          </motion.div>

          <h2
            className="font-black mb-5"
            style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)', color: '#ffffff', lineHeight: 1.15 }}
          >
            Você tem uma Meta, mas não sabe{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #a78bfa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              como chegar nela.
            </span>
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#a0a0b0' }}>
            Não se preocupe, nossa IA exclusiva usa neurociência para entender a sua meta e quebrar em missões simples e práticas,
            coloca isso na sua agenda, e facilita para que você execute.{' '}
            <span style={{ color: '#ffffff', fontWeight: 700 }}>Nunca foi tão fácil tirar suas metas do papel.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Passos */}
          <div className="space-y-4">
            {passos.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="flex items-start gap-4 rounded-2xl p-5"
                style={{ background: 'rgba(15,15,26,0.9)', border: '1px solid #1a1a2e' }}
                whileHover={{ borderColor: p.cor, x: 4 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{
                    background: `rgba(${p.cor === '#00ff88' ? '0,255,136' : p.cor === '#00d4ff' ? '0,212,255' : p.cor === '#a78bfa' ? '167,139,250' : '245,158,11'},0.1)`,
                    border: `1px solid rgba(${p.cor === '#00ff88' ? '0,255,136' : p.cor === '#00d4ff' ? '0,212,255' : p.cor === '#a78bfa' ? '167,139,250' : '245,158,11'},0.3)`,
                  }}
                >
                  {p.icone}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-black" style={{ color: p.cor, opacity: 0.6 }}>{p.n}</span>
                    <h3 className="font-bold text-sm" style={{ color: '#ffffff' }}>{p.label}</h3>
                  </div>
                  <p className="text-sm" style={{ color: '#a0a0b0' }}>{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mockup do Chat com IA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(8,8,20,0.97)',
                border: '1px solid rgba(0,212,255,0.2)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,212,255,0.06)',
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
                  🧠 IA Executora — Protocolo Neural
                </span>
              </div>

              <div className="p-4 space-y-4">
                {chatMensagens.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.2 }}
                    className={`flex ${msg.lado === 'usuario' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.lado === 'ia' && (
                      <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 mr-2"
                        style={{ background: 'rgba(0,212,255,0.15)', border: '1px solid rgba(0,212,255,0.3)' }}
                      >
                        🧠
                      </div>
                    )}
                    <div
                      className="max-w-xs rounded-2xl px-4 py-3"
                      style={{
                        background: msg.lado === 'usuario'
                          ? 'rgba(0,255,136,0.12)'
                          : 'rgba(26,26,46,0.8)',
                        border: `1px solid ${msg.lado === 'usuario' ? 'rgba(0,255,136,0.25)' : 'rgba(26,26,46,0.8)'}`,
                        borderRadius: msg.lado === 'usuario'
                          ? '16px 16px 4px 16px'
                          : '16px 16px 16px 4px',
                      }}
                    >
                      <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: '#e0e0e8' }}>
                        {msg.texto}
                      </p>
                      <p className="text-xs mt-1 text-right" style={{ color: '#a0a0b0', fontSize: '10px' }}>
                        {msg.tempo}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Input simulado */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                  style={{ background: 'rgba(26,26,46,0.5)', border: '1px solid rgba(0,212,255,0.15)' }}
                >
                  <span className="text-xs flex-1" style={{ color: '#a0a0b0' }}>Digite sua meta aqui...</span>
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #00ff88, #00d4ff)' }}
                  >
                    <span style={{ color: '#050510', fontSize: '12px', fontWeight: 900 }}>→</span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Badge protocolo neural */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="mt-4 p-4 rounded-xl text-center"
              style={{ background: 'rgba(0,212,255,0.04)', border: '1px solid rgba(0,212,255,0.2)' }}
            >
              <p className="text-xs font-black font-mono mb-1" style={{ color: '#00d4ff' }}>
                ⚡ PROTOCOLO NEURAL ATIVADO
              </p>
              <p className="text-xs" style={{ color: '#a0a0b0' }}>
                Otimizando caminhos neurais para máxima execução e redução de fricção cognitiva.
              </p>
              <div className="mt-3 h-1 rounded-full overflow-hidden" style={{ background: '#1a1a2e' }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #00d4ff, #a78bfa)' }}
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="mt-5 text-center"
            >
              <motion.a
                href="#preco"
                className="botao-coracao inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-base"
                style={{
                  background: 'linear-gradient(135deg, #00ff88, #00d4ff)',
                  color: '#050510',
                  textDecoration: 'none',
                  boxShadow: '0 0 30px rgba(0,255,136,0.3)',
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                🚀 Quero começar agora
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
