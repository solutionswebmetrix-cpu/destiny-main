import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import logo from '../assets/logo/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Properties', to: '/#properties', children: [
    { label: 'Luxury Villas', to: '/properties?type=Villa' },
    { label: 'Apartments', to: '/properties?type=Apartment' },
    { label: 'Commercial', to: '/properties?type=Commercial' },
    { label: 'Plots', to: '/properties?type=Plot' },
  ]},
  { label: 'Projects', to: '/#projects', children: [
    { label: 'Ongoing', to: '/projects?category=Ongoing' },
    { label: 'Completed', to: '/projects?category=Completed' },
    { label: 'Upcoming', to: '/projects?category=Upcoming' },
  ]},
  { label: 'Gallery', to: '/#gallery' },
  { label: 'Blogs', to: '/#blogs' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDropdown(null) }, [location])

  const handleHash = (to: string) => {
    if (to.includes('#')) {
      const hash = to.split('#')[1]
      if (location.pathname === '/') {
        const el = document.getElementById(hash)
        el?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.location.href = to
      }
    }
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        boxShadow: scrolled ? '0 4px 20px rgba(31,93,134,0.08)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        transition: 'all 0.35s ease',
      }}
    >
      <nav className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="Destiny Buildwell logo" style={{ width: 42, height: 42, objectFit: 'contain' }} />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem',
              color: scrolled ? 'var(--color-primary)' : '#fff',
              letterSpacing: '0.02em', transition: 'color 0.35s ease',
            }}>DESTINY</div>
            <div style={{
              fontSize: '0.62rem', letterSpacing: '0.28em', fontWeight: 500,
              color: scrolled ? 'var(--color-secondary)' : 'rgba(255,255,255,0.85)',
              transition: 'color 0.35s ease',
            }}>BUILDWELL</div>
          </div>
        </Link>

        <ul style={{ display: 'flex', alignItems: 'center', gap: 4, listStyle: 'none' }} className="nav-links">
          {navLinks.map((link) => (
            <li
              key={link.label}
              onMouseEnter={() => setDropdown(link.children ? link.label : null)}
              onMouseLeave={() => setDropdown(null)}
              style={{ position: 'relative' }}
            >
              <NavLink
                to={link.to.includes('#') ? link.to.split('#')[0] : link.to}
                onClick={(e) => { if (link.to.includes('#')) { e.preventDefault(); handleHash(link.to) } }}
                style={({ isActive }) => ({
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '8px 14px', fontSize: '0.9rem', fontWeight: 500,
                  color: scrolled ? (isActive ? 'var(--color-primary)' : 'var(--color-dark-text)') : '#fff',
                  borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                  transition: 'all 0.3s ease',
                })}
              >
                {link.label}
                {link.children && <ChevronDown size={14} style={{ opacity: 0.7 }} />}
              </NavLink>
              <AnimatePresence>
                {link.children && dropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute', top: '100%', left: 0, minWidth: 200,
                      background: '#fff', borderRadius: 'var(--radius-md)',
                      boxShadow: 'var(--shadow-lg)', border: '1px solid var(--color-border)',
                      padding: '8px', marginTop: 8,
                    }}
                  >
                    {link.children.map((c) => (
                      <Link key={c.label} to={c.to} style={{
                        display: 'block', padding: '10px 14px', fontSize: '0.88rem',
                        color: 'var(--color-dark-text)', borderRadius: 'var(--radius-sm)',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-light-grey)'; e.currentTarget.style.color = 'var(--color-primary)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-dark-text)' }}
                      >{c.label}</Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }} className="nav-cta">
          <a href="tel:+918012345678" style={{
            display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', fontWeight: 500,
            color: scrolled ? 'var(--color-primary)' : '#fff',
          }} className="nav-phone"><Phone size={15} /> +91 80 1234 5678</a>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 22px' }}>Book Consultation</Link>
        </div>

        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu" style={{
          display: 'none', color: scrolled ? 'var(--color-primary)' : '#fff',
        }}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden', background: '#fff', borderTop: '1px solid var(--color-border)' }}
            className="mobile-menu"
          >
            <ul style={{ padding: '16px 24px', listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.label} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <Link
                    to={link.to.includes('#') ? link.to.split('#')[0] : link.to}
                    onClick={(e) => { if (link.to.includes('#')) { e.preventDefault(); handleHash(link.to); setOpen(false) } else setOpen(false) }}
                    style={{ display: 'block', padding: '14px 0', color: 'var(--color-dark-text)', fontWeight: 500 }}
                  >{link.label}</Link>
                  {link.children && (
                    <div style={{ paddingBottom: 8 }}>
                      {link.children.map((c) => (
                        <Link key={c.label} to={c.to} onClick={() => setOpen(false)} style={{
                          display: 'block', padding: '8px 16px', fontSize: '0.85rem', color: 'var(--text-muted)',
                        }}>{c.label}</Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li style={{ paddingTop: 14 }}>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%' }} onClick={() => setOpen(false)}>Book Consultation</Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
