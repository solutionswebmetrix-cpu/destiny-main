import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { whyChooseUs } from '../data'

export default function WhyChooseUs() {
  return (
    <section id="why" className="section why-section">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Our Difference</span>
            <h2 className="section-title why-title">What Makes Us Better</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We stand apart through our unwavering commitment to quality, transparency, and client success at every stage of your real estate journey.
            </p>
          </div>
        </Reveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 28,
        }}>
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{
                  padding: 32,
                  textAlign: 'center',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 'var(--radius-md)',
                  background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent-gold))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  marginBottom: 20,
                }}>
                  <w.icon size={28} />
                </div>
                <h3 style={{
                  fontSize: '1.2rem',
                  marginBottom: 12,
                  color: 'var(--heading)',
                }}>
                  {w.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                  color: 'var(--text-muted)',
                }}>
                  {w.description}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #why > .container-wide > div:nth-child(2) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          #why > .container-wide > div:nth-child(2) {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          #why .card {
            padding: 24px !important;
          }

          #why .card h3 {
            font-size: 1.05rem !important;
          }
        }
      `}</style>
    </section>
  )
}
