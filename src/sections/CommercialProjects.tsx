import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Building2, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'

const commercialCategories = [
  { key: 'new-launch', label: 'New Launch' },
  { key: 'under-construction', label: 'Under Construction' },
  { key: 'possession', label: 'Possession Soon' },
  { key: 'ready-to-move', label: 'Ready To Move' },
  { key: 'pre-launch', label: 'Pre Launch' },
]

export default function CommercialProjects() {
  return (
    <section id="commercial-projects" className="section" style={{ background: '#080808' }}>
      <div className="container-wide">
        {/* Section Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Handpicked Portfolio</span>
            <h2 className="section-title">Projects Commercial</h2>
            <div className="divider" />
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.1}>
          <div style={{
            display: 'flex',
            gap: 12,
            marginBottom: 48,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {commercialCategories.map((cat) => (
              <motion.button
                key={cat.key}
                disabled
                style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'default',
                  background: '#e0e0e0',
                  color: '#999',
                  opacity: 0.6,
                }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Coming Soon State */}
        <Reveal delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: '#151515',
              borderRadius: 'var(--radius-lg)',
              padding: '80px 40px',
              textAlign: 'center',
              border: '2px dashed var(--color-border)',
            }}
          >
            <div style={{
              width: 80,
              height: 80,
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent-gold))',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <Building2 size={40} style={{ color: '#fff' }} />
            </div>

            <h3 style={{
              fontSize: '1.8rem',
              marginBottom: 12,
              color: 'var(--heading)',
              fontFamily: 'var(--font-heading)',
            }}>
              Coming Soon
            </h3>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              maxWidth: 580,
              margin: '0 auto 12px',
              lineHeight: 1.7,
            }}>
              Premium commercial opportunities are currently being curated by our development team. We're crafting world-class office spaces, retail frontages, and mixed-use landmarks for Destiny Buildwell.
            </p>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              maxWidth: 580,
              margin: '0 auto 32px',
              lineHeight: 1.6,
            }}>
              Stay connected with us to be among the first to know about these exclusive commercial launches.
            </p>

            <div style={{
              display: 'flex',
              gap: 16,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <Link
                to="/contact"
                className="btn btn-primary"
                style={{ gap: 8 }}
              >
                Notify Me <ChevronRight size={17} />
              </Link>
              <Link
                to="/contact"
                className="btn btn-outline"
                style={{ gap: 8 }}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          #commercial-projects .container-wide > div:nth-child(2) {
            flex-wrap: wrap;
            gap: 10px;
          }

          #commercial-projects .container-wide > div:nth-child(2) button {
            padding: 8px 16px !important;
            font-size: 0.85rem !important;
          }

          #commercial-projects > .container-wide > div:nth-child(3) {
            padding: 60px 24px !important;
          }

          #commercial-projects > .container-wide > div:nth-child(3) h3 {
            font-size: 1.5rem !important;
          }

          #commercial-projects > .container-wide > div:nth-child(3) > div:nth-child(1) {
            width: 60px !important;
            height: 60px !important;
          }

          #commercial-projects > .container-wide > div:nth-child(3) > div:nth-child(1) svg {
            width: 30px !important;
            height: 30px !important;
          }

          #commercial-projects > .container-wide > div:nth-child(3) > div:nth-child(5) {
            flex-direction: column !important;
          }

          #commercial-projects > .container-wide > div:nth-child(3) > div:nth-child(5) > a {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}
