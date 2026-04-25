import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'

const perguntas = [
  {
    p: 'Isso é só mais um app de tarefas?',
    r: 'Não. Esse sistema não serve apenas para organizar tarefas — ele transforma seus objetivos em um plano real de execução e acompanha sua evolução com base no que você realmente faz.',
  },
  {
    p: 'Eu preciso saber me organizar para usar?',
    r: 'Não. O sistema foi feito justamente para quem tem dificuldade em se organizar. Ele te guia passo a passo e faz a maior parte do trabalho por você.',
  },
  {
    p: 'Como o sistema cria minhas tarefas?',
    r: 'Você pode escolher: criar manualmente ou deixar que a IA monte tudo para você com base na sua meta, prazo e disponibilidade.',
  },
  {
    p: 'Funciona para qualquer tipo de meta?',
    r: 'Sim. Seja financeiro, profissional, estudos, saúde ou rotina pessoal, o sistema adapta tudo para a sua realidade.',
  },
  {
    p: 'Eu posso usar no meu dia a dia normalmente?',
    r: 'Sim. Além das metas, você também pode adicionar tarefas comuns, e o sistema organiza tudo de forma inteligente.',
  },
  {
    p: 'O sistema organiza minha agenda sozinho?',
    r: 'Sim. Você pode adicionar todas as tarefas automaticamente na agenda, e ele distribui tudo de forma equilibrada ao longo do seu tempo disponível.',
  },
  {
    p: 'Preciso usar todos os dias?',
    r: 'Sim, e isso é parte do que faz o sistema funcionar. Ele foi feito para criar consistência, não uso ocasional.',
  },
  {
    p: 'Isso realmente funciona para quem procrastina muito?',
    r: 'Sim. O sistema foi criado justamente para quem sabe o que precisa fazer, mas não consegue executar com consistência.',
  },
  {
    p: 'O que acontece quando eu atinjo uma meta?',
    r: 'Você evolui no sistema, ganha suas recompensas e pode definir novas metas, criando um ciclo contínuo de progresso.',
  },
]

export default function FAQSection() {
  const [aberto, setAberto] = useState<number | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="suporte"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #050510 100%)', width: '100%' }}
    >
      <div className="absolute inset-0 grade-pontos opacity-30 pointer-events-none" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 'min(400px, 60vw)',
          height: '250px',
          background: 'radial-gradient(ellipse, rgba(0,255,136,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              ❓ PERGUNTAS FREQUENTES
            </span>
          </motion.div>

          <h2
            className="font-black"
            style={{ fontSize: 'clamp(1.7rem, 4.5vw, 3rem)', color: '#ffffff' }}
          >
            Dúvidas?
          </h2>
        </motion.div>

        <div className="space-y-3">
          {perguntas.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(15,15,26,0.9)',
                border: `1px solid ${aberto === i ? 'rgba(0,255,136,0.4)' : '#1a1a2e'}`,
                transition: 'border-color 0.3s',
              }}
            >
              <button
                className="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left gap-4"
                onClick={() => setAberto(aberto === i ? null : i)}
              >
                <div className="flex items-center gap-3">
                  {aberto === i && (
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: '#00ff88', boxShadow: '0 0 8px #00ff88' }}
                    />
                  )}
                  <span
                    className="font-semibold text-sm leading-snug"
                    style={{ color: aberto === i ? '#00ff88' : '#ffffff' }}
                  >
                    {faq.p}
                  </span>
                </div>
                <motion.div
                  animate={{ rotate: aberto === i ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0"
                  style={{ color: aberto === i ? '#00ff88' : '#a0a0b0' }}
                >
                  <ChevronDown size={18} />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {aberto === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div
                      className="px-5 sm:px-6 pb-5"
                      style={{ borderTop: '1px solid rgba(0,255,136,0.1)' }}
                    >
                      <p className="text-sm leading-relaxed pt-4" style={{ color: '#a0a0b0' }}>
                        {faq.r}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
