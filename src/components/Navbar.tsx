import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import logo from '../assets/logo/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About ', to: '/about', children: [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/our-team' },
  ] },
  { label: 'Properties', to: '/properties', children: [
    { label: 'Luxury Villas', to: '/properties?type=Villa' },
    { label: 'Apartments', to: '/properties?type=Apartment' },
    { label: 'Commercial', to: '/properties?type=Commercial' },
    { label: 'Plots', to: '/properties?type=Plot' },
  ]},
  { label: 'Projects', to: '/#projects', children: [
    { label: 'Under construction ', to: '/projects?category=Under construction ' },
    { label: 'Ready to move ', to: '/projects?category=Ready to move ' },
    { label: 'Upcoming', to: '/projects?category=Upcoming' },
  ]},
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false); setDropdown(null); setMobileDropdown(null) }, [location])

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
        background: scrolled ? 'rgba(9, 30, 47, 0.96)' : 'rgba(7, 24, 39, 0.82)',
        backdropFilter: scrolled ? 'blur(14px)' : 'blur(10px)',
        boxShadow: scrolled ? '0 8px 24px rgba(0, 0, 0, 0.16)' : '0 4px 18px rgba(0, 0, 0, 0.12)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(255,255,255,0.08)',
        transition: 'all 0.35s ease',
      }}
    >
      <nav className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={logo} alt="Destiny Buildwell logo" style={{ width: 100, height: 100, maxWidth: 100, maxHeight: 100, objectFit: 'contain' }} />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{
              fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem',
              color: scrolled ? '#fff' : '#fff',
              letterSpacing: '0.02em', transition: 'color 0.35s ease',
            }}>DESTINY</div>
            <div style={{
              fontSize: '0.62rem', letterSpacing: '0.28em', fontWeight: 500,
              color: scrolled ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.9)',
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
                style={({ isActive }) => {
                  const isAboutActive = link.label === 'About Us' && (location.pathname === '/about' || location.pathname === '/our-team')
                  return ({
                  display: 'flex', alignItems: 'center', gap: 4,
                  padding: '8px 14px', fontSize: '0.9rem', fontWeight: 500,
                  color: scrolled ? (isActive || isAboutActive ? '#fff' : 'rgba(255,255,255,0.92)') : '#fff',
                  borderBottom: isActive || isAboutActive ? '2px solid #fff' : '2px solid transparent',
                  textShadow: isActive || isAboutActive ? '0 1px 2px rgba(0,0,0,0.18)' : 'none',
                  transition: 'all 0.3s ease',
                })}
                }
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
          <a href="tel:+919891128882" style={{
            display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem', fontWeight: 500,
            color: scrolled ? '#fff' : '#fff',
          }} className="nav-phone"><Phone size={15} /> +91 9891128882</a>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 22px' }}>Book Consultation</Link>
        </div>

        <button className="nav-burger" onClick={() => setOpen(!open)} aria-label="Menu" style={{
          display: 'none', color: scrolled ? '#fff' : '#fff',
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
                  {link.children && link.label === 'About Us' ? (
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Link to={link.to} onClick={() => setOpen(false)} style={{ display: 'block', padding: '14px 0', color: 'var(--color-dark-text)', fontWeight: 500 }}>{link.label}</Link>
                      <button
                        type="button"
                        aria-label="Toggle About Us submenu"
                        aria-expanded={mobileDropdown === link.label}
                        onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                        style={{ padding: 10, color: 'var(--color-primary)' }}
                      >
                        <ChevronDown size={17} style={{ transform: mobileDropdown === link.label ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={link.to.includes('#') ? link.to.split('#')[0] : link.to}
                      onClick={(e) => { if (link.to.includes('#')) { e.preventDefault(); handleHash(link.to); setOpen(false) } else setOpen(false) }}
                      style={{ display: 'block', padding: '14px 0', color: 'var(--color-dark-text)', fontWeight: 500 }}
                    >{link.label}</Link>
                  )}
                  {link.children && (!('label' in link) || link.label !== 'About Us' || mobileDropdown === link.label) && (
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
