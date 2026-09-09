import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Maximize, Bed, Bath, CheckCircle2, ArrowRight, ArrowLeft, X, FileText, Home as HomeIcon } from 'lucide-react'
import Reveal from '../components/Reveal'
import BrochureViewer from '../components/BrochureViewer'
import ContactForm from '../components/ContactForm'
import { properties } from '../data'
import { PageHero } from './Properties'

export default function PropertyDetail() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (!property) return <Navigate to="/properties" replace />

  const related = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3)
  const gallery = property.gallery.length ? property.gallery : [property.image]

  return (
    <>
      <PageHero title={property.title} subtitle={`${property.type} • ${property.location}`} breadcrumb={property.title} />

      <section className="section">
        <div className="container-wide">
          <Link to="/properties" className="btn btn-outline" style={{ marginBottom: 28, padding: '8px 16px', fontSize: '0.84rem', gap: 6 }}><ArrowLeft size={15} /> Back to Properties</Link>

          {/* Gallery */}
          <Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 16, marginBottom: 40 }} className="detail-gallery">
              <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', border: '1px solid var(--color-border)' }} onClick={() => setLightbox(true)}>
                <motion.img key={activeImg} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} src={gallery[activeImg]} alt={`${property.title} image ${activeImg + 1}`} style={{ width: '100%', height: 460, objectFit: 'cover' }} loading="eager" />
                <div style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(255,255,255,0.95)', color: 'var(--color-primary)', padding: '6px 14px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 600 }}>{activeImg + 1} / {gallery.length}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {gallery.slice(0, 4).map((g, i) => (
                  <button key={i} onClick={() => setActiveImg(i)} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: i === activeImg ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', cursor: 'pointer', flex: 1 }}>
                    <img src={g} alt={`${property.title} thumbnail ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 40 }} className="detail-grid">
            {/* Main content */}
            <div>
              <Reveal>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                  <span style={{ background: 'var(--color-primary)', color: '#fff', padding: '5px 14px', borderRadius: 999, fontSize: '0.74rem', fontWeight: 600 }}>{property.type}</span>
                  <span style={{ background: 'var(--color-light-grey)', color: 'var(--color-secondary)', padding: '5px 14px', borderRadius: 999, fontSize: '0.74rem', fontWeight: 600, border: '1px solid var(--color-border)' }}>{property.status}</span>
                  {property.tag && <span style={{ background: 'var(--color-light-grey)', color: 'var(--color-secondary)', padding: '5px 14px', borderRadius: 999, fontSize: '0.74rem', fontWeight: 600, border: '1px solid var(--color-border)' }}>{property.tag}</span>}
                </div>
                <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: 10 }}>{property.title}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', marginBottom: 24 }}><MapPin size={16} /> {property.location}</div>

                <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', padding: '20px 24px', background: 'var(--color-light-grey)', borderRadius: 'var(--radius-md)', marginBottom: 32 }}>
                  {property.beds && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Bed size={20} style={{ color: 'var(--color-primary)' }} /> <div><div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Bedrooms</div><div style={{ fontWeight: 600 }}>{property.beds}</div></div></div>}
                  {property.baths && <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Bath size={20} style={{ color: 'var(--color-primary)' }} /> <div><div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Bathrooms</div><div style={{ fontWeight: 600 }}>{property.baths}</div></div></div>}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Maximize size={20} style={{ color: 'var(--color-primary)' }} /> <div><div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Area</div><div style={{ fontWeight: 600 }}>{property.area}</div></div></div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><HomeIcon size={20} style={{ color: 'var(--color-primary)' }} /> <div><div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Price</div><div style={{ fontWeight: 600 }}>{property.price}</div></div></div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 14 }}>Overview</h2>
                <p className="muted" style={{ fontSize: '0.96rem', lineHeight: 1.8, marginBottom: 36 }}>{property.overview}</p>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Specifications</h2>
                <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 36 }}>
                  {property.specifications.map((s, i) => (
                    <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 22px', borderBottom: i < property.specifications.length - 1 ? '1px solid var(--color-border)' : 'none', background: i % 2 ? 'var(--color-light-grey)' : 'transparent' }}>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{s.label}</span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)' }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Amenities</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 36 }}>
                  {property.amenities.map((a) => (
                    <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', background: 'var(--color-light-grey)', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} /> {a}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Floor Plan & Master Plan</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 36 }} className="plans-grid">
                  <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={gallery[0]} alt={`${property.title} floor plan`} style={{ width: '100%', height: 240, objectFit: 'cover' }} loading="lazy" />
                    <div style={{ padding: '14px 18px', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-primary)' }}>Typical Floor Plan</div>
                  </div>
                  <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={gallery[gallery.length - 1]} alt={`${property.title} master plan`} style={{ width: '100%', height: 240, objectFit: 'cover' }} loading="lazy" />
                    <div style={{ padding: '14px 18px', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-primary)' }}>Master Plan</div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Brochure</h2>
                <div className="card" style={{ padding: 28, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 36 }}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent-gold))', display: 'grid', placeItems: 'center', color: '#fff', flexShrink: 0 }}><FileText size={26} /></div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, marginBottom: 4 }}>{property.title} Brochure</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>PDF • Complete project details, floor plans & pricing</div>
                  </div>
                  <BrochureViewer brochure={property.brochure} title={property.title} />
                </div>
              </Reveal>
            </div>

            {/* Sidebar - inquiry */}
            <div>
              <Reveal delay={0.1}>
                <div className="card" style={{ padding: 30, position: 'sticky', top: 100 }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 6 }}>Interested in this property?</h3>
                  <p className="muted" style={{ fontSize: '0.85rem', marginBottom: 22 }}>Send us your details and our team will reach out with more information.</p>
                  <ContactForm variant="tinted" subject={property.title} />
                  <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 8 }}>Or contact us directly</div>
                    <a href="tel:+919891128882" style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 4 }}>+91 9891128882</a>
                    <a href="mailto:destinybuildwell@gmail.com" style={{ fontSize: '0.86rem', color: 'var(--color-secondary)' }}>destinybuildwell@gmail.com</a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div style={{ marginTop: 64 }}>
              <Reveal>
                <h2 style={{ fontSize: '1.6rem', marginBottom: 28 }}>Related Properties</h2>
              </Reveal>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                {related.map((p, i) => (
                  <Reveal key={p.id} delay={i * 0.07}>
                    <motion.div whileHover={{ y: -6 }} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                      <Link to={`/properties/${p.id}`} style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                        <motion.img src={p.image} alt={p.title} style={{ width: '100%', height: 200, objectFit: 'cover' }} whileHover={{ scale: 1.06 }} loading="lazy" />
                        <div style={{ position: 'absolute', top: 12, left: 12, background: 'var(--color-primary)', color: '#fff', padding: '4px 12px', borderRadius: 999, fontSize: '0.7rem', fontWeight: 600 }}>{p.type}</div>
                      </Link>
                      <div style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '1.1rem', marginBottom: 6 }}>{p.title}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: 10 }}><MapPin size={13} /> {p.location}</div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)', fontWeight: 600, fontSize: '1rem' }}>{p.price}</span>
                          <Link to={`/properties/${p.id}`} className="btn btn-primary" style={{ padding: '7px 14px', fontSize: '0.8rem', gap: 5 }}>View <ArrowRight size={14} /></Link>
                        </div>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(false)} style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', padding: 24 }}>
            <button onClick={() => setLightbox(false)} aria-label="Close" style={{ position: 'absolute', top: 24, right: 24, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', display: 'grid', placeItems: 'center', color: '#fff' }}><X size={22} /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={gallery[activeImg]} alt={property.title} style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: 'var(--radius-md)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
