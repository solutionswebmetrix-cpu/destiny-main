import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import aboutImage from '../assets/Architecture.jpg'

const stats = [
  { value: '22+', label: 'Years of Market Expertise' },
  { value: '1,200+', label: 'Happy Investors' },
  { value: '18', label: 'Premium Real Estate Projects' },
  { value: '4.8/5', label: 'End-to-End Assistance' },
]

const achievements = [
  'RERA registered & government approved',
  'ISO 9001 certified construction processes',
  'Best Villa Project award 2024',
  'On-time delivery for 95% of projects',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-wide about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <Reveal>
          <div style={{ position: 'relative' }}>
            <motion.img
              src={aboutImage}
              alt="About Destiny Buildwell"
              style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{
                position: 'absolute', bottom: -28, left: -28, background: '#151515',
                borderRadius: 'var(--radius-lg)', padding: '24px 28px', boxShadow: 'var(--shadow-lg)',
                border: '1px solid var(--color-border)',
              }}
              className="about-badge"
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', color: 'var(--color-primary)', fontWeight: 700, lineHeight: 1 }}>22+</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 4 }}>Years Building Trust</div>
            </motion.div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="eyebrow">About Us</span>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)', marginBottom: 18 }}>
            Crafting Spaces Where Destinies Are Built
          </h2>
          <p className="muted" style={{ marginBottom: 18, fontSize: '1rem' }}>
            For over 16 years, Destiny Buildwell has been a trusted name in the real estate industry, helping customers find the right property opportunities with confidence and peace of mind.
          </p>
          <p className="muted" style={{ marginBottom: 28, fontSize: '1rem' }}>
            From luxury villas to landmark commercial towers, every project reflects our commitment to
            thoughtful architecture, sustainable practices and a customer-first approach.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 28 }}>
            {achievements.map((a) => (
              <div key={a} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: '0.86rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0, marginTop: 1 }} />
                <span>{a}</span>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/projects" className="btn btn-primary" style={{ gap: 8 }}>Our Projects <ArrowRight size={17} /></Link>
            <Link to="/contact" className="btn btn-outline">Get in Touch</Link>
          </div>
        </Reveal>
      </div>

      {/* Stats */}
      <Reveal delay={0.2}>
        <div className="container-wide" style={{ marginTop: 80 }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 24,
            background: 'var(--color-primary)', borderRadius: 'var(--radius-xl)', padding: '40px 32px',
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', color: '#fff' }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2.4rem', fontWeight: 700, lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: '0.84rem', opacity: 0.85, marginTop: 6 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Mission & Vision */}
      <div className="container-wide mv-grid" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        <Reveal>
          <div className="card" style={{ padding: 36 }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: 12 }}>Mission</h3>
            <p className="muted" style={{ fontSize: '0.95rem' }}>
              To redefine trust in real estate through research-driven advisory, transparent practices, and future-ready developments.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card" style={{ padding: 36 }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: 12 }}>Vision</h3>
            <p className="muted" style={{ fontSize: '0.95rem' }}>
              To become India's No.1 real estate investment and development brand, setting the benchmark in trust, transparency, innovation, and conscious wealth creation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
