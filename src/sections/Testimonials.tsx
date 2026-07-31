import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { testimonials } from '../data'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = testimonials.length

  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i - 1 + count) % count)

  return (
    <section id="testimonials" className="section">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span className="eyebrow">Client Testimonials</span>
            <h2 className="section-title">What Our Families Say</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Real stories from real homeowners and investors who trusted Destiny Buildwell with their dreams.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
                className="card"
                style={{ padding: '44px 40px', textAlign: 'center' }}
              >
                <Quote size={40} style={{ color: 'var(--color-light-blue)', opacity: 0.4, margin: '0 auto 20px' }} />
                <div style={{ display: 'flex', justifyContent: 'center', gap: 3, marginBottom: 18 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill={i < testimonials[index].rating ? 'var(--color-primary)' : 'none'} color={i < testimonials[index].rating ? 'var(--color-primary)' : 'var(--color-border)'} />
                  ))}
                </div>
                <p style={{ fontSize: '1.08rem', lineHeight: 1.8, color: 'var(--color-dark-text)', marginBottom: 26, fontStyle: 'italic' }}>
                  "{testimonials[index].text}"
                </p>
                <div>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary)', fontWeight: 600 }}>{testimonials[index].name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>{testimonials[index].role} • {testimonials[index].location}</div>
                </div>
              </motion.div>
            </AnimatePresence>

            <button onClick={prev} aria-label="Previous" style={{ position: 'absolute', left: -12, top: '50%', transform: 'translateY(-50%)', width: 46, height: 46, borderRadius: '50%', background: '#fff', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', zIndex: 2 }} className="slider-arrow">
              <ChevronLeft size={22} />
            </button>
            <button onClick={next} aria-label="Next" style={{ position: 'absolute', right: -12, top: '50%', transform: 'translateY(-50%)', width: 46, height: 46, borderRadius: '50%', background: '#fff', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', zIndex: 2 }} className="slider-arrow">
              <ChevronRight size={22} />
            </button>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 28 }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Testimonial ${i + 1}`} style={{
                  width: i === index ? 28 : 8, height: 8, borderRadius: 999,
                  background: i === index ? 'var(--color-primary)' : 'var(--color-border)', transition: 'all 0.3s ease',
                }} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
