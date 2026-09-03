import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Facebook, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react'
import logo from '../assets/logo/logo.png'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) { setDone(true); setEmail(''); setTimeout(() => setDone(false), 3000) }
  }

  return (
    <footer style={{ background: 'var(--color-primary)', color: '#fff', paddingTop: 72 }}>
      <div className="container-wide">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 40, paddingBottom: 56 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <img src={logo} alt="Destiny Buildwell logo" style={{ width: 42, height: 42, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem' }}>DESTINY BUILDWELL</div>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.18em', opacity: 0.85 }}>12+ YEARS OF TRUST</div>
              </div>
            </div>
            <p style={{ fontSize: '0.88rem', opacity: 0.82, lineHeight: 1.7, marginBottom: 20 }}>
              Destiny Buildwell — 12+ Years of Trust in Real Estate. JP Expressway is a featured project by Destiny Buildwell.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <a href="https://www.facebook.com/people/Destiny-Buildwell/61573041865713/#" target="_blank" rel="noreferrer" aria-label="Destiny Buildwell Facebook" style={{
                width: 38, height: 38, borderRadius: '50%', display: 'grid', placeItems: 'center',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease', color: '#fff',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--color-primary)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
                <Facebook size={16} />
              </a>
              <a href="https://www.instagram.com/destiny_buildwell/" target="_blank" rel="noreferrer" aria-label="Destiny Buildwell Instagram" style={{
                width: 38, height: 38, borderRadius: '50%', display: 'grid', placeItems: 'center',
                background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                transition: 'all 0.3s ease', color: '#fff',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--color-primary)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = '#fff' }}>
                <Instagram size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: 18 }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { l: 'About Us', to: '/about' },
                { l: 'Why Choose Us', to: '/#why' },
                { l: 'Leadership', to: '/#leadership' },
                { l: 'Blogs', to: '/#blogs' },
                { l: 'Contact', to: '/contact' },
              ].map((x) => (
                <li key={x.l}><Link to={x.to} style={{ fontSize: '0.88rem', opacity: 0.82, transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.82'}>{x.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: 18 }}>Projects</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
              {[
                { l: 'Ongoing', to: '/projects?category=Ongoing' },
                { l: 'Completed', to: '/projects?category=Completed' },
                { l: 'Upcoming', to: '/projects?category=Upcoming' },
                { l: 'All Properties', to: '/properties' },
              ].map((x) => (
                <li key={x.l}><Link to={x.to} style={{ fontSize: '0.88rem', opacity: 0.82, transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '0.82'}>{x.l}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: '#fff', fontSize: '1.05rem', marginBottom: 18 }}>Get in Touch</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 22 }}>
              <li style={{ display: 'flex', gap: 10, fontSize: '0.86rem', opacity: 0.85 }}>
                <MapPin size={17} style={{ flexShrink: 0, marginTop: 2 }} />
                <a href="https://www.google.com/maps/place/ATS+Bouquet/@28.5101855,77.3780629,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce937dd33a677:0xf2482b431fe4c606!8m2!3d28.5101855!4d77.3806378!16s%2Fg%2F11b_01fpcv?entry=ttu&g_ep=EgoyMDI2MDcyNi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'underline', opacity: 0.85 }}>
                  A-106, ATS Bouquet, Sector 132, Noida, Uttar Pradesh 201304
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, fontSize: '0.86rem', opacity: 0.85 }}><Phone size={17} style={{ flexShrink: 0 }} /> +91 9891128882</li>
              <li style={{ display: 'flex', gap: 10, fontSize: '0.86rem', opacity: 0.85 }}><Mail size={17} style={{ flexShrink: 0 }} /> destinybuildwell@gmail.com</li>
            </ul>
            <form onSubmit={subscribe} style={{ position: 'relative' }}>
              <input
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                style={{ width: '100%', padding: '12px 48px 12px 16px', borderRadius: 999, border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.85rem', outline: 'none' }}
              />
              <button type="submit" aria-label="Subscribe" style={{ position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', background: '#fff', color: 'var(--color-primary)', display: 'grid', placeItems: 'center' }}>
                <Send size={15} />
              </button>
            </form>
            {done && <p style={{ fontSize: '0.78rem', marginTop: 8, opacity: 0.9 }}>Thank you for subscribing!</p>}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)', padding: '24px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <p style={{ fontSize: '0.82rem', opacity: 0.75 }}>© {new Date().getFullYear()} Destiny Buildwell. All rights reserved.</p>
          <div style={{ display: 'flex', gap: 20, fontSize: '0.82rem', opacity: 0.75 }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">RERA Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
