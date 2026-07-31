import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Maximize, Bed, Bath, ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { properties, type PropertyType } from '../data'

const filters: ('All' | PropertyType)[] = ['All', 'Villa', 'Apartment', 'Commercial', 'Plot']

export default function FeaturedProperties() {
  const [active, setActive] = useState<'All' | PropertyType>('All')
  const list = active === 'All' ? properties : properties.filter((p) => p.type === active)

  return (
    <section id="properties" className="section section-alt">
      <div className="container-wide">
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <span className="eyebrow">Featured Properties</span>
            <h2 className="section-title">Explore Our Premium Portfolio</h2>
            <div className="divider" />
            <p className="section-subtitle" style={{ marginBottom: 32 }}>
              Handpicked luxury villas, apartments, commercial spaces and plots - each crafted with the
              same uncompromising attention to detail.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: '9px 22px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 500,
                  background: active === f ? 'var(--color-primary)' : '#fff',
                  color: active === f ? '#fff' : 'var(--color-dark-text)',
                  border: '1px solid', borderColor: active === f ? 'var(--color-primary)' : 'var(--color-border)',
                  transition: 'all 0.3s ease',
                }}
              >{f}</button>
            ))}
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 28 }} className="props-grid">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <Link to={`/properties/${p.id}`} style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                  <motion.img
                    src={p.image} alt={p.title}
                    style={{ width: '100%', height: 220, objectFit: 'cover' }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                  />
                  <div style={{ position: 'absolute', top: 14, left: 14, background: 'var(--color-primary)', color: '#fff', padding: '5px 14px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                    {p.type}
                  </div>
                  {p.tag && (
                    <div style={{ position: 'absolute', top: 14, right: 14, background: '#fff', color: 'var(--color-primary)', padding: '5px 14px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600 }}>
                      {p.tag}
                    </div>
                  )}
                  <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(255,255,255,0.95)', color: 'var(--color-primary)', padding: '5px 12px', borderRadius: 'var(--radius-sm)', fontSize: '0.74rem', fontWeight: 600 }}>
                    {p.status}
                  </div>
                </Link>

                <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.22rem', marginBottom: 8 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: 14 }}>
                    <MapPin size={14} /> {p.location}
                  </div>
                  <p className="muted" style={{ fontSize: '0.86rem', marginBottom: 16, flex: 1 }}>{p.description}</p>

                  <div style={{ display: 'flex', gap: 16, marginBottom: 16, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Maximize size={15} /> {p.area}</span>
                    {p.beds && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Bed size={15} /> {p.beds}</span>}
                    {p.baths && <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Bath size={15} /> {p.baths}</span>}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTop: '1px solid var(--color-border)' }}>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Starting at</div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.15rem', color: 'var(--color-primary)', fontWeight: 600 }}>{p.price}</div>
                    </div>
                    <Link to={`/properties/${p.id}`} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.84rem', gap: 6 }}>
                      View Details <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/properties" className="btn btn-outline" style={{ gap: 8 }}>View All Properties <ArrowRight size={17} /></Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
