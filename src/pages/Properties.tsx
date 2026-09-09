import { useState, useEffect, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Maximize, Bed, Bath, ArrowRight, Search, SlidersHorizontal } from 'lucide-react'
import Reveal from '../components/Reveal'
import { properties, type PropertyType } from '../data'

const types: ('All' | PropertyType)[] = ['All', 'Villa', 'Apartment', 'Commercial', 'Plot']
const budgets = ['Any', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr & Above']
const locations = ['All Locations', 'Noida', 'Greater Noida', 'South Delhi', 'Faridabad']

const isPropertyType = (value: string | null): value is 'All' | PropertyType =>
  value === 'All' || value === 'Villa' || value === 'Apartment' || value === 'Commercial' || value === 'Plot'

const parsePriceToLakhs = (price: string) => {
  const lower = price.toLowerCase()
  const croreMatch = lower.match(/([\d.]+)\s*cr/)
  if (croreMatch) return parseFloat(croreMatch[1]) * 100

  const lakhMatch = lower.match(/([\d.]+)\s*l/)
  if (lakhMatch) return parseFloat(lakhMatch[1])

  return 0
}

const matchesBudget = (price: string, selectedBudget: string) => {
  const value = parsePriceToLakhs(price)

  switch (selectedBudget) {
    case '₹50L - ₹1Cr':
      return value <= 100
    case '₹1Cr - ₹2Cr':
      return value > 100 && value <= 200
    case '₹2Cr & Above':
      return value > 200
    default:
      return true
  }
}

export default function Properties() {
  const [params, setParams] = useSearchParams()
  const [type, setType] = useState<'All' | PropertyType>(() => {
    const value = params.get('type')
    return isPropertyType(value) ? value : 'All'
  })
  const [budget, setBudget] = useState(() => {
    const value = params.get('budget')
    return value && budgets.includes(value) ? value : 'Any'
  })
  const [location, setLocation] = useState(() => {
    const value = params.get('location')
    return value && locations.includes(value) ? value : 'All Locations'
  })
  const [query, setQuery] = useState('')

  useEffect(() => {
    const typeValue = params.get('type')
    setType(isPropertyType(typeValue) ? typeValue : 'All')

    const locationValue = params.get('location')
    setLocation(locationValue && locations.includes(locationValue) ? locationValue : 'All Locations')

    const budgetValue = params.get('budget')
    setBudget(budgetValue && budgets.includes(budgetValue) ? budgetValue : 'Any')
  }, [params])

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (type !== 'All' && p.type !== type) return false
      if (location !== 'All Locations' && !p.location.includes(location)) return false
      if (budget !== 'Any' && !matchesBudget(p.price, budget)) return false
      if (query && !p.title.toLowerCase().includes(query.toLowerCase()) && !p.location.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [type, location, budget, query])

  const updateParams = (nextType = type, nextLocation = location, nextBudget = budget) => {
    const nextParams = new URLSearchParams()
    if (nextType !== 'All') nextParams.set('type', nextType)
    if (nextLocation !== 'All Locations') nextParams.set('location', nextLocation)
    if (nextBudget !== 'Any') nextParams.set('budget', nextBudget)
    setParams(nextParams)
  }

  return (
    <>
      <PageHero title="Our Properties" subtitle="Discover premium villas, apartments, commercial spaces and plots across Noida." breadcrumb="Properties" />
      <section className="section">
        <div className="container-wide">
          {/* Filter bar */}
          <Reveal>
            <div className="card" style={{ padding: '22px 24px', marginBottom: 36, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, alignItems: 'end' }}>
              <div>
                <label style={labelStyle}><SlidersHorizontal size={13} /> Property Type</label>
                <select value={type} onChange={(e) => {
                  const nextType = e.target.value as 'All' | PropertyType
                  setType(nextType)
                  updateParams(nextType, location, budget)
                }} style={selectStyle}>
                  {types.map((t) => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}><MapPin size={13} /> Location</label>
                <select value={location} onChange={(e) => {
                  const nextLocation = e.target.value
                  setLocation(nextLocation)
                  updateParams(type, nextLocation, budget)
                }} style={selectStyle}>
                  {locations.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}>Budget</label>
                <select value={budget} onChange={(e) => {
                  const nextBudget = e.target.value
                  setBudget(nextBudget)
                  updateParams(type, location, nextBudget)
                }} style={selectStyle}>
                  {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label style={labelStyle}><Search size={13} /> Search</label>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name or location" style={selectStyle} />
              </div>
            </div>
          </Reveal>

          <p className="muted" style={{ marginBottom: 24, fontSize: '0.88rem' }}>Showing {filtered.length} {filtered.length === 1 ? 'property' : 'properties'}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))', gap: 28 }}>
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <Link to={`/properties/${p.id}`} style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                    <motion.img src={p.image} alt={p.title} style={{ width: '100%', height: 220, objectFit: 'cover' }} whileHover={{ scale: 1.06 }} transition={{ duration: 0.5 }} loading="lazy" />
                    <div style={{ position: 'absolute', top: 14, left: 14, background: 'var(--color-primary)', color: '#fff', padding: '5px 14px', borderRadius: 999, fontSize: '0.72rem', fontWeight: 600 }}>{p.type}</div>
                  </Link>
                  <div style={{ padding: '22px 22px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: 8 }}>{p.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.84rem', marginBottom: 14 }}><MapPin size={14} /> {p.location}</div>
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
                      <Link to={`/properties/${p.id}`} className="btn btn-primary" style={{ padding: '9px 18px', fontSize: '0.84rem', gap: 6 }}>View Details <ArrowRight size={15} /></Link>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <p className="muted" style={{ fontSize: '1rem', marginBottom: 16 }}>No properties match your filters.</p>
              <button className="btn btn-outline" onClick={() => {
                setType('All')
                setLocation('All Locations')
                setBudget('Any')
                setQuery('')
                setParams(new URLSearchParams())
              }}>Clear Filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export function PageHero({ title, subtitle, breadcrumb }: { title: string; subtitle: string; breadcrumb: string }) {
  return (
    <section style={{ position: 'relative', paddingTop: 120, paddingBottom: 64, background: '#0B0B0B', borderBottom: '1px solid rgba(212,175,55,.28)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.08, backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 1px, transparent 40px)' }} />
      <div className="container-wide" style={{ position: 'relative', textAlign: 'center', color: '#fff' }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ color: '#D4AF37', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 12 }}>{title}</motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} style={{ opacity: 0.92, maxWidth: 620, margin: '0 auto 18px', fontSize: '1.05rem' }}>{subtitle}</motion.p>
        <div style={{ fontSize: '0.84rem', opacity: 0.85 }}>
          <Link to="/" style={{ opacity: 0.8 }}>Home</Link> <span style={{ margin: '0 8px' }}>/</span> <span>{breadcrumb}</span>
        </div>
      </div>
    </section>
  )
}

const labelStyle: React.CSSProperties = { fontSize: '0.74rem', fontWeight: 600, color: 'var(--color-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }
const selectStyle: React.CSSProperties = { width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)', background: 'var(--color-light-grey)', fontSize: '0.88rem', color: 'var(--color-dark-text)', outline: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)' }
