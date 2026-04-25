import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const problemas = [
  {
    icone: '🧭',
    titulo: 'Falta direcionamento',
    desc: 'Energia desperdiçada em qualquer coisa, menos nos seus objetivos reais.',
    cor: '#ff3c50',
    tag: 'ERRO 001',
  },
  {
    icone: '⚠️',
    titulo: 'Sem controle real',
    desc: 'Tarefas acumulam, esquece de fazer, metas evaporam, e o ciclo de culpa bate toda noite.',
    cor: '#f59e0b',
    tag: 'ERRO 002',
  },
  {
    icone: '🔒',
    titulo: 'Você vira refém',
    desc: 'Atividades que não constroem hábitos, identidade ou resultados tangíveis.',
    cor: '#a78bfa',
    tag: 'ERRO 003',
  },
]

export default function ProblemSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #060010 100%)', width: '100%' }}
    >
      {/* Fundo de pontos */}
      <div className="absolute inset-0 grade-pontos opacity-40 pointer-events-none" />

      {/* Brilho vermelho */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(500px, 80vw)',
          height: '300px',
          background: 'radial-gradient(ellipse, rgba(255,60,80,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Barra de topo animada */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #ff3c50, #f59e0b, transparent)' }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título estilo "GAME OVER" */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Badge Game Over estilo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6"
            style={{
              background: 'rgba(255,60,80,0.1)',
              border: '2px solid rgba(255,60,80,0.4)',
              boxShadow: '0 0 20px rgba(255,60,80,0.15)',
            }}
          >
            <span className="text-xs font-black tracking-widest font-mono" style={{ color: '#ff3c50' }}>
              ⚠ PROBLEMA DETECTADO
            </span>
          </motion.div>

          <h2
            className="font-black mb-5"
            style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3.2rem)', color: '#ffffff', lineHeight: 1.15 }}
          >
            Subiu de nível?{' '}
            <span style={{ color: '#ff3c50' }}>
              Mas quando a tela desliga
            </span>
            <br />não tem nada.
          </h2>

          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#a0a0b0' }}>
            Ninguém é contra a diversão. O problema é quando ela vira escape da realidade.
            Você gasta horas em jogos, redes ou distrações vazias porque:
          </p>
        </motion.div>

        {/* Cards de erros estilo terminal de jogo */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {problemas.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative rounded-2xl p-6 group cursor-default"
              style={{
                background: 'rgba(15,5,5,0.9)',
                border: '1px solid rgba(255,60,80,0.15)',
                backdropFilter: 'blur(20px)',
              }}
              whileHover={{
                y: -6,
                borderColor: p.cor,
                boxShadow: `0 20px 50px rgba(${p.cor === '#ff3c50' ? '255,60,80' : p.cor === '#f59e0b' ? '245,158,11' : '167,139,250'},0.15)`,
              }}
            >
              {/* Linha de topo */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${p.cor}, transparent)` }}
              />

              {/* Tag erro */}
              <div
                className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-mono font-black mb-4"
                style={{
                  background: `rgba(${p.cor === '#ff3c50' ? '255,60,80' : p.cor === '#f59e0b' ? '245,158,11' : '167,139,250'},0.1)`,
                  color: p.cor,
                  letterSpacing: '0.08em',
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: p.cor }} />
                {p.tag}
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{p.icone}</span>
                <h3 className="font-black text-base" style={{ color: '#ffffff' }}>{p.titulo}</h3>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#a0a0b0' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Caixa de conclusão estilo alerta de jogo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="relative rounded-2xl p-7 sm:p-8 text-center overflow-hidden"
          style={{
            background: 'rgba(0,255,136,0.03)',
            border: '1px solid rgba(0,255,136,0.18)',
          }}
        >
          {/* Canto decorativo */}
          {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
            <div
              key={i}
              className={`absolute w-4 h-4 ${pos}`}
              style={{
                borderTop: i < 2 ? '2px solid #00ff88' : undefined,
                borderBottom: i >= 2 ? '2px solid #00ff88' : undefined,
                borderLeft: i % 2 === 0 ? '2px solid #00ff88' : undefined,
                borderRight: i % 2 === 1 ? '2px solid #00ff88' : undefined,
                opacity: 0.5,
              }}
            />
          ))}

          <p className="text-base sm:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            <span style={{ color: '#ff3c50', fontWeight: 900 }}>Resultado?</span>{' '}
            Vida estagnada, sonhos adiados, sua melhor versão travada.{' '}
            <br className="hidden sm:block" />
            E se, em vez de fugir, você{' '}
            <span style={{ color: '#00ff88', fontWeight: 900 }}>transformasse sua realidade em um jogo?</span>{' '}
            Direcione essa força para conquistas reais, com pontos, níveis e recompensas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
