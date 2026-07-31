import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import Reveal from '../components/Reveal'
import { faqs } from '../data'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="section">
      <div className="container-wide" style={{ maxWidth: 820 }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Questions, Answered</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Everything you need to know before booking your home with Destiny Buildwell.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {faqs.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="card" style={{ overflow: 'hidden' }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center', textAlign: 'left', background: 'transparent',
                  }}
                >
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--color-primary)', paddingRight: 16 }}>{f.question}</span>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: open === i ? 'var(--color-primary)' : 'var(--color-light-grey)', color: open === i ? '#fff' : 'var(--color-primary)', display: 'grid', placeItems: 'center' }}>
                    {open === i ? <Minus size={18} /> : <Plus size={18} />}
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="muted" style={{ padding: '0 24px 22px', fontSize: '0.92rem', lineHeight: 1.8 }}>{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
