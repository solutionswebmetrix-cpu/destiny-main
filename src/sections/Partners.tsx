import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'

// All 11 Destiny Buildwell Partners in exact order
const partners = [
  { id: 1, name: 'Bhutani' },
  { id: 2, name: 'Mahagun' },
  { id: 3, name: 'Godrej' },
  { id: 4, name: 'Omaxe' },
  { id: 5, name: 'Tata Value Homes' },
  { id: 6, name: 'Paras' },
  { id: 7, name: 'DLF Building' },
  { id: 8, name: 'ABA Corp' },
  { id: 9, name: 'Eldeco Live Green' },
  { id: 10, name: 'Prateek Group' },
  { id: 11, name: 'M3M' },
]

// Generate SVG logo placeholder with partner name
const generatePartnerLogo = (name: string, id: number) => {
  const colors = ['#1F5D86', '#2D6F98', '#4F8FBC', '#21658F', '#1A4D6D']
  const color = colors[id % colors.length]
  
  // Extract initials from partner name
  const initials = name
    .split(' ')
    .map(word => word[0])
    .join('')
    .substring(0, 3)
    .toUpperCase()

  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
      <defs>
        <style>
          .logo-text { font-family: 'Playfair Display', serif; font-weight: 700; }
          .logo-name { font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 600; }
        </style>
      </defs>
      <rect width='200' height='200' fill='${color}' rx='8'/>
      <text class='logo-text' x='100' y='85' font-size='48' fill='white' text-anchor='middle' dominant-baseline='middle'>
        ${initials}
      </text>
      <text class='logo-name' x='100' y='130' fill='white' text-anchor='middle' dominant-baseline='middle'>
        ${name.substring(0, 10)}
      </text>
    </svg>
  `)}`
}

export default function Partners() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(5)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerView(5)
      } else if (window.innerWidth >= 1024) {
        setItemsPerView(4)
      } else if (window.innerWidth >= 768) {
        setItemsPerView(3)
      } else if (window.innerWidth >= 560) {
        setItemsPerView(2)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    const startAutoplay = () => {
      autoplayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % (partners.length - itemsPerView + 1))
      }, 5000)
    }

    startAutoplay()

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [itemsPerView])

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)
  }

  const handleMouseLeave = () => {
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (partners.length - itemsPerView + 1))
    }, 5000)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + partners.length) % (partners.length - itemsPerView + 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (partners.length - itemsPerView + 1))
  }

  const maxIndex = Math.max(0, partners.length - itemsPerView)

  return (
    <section id="partners" className="section" style={{ background: '#ffffff' }}>
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="eyebrow">Trusted Partners</span>
            <h2 className="section-title">Our Partners</h2>
            <div className="divider" />
            <p className="section-subtitle">
              We collaborate with India's leading builders and developers to deliver exceptional real estate projects.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            ref={carouselRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              overflow: 'hidden',
              marginBottom: 48,
            }}
          >
            {/* Carousel Container */}
            <div
              style={{
                display: 'flex',
                gap: 24,
                transition: 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)',
                transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)`,
              }}
            >
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index % itemsPerView) * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  style={{
                    flex: `0 0 ${100 / itemsPerView}%`,
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      background: '#f7f7f7',
                      borderRadius: '12px',
                      padding: 20,
                      textAlign: 'center',
                      border: '1px solid #e5e5e5',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 16px rgba(31, 93, 134, 0.12)'
                      ;(e.currentTarget as HTMLDivElement).style.borderColor = '#1F5D86'
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)'
                      ;(e.currentTarget as HTMLDivElement).style.borderColor = '#e5e5e5'
                    }}
                  >
                    <img
                      src={generatePartnerLogo(partner.name, partner.id)}
                      alt={partner.name}
                      style={{
                        width: '120px',
                        height: '120px',
                        objectFit: 'contain',
                        marginBottom: 16,
                      }}
                      loading="lazy"
                    />
                    <p
                      style={{
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        color: '#1F5D86',
                        margin: 0,
                        fontFamily: 'Poppins, sans-serif',
                      }}
                    >
                      {partner.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {maxIndex > 0 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#2D6F98' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePrev}
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: '#1F5D86',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                  aria-label="Previous partners"
                >
                  <ChevronLeft size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: '#2D6F98' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNext}
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: '#1F5D86',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                  }}
                  aria-label="Next partners"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </>
            )}
          </div>

          {/* Carousel Indicators */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
              marginBottom: 24,
            }}
          >
            {Array.from({ length: Math.max(1, partners.length - itemsPerView + 1) }).map(
              (_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    width: currentIndex === index ? 28 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: currentIndex === index ? '#1F5D86' : '#d0d0d0',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </Reveal>

        {/* Info Text */}
        <Reveal delay={0.2}>
          <div
            style={{
              textAlign: 'center',
              padding: '24px 0',
              borderTop: '1px solid #e5e5e5',
            }}
          >
            <p
              style={{
                color: '#666',
                fontSize: '0.95rem',
                margin: 0,
                lineHeight: 1.6,
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              Destiny Buildwell proudly partners with India's most trusted builders and developers.
              <br />
              Scroll to explore all our partners.
            </p>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 560px) {
          #partners {
            padding: 48px 16px !important;
          }

          #partners .section-title {
            font-size: 28px !important;
          }

          #partners .section-subtitle {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  )
}
