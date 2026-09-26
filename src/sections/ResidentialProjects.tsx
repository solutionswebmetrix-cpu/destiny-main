import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Zap } from 'lucide-react'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects, type Project } from '../data'

const residentialCategories = [
  { key: 'new-launch', label: 'New Launch' },
  { key: 'under-construction', label: 'Under Construction' },
  { key: 'possession', label: 'Possession Soon' },
  { key: 'ready-to-move', label: 'Ready To Move' },
  { key: 'pre-launch', label: 'Pre Launch' },
  { key: 'status-not-specified', label: 'Status not specified' },
]

// Map projects to residential categories (for demo, we'll use project status)
const getResidentialCategory = (project: Project): string | null => {
  const status = project.status?.toLowerCase() || ''
  if (status.includes('new launch')) return 'new-launch'
  if (status.includes('under construction')) return 'under-construction'
  if (status.includes('possession')) return 'possession'
  if (status.includes('ready')) return 'ready-to-move'
  if (status.includes('status not specified')) return 'status-not-specified'
  if (status.includes('upcoming') || status.includes('launching')) return 'pre-launch'
  return null
}

export default function ResidentialProjects() {
  const [activeCategory, setActiveCategory] = useState('new-launch')
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const residentialProjects = projects.filter((project) => project.type === 'Residential')

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
                            {filteredProjects.map((project, index) => (
                              <div key={project.id} style={{ flex: '0 0 min(350px, 86vw)' }}>
                                <ProjectCard project={project} delay={index * 0.07} />
                              </div>
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
