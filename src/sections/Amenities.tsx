import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import { amenities } from '../data'

export default function Amenities() {
  return (
    <section id="amenities" className="section section-alt">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">World-Class Amenities</span>
            <h2 className="section-title">Lifestyle Beyond Four Walls</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Every Destiny Buildwell community is designed with curated amenities that elevate everyday living.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 22 }}>
          {amenities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{ padding: '30px 20px', textAlign: 'center', height: '100%' }}
              >
                <motion.div
                  whileHover={{ scale: 1.12, y: -3 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: 72, height: 72, borderRadius: '50%', margin: '0 auto 18px',
                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-light-blue))',
                    display: 'grid', placeItems: 'center', color: '#fff',
                  }}
                >
                  <a.icon size={30} />
                </motion.div>
                <h3 style={{ fontSize: '1rem', marginBottom: 0 }}>{a.title}</h3>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
