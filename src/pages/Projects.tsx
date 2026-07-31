import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import { projects, type Project } from '../data'
import { PageHero } from './Properties'

const categories: ('All' | Project['category'])[] = ['All', 'Ongoing', 'Completed', 'Upcoming']

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const [active, setActive] = useState<'All' | Project['category']>((params.get('category') as Project['category']) || 'All')

  useEffect(() => {
    const c = params.get('category') as Project['category'] | null
    if (c) setActive(c)
  }, [params])

  const list = useMemo(() => active === 'All' ? projects : projects.filter((p) => p.category === active), [active])

  const setCat = (c: 'All' | Project['category']) => {
    setActive(c)
    if (c === 'All') setParams({})
    else setParams({ category: c })
  }

  return (
    <>
      <PageHero title="Our Projects" subtitle="Ongoing, completed and upcoming developments that shape Bengaluru's skyline." breadcrumb="Projects" />
      <section className="section">
        <div className="container-wide">
          <Reveal>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 28 }}>
            {list.map((p, i) => (
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: p.category === 'Completed' ? 'var(--color-secondary)' : 'var(--color-primary)', marginBottom: 16, fontWeight: 500 }}>
                      {p.category === 'Completed' ? <CheckCircle2 size={15} /> : <Calendar size={15} />} {p.status}
                    </div>
                    <Link to={`/projects/${p.id}`} className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '9px 18px', fontSize: '0.84rem', gap: 6 }}>View Details <ArrowRight size={15} /></Link>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
