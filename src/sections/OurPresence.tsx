import { motion } from 'framer-motion'
import { MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import heroResidential from '../assets/Residential Construction.jpg'
import heroCommercial from '../assets/Commercial Projects.jpg'
import architecture from '../assets/Architecture.jpg'
import renovation from '../assets/Renovation.jpg'

const locations = [
  {
    name: 'Noida',
    description: 'Premium residential and commercial projects across multiple sectors',
    image: heroResidential,
    id: 'noida',
  },
  {
    name: 'Greater Noida',
    description: 'Large-scale township and villa community projects',
    image: architecture,
    id: 'greater-noida',
  },
  {
    name: 'South Delhi',
    description: 'Luxury villa and high-end residential developments',
    image: renovation,
    id: 'south-delhi',
  },
  {
    name: 'Faridabad',
    description: 'Strategic commercial and mixed-use developments',
    image: heroCommercial,
    id: 'faridabad',
  },
]

export default function OurPresence() {
  return (
    <section id="presence" className="section" style={{ background: '#080808', color: '#F5F5F5' }}>
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
                  borderRadius: 22,
                  overflow: 'hidden',
                  height: 320,
                  cursor: 'pointer',
                  boxShadow: '0 18px 42px rgba(17, 24, 39, 0.12)',
                  border: '1px solid rgba(212,175,55,0.28)',
                }}
              >
                <img
                  src={location.image}
                  alt={location.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.45s ease',
                  }}
                  loading="lazy"
                  className="location-image"
                />

                <div
                  className="location-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.28) 42%, rgba(0,0,0,0.68) 100%)',
                    transition: 'background 0.35s ease',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '38px 24px 30px',
                    color: '#fff',
                    textAlign: 'center',
                  }}
                >
                  <MapPin
                    size={36}
                    style={{
                      marginBottom: 20,
                      color: '#D4AF37',
                      filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.35))',
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
                      textShadow: '0 2px 8px rgba(0,0,0,0.45)',
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
                      textShadow: '0 2px 6px rgba(0,0,0,0.35)',
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

        .location-image {
          transition: transform 0.45s ease;
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

        @media (hover: hover) {
          #presence > .container-wide > div:last-child > div:hover .location-image {
            transform: scale(1.04);
          }

          #presence > .container-wide > div:last-child > div:hover .location-overlay {
            background: linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.3) 42%, rgba(0,0,0,0.75) 100%) !important;
          }
        }
      `}</style>
    </section>
  )
}
