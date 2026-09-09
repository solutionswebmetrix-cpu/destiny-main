import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { galleryImages } from '../data'

const categories = ['All', 'Exterior', 'Interior', 'Construction', 'Drone']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const list = active === 'All' ? galleryImages : galleryImages.filter((g) => g.category === active)
  const lightboxItem = lightboxIndex !== null ? list[lightboxIndex] : null

  useEffect(() => {
    if (lightboxItem) {
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = 'auto' }
    }
  }, [lightboxItem])

  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= list.length) {
      setLightboxIndex(null)
    }
  }, [active, list.length, lightboxIndex])

  const showPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + list.length) % list.length))
  }

  const showNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % list.length))
  }

  return (
    <section id="gallery" className="section section-alt">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="eyebrow">Gallery</span>
            <h2 className="section-title">A Glimpse of Our World</h2>
            <div className="divider" />
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              From striking exteriors to intricate interiors, construction milestones to breathtaking drone shots.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 40 }}>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: '10px 22px', borderRadius: 999, fontSize: '0.88rem', fontWeight: 500,
                  background: active === c ? 'var(--color-primary)' : '#fff',
                  color: active === c ? '#fff' : 'var(--color-dark-text)',
                  border: '1px solid', borderColor: active === c ? 'var(--color-primary)' : 'var(--color-border)',
                  transition: 'all 0.3s ease',
                }}
              >{c}</button>
            ))}
          </div>
        </Reveal>

        <div className="gallery-grid">
          {list.map((g, index) => (
            <motion.button
              key={g.src}
              type="button"
              onClick={() => setLightboxIndex(index)}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.35 }}
              className="gallery-card"
            >
              <div className="gallery-card-image">
                <img src={g.src} alt={g.label} loading="lazy" />
              </div>
              <div className="gallery-card-content">
                <div className="gallery-card-meta">
                  <div className="gallery-card-category">{g.category}</div>
                  <div className="gallery-card-label">{g.label}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxItem !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', padding: 24 }}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(null) }}
              aria-label="Close"
              style={{ position: 'absolute', top: 24, right: 24, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', display: 'grid', placeItems: 'center', color: '#fff' }}
            >
              <X size={22} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showPrev() }}
              aria-label="Previous image"
              style={{ position: 'absolute', left: 24, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.35)', color: '#fff', display: 'grid', placeItems: 'center' }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); showNext() }}
              aria-label="Next image"
              style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.16)', border: '1px solid rgba(255,255,255,0.35)', color: '#fff', display: 'grid', placeItems: 'center' }}
            >
              <ChevronRight size={24} />
            </button>

            <motion.img
              initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              src={lightboxItem.src}
              alt={lightboxItem.label}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '92%', maxHeight: '82vh', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', objectFit: 'cover' }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
