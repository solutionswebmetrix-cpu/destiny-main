import { useParams, Link, Navigate } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, CheckCircle2, ArrowLeft, X, FileText, Calendar, Building2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import BrochureViewer from '../components/BrochureViewer'
import ContactForm from '../components/ContactForm'
import { projects } from '../data'
import { PageHero } from './Properties'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)
  const [activeImg, setActiveImg] = useState(0)
  const [lightbox, setLightbox] = useState(false)

  if (!project) return <Navigate to="/projects" replace />
  const gallery = project.gallery.length ? project.gallery : [project.image]

  return (
    <>
      <PageHero title={project.name} subtitle={`${project.category} • ${project.location}`} breadcrumb={project.name} />

      <section className="section">
        <div className="container-wide">
          <Link to="/projects" className="btn btn-outline" style={{ marginBottom: 28, padding: '8px 16px', fontSize: '0.84rem', gap: 6 }}><ArrowLeft size={15} /> Back to Projects</Link>

          <Reveal>
            <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', cursor: 'pointer', marginBottom: 36, border: '1px solid var(--color-border)' }} onClick={() => setLightbox(true)}>
              <motion.img key={activeImg} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} src={gallery[activeImg]} alt={`${project.name} image ${activeImg + 1}`} style={{ width: '100%', height: 440, objectFit: 'cover' }} loading="eager" />
              <div style={{ position: 'absolute', bottom: 16, right: 16, background: 'rgba(255,255,255,0.95)', color: 'var(--color-primary)', padding: '6px 14px', borderRadius: 999, fontSize: '0.78rem', fontWeight: 600 }}>{activeImg + 1} / {gallery.length}</div>
            </div>
          </Reveal>

          {/* Thumbnail strip */}
          <Reveal delay={0.08}>
            <div style={{ display: 'flex', gap: 12, marginBottom: 40, overflowX: 'auto', paddingBottom: 8 }}>
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setActiveImg(i)} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: i === activeImg ? '2px solid var(--color-primary)' : '1px solid var(--color-border)', cursor: 'pointer', flexShrink: 0, width: 130, height: 90 }}>
                  <img src={g} alt={`${project.name} thumbnail ${i + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
                </button>
              ))}
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 40 }} className="detail-grid">
            <div>
              <Reveal>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 16 }}>
                  <span style={{ background: 'var(--color-primary)', color: '#fff', padding: '5px 14px', borderRadius: 999, fontSize: '0.74rem', fontWeight: 600 }}>{project.category}</span>
                  <span style={{ background: 'var(--color-light-grey)', color: 'var(--color-secondary)', padding: '5px 14px', borderRadius: 999, fontSize: '0.74rem', fontWeight: 600, border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: 5 }}><Calendar size={13} /> {project.status}</span>
                </div>
                <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', marginBottom: 10 }}>{project.name}</h1>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', marginBottom: 24 }}><MapPin size={16} /> {project.location}</div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 14 }}>Overview</h2>
                <p className="muted" style={{ fontSize: '0.96rem', lineHeight: 1.8, marginBottom: 36 }}>{project.overview}</p>
              </Reveal>

              <Reveal delay={0.12}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Specifications</h2>
                <div className="card" style={{ padding: 0, overflow: 'hidden', marginBottom: 36 }}>
                  {project.specifications.map((s, i) => (
                    <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px 22px', borderBottom: i < project.specifications.length - 1 ? '1px solid var(--color-border)' : 'none', background: i % 2 ? 'var(--color-light-grey)' : 'transparent' }}>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>{s.label}</span>
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-primary)' }}>{s.value}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Amenities</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 36 }}>
                  {project.amenities.map((a) => (
                    <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 18px', background: 'var(--color-light-grey)', borderRadius: 'var(--radius-sm)', fontSize: '0.88rem' }}>
                      <CheckCircle2 size={18} style={{ color: 'var(--color-primary)', flexShrink: 0 }} /> {a}
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Floor Plans & Master Plan</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 36 }} className="plans-grid">
                  <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={gallery[0]} alt={`${project.name} floor plan`} style={{ width: '100%', height: 240, objectFit: 'cover' }} loading="lazy" />
                    <div style={{ padding: '14px 18px', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-primary)' }}>Floor Plan</div>
                  </div>
                  <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                    <img src={gallery[gallery.length - 1]} alt={`${project.name} master plan`} style={{ width: '100%', height: 240, objectFit: 'cover' }} loading="lazy" />
                    <div style={{ padding: '14px 18px', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-primary)' }}>Master Plan</div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Construction Status</h2>
                <div className="card" style={{ padding: 28, marginBottom: 36 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                    <Building2 size={24} style={{ color: 'var(--color-primary)' }} />
                    <span style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 600 }}>{project.status}</span>
                  </div>
                  <div style={{ height: 10, borderRadius: 999, background: 'var(--color-light-grey)', overflow: 'hidden', marginBottom: 8 }}>
                    <motion.div initial={{ width: 0 }} whileInView={{ width: project.category === 'Completed' ? '100%' : project.category === 'Upcoming' ? '15%' : '60%' }} viewport={{ once: true }} transition={{ duration: 1, ease: 'easeOut' }} style={{ height: '100%', background: 'linear-gradient(90deg, var(--color-primary), var(--color-light-blue))', borderRadius: 999 }} />
                  </div>
                  <p className="muted" style={{ fontSize: '0.84rem' }}>{project.category === 'Completed' ? 'Project completed and handed over to residents.' : project.category === 'Upcoming' ? 'Pre-launch phase - bookings opening soon.' : 'Construction in progress with monthly updates shared with booked customers.'}</p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: 18 }}>Download Brochure</h2>
                <div className="card" style={{ padding: 28, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                  <div style={{ width: 56, height: 56, borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, var(--color-primary), var(--color-light-blue))', display: 'grid', placeItems: 'center', color: '#fff', flexShrink: 0 }}><FileText size={26} /></div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 600, marginBottom: 4 }}>{project.name} Brochure</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>PDF • Complete project details & specifications</div>
                  </div>
                  <BrochureViewer brochure={project.brochure} title={project.name} />
                </div>
              </Reveal>
            </div>

            <div>
              <Reveal delay={0.1}>
                <div className="card" style={{ padding: 30, position: 'sticky', top: 100 }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: 6 }}>Enquire about this project</h3>
                  <p className="muted" style={{ fontSize: '0.85rem', marginBottom: 22 }}>Send us your details for pricing, site visits and more.</p>
                  <ContactForm variant="tinted" subject={project.name} />
                  <div style={{ marginTop: 22, paddingTop: 22, borderTop: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 8 }}>Or contact us directly</div>
                    <a href="tel:+919891128882" style={{ display: 'block', fontSize: '0.92rem', fontWeight: 600, color: 'var(--color-primary)', marginBottom: 4 }}>+91 9891128882</a>
                    <a href="mailto:destinybuildwell@gmail.com" style={{ fontSize: '0.86rem', color: 'var(--color-secondary)' }}>destinybuildwell@gmail.com</a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(false)} style={{ position: 'fixed', inset: 0, zIndex: 2000, background: 'rgba(31,93,134,0.85)', backdropFilter: 'blur(8px)', display: 'grid', placeItems: 'center', padding: 24 }}>
            <button onClick={() => setLightbox(false)} aria-label="Close" style={{ position: 'absolute', top: 24, right: 24, width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.4)', display: 'grid', placeItems: 'center', color: '#fff' }}><X size={22} /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={gallery[activeImg]} alt={project.name} style={{ maxWidth: '90%', maxHeight: '85vh', borderRadius: 'var(--radius-md)' }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
