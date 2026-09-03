import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { team } from '../data'

export default function Founder() {
  // Get founder image from team data
  const founder = team.find(m => m.role.includes('Founder')) || team[0]

  return (
    <section id="founder" className="section" style={{ background: '#fff', paddingTop: 72, paddingBottom: 72 }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          {/* Left: Founder Image */}
          <Reveal delay={0}>
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
              }}
            >
              <img
                src={founder.image}
                alt={founder.name}
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </motion.div>
          </Reveal>

          {/* Right: Content */}
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">FOUNDER'S MESSAGE</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 20, color: 'var(--heading)' }}>
                12+ Years of Trust in Real Estate
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: 'var(--text)' }}>
                For over 12 years, Destiny Buildwell has been a trusted name in the real estate industry, helping customers find the right property opportunities with confidence and peace of mind.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: 'var(--text)' }}>
                Our journey has been built on trust, transparency, professional guidance, and strong customer relationships. With more than a decade of experience, we understand the importance of making the right real estate decision—whether it is for investment, business, or securing a property for the future.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, marginBottom: 18, color: 'var(--text)' }}>
                At Destiny Buildwell, we believe every home, office, or investment decision should be backed by clarity, confidence, and expert support. We are committed to helping clients move forward with trust, transparency, and lasting value.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 12, marginTop: 18 }}>
                {['One of the Trusted Real Estate Companies', 'Professional Guidance', 'Own Office', 'Customer-Focused Real Estate Solutions'].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(31,93,134,0.04)', border: '1px solid var(--color-border)', borderRadius: 12, padding: '10px 12px', fontSize: '0.82rem', color: 'var(--color-dark-text)', fontWeight: 600 }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-primary)', display: 'block' }} />
                    {item}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--heading)', marginBottom: 4 }}>— Aditya Bhardwaj</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Founder, Destiny Buildwell</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          #founder > .container-wide {
            display: grid !important;
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
