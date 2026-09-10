import { motion } from 'framer-motion'
import { Linkedin, Twitter } from 'lucide-react'
import Reveal from '../components/Reveal'
import { team } from '../data'

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Leadership Team</span>
            <h2 className="section-title">The People Behind Destiny Buildwell</h2>
            <div className="divider" />
            <p className="section-subtitle">
              A team of seasoned professionals leading with experience, integrity and a shared vision for excellence.
            </p>
          </div>
        </Reveal>

        <div className="leadership-grid">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{ overflow: 'hidden', height: '100%' }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 18 }}>
                  <motion.img
                    src={m.image} alt={m.name}
                    style={{ width: 120, height: 120, borderRadius: '50%', objectFit: 'cover', border: '4px solid rgba(255,255,255,0.92)' }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                </div>
                <div style={{ padding: '22px 22px 26px' }}>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: 4 }}>{m.name}</h3>
                  <div style={{ color: 'var(--color-secondary)', fontSize: '0.82rem', fontWeight: 500, marginBottom: 12 }}>{m.role}</div>
                  {m.bio ? (
                    <p className="muted" style={{ fontSize: '0.84rem', lineHeight: 1.7 }}>{m.bio}</p>
                  ) : null}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
