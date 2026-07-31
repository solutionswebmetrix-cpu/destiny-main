import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { whyChooseUs } from '../data'

export default function WhyChooseUs() {
  return (
    <section id="why" className="section section-alt">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="section-title">The Destiny Buildwell Difference</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Six commitments that have earned us the trust of over 1,200 families and counting.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 26 }}>
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{ padding: 32, display: 'flex', gap: 18, alignItems: 'flex-start', height: '100%' }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{
                    width: 56, height: 56, borderRadius: '50%', flexShrink: 0,
                    background: 'var(--color-light-grey)', border: '1.5px solid var(--color-light-blue)',
                    display: 'grid', placeItems: 'center', color: 'var(--color-primary)',
                  }}
                >
                  <w.icon size={24} />
                </motion.div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: 8 }}>{w.title}</h3>
                  <p className="muted" style={{ fontSize: '0.86rem', lineHeight: 1.7 }}>{w.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
