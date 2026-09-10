import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, MapPin, Zap } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects } from '../data'

// Define residential project statuses
const residentialStatuses = {
  'new-launch': { label: 'New Launch', color: '#FF6B35' },
  'under-construction': { label: 'Under Construction', color: '#F7931E' },
  'possession': { label: 'Possession Soon', color: '#4CAF50' },
  'ready-to-move': { label: 'Ready To Move', color: '#D4AF37' },
  'pre-launch': { label: 'Pre Launch', color: '#9C27B0' },
}

const residentialCategories = [
  { key: 'new-launch', label: 'New Launch' },
  { key: 'under-construction', label: 'Under Construction' },
  { key: 'possession', label: 'Possession Soon' },
  { key: 'ready-to-move', label: 'Ready To Move' },
  { key: 'pre-launch', label: 'Pre Launch' },
]

// Map projects to residential categories (for demo, we'll use project status)
const getResidentialCategory = (project: any): string | null => {
  const status = project.status?.toLowerCase() || ''
  if (status.includes('new launch')) return 'new-launch'
  if (status.includes('under construction')) return 'under-construction'
  if (status.includes('possession')) return 'possession'
  if (status.includes('ready')) return 'ready-to-move'
  if (status.includes('upcoming') || status.includes('launching')) return 'pre-launch'
  return null
}

export default function ResidentialProjects() {
  const [activeCategory, setActiveCategory] = useState('new-launch')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Filter residential projects (exclude only commercial projects)
  const residentialProjects = projects.filter((p) => {
    // Exclude purely commercial projects
    if (p.name.toLowerCase().includes('meridian')) return false
    // Include all other projects that have a valid residential category
    return getResidentialCategory(p) !== null
  })

  const filteredProjects = residentialProjects.filter(
    (p) => getResidentialCategory(p) === activeCategory
  )

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const cardWidth = 350 // Approximate width of each card + gap
    const scrollAmount = cardWidth

    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }

    setTimeout(() => updateArrows(), 300)
  }

  const updateArrows = () => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    setShowLeftArrow(container.scrollLeft > 0)
    setShowRightArrow(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    )
  }

  return (
    <section id="residential-projects" className="section" style={{ background: '#080808' }}>
      <div className="container-wide">
        {/* Section Header */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <span className="eyebrow">Handpicked Portfolio</span>
            <h2 className="section-title">Projects Residential</h2>
            <div className="divider" />
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.1}>
          <div style={{
            display: 'flex',
            gap: 12,
            marginBottom: 32,
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            {residentialCategories.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => {
                  setActiveCategory(cat.key)
                  setScrollPosition(0)
                }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '10px 20px',
                  borderRadius: 999,
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  background: activeCategory === cat.key
                    ? 'var(--color-primary)'
                    : '#151515',
                  color: activeCategory === cat.key ? '#fff' : 'var(--text)',
                }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Projects Carousel */}
        <Reveal delay={0.15}>
          {filteredProjects.length > 0 ? (
            <div style={{ position: 'relative' }}>
              {/* Scroll Container */}
              <div
                ref={scrollContainerRef}
                onScroll={updateArrows}
                style={{
                  display: 'flex',
                  gap: 28,
                  overflowX: 'auto',
                  scrollBehavior: 'smooth',
                  paddingBottom: 8,
                  scrollbarWidth: 'none',
                }}
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      flex: '0 0 350px',
                      borderRadius: 'var(--radius-lg)',
                      overflow: 'hidden',
                      background: '#151515',
                      boxShadow: 'var(--shadow-sm)',
                      border: '1px solid var(--color-border)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {/* Project Image */}
                    <div style={{ position: 'relative', height: 240 }}>
                      <img
                        src={project.image}
                        alt={project.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                        }}
                        loading="lazy"
                      />
                      {/* Status Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 12,
                          right: 12,
                          background: residentialStatuses[getResidentialCategory(project) as keyof typeof residentialStatuses]?.color || '#666',
                          color: '#fff',
                          padding: '6px 12px',
                          borderRadius: 6,
                          fontSize: '0.75rem',
                          fontWeight: 600,
                        }}
                      >
                        {residentialStatuses[getResidentialCategory(project) as keyof typeof residentialStatuses]?.label}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div style={{ padding: 24 }}>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: 10, color: 'var(--heading)' }}>
                        {project.name}
                      </h3>
                      <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <MapPin size={16} />
                        {project.location}
                      </div>
                      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text)', marginBottom: 20 }}>
                        {project.short}
                      </p>
                      <Link
                        to={`/projects/${project.id}`}
                        className="btn btn-outline"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        View Details
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Scroll Arrows */}
              {filteredProjects.length > 3 && (
                <>
                  {showLeftArrow && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        position: 'absolute',
                        left: -20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        border: 'none',
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxShadow: 'var(--shadow-md)',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => handleScroll('left')}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft size={20} />
                    </motion.button>
                  )}
                  {showRightArrow && (
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        position: 'absolute',
                        right: -20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        border: 'none',
                        width: 44,
                        height: 44,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxShadow: 'var(--shadow-md)',
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => handleScroll('right')}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight size={20} />
                    </motion.button>
                  )}
                </>
              )}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              padding: 60,
              background: '#151515',
              borderRadius: 'var(--radius-lg)',
            }}>
              <Zap size={48} style={{ margin: '0 auto 16px', opacity: 0.4 }} />
              <h3 style={{ marginBottom: 8, color: 'var(--text)' }}>Coming Soon</h3>
              <p style={{ color: 'var(--text-muted)' }}>
                Premium residential projects launching soon. Check back later for updates.
              </p>
            </div>
          )}
        </Reveal>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 1024px) {
          #residential-projects .container-wide > div:nth-child(3) {
            margin-left: -24px;
            margin-right: -24px;
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (max-width: 768px) {
          #residential-projects .container-wide > div:nth-child(2) {
            flex-wrap: wrap;
            gap: 10px;
          }

          #residential-projects .container-wide > div:nth-child(2) button {
            padding: 8px 16px !important;
            font-size: 0.85rem !important;
          }

          #residential-projects > .container-wide > div:nth-child(3) > div:first-child > div:first-child {
            scroll-snap-type: x mandatory;
          }

          #residential-projects > .container-wide > div:nth-child(3) > div:first-child > div:first-child > div {
            scroll-snap-align: start;
            flex: 0 0 85vw !important;
          }
        }

        /* Hide scrollbar */
        #residential-projects div[ref] {
          -ms-overflow-style: none;
        }

        #residential-projects div[ref]::-webkit-scrollbar {
          display: none;
        }

        @media (hover: hover) {
          #residential-projects > .container-wide > div:nth-child(3) > div:first-child > div:first-child > div img {
            transition: transform 0.4s ease;
          }

          #residential-projects > .container-wide > div:nth-child(3) > div:first-child > div:first-child > div:hover img {
            transform: scale(1.06);
          }
        }
      `}</style>
    </section>
  )
}
