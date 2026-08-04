import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, MapPin, Home, Building2, Castle, LandPlot, ArrowRight } from 'lucide-react'
import { heroSlides } from '../data'

const propertyTypes = ['All', 'Villa', 'Apartment', 'Commercial', 'Plot']
const locations = ['All Locations', 'Whitefield', 'Hebbal', 'Marathahalli', 'Sarjapur Road', 'Devanahalli', 'Yelahanka']

export default function Hero() {
  const [search, setSearch] = useState({ type: 'All', location: 'All Locations', budget: '' })
  const navigate = useNavigate()
  const banner = heroSlides[0]

  const handleSearch = () => {
    const params = new URLSearchParams()

    if (search.type !== 'All') params.set('type', search.type)
    if (search.location !== 'All Locations') params.set('location', search.location)
    if (search.budget) params.set('budget', search.budget)

    navigate({
      pathname: '/properties',
      search: params.toString() ? `?${params.toString()}` : '',
    })
  }

  return (
    <section id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      >
        <img
          src={banner.image}
          alt="Destiny Buildwell premium real estate banner"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', imageRendering: 'auto', filter: 'none' }}
          loading="eager"
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(31,93,134,0.10) 0%, rgba(31,93,134,0.28) 100%)' }} />
      </motion.div>

      <div className="container-wide" style={{ position: 'relative', zIndex: 2, paddingTop: 100, paddingBottom: 40 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: 760, color: '#fff' }}
        >
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.9)' }}>Premium Real Estate & Construction</span>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', lineHeight: 1.1, marginBottom: 22, textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>
            {banner.title}
          </h1>
          <p style={{ fontSize: '1.12rem', opacity: 0.92, maxWidth: 580, marginBottom: 34, lineHeight: 1.7 }}>
            {banner.subtitle}
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-light" style={{ gap: 8 }}>Book Consultation <ArrowRight size={17} /></Link>
            <Link to="/properties" className="btn btn-ghost-light" style={{ gap: 8 }}>Explore Projects</Link>
          </div>
        </motion.div>

        {/* Property Search */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: 56, background: 'rgba(255,255,255,0.97)', borderRadius: 'var(--radius-lg)',
            padding: '22px 24px', boxShadow: 'var(--shadow-lg)', maxWidth: 920,
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 16, alignItems: 'end',
          }}
        >
          <div>
            <label style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--color-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
              <MapPin size={13} style={{ display: 'inline', marginRight: 4 }} />Location
            </label>
            <select value={search.location} onChange={(e) => setSearch({ ...search, location: e.target.value })} style={selectStyle}>
              {locations.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--color-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
              <Home size={13} style={{ display: 'inline', marginRight: 4 }} />Property Type
            </label>
            <select value={search.type} onChange={(e) => setSearch({ ...search, type: e.target.value })} style={selectStyle}>
              {propertyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
          <div>
            <label style={{ fontSize: '0.74rem', fontWeight: 600, color: 'var(--color-secondary)', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
              <Search size={13} style={{ display: 'inline', marginRight: 4 }} />Budget
            </label>
            <select value={search.budget} onChange={(e) => setSearch({ ...search, budget: e.target.value })} style={selectStyle}>
              <option value="">Any Budget</option>
              <option value="50-100">₹50L - ₹1Cr</option>
              <option value="100-200">₹1Cr - ₹2Cr</option>
              <option value="200+">₹2Cr & Above</option>
            </select>
          </div>
          <button type="button" className="btn btn-primary" onClick={handleSearch} style={{ height: 48, gap: 8 }}>
            <Search size={17} /> Search
          </button>
        </motion.div>

        {/* Quick type chips */}
        <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
          {[
            { label: 'Luxury Villas', icon: Castle, to: '/properties?type=Villa' },
            { label: 'Apartments', icon: Building2, to: '/properties?type=Apartment' },
            { label: 'Commercial', icon: Building2, to: '/properties?type=Commercial' },
            { label: 'Plots', icon: LandPlot, to: '/properties?type=Plot' },
          ].map((c) => (
            <Link key={c.label} to={c.to} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px',
              borderRadius: 999, background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
              color: '#fff', fontSize: '0.85rem', fontWeight: 500, transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.25)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            >
              <c.icon size={16} /> {c.label}
            </Link>
          ))}
        </div>
      </div>

    </section>
  )
}

const selectStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px', borderRadius: 'var(--radius-sm)',
  border: '1px solid var(--color-border)', background: 'var(--color-light-grey)',
  fontSize: '0.88rem', color: 'var(--color-dark-text)', outline: 'none', cursor: 'pointer',
  fontFamily: 'var(--font-body)',
}
