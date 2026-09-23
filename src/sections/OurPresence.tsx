import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Reveal from '../components/Reveal'

const locations = [
  {
    name: 'Noida',
    description: 'Premium residential and commercial projects across multiple sectors',
    id: 'noida',
  },
  {
    name: 'Greater Noida',
    description: 'Large-scale township and villa community projects',
    id: 'greater-noida',
  },
  {
    name: 'South Delhi',
    description: 'Luxury villa and high-end residential developments',
    id: 'south-delhi',
  },
  {
    name: 'Faridabad',
    description: 'Strategic commercial and mixed-use developments',
    id: 'faridabad',
  },
]

export default function OurPresence() {
  return (
    <section id="presence" className="section" style={{ background: '#080808', color: '#F5F5F5' }}>
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <span className="eyebrow">Our Presence</span>
            <h2 className="section-title" style={{ color: '#D4AF37' }}>Our Presence</h2>
            <div className="divider" />
            <p className="section-subtitle">
              Destiny Buildwell serves premium real estate markets across key NCR locations with a strong presence in Noida, Greater Noida, South Delhi and Faridabad. JAYPEE is a featured project by Destiny Buildwell.
            </p>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, minmax(0, 1fr))', gap: 24 }}>
          {locations.map((location, index) => (
            <Reveal key={location.id} delay={index * 0.08}>
              <motion.div
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="location-card"
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '38px 24px 30px',
                  background: '#0B0B0B',
                  borderRadius: 22,
                  height: 320,
                  cursor: 'pointer',
                  boxShadow: '0 18px 42px rgba(0, 0, 0, 0.24)',
                  border: '1px solid rgba(212,175,55,0.4)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  <MapPin
                    size={36}
                    style={{
                      marginBottom: 20,
                      color: '#D4AF37',
                    }}
                  />
                  <h3
                    style={{
                      fontSize: 'clamp(1.7rem, 2vw, 2.2rem)',
                      lineHeight: 1.08,
                      fontWeight: 600,
                      margin: '0 0 12px',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {location.name}
                  </h3>
                  <p
                    style={{
                      maxWidth: '86%',
                      margin: 0,
                      fontSize: '0.9rem',
                      lineHeight: 1.5,
                      color: '#FFFFFF',
                      opacity: 0.96,
                    }}
                  >
                    {location.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .location-card {
          border-radius: 22px;
        }

        @media (max-width: 1024px) {
          #presence > .container-wide > div:last-child {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 768px) {
          #presence > .container-wide > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }

          .location-card {
            height: 280px !important;
            border-radius: 18px !important;
          }
        }

      `}</style>
    </section>
  )
}
