import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects } from '../data'
import { PageHero } from './Properties'

const categories = ['All', 'Under Construction', 'Ready to Move'] as const

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const [active, setActive] = useState<(typeof categories)[number]>((params.get('category') as (typeof categories)[number]) || 'All')

  useEffect(() => {
    const c = params.get('category')
    if (c === 'Under Construction' || c === 'Ready to Move' || c === 'All') setActive(c)
  }, [params])

  const list = useMemo(() => active === 'All' ? projects : projects.filter((p) => p.category === active), [active])

  const setCat = (c: (typeof categories)[number]) => {
    setActive(c)
    if (c === 'All') setParams({})
    else setParams({ category: c })
  }

  return (
    <>
      <PageHero title="Our Projects" subtitle="Under Construction and Ready to Move developments across the NCR." breadcrumb="Projects" />
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 28 }}>
              {categories.map((c) => (
                <button key={c} onClick={() => setCat(c)} style={{
                  padding: '9px 22px', borderRadius: 999, fontSize: '0.85rem', fontWeight: 500,
                  background: active === c ? 'var(--color-primary)' : '#fff',
                  color: active === c ? '#fff' : 'var(--color-dark-text)',
                  border: '1px solid', borderColor: active === c ? 'var(--color-primary)' : 'var(--color-border)',
                  transition: 'all 0.3s ease',
                }}>{c === 'All' ? 'All Projects' : c}</button>
              ))}
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 20 }}>
            {list.map((p, i) => {
              const inventory = p.inventory ?? []
              const inventorySummary = inventory.length > 0 ? `${inventory.length} inventory options` : 'Project details available'
              const configSummary = inventory.length > 0 ? inventory.slice(0, 3).map((item) => item.configuration).join(', ') : p.specifications[0]?.value ?? 'Project details'
              const startingPrice = inventory.find((item) => item.price !== 'Not specified')?.price

              return (
                <Reveal key={p.id} delay={i * 0.07}>
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link to={`/projects/${p.id}`} style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                      <motion.img src={p.image} alt={p.name} style={{ width: '100%', height: 230, objectFit: 'cover' }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} loading="lazy" />
                      <div style={{ position: 'absolute', top: 14, left: 14, background: 'var(--color-primary)', color: '#fff', padding: '5px 14px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600 }}>{p.category}</div>
                    </Link>
                    <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>{p.name}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: 12 }}><MapPin size={14} /> {p.location}</div>
                      <p className="muted" style={{ fontSize: '0.86rem', marginBottom: 16, flex: 1 }}>{p.short}</p>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14, fontSize: '0.76rem', color: 'var(--text-muted)' }}>
                        <div style={{ background: 'var(--color-light-grey)', padding: 10, borderRadius: 'var(--radius-sm)' }}>
                          <div style={{ marginBottom: 5, fontWeight: 600, color: 'var(--color-dark-text)' }}>Configurations</div>
                          <div>{configSummary}</div>
                        </div>
                        <div style={{ background: 'var(--color-light-grey)', padding: 10, borderRadius: 'var(--radius-sm)' }}>
                          <div style={{ marginBottom: 5, fontWeight: 600, color: 'var(--color-dark-text)' }}>Inventory</div>
                          <div>{inventorySummary}</div>
                        </div>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--color-primary)', marginBottom: 16, fontWeight: 500 }}>
                        <Calendar size={15} /> {p.status}
                      </div>
                      {startingPrice && <div style={{ fontSize: '0.84rem', color: 'var(--color-secondary)', marginBottom: 16 }}>Starting at <strong style={{ color: 'var(--color-primary)' }}>{startingPrice}</strong></div>}
                      <Link to={`/projects/${p.id}`} className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '9px 18px', fontSize: '0.84rem', gap: 6 }}>View Details <ArrowRight size={15} /></Link>
                    </div>
                  </motion.div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
